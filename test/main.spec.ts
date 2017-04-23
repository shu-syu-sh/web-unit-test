import { test } from "ava";
import average from "../src/main";

test("要素がn個", t => {
  // prepare
  const list = [1, 2, 3, 4, 5];
  const expected = 3;

  // test
  const actual = average(list);

  // check
  t.is(actual, expected);
});

test("要素が一つ", t => {
  // prepare
  const list = [5];
  const expected = 5;

  // test
  const actual = average(list);

  // check
  t.is(actual, expected);
});

test("リストが空", t => {
  // prepare
  const list: number[] = [];
  const expected = null;

  // test
  const actual = average(list);

  // check
  t.is(actual, expected);
});
