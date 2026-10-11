const student = {
  name: "Aman",
  normal: function () { console.log("normal:", this.name); },
  arrow: () => { console.log("arrow:", this.name); }
};
student.normal();                     // prediction - Aman
student.arrow();                      // prediction - undefined
const fn = student.normal; fn();      // prediction - undefined