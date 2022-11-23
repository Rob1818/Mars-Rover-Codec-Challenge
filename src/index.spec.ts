import { run } from ".";

// Single Rover Test: Test case from codex

test("When executing a single rover program", () => {
  const program = ["5 5", "1 1 N", "FFRFLFLF"];
  expect(run(program)).toEqual(["1 4 W"]);
});

// Multi Rover Test

test("When executing multi rover program", () => {
  const program = ["5 5", "1 1 N", "F", "1 1 N", "FF"];
  expect(run(program)).toEqual(["1 2 N", "1 3 N"]);
});

// Plateau boundary tests

// West

test("When moving west of the edge of the grid", () => {
  const program = ["0 0", "0 0 W", "F"];
  expect(run(program)).toEqual(["F 0 0 W"]);
});

// South

test("When moving south of the edge of the grid", () => {
  const program = ["0 0", "0 0 S", "F"];
  expect(run(program)).toEqual(["F 0 0 S"]);
});

// North
test("When moving north of the edge of the grid", () => {
  const program = ["0 0", "0 0 N", "F"];
  expect(run(program)).toEqual(["F 0 0 N"]);
});

// East
test("When moving east of the edge of the grid", () => {
  const program = ["0 0", "0 0 E", "F"];
  expect(run(program)).toEqual(["F 0 0 E"]);
});
