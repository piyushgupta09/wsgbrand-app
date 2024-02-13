<template>
    <div class="list-group list-group-flush border-bottom py-5">
        <div class="list-group-item d-flex flex-column align-items-center">
            <div class="d-flex justify-content-center align-items-center rounded-circle border bg-light" style="height:60px;width:60px;">
                <i class="bi bi-funnel text-secondary fs-1" style="opacity: 60%;" ></i>
            </div>
            <div class="d-flex flex-fill flex-column px-3 mt-3">
                <p class="fw-bold font-title mb-0">{{title}}</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'EmptyList',
    props:['title']
}
</script>

<style lang="scss" scoped></style>