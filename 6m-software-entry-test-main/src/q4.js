/*
    Task 1: 
    - Implement a Child class that extends the Parent.
    - Add a constructor to the Child class can calls super().
    - Implement a new function addNewAbilities(newAbility) where the new ability will be added to the Parent's #abilities array.     
*/
class Parent{
    abilities = []
    constructor(){
        //Push "Parenting" into Abilities Array
        this.abilities.push("Parenting");
        //Push "Role Modeling" into Abilities Array
        this.abilities.push("Role modeling");
    }
    //Lists abilities
    showAbilities(){
        console.log("These are the abilities:")
        // for loop, loop through abilities array to
        for(const a of this.abilities){
            //Parenting, Role Modeling will appear
            console.log(a);
        }
    }
}
const p = new Parent();
p.showAbilities(); // Observe that this function prints "Parenting" and "Role modeling".

// Task 1: Add code here
class Child extends Parent{
    // When we extend a Class, Child will inherit Parents Method.
    //That means Child.prototype.__proto__ will be Parent.prototype
    //Child class can calls super()
    //super is used to resolve the parent prototype and its methods.
    showAbilities(){super.showAbilities()}
    //addNewAbilities(newAbility)
    addNewAbility(newAbility) {
        this.abilities.push(newAbility)
    }
}


const c = new Child();
// When we extend a Class, Child will inherit Parents Method.
// That is why this will work
c.addNewAbility("Dancing");
c.showAbilities(); // This function should print "Parenting", "Role modeling" and "Dancing".