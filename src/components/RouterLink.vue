<template>
    <li><a @click="navegar" :href="destino">{{ destino }}</a></li>
</template>

<script>
import EventBus from '@/EventBus.js';
export default {
    name: 'RouterLink',
    props: {
        destino: {
            type: String,
            required: true,
        },
    },
    methods: {
        navegar(evento) {
            evento.preventDefault();
            window.history.pushState(null, null, this.destino);
            EventBus.$emit('navegar');
        }
    }
}
</script>

<style scoped>
    li {
        display: inline-block;
    }
    a {
        color: white;
    }
</style>