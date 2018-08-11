const customers = [
    {id: 1, name: "John Doe", products: []},
    {id: 2, name: "Homer Simpson", products: ['milk', 'eggs', 'bread']},
    {id: 3, name: "Johnny Bravo", products: []},
    {id: 4, name: "Inspector Gadget", products: []}
];

class CustomerService {
    list() {
        return customers;
    }
    remove(customer) {
        customers.splice(customers.indexOf(customer), 1);
    }
    nextId() {
        return customers[customers.length-1].id + 1;
    }
    addCustomer(newCustomer) {
        customers.push(newCustomer);
        console.log(customers);
    }
    find(id) {
        return customers.find(customer => customer.id == id);   
    }
}

export const customerService = new CustomerService();