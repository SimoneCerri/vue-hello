console.log("ciah");

let { createApp } = Vue

createApp
({
    data()
    {
        return{
            message: "E' stato più complicato capire perchè non funzionava che scrivere questo messaggio. Ricordarsi che la formattazione 'brutta' è obbligatoria per il 'return'." ,
            link: "./img/brain.jpg",
            number: 2,
            count : 0
        }
    },/* 
    doThis()
    {
        count++
    } */
}).mount("#app");
