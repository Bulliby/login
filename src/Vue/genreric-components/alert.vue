<!-- TODO Alert must disapear after a submit. For be able to see the next alert if it's the same -->
<template>
    <div>
      <v-alert v-if="alert.type != null && show" :type="alert.type">
        {{ alert.msg }}
      </v-alert>
    </div>
</template>

<script>

const TIMER = 5000;

export default {
    name: 'alert',
    props: {
        alert: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
          show: null,
        }
    },
    methods: {
    },
}
</script>

<style>
.v-alert {
    text-align: center;
}
</style>
