<template>
    <div>
        <h3>Products</h3>
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
                <tr v-for="(product, index) in products" :key="index">
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
            products: productService.list()
        }
    }
}
</script>

