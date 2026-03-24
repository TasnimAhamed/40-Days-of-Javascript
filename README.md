# 🚀 40 Days of Javascript

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