class Api {
  
    static async listarClientes(){

        let api = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))

        return api
        
    }

    static async pegarDados(id){

        let api = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`,{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .catch(err => console.log(err))

        return api
    }

    static async cadastrarCliente(data){

        let api = await fetch("https://atividade-api-clientes.herokuapp.com/clientes",{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
        })
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))

        return api
    }

    static async editarCliente(id, data){

        let api = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`,{
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
        })
        .then(res => console.log(res.json()))
        .catch(err => console.log(err))

        return api

    }

    static async deletarCliente(id){

        let api = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`,{
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },            
        })
        // .then(res => console.log(res.json()))
        .catch(err => console.log(err))

        return api

    }

}

export {Api}