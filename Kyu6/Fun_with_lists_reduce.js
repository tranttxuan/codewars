// https://www.codewars.com/kata/58319f37aeb69a89a00000c7/train/javascript

function reduce(head, f, init) {
  const arr = [];
  while (head) {
    arr.push(head.data);
    head = head.next
  }

  return arr.reduce(f, init);
}


function reduce(head, f, init) {
  return head ? reduce(head.next, f, f(init, head.data)) : init;
}