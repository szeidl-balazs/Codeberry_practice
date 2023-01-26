function pageLoaded () {

//setTimeout hatása a for ciklusra

function counter () {

    for (var i = 1; i <= 4; i++) {

        console.log(`for ciklus i: ${i}`);
        setTimeout(function () {
            console.log(`timeout függvény i: ${i}`);
        }, 1000);
    }
   }

   counter();


};

window.addEventListener("load", pageLoaded);