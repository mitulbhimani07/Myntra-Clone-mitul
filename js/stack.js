function stack() {
    let stack = [];

function Add(ele) {
    if (stack.length >= 10) {
        console.log("Stack is Overflow");
    } else {
        stack.push(ele);
        console.log(stack);
    }
}

function Delete() {
    if (stack.length === 0) {
        console.log("Stack is Empty");
    } else {
        stack.pop();
        console.log(stack);
    }
}

function peek() {
    if (stack.length === 0) {
        console.log("Stack is Empty");
    } else {
        console.log(stack[stack.length - 1]);
    }
}

return {Add , Delete ,peek}
}

let bass = stack()
bass.Add(12)
bass.Add(13)
bass.Add(14) 

bass.Delete()
bass.peek()