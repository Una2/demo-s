<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
// 引入
import  Component, {mixins}  from 'vue-class-component';
import myMixins from '../mixins/mixins1';

@Component
export default class About extends mixins(myMixins) {
  created() {
    // console.log(this.value); // => Hello
  }
}
</script>