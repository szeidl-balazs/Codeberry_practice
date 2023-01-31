function pageLoaded () {

    const myAvatar = {
        name: "Balázs",
        gender: "male",
        favorite_pet: "Elza",
        favorite_hobby: "hunting"
    }

    function avatarDisplay () {
        alert(
            `My name is: ${this.name}, my favorite pet called ${this.favorite_pet}, my favorite hobby is ${this.favorite_hobby}.`
        );
    }

    avatarDisplay.call(myAvatar);

}

window.addEventListener("load", pageLoaded);