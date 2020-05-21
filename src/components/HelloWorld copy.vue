<template>
  <div class="hello">
    <p>{{ name }}{{ age }}{{ isMarried }}</p>
    <p>{{ cName }}</p>
    <p>{{ propC }}</p>
    <p>{{ propD }}</p>
    <h1>{{ msg }},{{ tel }}</h1>
    <p>count:{{ count }}</p>
    <button @click="handleClick">count++</button>
    <p>count1:{{ count1 }}</p>
    <button @click="handleClick1">count1++</button>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import {
  Component,
  Prop,
  PropSync,
  Vue,
  Watch,
  Emit
} from "vue-property-decorator";
import myMixins from "../mixins/mixins";
import myMixins1 from "../mixins/mixins1";

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters: number = 200) {
    console.log("Horse。。。。");
    super.move(distanceInMeters);
  }
}

@Component({
  mixins: [myMixins]
})
export default class HelloWorld extends mixins(myMixins1) {
  @Prop() msg!: string;
  @Prop({ default: "default value" }) tel!: string;
  @Prop([String, Boolean]) propC!: string | boolean;

  // @Prop()
  // propD!: Object;
  @PropSync("propD1", { type: String, default: "propd" }) propD!: string;

  age: number = 22;
  name: string = "jerry";
  isMarried: boolean = false;
  list1: number[] = [1, 2, 3, 4];
  list2: Array<number> = [1, 2, 1, 2];
  list4: Array<string> = ["1", "2", "3"];
  list3: any[] = [1, 2, "3", { a: 1 }];
  count: number = 0;
  count1: number = 0;

  @Emit("btnClick")
  handleClick1() {
    return this.count1++;
  }
  @Watch("count")
  getCount(newValue: string, oldVal: string) {
    // console.log(newValue, oldVal, 'newval-oldval');
  }
  @Watch("count1")
  getCount1(newValue: string, oldVal: string) {
    // console.log(newValue, oldVal, 'newval-oldval');
  }
  // eslint-disable-next-line prettier/prettier
  get cName() {
    return this.name + "123";
  }
  created() {
    console.log(11111);
    // console.log(this.mixinsValue,'mixinsValue')a
    console.log(this.mixinsValue1, "mixinsValue1");
    console.log(22222);
  }
  mounted(): void {
    // console.log(this.msg,'msg')
    // let sam = new Snake("Sammy the Python");
    // let horse = new Horse('horseTom')
    // sam.move();
    // horse.move(200)
  }
  handleClick() {
    // console.log('handleclick');
    this.count++;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
