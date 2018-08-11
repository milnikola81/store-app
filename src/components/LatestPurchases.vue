<template>
    <div>
        <h3>{{customer.name}}</h3>
        <h5>Product list</h5>
        <ul>
            <li v-for="(product, index) in customer.products" :key="index">
                {{product}}
            </li>
        </ul>
        <router-link to="../customers">Back to customers list</router-link>
    </div>
</template>

<script>
import { customerService } from '../services/CustomerService.js'
//console.log(customerService);
export default {
    props: ['id'], // ovde dajemo naziv propertya koji hvatam iz url (definisan u main.js)
    data() {
        return {
            customers: customerService.list(),
            
        }
    },
    methods: {

    },
    created() {
        this.customer = customerService.find(this.id)
    } // ova funkcija odradjuje onload (pri refreshu)
}
</script>

<style scoped>

</style>
