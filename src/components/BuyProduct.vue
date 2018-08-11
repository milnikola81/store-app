<template>
    <div>
        <form v-if="product.quantity > 0" @submit.prevent>
            <p>{{product.name}}</p>
            <select v-model="customer" style="margin-top: 1rem">
                <option disabled value="">Please select customer</option>
                <option v-for="(customer, index) in customers" :key='index' v-bind:value="customer">{{ customer.name }}</option>
            </select>
            <br><br>
            <button @click="sellProduct(customer, product)">Confirm</button>
            <router-link to="../products" tag="button">Cancel</router-link>
        </form>
        <div v-else>
            <p>We are out of {{product.name}}.</p>
            <router-link to="../products">Back to Products page</router-link>
        </div>

    </div>
</template>

<script>
import { productService } from '../services/ProductService.js'
import { customerService } from '../services/CustomerService.js'

export default {
    props: ['id'], // ovde dajemo naziv propertya koji hvatam iz url (definisan u main.js)
    data() {
        return {
            customers: customerService.list(),
            products: productService.list(),
            customer: '' // baca gresku ako nije proglasen
        }
    },
    created() {
        this.product = productService.find(this.id);
    },
    methods: {
        sellProduct(customer, product) {
            if(customer === '') {
                alert ('Please select customer.')
            }
            else {
                customerService.addProductToCustomer(customer, product);
                productService.decrement(product);
            }
        }
    }
}
</script>

<style scoped>
table {
    margin-left: 2rem;
    margin-bottom: 2rem;
}
th, td {
    border: 1px solid gray;
    padding: 0.5rem;
}

</style>


