<template>
    <div>
        <slot name="name">{{ name }}</slot>
        <slot name="url">{{ url }}</slot>
    </div>
</template>

<script>
    export default {
        props: ['name', 'url']
    }
</script>

<style scoped>

</style>