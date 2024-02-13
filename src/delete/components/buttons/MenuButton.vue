<template>
    <div class="wrapper">
        <input type="checkbox" v-model="isChecked" @change="toggle" />
        <div class="bun">
            <div class="burger"></div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isChecked: false,
        };
    },
    methods: {
        toggle() {
            this.$emit('toggle', this.isChecked);
        },
    },
};
</script>
  
<style lang="scss">
$color: #f06472;
$size: 35px;

@mixin pill() {
    content: "";
    position: absolute;
    width: 100%;
    height: 12%;
    background: $color;
    border-radius: $size;
    transition: all 0.5s cubic-bezier(0.1, 0.9, 0, 1.2);
}

.wrapper {
    display: block;
    position: relative;
    width: $size;
    height: $size;

    .bun {
        &:before {
            @include pill();
            top: 10%;
            right: 0;
        }

        &:after {
            @include pill();
            bottom: 10%;
            left: 0;
        }

        .burger {
            position: absolute;
            display: flex;
            align-items: center;
            height: $size;
            width: $size;

            &:before,
            &:after {
                @include pill();
            }
        }
    }

    input {
        display: block;
        position: absolute;
        opacity: 0;
        z-index: 1;
        width: $size;
        height: $size;
        cursor: pointer;

        &:hover~.bun {

            &:before,
            &:after,
            :before,
            :after {
                background: darken($color, 5);
            }
        }

        &:checked~.bun {

            &:before,
            &:after {
                width: 0;
            }

            .burger {
                &:before {
                    transform: rotate(135deg);
                }

                &:after {
                    transform: rotate(45deg);
                }
            }
        }
    }
}</style>
  