import { LinkedList } from "./linkedListFile.js";

const list = new LinkedList();

console.log(list.toString(), list.tail);
list.append("dog");
list.append("cat");
list.prepend("mice");
console.log(list.toString(), list.tail);
list.append("parrot");
list.prepend("hamster");
console.log(list.toString(), list.tail);
list.append("snake");
list.prepend("turtle");
console.log(list.toString(), list.tail);
