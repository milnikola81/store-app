<template>
    <div>
        <h3>Products</h3>
        <input type="text" v-model="search" placeholder="search products..." />
        <table>
            <thead>
                <th>
                    No.
                </th>
                <th>
                    Name
                </th>
                <th>
                    Quantity
                </th>
            </thead>
            <tbody>
                <tr v-for="(product, index) in filteredProducts" :key="index">
                    <td>
                        {{product.id}}
                    </td>
                    <td>
                        {{product.name}}
                    </td>
                    <td>
                        {{product.quantity}}
                    </td>
                    <td style="border:none">
                        <button @click="increment(product)">+</button>
                    </td>
                    <td style="border:none">
                        <button @click="decrement(product)">-</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import { productService } from '../services/ProductService.js'

export default {
    data() {
        return {
            products: productService.list(),
            search: ''
        }
    },
    methods: {
        increment(product) {
            productService.increment(product)
        },
        decrement(product) {
            productService.decrement(product)
        }
    },
    computed: {
        filteredProducts: function() {
            return this.products.filter((product) => {
                return product.name.toLowerCase().match(this.search)
            });
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


