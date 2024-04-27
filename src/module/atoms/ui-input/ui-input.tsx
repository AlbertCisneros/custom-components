import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "ui-input",
    styleUrl: "./ui-input.scss"
})
export class UiInputAtom {

    @Prop() label: string = "";
    @Prop() type: "text" | "password" = "text";
    @Prop() size: "lg" | "md" | "sm" = "lg";

    render(){
        return  <div class="input-container">
                    <label>{this.label}</label>
                    <input type={this.type} class={this.getClassName()}>
                </input></div>
    }

    private getClassName() {
        return `ui-input ui-input--${this.size}`;
    }

}