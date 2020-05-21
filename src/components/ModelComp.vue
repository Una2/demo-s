<template>
  <div>
    <input type="text" :value="inputVal" @input="changed" />
  </div>
</template>
<script lang="ts">
import { Component, Model, Vue } from "vue-property-decorator";
@Component
export default class ModelComp extends Vue {
  @Model("inputValChange", { type: String }) inputVal!: string;
  changed(e: any) {
    this.$emit("inputValChange", e.target.value);
  }
}
</script>
