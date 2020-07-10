<template>
    <div>
        <div>{{this.$route.query.dataObj}}</div>
        <button @click="back()">我知道了</button>
    </div>
</template>

<script>
export default {
  methods: {
      back:function(){
          this.$router.go(-1)
      }
  },
}
</script>