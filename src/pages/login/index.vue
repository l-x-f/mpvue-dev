<template>
  <div class="container">
    <div class="userinfo" @click="toIndex">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

  </div>
</template>
<script>
import card from "@/components/card";

export default {
  data() {
    return {
      motto: "欢迎来到柚群微信小程序",
      userInfo: {}
    };
  },

  components: {
    card
  },
  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },
  methods: {
    toIndex() {
      const url = "../index/main";
      wx.switchTab({ url });
      console.log("111");
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
              console.log(res, "res");
            }
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

</style>
