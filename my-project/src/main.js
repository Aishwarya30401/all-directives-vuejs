// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue .directives('highlight', {
  bind:function (el,binding){
  el.style.background='red';
  }
}),
Vue .directives('highlight',{
  bind:function(el,binding){

    if(binding.arg =='background'){
      el.style.backgroundcolor =binding.value;
    }
    else{
      style.backgroundcolor='red';
    }
    } 
   })
/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  components: { App },
  template: '<App/>'
})
