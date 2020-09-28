<template>
  <div class="searchMain">
    <div>
      <el-radio-group v-model="searchEngineChecked">
        <el-radio
          v-for="item in searchEngineItems"
          :label="item.name"
          :key="item.value"
        >
          {{ item.value }}
        </el-radio>
      </el-radio-group>
    </div>
    <div>
      <el-input
        type="text"
        class="inputMain"
        v-model="searchText"
        @input="onInput"
        @keyup.enter.native="searchSubmit"
        placeholder="搜你所想"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchEngine",
  data() {
    return {
      searchEngineItems: [
        {
          name: "google",
          value: "Google",
        },
        {
          name: "baidu",
          value: "百度",
        },
        {
          name: "bing-cn",
          value: "必应中国",
        },
        {
          name: "bing",
          value: "必应国际",
        },
      ],
      searchEngineChecked: "google",
      searchText: "",
    };
  },
  methods: {
    onInput() {},
    searchSubmit() {
      console.log("SearchSubmit:" + this.searchText);
       this.$router.push({
          path: '/Search', query: {
            q: this.searchText,
            t: this.searchEngineChecked
          }
        })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchMain {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


.inputMain {
  position: relative;
  display: inline-block;
  font-size: 0;
  width: 724px;
  height: 56px;
  line-height: 54px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 29px;
  text-align: center;
  margin-top: 20px;
}

a {
  color: #42b983;
}
</style>
