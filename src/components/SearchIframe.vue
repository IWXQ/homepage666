<template>
 <div class="meta-search-panel">
        <div class="meta-search-header">
            <div class="meta-search-header-left"> <a href="/" title="点击回到主页"
                    id="meta-search-close" class="meta-search-close"> <i class="icon close-icon"></i> </a> </div>
            <div class="meta-search-header-body">
                <div class="meta-search-box">
                    <div class="meta-search-box-body"> <span class="meta-search-input-box"> <input tabindex="1"
                                type="text" value="" maxlength="140" class="meta-search-input" autocomplete="off">
                        </span> <span class="meta-search-button-box" title="搜索"> <input type="button" tabindex="2"
                                class="meta-search-button" value=" "> </span> </div>
                    <div class="meta-search-suggest" style="display: none"></div>
                </div>
            </div>
            <div class="meta-search-header-right">
                <div class="meta-search-menu-box">
                    <ul class="meta-search-menu">
                        <li class="meta-search-menu-item"> <span class="icon baidu-icon"></span></li>
                        <li class="meta-search-menu-item"> <span class="icon bing-icon"></span></li>
                        <li class="meta-search-menu-item"> <span class="icon sogou-icon"></span></li>
                        <li class="meta-search-menu-item"> <span class="icon haoso-icon"></span></li>
                    </ul> <span class="meta-search-menu-cursor" style="left: 123.188px;"></span>
                </div>
            </div>
        </div>
        <div class="meta-search-body">
            <iframe id="metaSearchbaiduIframe" class="meta-search-iframe" ref="iframe" height="100%"
                align="top"
                :src="contents"></iframe>
        </div> 
</div>
</template>
<script>
export default {
  name: "SearchIframe",
  data() {
    return {
        contents: ''
    };
  },
  methods: {
     loadData(name,type){
         if(type == 'baidu'){
            this.$refs.iframe.style.top = '-57px'
            this.$refs.iframe.style.height = 'calc(100% + 57px)'
            this.contents = `https://www.baidu.com/s?wd=${name}`
         }else if(type == 'google'){
            this.$refs.iframe.style.top = '-65px'
            this.$refs.iframe.style.height = 'calc(100% + 65px)'
            this.contents = `https://www.google.com/search?newwindow=1&q=${name}`
         }else if(type == 'bing-cn'){
              this.$refs.iframe.style.top = '-100px'
            this.$refs.iframe.style.height = 'calc(100% + 100px)'
            this.contents = `https://cn.bing.com/search?q=${name}`
         }else if(type == 'bing'){
              this.$refs.iframe.style.top = '-100px'
            this.$refs.iframe.style.height = 'calc(100% + 100px)'
            this.contents = `https://cn.bing.com/search?&ensearch=1&q=${name}`
         }
     } 
   
  },
  mounted () {
      this.loadData(this.$route.query.q,this.$route.query.t)
  }
};
</script>
<style>
.meta-search-iframe{
    width:100%;
    height:100%;
}
</style>