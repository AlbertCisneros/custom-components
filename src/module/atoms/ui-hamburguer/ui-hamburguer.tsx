import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: "ui-hamburguer",
    styleUrl: "./ui-hamburguer.scss"
})
export class UiHamburguerAtom {

    @Prop() size: string = "16px";
    @Prop() mode: "dark" | "light" = "light";

    render(){
        return <i class={this.getClassName()} style={this.getStyle()}></i>
    }

    private getStyle():any{
        return {
            "font-size": this.size ? this.size : "16px"
        }
    }

    private getClassName(){
        let className = `ui-hamburguer icon-menu `;
        className = this.mode == 'dark' ? `${className} white`: `${className} primary-500`;
        return className;
    }
}