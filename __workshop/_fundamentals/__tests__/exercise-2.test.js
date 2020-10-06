const { avgAge, people } = require("../exercise-2");

test("Exercise 2", () => {
  expect(avgAge(people)).toBe(31);
  expect(
    avgAge([
      { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 36 },
      { name: { first: "Ben", last: "Bitdiddle" }, age: 54 },
      { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 80 },
      { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 11 },
      { name: { first: "Louis", last: "Reasoner" }, age: 44 },
      { name: { first: "Shahan", middle: "Haig", last: "Krakirian" }, age: 22 },
    ])
  ).toBe(41);
});
