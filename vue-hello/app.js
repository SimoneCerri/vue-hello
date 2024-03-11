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
            count : 0,
            newItem: "",
            flavours: [],
            highPrio: true,
            styleObject:
            {
                color: 'red',
                fontSize: '50px'
            },
        }
    },
    methods:
    {
        tryThis(e)
        {
            alert("DAJE CAZZO")
        },
        sayHello(my_message)
        {
            alert(my_message)
        },
        doSomething(e)
        {
            alert("Is a try, ups")
        }
    }
}).mount("#app");
