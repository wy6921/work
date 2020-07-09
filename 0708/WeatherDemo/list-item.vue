<template>
  <div class="list-item">
    <div class="avater">
      <slot name="avater">
          <input type="checkbox" v-model="isChecked"/>
      </slot>
    </div>
    <div class="title">
      <slot name="title" :data="data" :checked="isChecked">{{data.city}}</slot>
    </div>
    <div class="side" >
      <slot name="side" :weather="data.weather">
          <img class="icon" :src="data.weatherimg"/>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListItem',
  props: {
    data: {
      type: Object
    },
    checked: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isChecked: this.checked
    }
  }
}
</script>

<style>
.list-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  margin: 12px;
  border-radius: 10px;
  box-shadow: 1px 1px 8px #aaa;
  background-color: #eee;
}
.avater {
  width: 30px;
  margin: 5px;
}
.title {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.side {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 10px;
    display: flex;
    justify-content: center;
  align-items: center;
}
.icon{
    width: 30px;
    height: 30px;
}
</style>
