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
        //console.log(customer);
        // let index = this.customers.indexOf(customer);
        // this.customers.splice(index, 1);
        customers.splice(customers.indexOf(customer), 1);
    }
}

export const customerService = new CustomerService();