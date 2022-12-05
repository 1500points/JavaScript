function Employee(name, age, baseSalary){
   //created constructor even though didn't create a class first
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    //this.monthlyBonus = 1000;
    //don't want users to change values,to make certain values private
    //make variable only in scope of the function
    let monthlyBonus = 1000;

    this.calculateFinalSalary = function(){
        //let finalSalary = this.baseSalary + this.monthlyBonus;
        let finalSalary = baseSalary + monthlyBonus;
        console.log ('Final Salary is : '+finalSalary);
    }
    

    this.getEmpDetails = function (){
        console.log ('Name : '+this.name+' | Age : '+this.age);
        this.calculateFinalSalary();
    }

}

let emp1 = new Employee('John', 30, 2000);
emp1.getEmpDetails();
//user can change values, unless it is made private per above example
//emp1.monthlyBonus = 10000;
//emp1.calculateFinalSalary();