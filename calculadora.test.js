// 1) Importando a classe "Calculadora" 
const Calculadora = require('./calculadora')

// 2) Criarndo um objeto que herdará a
// classe "Calculadora"
const calc = new Calculadora()

// 3) Testar o método "soma"
it("Deve somar dois números", ()=>{
    expect(calc.soma(8,4)).toBe(12)
})

// 4) Testar o método "sub"
it("Deve subtrair dois números", ()=>{
    expect(calc.sub(8,4)).toBe(4)
})

// 5) Testar o método "mult"
it("Deve multiplicar dois números", ()=>{
    expect(calc.mult(8,4)).toBe(32)
})

// 6) Testar o método "div"
it("Deve dividir dois números", ()=>{
    expect(calc.div(8,4)).toBe(2)
})

/* // Extra: Tratar a divisão por zero
it("Deve tratar a divisão por zero", ()=>{
    expect(calc.div(8,0)).toBe(Error('Não há divisão por zero'))
}) */