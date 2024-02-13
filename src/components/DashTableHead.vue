<template>
     <thead>
        <tr>
            <th 
                scope="col" 
                v-for="(item, itemIndex) in thead" :key="itemIndex"
                :class="{ 'ps-3': itemIndex === 0, 'pe-2 text-end': itemIndex === lastIndex  }"
            >
                {{ item }}
            </th>
        </tr>
    </thead>
</template>

<script>
export default {
    name: 'DashTableHead',
    props: ['thead'],
    data() {
        return {
            lastIndex: this.thead.length - 1,
        };
    },
}
</script>
