const customers = [
    {id: 1, name: "John Doe", products: []},
    {id: 2, name: "Homer Simpson", products: ['milk', 'eggs', 'bread']},
    {id: 3, name: "Johnny Bravo", products: []},
    {id: 4, name: "Inspector Gadget", products: []}
];

let nextId = customers[customers.length-1].id + 1;

class CustomerService {
    list() {
        return customers;
    }
    remove(customer) {
        customers.splice(customers.indexOf(customer), 1);
    }
    addCustomer(newCustomer) {
            newCustomer.id = nextId;
            newCustomer.products = [];
            customers.push(newCustomer);
            nextId++;
    }
    find(id) {
        return customers.find(customer => customer.id == id);   
    }
    addProductToCustomer(customer, product) {
        customer.products.push(product);
    }
}

export const customerService = new CustomerService();