"use strict";
let string = "ciaone sp summer winter autumn";
let array = string.split(" ");
function ex0(array) {
    let len = array.length;
    let i = 0;
    for (let string of array) {
        if (string.length <= 2) {
            array[i++] = " ";
        } else {
            let first = string.slice(0, 2);
            let end = string.slice(string.length - 2, string.length);
            let final = first + end;
            array[i++] = final;
        }
    }
    console.log(array);
};
ex0(array);
