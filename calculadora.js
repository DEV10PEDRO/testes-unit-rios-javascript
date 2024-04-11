// 1) Criar a classe "Calculadora"
class Calculadora{
    
    // 2) Criar o método "soma"
    soma(a, b){
        return a + b
    }

    // 3) Criar o método "sub"
    sub(a, b){
        return a - b
    }

    // 4) Criar o método "mult"
    mult(a, b){
        return a * b
    }

    // 5) Criar o método "div"
    div(a, b){
        if(b === 0){
            throw Error('Não há divisão por zero')
        }
        else{
            return a / b
        }
        
    }
}

// Exportando a classe "Calculadora"
module.exports = Calculadora