import { UniversalFunction } from "./UniversalFunction.js";

export class Skills{
    toString(){
        return`<div class="skills">
        <div>
            <h2>HABILIDADES TÉCNICAS</h2><hr>
        </div>
        <ul>
            <li><strong>Linguagens :</strong>  C#, Java, Python, JavaScript</li>
            <li><strong>Frameworks :</strong> React, Flask, Express.js</li>
            <li><strong>Banco de dados :</strong> MySQL, PostgreSQL, XAMPP </li>
            <li><strong>Ferramentas :</strong> Git, GitHub, Docker, Postman </li>
            <li><strong>Sistemas Operacionais :</strong> Windows, Linux</li>
        </ul>
    </div>`;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}