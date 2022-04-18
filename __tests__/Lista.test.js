import Lista from "../src/Lista";
import {ListaArrayNodes} from "../src/ClassesListas";

let l

beforeEach(
    ()=>{
        l = new Lista()
    }
)


test("invertedor", ()=>{
    l.append(1)
    l.append(2)
    l.append(3)
    l.append(4)
    l.append(5)
    l.inverterOrdem()

    console.log(l.toString())

    expect(l.inverterOrdem()).toBe(l.removeEnd() === 1)
})
test("embaralhador", ()=>{
    l.append(1)
    l.append(2)
    l.append(3)
    l.append(4)
    l.append(5)
    l.embaralhar()

    console.log(l.toString())

    expect(l.embaralhar()).toBe(l.removeEnd() === 1)
})