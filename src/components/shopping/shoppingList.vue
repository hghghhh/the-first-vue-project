<template>
  <div class="shopping-container">
    <div class="shopitem">
      <img src="../../images/图1.jpg" alt />
      <h1>Redmi Note7 满血骁龙660 小米 红米</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥4399</span>
          <span class="last">￥5699</span>
        </p>
        <p class="message">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="shopitem">
      <img src="../../images/图1.jpg" alt />
      <h1>Redmi Note7 满血骁龙660 小米 红米</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥4399</span>
          <span class="last">￥5699</span>
        </p>
        <p class="message">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="shopitem">
      <img src="../../images/图1.jpg" alt />
      <h1>Redmi Note7 满血骁龙660 小米 红米</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥4399</span>
          <span class="last">￥5699</span>
        </p>
        <p class="message">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
.shopping-container {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .shopitem {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    h1 {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p{
          margin: 0;
          padding: 5px;
      }
      .price {
        .now {
          font-size: 16px;
          font-weight: bold;
          color: red;
        }
        .last {
          font-size: 12px;
          text-decoration: line-through;
          margin-left: 10px;
        }
      }
      .message {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
      }
    }
  }
}
</style>