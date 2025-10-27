/** @odoo-module **/

import { Component, useState, markup } from "@odoo/owl";
import {Counter} from "./counter/counter";
import {Card} from "./card/card";

export class Playground extends Component {
    static template = "awesome_owl.playground";
    static components= {Counter, Card};
    setup() {
         // This will be ESCAPED (shown as text)
         this.escapedContent = "<div class='text-primary'>escaped content</div>";

         // This will be RENDERED (shown as blue HTML)
         this.renderedContent = markup("<div class='text-primary'>rendered content</div>");
         this.state= useState({sum:0});
}
    incrementSum(value) {
        // This will be called every time a counter changes
        this.state.sum += 1;
    }
}
