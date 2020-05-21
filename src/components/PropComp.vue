<template>
  <div>
    <p>propA: {{ propA }}</p>
    <p>propB: {{ propB }}</p>
    <p>propC: {{ propC }}</p>
    <p>propD: {{ propD }}</p>
    <p>propDD: {{ propDD }}</p>
    <p>propE: {{ propE }}</p>
    <p>propF: {{ propF }}</p>
    <p>propG: {{ propG }}</p>
    <p>propH: {{ propH }}</p>
  </div>
</template>
<script lang="ts">
interface objType {
  type: string;
}
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class PropCom extends Vue {
  @Prop(Number) readonly propA: number | undefined;
  @Prop({ default: "default value" }) readonly propB!: string;
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined;
  @Prop({ type: Object, default: {} }) propD: any;
  @Prop() propDD?: object;
  @Prop() propE: any;
  @Prop() propF?: string[];
  @Prop() propG?: Array<number>;
  @Prop() propH: any;
}
</script>
