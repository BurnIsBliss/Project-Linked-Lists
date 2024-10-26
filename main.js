import { LinkedList } from "./linkedListFile.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("mice");
list.append("parrot");
list.append("hamster");
// list.append("snake");
// list.append("turtle");

console.log(list.toString());
