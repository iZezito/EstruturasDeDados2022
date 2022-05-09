import Conjunto from "../src/Conjunto";

let c


beforeEach(()=>{
    c = new Conjunto()

})

test("Teste vencedor", ()=>{
    let sequencia = [1, 5, 15, 23, 44, 57]
    let aposta = [[1, 5, 15, 23, 44, 57, 59, 60], [1, 5, 15, 23, 44, 57, 59, 60],  [1, 5, 15, 23, 44, 57, 59, 60, 8, 2, 3]]
    c.verificar(sequencia, aposta)



})
test("Teste errado", ()=>{
    let sequencia = [1, 5, 15, 23, 44, 57]
    let aposta = [[1, 5, 15, 23, 25, 30, 33], [27, 14, 7, 21, 33, 44, 59, 18], [1, 2,3, 4,5,6,7,8,9]]
    c.verificar(sequencia, aposta)



})
test("Teste quina", ()=>{
    let sequencia = [1, 5, 15, 23, 44, 57]
    let aposta = [1, 5, 15, 23, 44, 56, 59, 60]
    c.verificar(sequencia, aposta)



})
test("Teste 1 de cada", ()=>{
    let sequencia = [1, 5, 15, 23, 44, 57]
    let aposta = [[1, 5, 15, 23, 44, 56, 59, 60], [1, 5, 15, 23, 25, 30, 33], [1, 5, 15, 23, 44, 57, 59, 60, 8, 2, 3]]
    c.verificar(sequencia, aposta)



})