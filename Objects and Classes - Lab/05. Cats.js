function solve(array) {

    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < array.length; i++) {
        let catData = array[i].split(" ");
        let name, age;
        [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }

    for (let cat of cats) {
        cat.meow();
    }

};

solve(['Mellow 2', 'Tom 5']);
// solve(['Candy 1', 'Poppy 3', 'Nyx 2']);