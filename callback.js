function pageLoaded () {

        function hello () {
            return "Hello";
        }

        function greeting (message, person) {
            //A callback function-t tartalmazó paramétert függvényként kell jelölni a return-ben: message()
            console.log(`${message()} ${person}!`);
        }

        //A meghívott függvényben kell paraméterként átadni a callback függvényt!
        greeting(hello, "Orsi");


}

window.addEventListener("load", pageLoaded);