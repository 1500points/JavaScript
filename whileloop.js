//while loop, runs what is in code block as long as condition is true. condition is checked BEFORE the body runs
let counter=0;
while(counter <= 20){
    console.log('counter : '+counter);
    counter = counter+2;
}

//do while loop: run the body first THEN check the condition after
do{
    console.log('counter value is : '+counter);
    counter++;
}
while(counter <=30);