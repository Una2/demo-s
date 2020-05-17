import Vue from 'vue';
import  Component  from 'vue-class-component';

@Component
export default class myMixins extends Vue {
    mixinsValue1:string = 'Hello myMixins1';
}