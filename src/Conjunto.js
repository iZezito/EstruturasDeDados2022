import ListaDuplamenteLigada from "./ListaDuplamenteLigada";

class Conjunto{
    constructor() {
        this.dados = new ListaDuplamenteLigada();
    }

    add(elemento) {
        if (!this.has(elemento)) {
            this.dados.add(elemento);
            return true;
        } else {
            return false;
        }
    }

    delete(elemento) {
        return this.dados.remove(elemento);
    }

    has(elemento) {
        return this.dados.search(elemento);
    }

    clear() {
        this.dados.clear();
    }

    length() {
        return this.dados.length();
    }

    values() {
        return this.dados.asArray();
    }

    isEmpty() {
        return this.dados.isEmpty();
    }

    union(anotherset) {
        let AuB = new Conjunto();
        let valuesA = this.values();
        let valuesB = anotherset.values();

        for (const i of valuesA) {
            AuB.add(i);
        }

        for (const i of valuesB) {
            AuB.add(i);
        }

        return AuB;
    }

    intersection(anotherset){
        let AiB = new Conjunto();

        let valoresB = anotherset.values();

        for (const i of valoresB) {
            if (this.has(i)) {
                AiB.add(i);
            }
        }

        return AiB;
    }

    contains(anotherset){
        let valoresB = anotherset.values();

        for (const j of valoresB) {
            if (!this.has(j)) {
                return false;
            }
        }
        return true;
    }







    isEqual(anotherset){
        return this.contains(anotherset) && anotherset.contains(this);
    }

    difference(anotherset) {
        let AdB = new Conjunto();
        let valoresA = this.values();
        let valoresB = anotherset.values();

        for (const i of valoresA) {
            AdB.add(i);
        }

        for (const i of valoresB) {
            AdB.delete(i);
        }

        return AdB;
    }


    verificar(sequencia, matriz){
        let certos = new Conjunto();
        let apostas = new Conjunto();

        for(let i = 0; i<sequencia.length; i++){
            certos.add(sequencia[i])
        }
        /*
        for(let i = 0; i<array.length; i++){
            apostas.add(array[i])
        }

         */



        for(let i = 0; i<matriz.length; i++){
            for(let j = 0; j<15; j++){
                if(matriz[i][j] === null){
                    break
                }else{
                    apostas.add(matriz[i][j])
                }


            }


            if(apostas.contains(certos)){
                console.log("acertou mizeravi")
            }else if(certos.intersection(apostas).length() === 5){
                console.log("acertou a quina")

            }else{
                console.log("perdeu otário")
            }

            apostas.clear()




        }

        /*
        if(apostas.contains(certos)){
            console.log("acertou mizeravi")
        }else if(certos.intersection(apostas).length() === 5){
            console.log("acertou a quina")

        }else{
            console.log("perdeu otário")
        }

         */


    }

}

export default Conjunto;