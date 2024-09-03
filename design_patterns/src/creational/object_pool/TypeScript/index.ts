class ObjectoUnico {
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    use() {
        console.log(`Usando objeto ${this.id}`);
    }
}

class GerenciadorDeObjetos {
    private Objetos: ObjectoUnico[];

    constructor(size: number) {
        this.Objetos = [];
        for (let i = 0; i < size; i++) {
            this.Objetos.push(new ObjectoUnico(i));
        }
    }

    borrowObject(): ObjectoUnico | null {
        return this.Objetos.length > 0 ? this.Objetos.pop()! : null;
    }

    returnObject(obj: ObjectoUnico) {
        this.Objetos.push(obj);
    }
}

// Exemplo de uso
const gerenciadorDeObjetos = new GerenciadorDeObjetos(3);

const objEmUso1 = gerenciadorDeObjetos.borrowObject();
if (objEmUso1) objEmUso1.use(); // Usando objeto 2

const objEmUso2 = gerenciadorDeObjetos.borrowObject();
if (objEmUso2) objEmUso2.use(); // Usando objeto 1

gerenciadorDeObjetos.returnObject(objEmUso1!);

const objEmUso3 = gerenciadorDeObjetos.borrowObject();
if (objEmUso3) objEmUso3.use(); // Usando objeto 2 novamente
