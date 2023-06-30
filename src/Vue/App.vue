<template>
        <div id="app">
            <xmenu/>
            <router-view/>
        </div>
</template>

<script>
import xmenu from '@/menu.vue'

export default {
    name: 'App',
    components: {
        xmenu,
    },
}
</script>

<style>
#app {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
