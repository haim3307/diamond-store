import QuickItemModal from "~/components/modals/QuickItemModal.vue";
import NuxtLoader from "./nuxt-loading.vue";
import {Route} from 'vue-router';

import {
  Component,
  Vue,
  Watch
} from "nuxt-property-decorator";

@Component({
  components: { QuickItemModal,NuxtLoader }
})
export default class extends Vue {
  $route: Route;
  breadcrumbs:any[] =  [];

  @Watch("$route.fullPath", {deep: true,immediate: true})
  setBreadcrumbs() {
    const nuxtRoute = this.$router.currentRoute;
    let currentPath = nuxtRoute.path;
    let paths:any = currentPath.match(/[^/].*[^/]/g);

    function setBreadCrumb(paths : any[]) {
      paths = Array.isArray(paths) && paths.length ? paths[0].split("/") : [];
      let beforePath;
      let breadcrumbs: any[] = paths.reduce((breadcrumbArray:any[], path:any, idx : any) => {
        beforePath = breadcrumbArray
          .slice(0, idx)
          .reduce((sum : any, item : any) => sum += `/${item.path}`, "");
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1] ? beforePath + "/" + path : "/" + path,
          text: path.replace("-", " ")
        });

        /*this.$route.matched[idx].meta.breadCrumb ||*/
        return breadcrumbArray;
      }, []) ;
      return breadcrumbs;
    }
    this.breadcrumbs = setBreadCrumb(paths);
  }

  get initialData() {
    return this.$store.state.initialData;
  }
}
