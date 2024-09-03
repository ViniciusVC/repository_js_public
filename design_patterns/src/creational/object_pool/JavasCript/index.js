

class PooledObject {
    // Esta classe representa o objeto.

    constructor(id) {
        this.id = id;
    }

    use() {
        console.log(`Usando objeto ${this.id}`);
    }
}

class ObjectPool {
    // classe ObjectPool gerencia um conjunto de objetos PooledObject. 

    constructor(size) {
        // Recebe total de objetos na lista.
        this.pool = [];
        for (let i = 0; i < size; i++) {
            // instancia um objeto passando um id.
            this.pool.push(new PooledObject(i));
        }
    }
    
    borrowObject() {
        // Pegar um objeto.
        return this.pool.length > 0 ? this.pool.pop() : null;
    }

    returnObject(obj) {
        // devolvêr objeto.
        this.pool.push(obj);
    }
}


const pool = new ObjectPool(3); // Instanciar a classe ObjectPool

const obj1 = pool.borrowObject();
obj1.use(); // Usando objeto 2

const obj2 = pool.borrowObject();
obj2.use(); // Usando objeto 1

pool.returnObject(obj1); // devolvêr objeto.

const obj3 = pool.borrowObject();
obj3.use(); // Usando objeto 2 novamente

