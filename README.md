# 🚀 40 Days of Javascript

## 📅 Day 1: Intro to JavaScript

### 📝 Script Loading Strategies
Understanding how the browser handles HTML parsing and `<script>` execution:

1. **`<script>` tag in `<head>`**
   * HTML parsing **pauses**.
   * Script is fetched and executed immediately.
   * HTML parsing resumes after execution.
   * *(Blocks rendering)*

2. **`<script>` tag at the end of the `<body>`**
   * HTML parsing **completes** first.
   * Script is then fetched and executed.
   * *(Ensures DOM is loaded before execution)*

3. **`<script>` tag with `async`**
   * Script fetches **in parallel** with HTML parsing.
   * HTML parsing pauses **only** to execute the script when fetching finishes.
   * *(Great for independent scripts like analytics)*

4. **`<script>` tag with `defer`**
   * Script fetches **in parallel** with HTML parsing.
   * Script execution is **deferred** until HTML parsing is completely finished.
   * *(Best overall practice for main scripts)*

---

## 📅 Day 2: Variables and Data Types

### 📝 Notes Summary

* **Variables**
  Containers used to store data.

* **Data Types**
  * **Primitive Data Types (Immutable):**
    * `String` - Text values (e.g., `"Hello"`)
    * `Number` - Numeric values (e.g., `25`, `3.14`)
    * `Boolean` - True/False (e.g., `true`, `false`)
    * `Undefined` - A variable declared but not assigned
    * `Null` - Represents "nothing"
    * `BigInt` - Large numbers
    * `Symbol` - Unique identifiers
  * **Non-Primitive / Reference Data Types (Mutable):**
    * `Object` - Collection of key-value pairs
    * `Array` - Ordered list of values
    * `Function` - Code that can be executed

* **Naming Conventions**
  * **Rules:**
    * Variable name can't start with a number, or special characters except `_`.
    * Variable name can contain letters, numbers, and underscores.
    * Variable name can't be a reserved keyword.
  * **Conventions (Best Practices):**
    * `camelCase` - for variables and functions
    * `PascalCase` - for classes and constructors
    * `snake_case` - for variables and functions (optional)

* **var vs let vs const**
  * `var`: Function-scoped, can be re-declared and re-assigned.
  * `let`: Block-scoped, can be re-assigned but cannot be re-declared.
  * `const`: Block-scoped, cannot be re-assigned and cannot be re-declared.

---

## 📅 Day 17: Basic DOM

### 📝 Notes Summary

* **DOM (Document Object Model)**
  A programming interface for web documents that represents the structured page as a tree of nodes and objects.

* **DOM Types**
  Includes `Document`, `Node`, `Element`, `Attribute`, `NodeList`, and `NodeNameMap`.

* **Accessing DOM**
  Select elements using various methods:
  * By ID
  * By Class
  * By Tag
  * `querySelector()`
  * `querySelectorAll()`

* **HTMLCollection vs NodeList**
  * **HTMLCollection**: Live collection (contains only HTML elements).
  * **NodeList**: Static collection (can contain any node type, not just elements).

---

## 📅 Day 18: DOM Manipulation

### 📝 Notes Summary
* **DOM Operations**: Creating (`createElement`), inserting (`appendChild`, `insertBefore`), and removing elements (`removeChild`, `replaceChildren`).
* **Content & Attributes**: Modifying text/HTML (`innerText`, `innerHTML`) and managing attributes (`getAttribute`, `setAttribute`, `hasAttribute`).
* **Traversing the DOM**: Navigating via `parentElement`, `children`, `firstChild`, `nextElementSibling`.
* **Styles & Classes**: Direct manipulation using `element.style` and modifying classes with `classList`.

### 🛠️ Projects
* **Toggle Paragraph:** Toggle the visibility of a DOM element efficiently.
* **Basic Task Manager:** A to-do list application supporting adding, editing, completing, deleting, and searching tasks.

---

## 📅 Day 19: Events Listener

### 📝 Notes Summary
* **Event Listeners:** Attaching events using `addEventListener()`, `onclick`, and freeing memory with `removeEventListener()`.
* **Event Object:** Accessing `event.target`, `event.type`, `event.currentTarget`, etc.
* **Event Propagation:** Understanding Capture and Bubbling phases, and using `stopPropagation()`.
* **Event Delegation:** Attaching a single event listener to a parent element to elegantly handle events for all dynamic children.
* **Event Defaults:** Halting default browser behaviors using `preventDefault()`.
* **Custom Events:** Initializing (`new CustomEvent`), dispatching (`dispatchEvent`), and reacting to custom events.

### 🛠️ Projects
* **FAQ Accordion:** Scalable FAQ section utilizing event delegation for expanding/collapsing questions.

---

### 🧠 New Learnings
- [x] Regular Expressions (`Regex`)
- [x] JavaScript `Set` Object