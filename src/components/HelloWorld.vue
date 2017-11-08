<template>
  <div class="hello">
    <div class="head-about">
      <div>
        <div class="avatar" :style="{'background-image': `url(${require('../assets/avatar.jpg')})`}"></div>
      </div>  
      <div class="body-about">
        <div>
        <h4>{{ name }}</h4></br>
        <span>{{ profession }}</span>
        </div>
      </div>
    </div>
    
    
      
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      avatarSize: 56,
      avatarScr: '../assets/avatar.jpg',
      avatarStyle: 'background: url("../assets/avatar.jpg") 50% 50% no-repeat;',
      name: 'Петров Алексей',
      profession: 'Frontend Developer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .hello {
    padding: 30px;
    

    .avatar {
      background: 50% 50% no-repeat;
      background-size: cover;
      width: 250px;
      height: 250px;
    }

    .head-about {
      display: flex;
    }
    .body-about {
      padding-left: 30px;

      display: flex;
      align-items: center;

      h4 {
        margin-bottom: 0px;
      }
    }
  }
</style>
