/** @odoo-module **/
import { Component ,useState } from "@odoo/owl";

export class Card extends Component {
    static template = "awesome_owl.card";
     setup() {
        // State to track open/closed state
        this.state = useState({ isOpen: true });
    }

    toggle() {
        this.state.isOpen = !this.state.isOpen;
    }
}