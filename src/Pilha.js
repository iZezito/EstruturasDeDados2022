class Pilha {
    constructor(size = 10) {
        this.topo = 0
        this.dados = []
        this.maxSize = size
    }

    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo] = dado
            this.topo++
        } else {
            throw new Error("stack overflow")
        }
    }

    pop() {
        if (!this.isEmpty()) {
            this.topo--
        } else {
            throw new Error("stack underflow")
        }
    }

    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo-1]
        }
    }

    isFull() {
        return this.length() === this.maxSize
    }

    isEmpty() {
        return this.length() === 0
    }

    length() {
        return this.topo;
    }

    toString() {

    }
    inverter(e){
        let resultado = ''
        for(let i = e.length - 1; i >= 0; i--){
            resultado += e[i]
        }
        return resultado
    }

    trocaTopo(){
        let pilhaAux = new Pilha()
        pilhaAux.push(this.dados[this.length() - 1])
        for(let i = 1; i<= this.length() - 2; i++){
            pilhaAux.push(this.dados[i])
        }
        pilhaAux.push(this.dados[0])



        return pilhaAux
    }

    conversorBin(num){
        let numeroDec = num
        let restos = [], resto, stringBinaria = ''

        while(numeroDec > 0){
            resto = Math.floor(numeroDec %2 )
            restos.push(resto)
            numeroDec = Math.floor(numeroDec / 2)
        }

        while (restos.length > 0){
            stringBinaria += restos.pop().toString()
        }

        return stringBinaria
    }

}

export default Pilha;