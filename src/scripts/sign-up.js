import "../style/style.css";

import mount from "./mount";

import App from "../vue/Signup.vue";

import { createApp } from 'vue';

document.body.appendChild(mount());

createApp(App).mount('.app-root')