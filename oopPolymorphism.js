//parent class
class Animal{

    constructor(name){
        this.name = name
    }
    eats(){
        console.log (this.name+' eats food');
    }
}
//child class
class Alligator extends Animal{

    //it takes constructor from parent class automatically

    //it will attempt to use the function in child class.
    //if a function does not exist it uses function from parent class
    //this is called method overwriting, when it uses child instead of parent
    //eats ends up taking more than one form across the classes
    eats(){
        //super calls the parent class method
        super.eats();
        console.log (this.name+' eats fish')
    }
}

let animal = new Animal('Dog');
animal.eats();

let murphy = new Alligator('Murphy');
murphy.eats();

