const products = [
    {id: 1, name: "Milk"},
    {id: 2, name: "Eggs"},
    {id: 3, name: "Butter"},
    {id: 4, name: "Bread"},
    {id: 5, name: "Meat"},
    {id: 6, name: "Cheese"},
    {id: 7, name: "Coffee"},
    {id: 8, name: "Juice"},
    {id: 9, name: "Beer"}
];

class ProductService {
    list() {
        return products;
    }
}

export const productService = new ProductService();