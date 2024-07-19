class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    getHead() {
        return this.head;
    }

    tail() {
        let current = this.head;
        if (current === null) {
            return null;
        }
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index) {
                return current;
            }
            count++;
            current = current.nextNode;
        }
        return null; // Return null if the index is out of bounds
    }

    pop() {
        if (this.head === null) {
            return null;
        }
        if (this.head.nextNode === null) {
            let nodeToRemove = this.head;
            this.head = null;
            return nodeToRemove;
        }
        let current = this.head;
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }
        let nodeToRemove = current.nextNode;
        current.nextNode = null;
        return nodeToRemove;
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.nextNode;
        }
        return null; // Return null if the value is not found
    }

    toString() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return result + 'null';
    }
}

// Example usage:
const list = new LinkedList();
list.append("Snickers");
list.append("Bailey");
list.prepend("Bean");
list.prepend("Winnie");
console.log(list.toString()); // Should log: "( Winnie ) -> ( Bean ) -> ( Snickers ) -> ( Bailey ) -> null"
console.log(list.size()); // Should log: 4
console.log(list.getHead().value); // Should log: "Winnie"
console.log(list.tail().value); // Should log: "Bailey"
console.log(list.at(2).value); // Should log: "Snickers"
console.log(list.pop().value); // Should log: "Bailey"
console.log(list.contains("Bean")); // Should log: true
console.log(list.find("Snickers")); // Should log: 1
console.log(list.toString()); // Should log: "( Winnie ) -> ( Bean ) -> ( Snickers ) -> null"
