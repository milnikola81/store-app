<template>
    <div>
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
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
const customers = [
    {id: 1, name: "John Doe", products: []},
    {id: 2, name: "Homer Simpson", products: []},
    {id: 3, name: "Johnny Bravo", products: []},
    {id: 4, name: "Inspector Gadget", products: []}
];
export default {
    name: 'CustomerService',
    data () {
        return {
            customers: customers
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
table 
{
    text-align: left;
}
td, th 
{
    border: 1px solid gray;
    padding: 0.2rem;
}
</style>

