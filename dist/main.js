/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Node {\n    constructor(value, nextNode = null) {\n        this.value = value;\n        this.nextNode = nextNode;\n    }\n}\n\nclass LinkedList {\n    constructor() {\n        this.head = null;\n    }\n\n    append(value) {\n        const newNode = new Node(value);\n        if (this.head === null) {\n            this.head = newNode;\n        } else {\n            let current = this.head;\n            while (current.nextNode !== null) {\n                current = current.nextNode;\n            }\n            current.nextNode = newNode;\n        }\n    }\n\n    prepend(value) {\n        const newNode = new Node(value, this.head);\n        this.head = newNode;\n    }\n\n    size() {\n        let count = 0;\n        let current = this.head;\n        while (current !== null) {\n            count++;\n            current = current.nextNode;\n        }\n        return count;\n    }\n\n    getHead() {\n        return this.head;\n    }\n\n    tail() {\n        let current = this.head;\n        if (current === null) {\n            return null;\n        }\n        while (current.nextNode !== null) {\n            current = current.nextNode;\n        }\n        return current;\n    }\n\n    at(index) {\n        let current = this.head;\n        let count = 0;\n        while (current !== null) {\n            if (count === index) {\n                return current;\n            }\n            count++;\n            current = current.nextNode;\n        }\n        return null; // Return null if the index is out of bounds\n    }\n\n    pop() {\n        if (this.head === null) {\n            return null;\n        }\n        if (this.head.nextNode === null) {\n            let nodeToRemove = this.head;\n            this.head = null;\n            return nodeToRemove;\n        }\n        let current = this.head;\n        while (current.nextNode.nextNode !== null) {\n            current = current.nextNode;\n        }\n        let nodeToRemove = current.nextNode;\n        current.nextNode = null;\n        return nodeToRemove;\n    }\n\n    contains(value) {\n        let current = this.head;\n        while (current !== null) {\n            if (current.value === value) {\n                return true;\n            }\n            current = current.nextNode;\n        }\n        return false;\n    }\n\n    find(value) {\n        let current = this.head;\n        let index = 0;\n        while (current !== null) {\n            if (current.value === value) {\n                return index;\n            }\n            index++;\n            current = current.nextNode;\n        }\n        return null; // Return null if the value is not found\n    }\n\n    toString() {\n        let current = this.head;\n        let result = '';\n        while (current !== null) {\n            result += `( ${current.value} ) -> `;\n            current = current.nextNode;\n        }\n        return result + 'null';\n    }\n}\n\n// Example usage:\nconst list = new LinkedList();\nlist.append(\"Snickers\");\nlist.append(\"Bailey\");\nlist.prepend(\"Bean\");\nlist.prepend(\"Winnie\");\nconsole.log(list.toString()); // Should log: \"( Winnie ) -> ( Bean ) -> ( Snickers ) -> ( Bailey ) -> null\"\nconsole.log(list.size()); // Should log: 4\nconsole.log(list.getHead().value); // Should log: \"Winnie\"\nconsole.log(list.tail().value); // Should log: \"Bailey\"\nconsole.log(list.at(2).value); // Should log: \"Snickers\"\nconsole.log(list.pop().value); // Should log: \"Bailey\"\nconsole.log(list.contains(\"Bean\")); // Should log: true\nconsole.log(list.find(\"Snickers\")); // Should log: 1\nconsole.log(list.toString()); // Should log: \"( Winnie ) -> ( Bean ) -> ( Snickers ) -> null\"\n\n\n//# sourceURL=webpack://codespace-template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;