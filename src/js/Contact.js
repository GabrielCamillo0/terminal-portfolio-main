import { UniversalFunction } from "./UniversalFunction.js";

export class Contact{
    toString(){
        return `<p class="two-col">
                    <span class='keyword'>Telefone</span>
                    <span><a href="tel:+55(11)930280521">+55(11)930280521</a></span>
                    <span class='keyword'>Email</span>
                    <span><a href="mailto:gcamilloservices@gmail.com">gcamilloservices@gmail.com</a></span>
                    <span class='keyword'>Whatsapp</span>
                    <span><a href="https://wa.me/+5511930280521" target="_blank">+5511930280521</a></span>
                    <span class='keyword'>Telegram</span>
                    <span><a href="https://t.me/justgece" target="_blank">@justgece</a></span>
                </p>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}