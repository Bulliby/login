<template>
    <div class="menu-container">
        <a @click="setIndex($getConst('Links', 'LOGIN'))" :class="{ active : index === $getConst('Links', 'LOGIN')}"><router-link to="/login">Log in</router-link></a>
        <a @click="setIndex($getConst('Links', 'SIGNUP'))" :class="{ active : index === $getConst('Links', 'SIGNUP')}"><router-link to="/signup">Signup</router-link></a>
        <a @click="setIndex($getConst('Links', 'FORGOT_PASSWORD'))" :class="{ active : index === $getConst('Links', 'FORGOT_PASSWORD')}"><router-link to="/forgot-password">Forgot-password</router-link></a>
        <a @click="setIndex($getConst('Links', 'PLAY'))" :class="{ active : index === $getConst('Links', 'PLAY')}"><router-link to="/play">Play</router-link></a>
    </div>
</template>

<script>

export default {
    name: 'xmenu',
    data() {
        return {
            index: 0,
        };
    },
    methods: {
        setIndex(index) {
            this.index = index
        }
    },
    computed: {
        isActive() {
            return true;
        }
    },
    mounted: function() {
    }
}
</script>

<style>

.menu-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 60px;
    border-bottom: solid 1px;
}

a {
    font-family: 'IM Fell French Canon SC', sans-serif;
    flex-basis: 15%;
    align-self: center;
    text-decoration: none;
    color: black;
}

a.active {
    text-decoration: underline;
}
</style>
