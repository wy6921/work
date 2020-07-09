<template>
  <div>
      <slot :vava="myName">default</slot>
      <slot name='label'>default</slot>
      <slot name='pics'>default</slot>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: {
    options: String
  },
  data () {
    return {
      myName: '王'
    }
  }

}
</script>

<style>

</style>
