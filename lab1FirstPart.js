'use strict'
function arr (number){
    let result = [];
    for(let i = 0; i < number; i++){
        result.push(i);
    }
    console.log(result);
}
arr(5);

function check(a, b, c){
    let result;
    if(a%b == 0 && a%c == 0){
        result = true;
    } else {
        result = false;
    }
    console.log(result);
}

check (12, 2, 3);
check (-12, 2, 5);
check (-12, 8, 3);

function toCapitalize(str){
    if(str.length > 10 || typeof str != 'string' ){
        console.log("denied");
    } else {
        let capStr = str[0].toUpperCase() + str.slice(1);
        console.log(capStr);
    }
}

toCapitalize("apple");
toCapitalize("amalgamamamama");
toCapitalize(10);
