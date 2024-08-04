function calcularOperacoes(num1, num2) {
    // Adição
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    
    // Subtração
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    
    // Multiplicação
    console.log(`${num1} x ${num2} = ${num1 * num2}`);
    
    // Divisão
    // Verifica se num2 não é zero para evitar divisão por zero
    if (num2 !== 0) {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
        console.log(`${num1} / ${num2} = Divisão por zero não é permitida`);
    }
}

// Exemplo de uso da função
calcularOperacoes(4, 5);
