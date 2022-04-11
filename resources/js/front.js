//File nuovo creato da noi, che si occuperà della parte javascript del frontend del sito, istanziando il componente Vue

window.Vue = require("vue");

window.axios = require("axios"); //importiamo axios per le chiamate API che faremo nel frontend

import App from "./views/App";

const app = new Vue({

    el: "#root",
    render: h => h(App)
});