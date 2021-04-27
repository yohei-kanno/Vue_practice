import Vue from 'vue';
import Router from 'vue-router';



// import Home from './views/Home.vue';
// import Users from './views/Users.vue';
// import UsersPosts from './views/UsersPosts.vue';
// import UsersProfile from './views/UsersProfile.vue';
// import HeaderHome from './views/HeaderHome.vue';
// import HeaderUsers from './views/HeaderUsers.vue';
// import Footer from './views/Footer.vue';

// ちょっと遅れて持ってきている処理になる
// prefetchは暇な時に全部取ってくる
// 分割して持ってくる処理を行っている
// ブラウザに入れておく処理をしてくれる
// いざとなったらcashから取ってくる処理をしてくれる
const Home = () => import(/* webpackChunkName: "Home" */"./views/Home.vue");
const Users = () => import("./views/Users.vue");
const UsersPosts = () => import("./views/UsersPosts.vue");
const UsersProfile = () => import("./views/UsersProfile.vue");
const HeaderHome = () => import("./views/HeaderHome.vue");
const HeaderUsers = () => import("./views/HeaderUsers.vue");
const Footer = () => import("./views/Footer.vue");

// プラグインとはどこでも使える機能の集まり
// ルーターが使えるっていう宣言
Vue.use(Router)

// urlとrouterをマッピングする作業が必要

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/', 
      components: {
        default: Home,
        header:HeaderHome,
        footer: Footer,

      },
      beforeEnter(to,from,next){
        next()
      }
    },
    {
      path: '/users/:id/',
      props: {
        header: true,
        default: true,
        footer: true
        // props:trueとする事でデータを受け渡す事が出来る
      },
      components:{
        default: Users,
        header:HeaderUsers,
        footer: Footer
      },
      
      children: [
        {
          path: "posts",
          component: UsersPosts,
          name: "user-id-posts",
          props: true
        },
        {
          path: "profile",
          component: UsersProfile,
          name: "users-id-profile",
          props: true
        }
      ]
    },
    {
      // こう打ち込んだら
      path: "/hello",
      //このURLに行く設定
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition){
    return new Promise(resolve=>{
      this.app.$root.$once("triggerScroll",() => {
        let position = {x:0, y:0}
        if(savedPosition){
          position = savedPosition;
        }
        if(to.hash){
          position = {
            selector: to.hash
          }
        }
        resolve(position)
      });
      // this.app === this.app.$root
      
      // ここのthisはnew Routerのインスタンスにアクセス出来る
      // そしてこのthisはnew Vueに挿入されているのappはVueインスタンスを指し示す
    })
    
    // if(to.hash){
    //   return{
    //     selector: to.hash,
    //     offset: {x:0, y:200}
    //   }
    // }
    // transisionがある場合と無い場合では書くコードが異なる
    // どちらにせよ書くコードはxとyを決めてあげる。
    // リロードした時に何pxスクロールするのか設定を記載する。
    // return {x: 0, y: 0}
    
    // return{
    //   selector: '#next-user',
    //   offset: {x:0, y:100}
    // }
  }
});
