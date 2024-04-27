import { Component, Prop, h} from "@stencil/core";

@Component({
    tag: "ui-img",
    styleUrl: "./ui-img.scss"
})
export class UiImgAtom {

    @Prop() src: string = "";
    @Prop() alt: string = "";
    @Prop() height: string = "100%";
    @Prop() width: string = "100%";
    @Prop() type: "rectangle" | "circle" = "rectangle";
 
    render(){
        return <img class={this.getClassName()} 
                    src={this.src} 
                    alt={this.alt} 
                    style={this.getStyleSize()}>
                </img>
    }

    private getClassName(){
        let className = `ui-img`;
        if(this.type) className = `${className} img--${this.type}`
        return className;
    }

    getStyleSize(){
        return {
            "width": this.width ? this.width : "100%",
            "height": this.height ? this.height : "100%"
        }
    }
}