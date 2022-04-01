import Vue from 'vue'
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
require('es6-promise').polyfill();

Vue.component('under-construction', require('./UnderConstruction.vue').default);

let app = new Vue({
    el: '#app'
});