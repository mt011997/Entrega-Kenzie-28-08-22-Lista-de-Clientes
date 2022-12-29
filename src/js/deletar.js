import { Api } from "./api.js"

const selectCliente = document.getElementById("nomesClientes")
const btnDeletar    = document.getElementById("deletar")

class Deletar{

    static async selecionarCliente(){

        let clientes = await Api.listarClientes()

        clientes.forEach(element => {

            const optionsCliente = document.createElement("option")

            optionsCliente.value     = element.id
            optionsCliente.innerText = element.nome

            selectCliente.append(optionsCliente)
            
        })

    }

    static async buttonDeletar(){

        btnDeletar.addEventListener("click", async (event) => {

            event.preventDefault()

            const id = selectCliente.value
            
            await Api.deletarCliente(id)
            location.reload()

        })

    }

}

Deletar.selecionarCliente()
Deletar.buttonDeletar()