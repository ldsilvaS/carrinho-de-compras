// Função que transforma os valores em reais.

// Função de formatação

const formatCurrency = (valor) => {
    return valor.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL',}) 
}

export default formatCurrency;