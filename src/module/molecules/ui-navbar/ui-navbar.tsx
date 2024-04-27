import { Component, Prop, h, Element, EventEmitter,Event } from "@stencil/core";

@Component({
    tag: "ui-navbar",
    styleUrl: "./ui-navbar.scss"
})
export class UiNavbarMolecules{

    @Prop() mode: "dark" | "light" | "light-transparent" | "dark-transparent" = "light";
    @Prop() shadow: boolean = false;
    @Prop() fixed: boolean = false;
    @Event() ctrlBrand: EventEmitter<any>;
 
    @Element() el: HTMLElement;

    componentDidLoad(){
        // const ele = this.el.querySelector("ui-menu");
        // const subElement = ele && ele.querySelector(".ui-nav-menu")
    }

    onClickBrand(){
        this.ctrlBrand.emit();
    }

    render() {
        return  <nav class={this.getClassNameNav()}>
                    <div class="ui-nav-body">
                        <div class="ui-nav-brand" onClick={() => this.onClickBrand()}>
                            <ui-img src={this.getBrand()} width="100%" height="80%"></ui-img>
                        </div>
                        <div class="ui-nav-content">
                            <slot name="content-menu"></slot>
                            <div class="ui-nav-toggler">
                                <div class="ui-nav-toggler-menu">
                                    <slot name="responsive-menu"></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </nav>
            
        
    }

    private getClassNameNav(){
        let className = `ui-nav bg-${this.mode}`; 
        if(this.fixed) className = `${className} nav-fixed`; 
        if(this.shadow) className = `${className} with-shadow`;
        return className;
    }

    private getBrand(){
        let brand = this.mode == 'dark' ?  '/assets/img/logo-white.png' : '/assets/img/logo-primary.png';
        return brand;
    }
}