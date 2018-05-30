"use strict";
jQuery(function () {
    jQuery("#demo").click(training);
});
function training() {
    console.log("Starting training...");
    classesDemo();
    console.log("training done");
}
function classesDemo() {
    let p1 = new Person("Sawitzki", "Rainer", 183, "m", 76);
    let p2 = new Person("Sawitzki", "Paul", 164, "m", 48);
    let p3 = new Person("Mustermann", "Hanna", 177, "f", 77);
    console.log(p1.sayHello());
    console.log(p3.sayHello());
    console.log(p1.man());
    console.log(p1.woman());
}
class Person {
    constructor(pNach, pVor, pGroesse, pGeschlecht, pGewicht) {
        this.nachname = pNach;
        this.vorname = pVor;
        this.geschlecht = pGeschlecht;
        this.gewicht = pGewicht;
        this.groesse = pGroesse;
    }
    sayHello() {
        return `Hello, my name is ${this.vorname} ${this.nachname}Und ich bin ${this.geschlecht}`;
    }
    man() {
        if (this.geschlecht == "m") {
            return true;
        }
        else {
            return false;
        }
    }
    woman() {
        if (this.geschlecht == "f") {
            return true;
        }
        else {
            return false;
        }
    }
}
