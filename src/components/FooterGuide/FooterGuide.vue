<template>
  <div>
    <div class="guideItem" @click="goPath('/home')">
      <span>
        <i></i>
      </span>
      <span>
        首页
      </span>
    </div>
    <div class="guideItem" @click="goPath('/equip')">
      <span>
        <i></i>
      </span>
      <span>
        优惠
      </span>
    </div>
    <div class="guideItem" @click="goPath('/search')">
      <span>
        <i></i>
      </span>
      <span>
        发现
      </span>
    </div>
    <div class="guideItem" @click="goPath('/equip')">
      <span>
        <i></i>
      </span>
      <span>
        装备
      </span>
    </div>
    <div class="guideItem" @click="goPath('/profile')">
      <span>
        <i></i>
      </span>
      <span>
        更多
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goPath(path){
        this.$route.path !== path && this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

 
</style>
