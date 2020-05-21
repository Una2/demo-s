<template>
  <div id="app">
    <router-link to="/" exact>Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      tel="111"
      propC="propc"
      propD1="propD1"
      @btnClick="handleBtnClick"
    /> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from "./components/HelloWorld.vue";

// @Component({
// 	components: {
// 		HelloWorld,
// 	},
// })
export default class App extends Vue {
  handleBtnClick(payload: any): void {
    console.log(payload, "payload");
  }
  mounted() {
    // class Student {
    // 	fullName: string;
    // 	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    // 		this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    // 	}
    // }
    // interface Person {
    // 	firstName: string;
    // 	lastName: string;
    // }
    // function greeter(person: Person) {
    // 	console.log(person, 'person');
    // 	return 'Hello, ' + person.firstName + ' ' + person.lastName + 'fullName' + person.fullName;
    // }
    // let user = new Student('Jane', 'M.', 'User');
    // // console.log(user, 'user');
    // // console.log(greeter(user), 'greeter(user)');
    // // document.body.innerHTML = greeter(user);
    // class Person {
    // 	protected name: string;
    // 	constructor(name: string) {
    // 		this.name = name;
    // 	}
    // }
    // class Employee extends Person {
    // 	private department: string;
    // 	constructor(name: string, department: string) {
    // 		super(name);
    // 		this.department = department;
    // 	}
    // 	public getElevatorPitch() {
    // 		return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    // 	}
    // }
    // let howard = new Employee('Howard', 'Sales');
    // console.log(howard.getElevatorPitch());
    // console.log(howard.name, 'name');
    // // console.log(howard.department, 'department');
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
