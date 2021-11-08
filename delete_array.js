function deleteValue(idx){
    let arr = [1,2,3,4,5,6,7];
    let last = arr.length;
    for (let i = idx; i < last; i++){
      arr[i] = arr[i + 1];
    }
    (arr.length)--;
    console.log(arr);
  }
  
  // 刪除陣列中index=3的值
  deleteValue(3);
  //    1 2 3 4 5 6 7
  // -> 1 2 3 5 6 7
  