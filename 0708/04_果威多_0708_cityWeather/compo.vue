<template>
  <div>
    <slot name="box1"></slot>
    <slot name="box2"></slot>
    <slot name="box3"></slot>
    <div></div>
  </div>
</template>
<script>
export default {
  //   data() {
  //     return {
  //       checkAll: 0,
  //       rel: [],
  //       test: "子组件的值",
  //       result: ["空"],
  //     };
  //   },
  //   props: ["listProp", "testProp"],
  //   methods: {
  //     changeTest() {
  //       this.$emit("changeTest", this.test);
  //     },
  //   },
  //   created() {
  //     for (let i = 0; i < this.listProp.length; i++) {
  //       this.listProp[i].checked = 0;
  //     }
  //   },
  //   watch: {
  //     listProp: {
  //       handler() {
  //         for (let i = 0; i < this.listProp.length; i++) {
  //           if (this.listProp[i].checked == true) {
  //             this.rel.push(this.listProp[i].fruit);
  //           }
  //         }
  //         this.result = this.rel;
  //         this.rel = [];
  //         if (this.result.length == 0) {
  //           this.result = ["空"];
  //         }
  //       },
  //       immediate: true,
  //       deep: true,
  //     },
  //     checkAll: {
  //       handler(val) {
  //         if (val === true) {
  //           for (let i = 0; i < this.listProp.length; i++) {
  //             this.listProp[i].checked = 1;
  //           }
  //         } else {
  //           for (let i = 0; i < this.listProp.length; i++) {
  //             this.listProp[i].checked = 0;
  //           }
  //         }
  //       },
  //     },
  //   },
};
</script>
