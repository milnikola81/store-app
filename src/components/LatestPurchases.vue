<template>
    <div>
        <p>{{customer}}</p>
    </div>
</template>

<script>
import { customerService } from '../services/CustomerService.js'
console.log(customerService);
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

