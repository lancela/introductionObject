<!--
 * @Description: 
 * @autor: zhan.liang  <liang.zhan06@hand-china.com>
 * @Date: 2022-04-20 16:02:04
 * @LastEditors: Seven
 * @version: 0.0.1
 * @copyright: Copyright (c) 2019, Hand
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="open" round>点击回答我的问题</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome lance new Page",
      data: "栋栋帅吗",
    };
  },
  methods: {
    open() {
      this.$prompt("我的栋栋可爱吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^([\u4e00-\u9fa5]{1,1})$/,
        inputErrorMessage: "只能输入是或否",
      })
        .then(({ value }) => {
          if (value == "是") {
            this.$message({
              type: "success",
              message: "你真" + value + "个大可爱",
            });
          }
          if (value == "否") {
            this.$message({
              type: "success",
              message: "你可真有自知之明",
            });
          }
          return
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
