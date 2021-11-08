// 陣列 array

let newArray = new Array();
function giveValue(value){
    newArray += value;
}

let arr = [1,2,3,4,5,6,7];
giveValue(arr);
console.log(newArray);

// queue 先進先出法
for (let i = 0; i < arr.length; i++){
    console.log("queue 先進先出法:", arr[i]);
}

console.log("----------");

// stack 後進先出法
for (let i = arr.length; i > 0; i--){
    console.log("stack 後進先出法:", arr[i-1]);
}