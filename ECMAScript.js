class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, decription, price, thumbnail, code, stock ) {
        if (!title || !decription ||  !price || !thumbnail  || !code || !stock){
            console.log ('los campos son obligatorios')
            return;
        }

      //  if (this.products.some (product => product.code === code )) {
      //      console.log ('Code ya existe')
       //     return;
       //     }

            const product = {
            title,
            decription,
            price,
            thumbnail,
            code,
            stock,
            id: this.#getMaxId() + 1
        };
        this.products.push(product);
    }


    #getMaxId(){
        let maxId = 0;
        this.products.map((product) =>{
            if(product.id > maxId) maxId = product.id;
        })
        return maxId;
    }

    getProducts(){
            return this.products;
    }

    getProductById(id){
        const foundForId = this.products.find(product => product.id === id);
        if (foundForId) {return product} 
        else { console.log ( 'not found')} ;
    }
}

const productManager = new ProductManager();
productManager.getProducts(productManager);
productManager.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123', 25 )
productManager.getProducts(productManager);
productManager.addProduct('producto prueba','Este es un producto prueba',200,'Sin imagen','abc123', 25 )
productManager.getProductById(7);
