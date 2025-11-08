function test() {}

const student = {
  fullname: "Lisova Olena",
  age: 44,
  diploma: ["Econom", "Finance", "Manager"],
  study: () => console.log("I'm STAR"),
  getMyDiploma: () => student.diploma,
};
console.log(student.getMyDiploma());
console.log(student.fullname);
student.study();
