let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivros)

function ordenarLivros(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}

// é feita uma subtração entre dois números a e b:
// se o resultado for positivo então a é considerado maior e então colocado numa posição mais para o final do array
// se o resultado for negativo então temos o oposto, b é maior que a então b que é colocado mais para o final
// o outro caso possível é quando o resultado é zero, significando que eles são iguais e então sua posição é mantida.
// Isso é válido para quando temos a - b na função sort, porém quando colocamos b - a acontece o inverso, a subtração entre b - a vai retornar um valor positivo quando b for maior que a, porém como o resultado foi positivo o a será colocado numa posição mais a direita do array, mesmo sendo menor que b ele acaba sendo considerado maior pelo algoritmo, desse jeito nós invertemos a ordem crescente e obtemos a ordem decrescente. Outra questão válida é que a e b são nomes genéricos, mas que podem ser substituídos por outros, como numero1 e numero2 e entre outros.