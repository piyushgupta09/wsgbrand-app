<template>
    <div class="body">
        <router-view></router-view>
        <div class="navigation">
            <ul>
                <li v-for="(item, index) in list" :key="index" @click="activeLink(index)"
                    :class="{ 'active': index === activeIndex }" class="list">
                    <router-link :to="item.path" class="nav-link pb-2">
                        <a href="#">
                            <span class="icon fs-1 ">
                                <i :class="item.icon"></i>
                            </span>
                            <span class="text fw-bold fs-6">{{ item.name }}</span>
                        </a>
                    </router-link>
                </li>
                <div class="indicator" :style="{ transform: `translateX(calc(70px * ${activeIndex}))` }"></div>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            list: [
                {
                    name: 'home',
                    icon: 'bi bi-house-door',
                    path: '/'
                },
                {
                    name: 'Profile',
                    icon: 'bi bi-person',
                    path: '/profile'
                },
                {
                    name: 'Message',
                    icon: 'bi bi-stars',
                    path: '/message' // Fixed the path for Message
                },
                {
                    name: 'Order',
                    icon: 'bi bi-box-seam',
                    path: '/photo'
                },
                {
                    name: 'Cart',
                    icon: 'bi bi-bag-check',
                    path: '/setting'
                },
            ],
            activeIndex: null,
        };
    },
    mounted() {
        const currentRoute = this.$route.path;
        const activeIndex = this.list.findIndex(item => item.path === currentRoute);
        if (activeIndex !== -1) {
            this.activeIndex = activeIndex;
        }
    },
    methods: {
        activeLink(index) {
            console.log('Clicked on index:', index);
            this.activeIndex = index;
        },
    },
}
</script>
  
  
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.navigation {
    width: 100vw;
    height: 70px;
    background: #ea3941;
    // background: #e35d6a;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding-bottom: 4px;
}

.navigation ul {
    display: flex;
    width: 350px;
}

.navigation ul li {
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.navigation ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
}

.navigation ul li a .icon {
    position: relative;
    display: block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: .5s;
    color: #fff;
}

.navigation ul li.active a .icon {
    transform: translateY(-44px);
}

.navigation ul li a .text {
    position: absolute;
    color: #fff;
    padding-top: 8px !important;
    transition: .5s;
    opacity: 0;
    transform: translateY(20px);
}

.navigation ul li.active a .text {
    opacity: 1;
    transform: translateY(10px);
}

.indicator {
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: #ea3941;
    border-radius: 50%;
    border: 6px solid #fff;
    transition: transform .5s ease-in-out;
    transform: translateX(calc(70px * var(--active-index, 0)));
}

.indicator::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 0 #fff;
}

.indicator::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 0 #fff;
}

.bi::before,
[class^="bi-"]::before,
[class*=" bi-"]::before {
    vertical-align: -0.5em;
}

.navigation ul li.active~.indicator {
    transform: translateX(calc(70px * var(--active-index, 0)));
}
</style>