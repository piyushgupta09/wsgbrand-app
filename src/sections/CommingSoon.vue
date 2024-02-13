<template>
    <div class="font-title">
        <FiltersTab :title="title" :filters="{}" />
        <NavTabs :links="links" />
        <EmptyList :title="'No ' + title + ' Found'" />
    </div>
</template>
  
<script>
import NavTabs from '@/components/NavTabs.vue';
import FiltersTab from '@/components/FiltersTab.vue';
import EmptyList from '@/components/EmptyList.vue';

export default {
    name: 'CommingSoon',
    props: {
        module: {
            type: String,
            required: true,
        },
        links: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            default: 'Page Title',
        },
    },
    components: {
        NavTabs,
        FiltersTab,
        EmptyList,
    },
}
</script>
  