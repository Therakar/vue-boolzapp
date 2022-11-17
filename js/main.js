"use strict"

// struttura vue.js
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'//DEBUG
      }
    }
  }).mount('#app')