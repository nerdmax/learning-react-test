// Prototype
// function PrototypeTest() {
//   this.prototypeFnTest = function() {
//     console.log("sdkljflsdjfljsdlfj");
//   };
// }

// PrototypeTest.prototype.prototypeFnTest = function() {
//   console.log("1111111111");
// };

// var prototypeTest = new PrototypeTest();

// console.log(prototypeTest);
// prototypeTest.prototypeFnTest();

// Array.map
// function editName(originalName, newName, list) {
//   return list.map(
//     item => (item.name === originalName ? { ...item, name: newName } : item)
//   );
// }

// const schools = [
//   {
//     name: "Yorktown"
//   },
//   {
//     name: "Stratford"
//   },
//   {
//     name: "Washington & Lee"
//   },
//   {
//     name: "Wakefield"
//   }
// ];

// console.log(editName("Stratford", "test", schools));

// count down function
function countdown(value, fn, delay = 1000) {
  fn(value);
  return value > 0
    ? setTimeout(() => {
      countdown(value - 1, fn);
    }, delay)
    : value;
}

countdown(10, (value) => {
  console.log(value);
});
