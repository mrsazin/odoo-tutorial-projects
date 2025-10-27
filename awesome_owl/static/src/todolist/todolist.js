/** @odoo-module **/
import { Component ,useState,useRef } from "@odoo/owl";
import { TodoItem } from "./todoitem";

export class TodoList extends Component {
    static template = "awesome_owl.todolist";
    static components = { TodoItem };
    static props = {};
    setup() {
        this.todos = useState([]);
        this.inputRef = useRef("input");
        this.nextId = 0; // counter for unique IDs
    }
    addTodo(ev) {
        if (ev.key === 'Enter') {  // More modern than keyCode
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
