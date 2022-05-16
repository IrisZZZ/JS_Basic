




/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
    constructor(){
      this.stack1 = new Stack();
      this.stack2 = new Stack();
    }
    enqueue(element) {
       while(! this.stack1.size() == 0){
        this.stack2.push( this.stack1.pop());
      }
      this.stack1.push(element);
      while(! this.stack2.size() == 0){
        this.stack1.push(this.stack2.pop());
      }
      // add new element to the rare
    }
    peek() { 
      return this.stack1.peek();
     
      // get the head element
    }
    size() { 
      return this.stack1.size();
      // return count of element
    }
    dequeue() {
      return this.stack1.pop();
      // remove the head element
    }
  }