<template>
    <div>
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
    </div>
</template>
<script>
export default {
    name: 'trance',
    props: {
        obj : String
    },   
}
</script>