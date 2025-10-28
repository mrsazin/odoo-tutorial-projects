/** @odoo-module **/
import { Component ,useState,useRef, onMounted } from "@odoo/owl";
import { TodoItem } from "./todoitem";
import { useAutofocus } from "../utils";

export class TodoList extends Component {
    static template = "awesome_owl.todolist";
    static components = { TodoItem };
    static props = {};
    setup() {
        this.todos = useState([]); // reactive list
        this.inputRef = useAutofocus("input"); // it will auto-focus
        this.nextId = 0; // counter for unique IDs
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
    //  تابع جدید برای toggle کردن state
    toggleTodo(todoId) {
        const todo = this.todos.find(t => t.id === todoId);
        if (todo) {
            todo.isCompleted = !todo.isCompleted; // 🔄 تغییر حالت
        }
    }
}
