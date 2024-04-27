import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: "ui-paragraph",
    styleUrl: "./ui-paragraph.scss"
})
export class UiParagraphAtom {

    @Prop() size: "lg" | "md" | "sm" = "md";
    @Prop() family: "bold" | "regular" = "regular";
    @Prop() color: "primary" | "secondary" | "text" = "text";

    render(){
        return <p class={this.getClassName()}><slot></slot></p>
    }

    private getClassName(){
        return `ui-paragraph ui-paragraph--${this.color} ui-paragraph--${this.family} ui-paragraph--${this.size}`;
    }
}