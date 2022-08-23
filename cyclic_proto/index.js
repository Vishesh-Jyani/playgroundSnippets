let animal = {
    eats: true,
}

let dog = {
    barks: true,
}

let mammal = {
    eggs: false,
}

dog.__proto__ = animal;
animal.__proto__ = mammal;
mammal.__proto__ = dog;