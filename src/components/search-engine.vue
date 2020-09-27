<template>
  <div class="searchMain">
    <div>
      <el-checkbox-group v-model="searchEngineChecked">
        <el-checkbox
          v-for="item in searchEngineItems"
          :label="item.name"
          :key="item.value"
        >
          {{ item.value }}
        </el-checkbox>
      </el-checkbox-group>
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
      searchEngineChecked: ["google", "baidu"],
      searchText: "",
    };
  },
  methods: {
    onInput() {},
    searchSubmit() {
      console.log("SearchSubmit:" + this.searchText);

      for (const engine of this.searchEngineChecked) {
        if (engine === "baidu") {
          window.open(`https://www.baidu.com/s?ie=utf-8&wd=${this.searchText}`);
        } else if (engine === "google") {
          window.open(
            `https://www.google.com/search?newwindow=1&q=${this.searchText}`
          );
        } else if (engine === "bing-cn") {
          window.open(`https://cn.bing.com/search?q=${this.searchText}`);
        } else if (engine == "bing") {
          window.open(
            `https://cn.bing.com/search?&ensearch=1&q=${this.searchText}`
          );
        }
      }
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

.inputMain >>> .el-input__inner {
  font-size: 18px !important;
  color: #000000 !important;
  font-family: cursive !important;
  height: 48px;
  width: 50%;
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
