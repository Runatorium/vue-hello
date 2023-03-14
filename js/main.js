
const { createApp } = Vue

createApp(
    {
        data() {
            return {
                message: 'Hello Vue!',
                img: 'img/risitas.jpg'
            }
        }
    }
).mount('#app')