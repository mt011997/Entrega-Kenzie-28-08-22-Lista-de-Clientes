import { Api } from "./api.js";

let tagUl = document.querySelector(".container")

class Clientes{

    static async criarCards(){

        let clientes = await Api.listarClientes()

        clientes.forEach(elem => {

            let tagLi            = document.createElement("li")
            let tagH2            = document.createElement("h2")
            let divDadosPessoais = document.createElement("div")
            let divEndereco      = document.createElement("div")
            let h3DadosPessoais  = document.createElement("h3")
            let h3Endereco       = document.createElement("h3")
            let pEmail           = this.criarP(elem.email, "Email")
            let pIdade           = this.criarP(elem.idade, "Idade")
            let pCpf             = this.criarP(elem.cpf, "Cpf")
            let pSexo            = this.criarP(elem.sexo, "Sexo")
            let pCep             = this.criarP(elem.endereco.cep, "Cep")
            let pEstado          = this.criarP(elem.endereco.estado, "Estado")
            let pCidade          = this.criarP(elem.endereco.cidade, "Cidade")
            let pBairro          = this.criarP(elem.endereco.bairro, "Bairro")
            let pRua             = this.criarP(elem.endereco.rua, "Rua")
            let pNumero          = this.criarP(elem.endereco.numero, "Numero")

            tagLi.classList.add("card")
            h3DadosPessoais.innerText = "Dados Pessoais"
            h3Endereco.innerText      = "Endereço"
            tagH2.innerText = `Nome: ${elem.nome}`

            tagUl.append(tagLi)
            tagLi.append(tagH2, divDadosPessoais, divEndereco)
            divDadosPessoais.append(h3DadosPessoais, pEmail, pIdade, pCpf, pSexo)
            divEndereco.append(h3Endereco, pCep, pEstado, pCidade, pBairro, pRua, pNumero)

        });

    }

    static criarP(p, dado){

        let tagP       = document.createElement("p")
        tagP.innerText = `${dado}: ${p}`

        return tagP

    }

}

Clientes.criarCards()

