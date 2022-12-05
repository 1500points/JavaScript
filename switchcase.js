//use when if else is limited. switch case gives more diverse options
let starRating = 4;
switch(starRating){
    case 1:
        console.log('Very Bad rating');
        break;
    case 2:
        console.log('bad rating');
        break;
    case 3:
        console.log('average');
        break;
    case 4:
        console.log('good');
        break;
    case 5:
        console.log('very good');
        break;
    default:
        console.log('enter a value between 1 and 5');
        break;
}

//another example
let month = 1
switch(month){
    case 1:
    console.log('month is january');
    break;
    case 2:
    console.log('month is february');
    break;
}