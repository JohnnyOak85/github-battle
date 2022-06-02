// @ts-check
// Implicit Binding

console.log('IMPLICIT');

const user = {
    name: 'John',
    age: 36,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    },
    mother: {
        name: 'Lucy',
        greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
    }
}


user.greet();
user.mother.greet();

console.log('----------------------');

// Explicit Binding

console.log('EXPLICIT');

const sayName = function (lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2} and ${lang3}.`);
}

const me = {
    name: 'John',
    age: 36
};

const languages = ['JavaScript', 'Java', 'Python'];

sayName.call(me, languages[0], languages[1], languages[2]);
sayName.apply(me, languages);

const newFn = sayName.bind(me, languages[0], languages[1], languages[2]);

newFn();

console.log('----------------------');

// new Binding

console.log('NEW');

function User(name, age) {
    this.name = name;
    this.age = age;
}

const newMe = new User('John', 36);

console.log(`Hello, my name is ${newMe.name}`);

console.log('----------------------');

// Lexical Binding

console.log('LEXICAL');

const lexicalUser = {
    name: 'John',
    age: 36,
    languages: ['JavaScript', 'Java', 'Python'],
    greet() {
        const hello = `Hello, my name is ${this.name} and I know`;

        const langs = this.languages.reduce((str, lang, i) => {
            if (i === this.languages.length - 1) {
                return `${str} and ${lang}.`;
            }

            return `${str} ${lang},`;
        }, "");

        console.log(hello + langs);
    }
}

lexicalUser.greet();

console.log('----------------------');

// window Binding

console.log('WINDOW');

window.age = 36;

function sayAge() {
    console.log(`My age is ${this.age}`);
}

sayAge();

console.log('----------------------');
