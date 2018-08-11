const products = [
    {id: 1, name: "Milk", quantity: 10},
    {id: 2, name: "Eggs", quantity: 10},
    {id: 3, name: "Butter", quantity: 10},
    {id: 4, name: "Bread", quantity: 10},
    {id: 5, name: "Meat", quantity: 10},
    {id: 6, name: "Cheese", quantity: 10},
    {id: 7, name: "Coffee", quantity: 10},
    {id: 8, name: "Juice", quantity: 10},
    {id: 9, name: "Beer", quantity: 10}
];

class ProductService {
    list() {
        return products;
    }
    increment(product) {
        product.quantity++;
    }
    decrement(product) {
        if(product.quantity > 0) {
            product.quantity--;
        }
        else {
            alert ('We are out of '+product.name+'!');
        }
    }
}

export const productService = new ProductService();