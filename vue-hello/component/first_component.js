console.log("try");

/* const { createApp } = Vue

createApp
({
    data()
    {
        return{
            count: 0
        }
    }
}).mount("app") */

import { createApp } from 'vue'

const tryOne = createApp({
    data()
    {
        return{
            id: idTry,
            name: "S_"
        }
    }
})

tryOne.mount("#tryDiv")

