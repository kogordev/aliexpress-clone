<template>
    <div id="MainLayout" class="w-full fixed z-50">
        <!-- Top Menu -->
        <div id="TopMenu" class="w-full bg-secondary border-b md:block hidden">
            <!-- items list -->
            <ul class="flex items-center justify-end text-xs text-dark font-light px-2 h-10 bg-secondary max-w-1200">
                <!-- list items -->
                <li class="border-r border-r-gray-400 px-3 hover:text-red-custom cursor-pointer">
                    Sell on AliExpress
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-red-custom cursor-pointer">
                    Cookie Preferences
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-red-custom cursor-pointer">
                    Help
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-red-custom cursor-pointer">
                    Buyer Protection
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-red-custom cursor-pointer">
                    <Icon name="ic:sharp-install-mobile" size="17" />
                    App
                </li>
                <!-- drop down list item -->
                <li @mouseenter="isAccountMenu = true" @mouseleave="isAccountMenu = false"
                    class="relative flex items-center px-2.5 hover:text-red-custom h-full cursor-pointer"
                    :class="isAccountMenu ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]' : 'border border-secondary'">
                    <!-- Menu Label -->
                    <Icon name="ph:user-thin" size="17" />
                    Account
                    <!-- Menu Label Arrow down and up -->
                    <template v-if="isAccountMenu">
                        <Icon name="mdi:chevron-up" size="15" class="ml-5" />
                    </template>
                    <template v-else>
                        <Icon name="mdi:chevron-down" size="15" class="ml-5" />
                    </template>
                    <!-- Account Menu -->
                    <div id="AccountMenu" v-if="isAccountMenu"
                        class="absolute bg-white w-220 text-dark z-40 top-[38px] right-0 border-x border-b">
                        <div v-if="true">
                            <div class="text-semibold text-15 my-4 px-3">Welcome to AliExpress!</div>
                            <div class="flex items-center gap-1 px-3 mb-3">
                                <NuxtLink to="/auth"
                                    class="bg-red-custom text-center w-full text-16 rounded-sm text-white font-semibold p-2">
                                    Login / Register</NuxtLink>
                            </div>
                        </div>
                        <!-- line breaker -->
                        <div class="border-b" />
                        <!-- Other Menu liinks -->
                        <ul class="bg-white">
                            <li @click="navigateTo('/orders')" class="text-13 py-2 px-4 w-full hover:bg-gray-200">My Orders
                            </li>
                            <li @click="navigateTo('/orders')" class="text-13 py-2 px-4 w-full hover:bg-gray-200">Sign out
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <!-- Main Header -->
        <div id="MainHeader" class="flex items-center w-full bg-white">
            <div class="flex items-center lg:justify-start justify-between gap-10 max-w-1150 w-full px-3 py-5 mx-auto ">
                <NuxtLink to="/" class="min-w-170">
                    <img width="170" src="/AliExpress-logo.png" />
                </NuxtLink>
                <div class="max-w-700 w-full md:block hidden">
                    <div class="relative">
                        <div class="flex items-center border-2 border-red-custom rounded-md w-full">
                            <!-- search iniput -->
                            <input type="text" placeholder="kitchen accessories" v-model="seaerchItem
                                " class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none"
                                @input="isSearching = true">
                            <!-- search gif -->
                            <Icon v-if="isSearching" name="eos-icons:loading" size="25" class="mr-2" />
                            <!-- search button -->
                            <button class="flex items-center h-100 p-1.5 px-2 bg-red-custom">
                                <Icon name="ph:magnifying-glass" size="20" color="#ffffff" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const isAccountMenu = ref(false)
const seaerchItem = ref('')
const isSearching = ref(false)
</script>