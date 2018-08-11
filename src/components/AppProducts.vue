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
            </thead>
            <tbody>
                <tr v-for="(product, index) in filteredProducts" :key="index">
                    <td>
                        {{product.id}}
                    </td>
                    <td>
                        {{product.name}}
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
    computed: {
        filteredProducts: function() {
            return this.products.filter((product) => {
                return product.name.toLowerCase().match(this.search)
            });
        }
    }
}
</script>

