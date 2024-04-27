import { Component, Prop, h } from "@stencil/core";
import { ParagraphFamily, ParagraphSize } from "./ui-paragraph.interface";

@Component({
    tag: "ui-paragraph",
    styleUrl: "./ui-paragraph.scss",
    shadow: false
})
export class UiParagraphAtom {

    /**
     * @Size el tamaño del párrafo
     */
    @Prop() size: ParagraphSize = "md";
  
    @Prop() family: ParagraphFamily = "regular";
    /**
     * @color El color del párrafo
    */
    @Prop() color: string = "text";

    render(){
        return <p class={this.getClassName()}><slot></slot></p>
    }

    private getClassName(){
        return `ui-paragraph ${this.color} ui-paragraph--${this.family} ui-paragraph--${this.size}`;
    }
}