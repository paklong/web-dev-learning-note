class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
        }
        else {
            // traverse to the end
            let currNode = this.head;
            while(currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = new Node(value);
        }
    }

    prepend(value) {
        if(!this.head) {
            this.head = new Node(value);
        }
        else {
            const newHead = new Node(value);
            const oldHead = this.head;
            this.head = newHead;
            newHead.next = oldHead;
        }
    }

    size() {
        if (!this.head) {
            return 0;
        }
        else {
            let currHead = this.head;
            let i = 1;
            while (currHead.next) {
                i++;
                currHead = currHead.next;
            }
            return i;
        }
    }

    getHead() {
        if (!this.head) {
            return null;
        }
        return this.head.value;
    }

    tail() {
        if (!this.head) {
            return null;
        }
        else {
            let currHead = this.head;
            while(currHead.next) {
                currHead = currHead.next;
            }
            return currHead.value;
        }
    }

    at(index) {
        //arr = [A, B, C] size = 3
        //index= 0, 1, 2 
        if(index > this.size()-1) {
            throw new Error('Index out of range');
        }
        let currHead = this.head;
        let i = 0;
        while(i < index) {
            currHead = currHead.next;
            i++;
        }
        return currHead.value;
    }

    pop() {
        if(!this.head) {
            return
        }

        if(!this.head.next) {
            const currHead = this.head;
            this.head = null;
            return currHead.value;
        }
        // A -> B -> C -> D -> null
        let lastHead = this.head
        let currHead = this.head.next;

        while(currHead.next) {
            lastHead = lastHead.next;
            currHead = currHead.next;
        }
        lastHead.next = null;
        return currHead.value;
    }

    contains(value) {
        if (!this.head) {
            return false;
        }
        let currHead = this.head;
        // A -> B -> C -> D -> null
        while(currHead.next && currHead.value != value) {
            currHead = currHead.next;
        }

        if (currHead.value == value) {
            return true;
        }
        else {
            return false;
        }
    }

    find(value) {
        if(!this.contains(value)) {
            return null;
        }
        let currHead = this.head;
        let i = 0;
        while(currHead.value != value) {
            currHead = currHead.next;
            i++;
        }
        return i;
    }

    toString() {
        if(!this.head) {
            return '';
        }
        let currHead = this.head;
        let str = `${currHead.value}`;
        while(currHead.next) {
            currHead = currHead.next;
            str = str + ` -> ${currHead.value}`;
        }
        return str + ' -> null';
    }

    insertAt(value, index) {
        // if the index is > size, throw index out of range error
        // if index = 0, just call prepend(value)
        // otherwise
        // start with this.head, and i = 0
        // if the next i (i+1) is our target insert place
        // then save currNode.next to tempNode
        // set currNode.next.next to newNode
        // set newNode.next to tempNode
        if (index > this.size()) {
            throw new Error('Index out of range');
        }

        if (index == 0) {
            this.prepend(value);
            return;
        }

        let i = 0;
        let currNode = this.head;
        while (i+1 < index){
            currNode = currNode.next;
            i++;
        }
        const tempNode = currNode.next;
        currNode.next = new Node(value);
        currNode.next.next = tempNode;

    }

    removeAt(index) {
        //if index > size(), throw Index out of range error
        //if index == 0, this.head = this.head.next
        //start with i = 1, currNode = thie.head
        //if i == index, currNode.next = currNode.next.next
        // else i++, currNode = currNode.next
        if (index > this.size() - 1) {
            throw new Error('Index out of range');
        }

        if (index == 0) {
            this.head = this.head.next;
            return;
        }

        let i = 1;
        let currNode = this.head;
        while( i < index){
            currNode = currNode.next;
            i++;
        }
        currNode.next = currNode.next.next;
    }
}


function test() {
    const linkedList = new LinkedList();
    linkedList.append('A');
    linkedList.append('B');
    linkedList.append('C');
    linkedList.append('D');
    //linkedList.insertAt('E', 1);
    //linkedList.insertAt('F', 0);
    //linkedList.insertAt('G', 5);
    linkedList.insertAt('E', 4);
    console.log(`toString is ${linkedList.toString()}`);
    console.log(`Size is ${linkedList.size()}`);
    console.log(`Head is ${linkedList.getHead()}`);
    console.log(`Tail is ${linkedList.tail()}`);
    console.log(`at(0) is ${linkedList.at(0)}`);
    console.log(`at(1) is ${linkedList.at(1)}`);
    //console.log(`at(2) is ${linkedList.at(2)}`);
    //console.log(`at(3) is ${linkedList.at(3)}`);
    console.log(`pop is ${linkedList.pop()}`);
    //console.log(`at(2) is ${linkedList.at(2)}`);
    console.log(`contains('A') is ${linkedList.contains('A')}`);
    console.log(`contains('B') is ${linkedList.contains('B')}`);
    console.log(`contains('C') is ${linkedList.contains('C')}`);
    console.log(`contains('D') is ${linkedList.contains('D')}`);
    console.log(`find('A') is ${linkedList.find('A')}`);
    console.log(`find('B') is ${linkedList.find('B')}`);
    console.log(`find('C') is ${linkedList.find('C')}`); 
    console.log(`find('D') is ${linkedList.find('D')}`); 
    console.log(`toString is ${linkedList.toString()}`);
}

test();

