<template>
  <div class="bargain-list">
    <div class="header"></div>
    <div class="list">
      <div
        class="item acea-row row-between-wrapper"
        v-for="(item, index) in bargainLis"
        :key="index"
      >
        <div class="pictrue"><img :src="item.image" /></div>
        <div class="text acea-row row-column-around">
          <div class="line1" v-text="item.title"></div>
          <div class="num">
            <span class="iconfont icon-pintuan"></span
            >{{ item.people }}人正在参与
          </div>
          <div class="money font-color-red">
            可砍至: ￥<span class="price" v-text="item.min_price"></span>
          </div>
        </div>
        <div class="cutBnt bg-color-red" @click="goDetail(item.id)">
          <span class="iconfont icon-kanjia"></span>参与砍价
        </div>
      </div>
      <div class="load font-color-red" v-if="!status" @click="getBargainList">
        点击加载更多
      </div>
    </div>
  </div>
</template>
<script>
import { getBargainList } from "@api/activity";
export default {
  name: "GoodsBargain",
  components: {},
  props: {},
  data: function() {
    return {
      bargainLis: [], //砍价列表
      status: false, //砍价列表是否获取完成 false 未完成 true 完成
      loading: false, //当前接口是否请求完成 false 完成 true 未完成
      page: 1, //页码
      limit: 20 //数量
    };
  },
  mounted: function() {
    this.getBargainList();
  },
  methods: {
    getBargainList: function() {
      var that = this;
      if (that.loading) return;
      if (that.status) return;
      that.loading = true;
      getBargainList({ page: that.page, limit: that.limit }).then(res => {
        that.status = res.data.length < that.limit;
        that.bargainLis.push.apply(that.bargainLis, res.data);
        that.page++;
        that.loading = false;
      });
    },
    goDetail: function(id) {
      this.$router.push({
        path: "/activity/dargain_detail/" + id + "/0"
      });
    }
  }
};
</script>
