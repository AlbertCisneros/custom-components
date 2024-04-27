import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: "ui-menu",
    styleUrl: "./ui-menu.scss"
})
export class UiMenuMolecules {

    @Prop() position: "right" | "left" = "right";

    render(){
        return  <ul class={this.getClassName()}>
                    <slot></slot>
                </ul>
    }

    private getClassName(){
        return `ui-nav-menu content-${this.position}`;
    }

}