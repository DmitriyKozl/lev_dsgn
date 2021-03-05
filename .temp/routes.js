const c1 = () => import(/* webpackChunkName: "page--src-pages-work-vue" */ "C:\\Users\\Dmitriy\\Desktop\\portfolio\\daan\\src\\pages\\Work.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-home-vue" */ "C:\\Users\\Dmitriy\\Desktop\\portfolio\\daan\\src\\pages\\home.vue")
const c3 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Dmitriy\\Desktop\\portfolio\\daan\\node_modules\\gridsome\\app\\pages\\404.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Dmitriy\\Desktop\\portfolio\\daan\\src\\pages\\Index.vue")

export default [
  {
    path: "/work/",
    component: c1
  },
  {
    path: "/home/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
