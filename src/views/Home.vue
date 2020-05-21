<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <button @click="propShow = !propShow">打开/关闭prop</button><br />
      <button @click="ModelShow = !ModelShow">打开/关闭model</button><br />
      <button @click="EmitShow = !EmitShow">打开/关闭Emit</button><br />
      <button @click="WatchShow = !WatchShow">打开/关闭Watch</button><br />
    </div>
    <prop-com
      v-if="propShow"
      :propA="propA"
      :propB="propB"
      :propC="propC"
      :propD="propD"
      :propE="propE"
      :propF="propF"
      :propG="propG"
      :propH="propH"
      msg="Welcome to Your Vue.js App"
    />
    <p v-if="ModelShow">
      Model: {{ inputVal }}
      <model-comp v-model="inputVal"></model-comp>
    </p>
    <p v-if="EmitShow">
      <emit-comp @emit-evt="emitEvt" @emit-evt2="emitEvt2"></emit-comp>
    </p>
    <p v-if="WatchShow">
      <watch-comp></watch-comp>
    </p>
    <p>
      vuex:
      <button @click="changeSetTestDataFn">vuex方式一</button>testData---{{ testData }}<br />
      <button @click="changeAuthor">vuex方式二</button>author---{{ author }}
    </p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import propCom from "@/components/PropComp.vue";
import ModelComp from "@/components/ModelComp.vue";
import EmitComp from "@/components/EmitComp.vue";
import WatchComp from "@/components/WatchComp.vue";
import { Component, Vue, Provide } from "vue-property-decorator";
import mockdata from "@/mockdata/mock.js";
interface objType {
  type: string;
}
const testModule = namespace("test")
@Component({
  components: {
    "prop-com": propCom,
    "model-comp": ModelComp,
    "emit-comp": EmitComp,
    "watch-comp": WatchComp
  }
})
export default class Home extends Vue {
  propA: Number = 1;
  propB: string = "B";
  propC: boolean = false;
  propD: objType = { type: "propD" };
  propDD: objType = { type: "propDD" };
  propE: any = "E";
  propF: string[] = ["1", "2"];
  propG: number[] = [1, 2];
  propH: any[] = [1, "2"];
  propShow: boolean = false;
  ModelShow: boolean = false;
  EmitShow: boolean = false;
  WatchShow: boolean = false;
  ProvideInjectShow: boolean = false;
  inputVal: string = "inputValue";
  @Provide() msg: string = "Provide--";
  @testModule.State(state => state.testData) testData!: number;
  @testModule.Mutation("setTestData") setTestData: any;
  @testModule.Action("setTestDataFn") setTestDataSync: any;
  //Getter
  @Getter author;//作者
  //Mutation
  @Mutation SET_AUTHOR;

  mounted() {
    console.log(mockdata, "mockdata");
  }
  emitEvt(val: any) {
    console.log(val, "父emitevt1");
  }
  emitEvt2() {
    console.log("父emitevt2");
  }
  changeSetTestDataFn(){
    let count = this.testData + 1;
    this.setTestDataSync(count);
  }
  changeAuthor() {
    let name = this.author + this.testData;
    this.SET_AUTHOR(name);
  }
}
</script>
