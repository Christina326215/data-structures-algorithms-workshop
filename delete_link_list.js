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
  printList(head);
  

  function deleteValue(head, value) {
    let current = head;
    let prev = null;
    while(current !== null && current.val != value) {
      prev = current;
      current = current.next;
    }
    if(current !== null) {
      // 為什麼這邊要檢查 prev 是不是 null 而做不同的事？什麼情況下 prev 會是 null?
      if(prev === null) {
        head = head.next;
      } else {
        prev.next = current. next;
      }
      
      current.next = null;
    }
    return head;
  }
  
  head = deleteValue(head, 3);
  printList(head);
  console.log(head);