import { LinkedList } from "./linkedListFile.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("mice");
list.append("parrot");
list.prepend("hamster");
console.log(list.toString());
list.pop();
list.append("snake");
list.prepend("turtle");
list.append("spider");
list.pop();
console.log(list.toString());
