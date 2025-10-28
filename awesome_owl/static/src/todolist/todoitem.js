/** @odoo-module **/
import { Component } from "@odoo/owl";

export class TodoItem extends Component {
    static template = "awesome_owl.todoitem";
    static props = {
        todo: Object,
        toggleState: { type: Function, optional: true },
    };

    //  تابع جدید برای handle کردن تغییر checkbox
    onToggle(ev) {
        if (this.props.toggleState) {
            this.props.toggleState(this.props.todo.id);
        }
    }
}