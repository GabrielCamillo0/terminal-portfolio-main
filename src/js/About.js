import { UniversalFunction } from "./UniversalFunction.js";

export class About{
    toString(){
        return `<p>Ola sou o Gabriel, sou Software Devloper<b>, </b>formado em Análise e desenvolvimento de sistemas.</b> Sou natural de São Paulo. Sempre gostei de tecnologia e hoje busco aprimorar minhas habilidades todos os dias me atualizando e estudando tecnologias novas, ou pelo menos nova para mim kkk. Eu atuo bastante no back-end, mas também estou bem envolvido com front-end fazendo freelance e projetos pessoais, Na maior parte do tempo eu utilizo C#, java, JavaScript, python e um pouco de CSS e HTML também. Casualmente me pego estudando e gosto muito de estudar cyber security para ter um desenvolvimento  melhor e mais seguro. Quando não estou codando ou estudando, estou jogando  ou assistindo conteudos aleatorios e escutando musica. Gosto de ler e de explorar um mundo introspectivo.<br>
        Aqui vai um pouco do que gosto de escutar:
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/212y6CFGgXniniBzf3jAsI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </p>`;
    }
    
    



    updateDOM(){
        new UniversalFunction().updateElement("div", "output", this.toString());
    }
}