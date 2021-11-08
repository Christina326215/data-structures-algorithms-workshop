function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  let node1 = new ListNode(1);
  let head = node1;
  
  let node2 = new ListNode(2);
  node1.next = node2;
  
  let node3 = new ListNode(3);
  node2.next = node3;
  
  let node4 = new ListNode(4);
  node3.next = node4;
  
  function printList(head) {
    let current = head;
    console.log(current);
    while (current !== null) {
      current = current.next;
    }
  }
  
  // 可以自行執行看看
  // printList(head);
  

function insertAfterValue(value, newValue) {
    let newNode = new ListNode(newValue);
    let current = head;
    // 先找到位置
    // 為什麼這邊要檢查 current 不是 null? 什麼情況下 current 會是 null?
    while(current !== null && current.val !== value) {
      current = current.next;
    }
    // 為什麼這邊要檢查 current？ 什麼情況下 current 會是 null?
    if(current !== null) {
      newNode.next = current.next;
      // 5 的下一個是 4
      current.next = newNode;
      // 3 的下一個是 5
      // 1 -> 2 -> 3 -> 5 -> 4
    }
  }
  
  insertAfterValue(3, 5);
  printList(head);