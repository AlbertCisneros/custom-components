import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: "ui-title",
    styleUrl: "ui-title.scss",
    shadow: false
})
export class UiTitleAtom {

    @Prop() size: "lg" | "md" | "sm" = "lg";
    @Prop() family: "bold" | "regular" = "bold";
    @Prop() color: string = "secondary-800";

    render() {
        switch (this.size) {
            case "lg": return this.renderH1();
            case "md": return this.renderH2();
            case "sm": return this.renderH3();
            default: return this.renderH2();
        }
    }

    private renderH1() {
        return <h1 class={this.getClassName()}><slot></slot></h1>
    }

    private renderH2() {
        return <h2 class={this.getClassName()}><slot></slot> </h2>
    }

    private renderH3() {
        return <h3 class={this.getClassName()}><slot></slot></h3>
    }

    private getClassName() {
        return `ui-title ${this.color} ui-title--${this.family} ui-title--${this.size}`;
    }

}