<template>
  <div>
    <button @click="plu">count加1</button>
    <button @click="plu1">obj.count加1</button>
    <p>count:{{ count }}</p>
    <p>obj.count:{{ obj.count }}</p>
    <p>{{ msg }}----Inject</p>
 </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Inject} from "vue-property-decorator";
@Component
export default class WatchComp extends Vue {
  count: number = 1;
  obj: any = { count: 1 };
  @Inject() readonly msg!: string;
  @Watch("count")
  countChange(newVal: any, oldVal: any) {
    console.log(newVal, oldVal, "count");
  }
  @Watch("obj", { deep: true })
  countChange1(newVal: any, oldVal: any) {
    console.log(newVal, oldVal, "obj");
  }
  plu() {
    this.count++;
  }
  plu1(){
    this.obj.count++;
  }
}
</script>
