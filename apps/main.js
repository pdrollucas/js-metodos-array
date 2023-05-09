let livros = []
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
 

getLivrosDaApi()

async function getLivrosDaApi(){
    const res = await fetch(endpointDaApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
}
