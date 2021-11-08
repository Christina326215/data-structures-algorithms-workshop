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
  
  