function pageLoaded () {

    const person = {
        name: "Berry",
        hobbies: ["Discgolf", "Mantrailing"],
        introduce: function () {
          console.log(`Hi, I'm ${this.name}.`);
        },
        // TODO Ide írd a metódusod.
        isInterestedIn: function (hobby) {
            if (this.hobbies.includes(hobby)) {
                console.log(`Why yes, I love "${hobby}".`)
            } else {
                console.log(`Well, I have ${this.hobbies.length} hobbies, but "${hobby}" is not one of them.`)
            }
        }        
      };
      person.introduce();                       // kiírja, hogy “Hi, I’m Berry”
      person.isInterestedIn("Longform Improv"); // azt kellene kiírnia, hogy "Well, I have 2 hobbies, but Longform Improv is not one of them"
      person.isInterestedIn("Discgolf");        // azt kellene kiírnia, hogy "Why yes, I love Discgolf"


}

window.addEventListener("load", pageLoaded);