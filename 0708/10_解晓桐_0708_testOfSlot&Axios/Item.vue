<template>
  <div id="item">  
      <template>
          <slot name="input-cont"></slot>
      </template>
      <template>
          <slot name="city-weather"></slot>
      </template>
      <template>
          <slot name="img"></slot>
      </template>
  </div>
</template>

<script>

export default {
  name: 'Item'
}
</script>
