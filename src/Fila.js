class Fila {
    constructor(size = 10){
        this.inicio = 0;
        this.fim = 0;
        this.dados = [];
        this.maxSize = size;
    }

    enqueue(dado){
        if(!this.isFull()){
            this.dados[this.fim] = dado
            this.fim++
        }else{
            throw new Error("queue overflow")
        }
    }
    dequeue(){
        if(!this.isEmpty()){
            this.inicio++
        }else{
            throw new Error("queue underflow")
        }
    }
    front(){
        if(!this.isEmpty()){
            return this.dados[this.inicio]
        }
    }
    isEmpty(){
        return this.length() === 0
    }
    isFull(){
        return this.length() === this.maxSize
    }
    length(){
        return this.fim - this.inicio
    }
    clear(){
        this.inicio = 0
        this.fim = 0
    }
    toString(){}

    intercalar(f1, f2){
        let filaAux = new Fila(10)
        for(let i = 0; i < filaAux.maxSize; i++){
            if(i%2 === 0){
                filaAux.enqueue(f1.front())
                f1.dequeue()
            }else {
                filaAux.enqueue(f2.front())
                f2.dequeue()
            }
        }

        return filaAux
    }
}

export default Fila;