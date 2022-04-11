import Fila from "../src/Fila";
import Pilha from "../src/Pilha";


let f;

beforeEach(
    () => {
        f = new Fila(5);
    }
);

test("Adicionar um elemento",
    () => {
        f.enqueue("A")
        expect(f.isEmpty()).toBe(false);
    }
)

test("Overflow",()=>{
    f.enqueue("A")
    f.enqueue("B")
    f.enqueue("C")
    f.enqueue("D")
    f.enqueue("E")
    expect(() => {
        f.enqueue("F")
    }).toThrowError("queue overflow");
})

test("underflow",()=>{

    expect(() => {
        f.dequeue()
    }).toThrowError("queue underflow");
})

test("length",()=>{
    f.enqueue("A")
    f.enqueue("b")
    f.enqueue("c")
    expect (f.length()).toBe(3)
})

test("Front size",()=>{
    f.enqueue("a");
    f.enqueue("b");
    f.enqueue("c");
    f.dequeue();

    expect(f.front()).toBe("b")
    expect(f.length()).toBe(2)
})

test("enqueuefront",
    ()=>{
        f.enqueue("a")
        f.enqueue("b")
        f.dequeue()

        expect(f.front()).toBe("b")
    }
)

test("1 pilha com duas filas", ()=>{
    let f2 = new Fila(5)
    f.enqueue(1)
    f.enqueue(2)
    f.enqueue(3)

    f2.enqueue(f.front())
    f.dequeue()
    f2.enqueue(f.front())
    f.dequeue()
    f2.enqueue(f.front())
    f.dequeue()
    f.enqueue(4)
    f.enqueue(f.front())
    f2.dequeue()
    f.enqueue(f.front())
    f2.dequeue()
    f.enqueue(f.front())
    f2.dequeue()

    console.log(f.front())
    expect(f.front()).toBe(4)

})

test("intercalando filas", ()=>{
    let f1 = new Fila(10)
    let f2 = new Fila(10)
    let resultado = new Fila()

    f1.enqueue(1)
    f1.enqueue(2)
    f1.enqueue(3)
    f1.enqueue(4)
    f1.enqueue(5)

    f2.enqueue('A')
    f2.enqueue('B')
    f2.enqueue('C')
    f2.enqueue('D')
    f2.enqueue('E')

    resultado = f1.intercalar(f1, f2)

    console.log(resultado)

    expect(resultado.front()).toBe(1)


})

























