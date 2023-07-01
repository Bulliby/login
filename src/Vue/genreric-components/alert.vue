<template>
    <div>
      <v-alert :type="alert.type">
        {{ alert.msg }}
      </v-alert>
    </div>
</template>

<script>

const TIMER = 2500;

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
          show: true
        }
    },
    mounted() {
      setTimeout(() =>  { this.$emit('flush-error') }, TIMER);
    },
}
</script>

<style>
.v-alert {
    text-align: center;
}
</style>
