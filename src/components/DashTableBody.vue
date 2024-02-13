<template>
    <tbody>
        <template v-for="(item, itemIndex) in tbody" :key="itemIndex">     
            <tr>
                <th class="ps-3" scope="row">{{ itemIndex + 1 }}</th>
                <td>{{ item.event }}</td>
                <td>{{ item.value }}</td>
                <td class="pe-2 text-end">
                    <button v-if="item.action" type="button" class="btn btn-sm" @click="takeAction(item)">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <div v-else>NA</div>
                </td>
            </tr>
            <tr v-if="item.info">
                <td></td>
                <td class="small pb-2" colspan="3">
                    {{ item.info }}
                </td>
            </tr>
        </template>
    </tbody>
</template>

<script>
export default {
    name: 'DashTableBody',
    props: ['tbody'],
    methods: {
        takeAction(item) {
            // item has a property called action and param use it to redirect to route use action as route name and send param with name ledger
            this.$router.push({ name: item.action, params: { ledger: item.params } });
        }
    },
}
</script>

<style></style>