<template>
    <div>
        <h1>Customers</h1>

        <form @submit.prevent>
            <label>Name</label><br>
            <input v-model="newCustomer.name" type="text" placeholder="name..."> <br><br>
            <br><br>
            <button @click="addCustomer(newCustomer)" type="submit">Add customer</button>
        </form><br><br><br>

        <table>
            <thead>
                <th>
                    No.
                </th>
                <th>
                    Name
                </th>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key="index">
                    <td>
                        {{customer.id}}
                    </td>
                    <td>
                        {{customer.name}}
                    </td>
                    <td>
                        <router-link :to="{ name: 'customer', params: { id: customer.id }}">Latest purchases</router-link>
                    </td>
                    <td>
                        <button @click="remove(customer)">Remove</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { customerService } from '../services/CustomerService.js'

export default {
    data() {
        return {
            customers: customerService.list(),  
            newCustomer: {
                id: customerService.nextId(),
                products: []
            }
        }
    },
    methods: {
        remove(customer) {
            customerService.remove(customer);
        },
        addCustomer(newCustomer) {
            customerService.addCustomer(this.newCustomer);
            console.log(this.newCustomer.id);
            this.newCustomer = {
                id: customerService.nextId()
            };
        }
    }
}
</script>

