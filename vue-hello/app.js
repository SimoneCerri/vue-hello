console.log("ciah");

const { createApp } = Vue

createApp
({
    data()
    {
        return{
            message: "E' stato più complicato capire perchè non funzionava che scrivere questo messaggio. Ricordarsi che la formattazione 'brutta' è obbligatoria per il 'return'." ,
            link: "./img/brain.jpg"
        }
    }
}).mount("#app");

