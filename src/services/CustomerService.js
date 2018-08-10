const customers = [
    {id: 1, name: "John Doe", products: []},
    {id: 2, name: "Homer Simpson", products: []},
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
    addCustomer(newCustomer) {
        customers.push(newCustomer);
    }
}

export const customerService = new CustomerService();