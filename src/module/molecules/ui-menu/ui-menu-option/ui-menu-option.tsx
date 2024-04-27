import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: "ui-menu-option",
    styleUrl: "./ui-menu-option.scss"
})
export class UiMenuOptionMolecules {

    @Prop() name: string;

    render(){
        return  <li class="ui-nav-menu-option">
                    <a>{this.name}</a>
                </li>
    }
}