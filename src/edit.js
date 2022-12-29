import { Api } from "./api.js"

const selectCliente = document.getElementById("cliente")
const btnBuscar     = document.getElementById("buscarCliente")
const btnEditar     = document.getElementById("editar")


class Edit{

    static async selectCliente(){

        let clientes = await Api.listarClientes()

        clientes.forEach(element => {

            const optionsCliente = document.createElement("option")

            optionsCliente.value     = element.id
            optionsCliente.innerText = element.nome
            
            // let valor = selectCliente.options[selectCliente.selectedIndex].value

            selectCliente.append(optionsCliente)
            
        })

    }

    static async buttonBuscar(){

        btnBuscar.addEventListener("click", (event) => {

            event.preventDefault()

            const id = selectCliente.value
            
            Edit.editar(id)
            
        })

    }

    static async editar(id){

        const nomeCliente    = document.getElementById("nomeEdit")
        const emailCliente   = document.getElementById("emailEdit")
        const idadeCliente   = document.getElementById("idadeEdit")
        const cpfCliente     = document.getElementById("cpfEdit")
        const sexoCliente    = document.getElementById("sexoEdit")
        const cepCliente     = document.getElementById("cepEdit")
        const ruaCliente     = document.getElementById("ruaEdit")
        const numeroCliente  = document.getElementById("numeroEdit")
        const bairroCliente  = document.getElementById("bairroEdit")
        const cidadeCliente  = document.getElementById("cidadeEdit")
        const estadoCliente  = document.getElementById("estadoEdit")
        const idCliente      = id

        btnEditar.addEventListener("click", async (event) => {

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

            await Api.editarCliente(idCliente, data)
            await Api.listarClientes()

        })
    }

}

Edit.selectCliente()
Edit.buttonBuscar()