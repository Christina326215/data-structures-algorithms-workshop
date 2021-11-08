// 1 2 3 4 
// 1 2 3 5 4

function insertValue(idx, value){
    let arr = [1,2,3,4];
    let last = arr.length;
    for (let i = last; i > idx; i--){
        arr[i] = arr[i-1];
    }
    arr[idx] = value;
    console.log(arr);
  }
  
// 在陣列中的3之後插入5
insertValue(3,5);