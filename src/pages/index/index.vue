<template>
  <div>
    <swiper :autoplay="true" class="swiper-box" :circular='true' :indicator-dots='true' indicator-active-color='#f4d020'>
      <div class="swiper-item">
        <swiper-item>
          <image src="https://xiaofei-1252186245.cos.ap-chengdu.myqcloud.com/my-project/event-b1.png" class="slide-image" />
        </swiper-item>
      </div>
      <div class="swiperitem">
        <swiper-item>
          <image src="https://xiaofei-1252186245.cos.ap-chengdu.myqcloud.com/my-project/event-b2.png" class="slide-image" />
        </swiper-item>
      </div>
    </swiper>
    <ul class="list-wrap">
      <li class="list-item" v-for="(value,index) in data" :key="index">
        <div class="img-box">
          <img :src="'https://elm.cangdu.org/img/' + value.image_path">
        </div>
        <div class="content-box">
          <h4>{{value.category}}</h4>
          <p>{{value.address}}</p>
          <p>
            <span>时间：2018-05-06 15:25</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import card from "@/components/card";
import Fly from "flyio/dist/npm/wx";
import IndexServer from "../../api/index.js";

export default {
  data() {
    return {
      userInfo: {},
      data: [],
      listData: []
    };
  },
  components: {
    card
  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getList();
  },

  methods: {
    getList() {
      // 调用登录接口http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762
      let fly = new Fly();
      //通过用户id获取信息,参数直接写在url中
      let that = this;
      fly
        .get(
          "http://cangdu.org:8001/shopping/restaurants?latitude=31.22967&longitude=121.4762"
        )
        .then(function(response) {
          console.log(response.data);
          that.data = response.data;
          console.log(that.data);
        })
        .catch(function(error) {
          console.log(error);
        });

      // IndexServer.getList()
      //   .then(res => {
      //     console.log(res, "IndexServer");
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  },
  watch: {
    listData: function(val) {
      this.data = val;
      console.log(val, "val");
    }
  }
};
</script>

<style lang='less'>
.swiper-box {
  width: 100vw;
  .swiper {
    width: 100vw;
    text-align: center;
  }
  .slide-image {
    width: 100%;
    height: 300rpx;
  }
}

.list-wrap {
  width: 100%;
  font-size: 14px;

  .list-item {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    .img-box {
      width: 120px;
      padding: 0 10px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 75px;
      }
    }
    .content-box {
      flex: 1;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
}
</style>
