import { Api } from "./api.js"

class Cadastro{

    static async cadastro(){

        const nomeCliente    = document.getElementById("nome")
        const emailCliente   = document.getElementById("email")
        const idadeCliente   = document.getElementById("idade")
        const cpfCliente     = document.getElementById("cpf")
        const sexoCliente    = document.getElementById("sexo")
        const cepCliente     = document.getElementById("cep")
        const ruaCliente     = document.getElementById("rua")
        const numeroCliente  = document.getElementById("numero")
        const bairroCliente  = document.getElementById("bairro")
        const cidadeCliente  = document.getElementById("cidade")
        const estadoCliente  = document.getElementById("estado")
        const btnCadastrar   = document.getElementById("cadastrar")

        btnCadastrar.addEventListener("click", async (event) => {

            event.preventDefault()

            const data = {
                nome: nomeCliente.value,
                email: emailCliente.value,
                sexo: sexoCliente.value,
                idade: idadeCliente.value,
                cpf: cpfCliente.value,
                endereco: {
                    estado: estadoCliente.value,
                    cidade: cidadeCliente.value,
                    bairro: bairroCliente.value,
                    numero: numeroCliente.value,
                    rua: ruaCliente.value,
                    cep: cepCliente.value

                }

            }

            await Api.cadastrarCliente(data)
            location.reload()

        })

    }

}

Cadastro.cadastro()