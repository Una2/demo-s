import Mock from "mockjs";
const data = Mock.mock({
  list: [{ a: 1 }, { b: 2 }]
});
const obj = Mock.mock({
  test: 1
})
export default {
  data,
  obj
}