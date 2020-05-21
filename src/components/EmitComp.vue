<template>
  <div>
    <button @click="emitEvt">触发父组件方式一</button>
    <button @click="emitEvent">触发父组件方式er</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
@Component
export default class EmitComp extends Vue {
  @Emit() emitEvt() {
    console.log("子组件-emit-evt1");
    return "父emitEvt1";
  }
  @Emit("emit-evt2") emitEvent(): void {
    console.log("子组件-emit-evt2");
  }
}
</script>
