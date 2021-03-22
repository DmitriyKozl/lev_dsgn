const c1 = () => import(/* webpackChunkName: "page--src-pages-home-vue" */ "C:\\Users\\Dmitriy\\Desktop\\portfolio\\daan\\src\\pages\\Home.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Dmitriy\\Desktop\\portfolio\\daan\\node_modules\\gridsome\\app\\pages\\404.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Dmitriy\\Desktop\\portfolio\\daan\\src\\pages\\Index.vue")

export default [
  {
    path: "/home/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
