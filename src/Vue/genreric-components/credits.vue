<template>
    <div class="credits-container">
        <div class="credits"><slot>© Credits to you</slot></div>
    </div>
</template>

<script>

export default {
    name: 'credits',
    data() {
        return {
        }
    },
    methods: {
    },
    created: function () {
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Gotu');

div.credits-container {
    height: 100%;
    display: flex;
    align-self: flex-end;
    flex-direction: row;
}

div.credits {
    font-family: 'Gotu', sans-serif;
    align-self: flex-end;
}

</style>
