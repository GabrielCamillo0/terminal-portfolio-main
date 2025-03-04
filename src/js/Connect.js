import { UniversalFunction } from "./UniversalFunction.js";

export class Connect{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>GitHub</span>
                    <span><a href="https://github.com/GabrielCamillo0" target="_blank">github.com/GabrielCamillo0</a></span>
                    <span class='keyword'>LinkedIn</span>
                    <span><a href="https://www.linkedin.com/in/gabriel-camillo" target="_blank">linkedin.com/in/gabriel-camillo</a></span>
                    <span class='keyword'>Twitter</span>
                    <span><a href="https://x.com/onlygece" target="_blank">x.com/onlygece</a></span>
                    <span class='keyword'>Instagram</span>
                    <span><a href="https://www.instagram.com/justhegece" target="_blank">instagram.com/justhegece</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}