<template lang="">

<div :class="['popup-menu', 'apple-shadow', isMenuVisible ? '' : 'collapsed']">
        <div class="top-line">
            <div class="d-flex justify-content-between container">
                <div class="flex-grow-1 bold-1 ">
                    <Icon name="ri:telegram-2-line" size="1em" class="me-1"/>{{ $t('Київ')}}
                </div>
                <div class="flex-grow-2 d-none d-lg-block text-center f-2">{{ $t('Більш ніж 5 років ми виробляємо ті самі конструкції з металу, які всім потрібні')}}</div>
                <div class="flex-grow-1 bold-1 text-end flex-grow-1">
                    <a :href="'tel:'+useRuntimeConfig().public.phone" class="dark pb-0 f3 bold-3">{{ useRuntimeConfig().public.phone }}</a>
                </div>
            </div>
        </div>
        <div class="menu-line f-3">
            <div class="h-100 d-flex justify-content-between align-items-center container">
                <div class="w-25 d-none d-lg-block">
                    <NuxtImg src="/img/logo_sm1_lightmode.png" alt="ТБК1 логотип" height="15px"/>
                </div>
                <!-- Body -->
                <div class="w-50 d-flex flex-grow-1 justify-content-between text-uppercase bold-1 text-black">
                    <a v-for="item in content" :href="item.href">{{ $t(item.text) }}</a>
                </div>

                <div class="w-25 d-none d-md-block text-end">
                    <button class="text-uppercase f-4 bold-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">{{ $t('Залишити заявку')}}</button>
                </div> 
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            content: {
				type: Object,
				required: false,
				default: {},
			}
        },
        data: function() {
            return {
				isMenuVisible : false,
            }
        },
        mounted: function() {
            window.addEventListener('scroll', this.handleScroll);
            this.handleScroll();
        },
        unmounted: function() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll: function() {
                this.isMenuVisible = window.scrollY > 200;
            },
        }
    }
</script>

<style lang="scss">
    // @use '@/assets/styles/variables';

    .popup-menu {
        position: fixed;
        top: 0px;
        transition: top 0.5s ease 0s;

        width: 100%;
        height: 100px; 
        z-index: 100;
        
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:stretch;
        
        padding-left: variables.$wrapper-spacing;
        padding-right: variables.$wrapper-spacing;
        
        border-bottom-left-radius: variables.$blocks-radius;   
        border-bottom-right-radius: variables.$blocks-radius;   
        a {
            // color: black!important;
            font-weight: 600;
        }
        .top-line {
            height: 35px;
            display: flex;
            align-items: center;
            background-color: variables.$secondary-background;
            color: white;
        }
        .menu-line {
            background-color: #cccccc;
            height: 65px;     
            border-bottom-left-radius: variables.$blocks-radius;   
            border-bottom-right-radius: variables.$blocks-radius;   
        }
    }
    .popup-menu.collapsed {
        top: -100px!important;
        transition: top 0.5s ease 0s;
    }

</style>