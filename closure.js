function pageLoaded () {

//iife és closure

var iife = (function () {
    var closureVariable = "Hello baby!";
    function closure() {
    console.log(closureVariable);
    };
    return closure;
  })();

  iife();

}

window.addEventListener("load", pageLoaded);