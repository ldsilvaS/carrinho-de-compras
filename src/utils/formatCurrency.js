// Função que transforma os valores em reais.

const formatCurrency = (valor) => {
    return valor.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',}) 
}

export default formatCurrency;