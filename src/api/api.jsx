const api = async (query) => {
    // Função de chamada de api
    const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

    // Estou utilizando a variável query para transformar a pesquisa de uma forma dinâmica.

    const data = await res.json() // Transformo a resposta em json.

    return data.results // Retorno o resultado

}


export default api;