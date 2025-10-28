/** @odoo-module **/
import { Component ,useState,useRef, onMounted } from "@odoo/owl";
import { TodoItem } from "./todoitem";

export class TodoList extends Component {
    static template = "awesome_owl.todolist";
    static components = { TodoItem };
    static props = {};
    setup() {
        this.todos = useState([]); // reactive list
        this.inputRef = useRef("input"); // create a reference to the input element
        this.nextId = 0; // counter for unique IDs

        // hook that runs when component appears in the DOM
        onMounted(()=> {
            this.inputRef.el.focus();
        })
    }
    addTodo(ev) {
        if (ev.key === 'Enter') { // ev.keyCode === 13
          const value = this.inputRef.el.value.trim();
            if (!value) return;

            this.todos.push({
             id: this.nextId++,
             description: value,
             isCompleted: false,
            });

             this.inputRef.el.value = "";
        }
    }
}
