# Assignment
# Using ES6 Modules with Node

If you wish to use multiple ES6 modules, remember that Node uses CommonJS modules by default and so you must tell Node to use ES6 modules instead.

## Classes or Factories Needed

You will need two classes or factories:

1. **LinkedList class / factory**: Represents the full list.
2. **Node class / factory**: Contains a `value` property and a link to the `nextNode`, set both as `null` by default.

## Functions to Build in LinkedList Class / Factory

- `append(value)`: Adds a new node containing `value` to the end of the list.
- `prepend(value)`: Adds a new node containing `value` to the start of the list.
- `size`: Returns the total number of nodes in the list.
- `head`: Returns the first node in the list.
- `tail`: Returns the last node in the list.
- `at(index)`: Returns the node at the given index.
- `pop`: Removes the last element from the list.
- `contains(value)`: Returns true if the passed in value is in the list, otherwise returns false.
- `find(value)`: Returns the index of the node containing `value`, or null if not found.
- `toString`: Represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: `( value ) -> ( value ) -> ( value ) -> null`.

## Extra Credit

- `insertAt(value, index)`: Inserts a new node with the provided value at the given index.
- `removeAt(index)`: Removes the node at the given index.

### Extra Credit Tip

When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their `nextNode` link updated.

## Test it Out

Let’s test out the Linked List you made!

1. Create a `main.js` file and make sure it imports your LinkedList class or factory. This is where we’ll test the list.
2. Create an instance of your LinkedList and populate it with nodes:

```javascript
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
```
Add console.log(list.toString()); to the end of the file and run it.
If everything is working, the output should be:
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
