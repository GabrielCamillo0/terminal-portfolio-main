import { UniversalFunction } from "./UniversalFunction.js";

export class Projects {
    toString(){
        return `
        <div class="projects">
            <div class="projects-header">
                <h2>PROJETOS</h2>
                <hr>
            </div>
            <div class="projects-item">
                <strong>
                    Organiza Socios | C#, POO, MySQL | 
                    <a href="https://github.com/GabrielCamillo0/Prog-OrganizaSocios" target="_blank">[GitHub]</a>
                </strong>
                <ul>
                    <li>CRUD no padrão mvc para o setor financeiro de uma micro empresa</li>
                    <li>Faz o gerenciamento de entrada e saída do dinheiro da empresa</strong></li>
                </ul>
            </div>
        </div>
        `;
    }
    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}