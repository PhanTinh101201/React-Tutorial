import React from "react";
import Loading from "./loading";

export default function DemoJavaScript() {
  // lọc các phần tử trùng nhau trong mãng;
  // array default
  const arrayduplicate = [1, 1, 2, 3, 5, 5, 1];
  // new array
  const removedulicate = [...new Set(arrayduplicate)];
  console.log("removeDuplicateForArray", removedulicate);

  const random_numbers = [13, 2, 37, 18, 5];
  const more_random_numbers = [0, -1, 30, 22];

  const isPositive = (number) => {
    return number > 0;
  };

  const two = random_numbers.every((item) => {
    return item > 0;
  }); // returns true

  const one = more_random_numbers.every(isPositive); // returns false
  console.log(one);
  console.log(two);

  //every nếu tất cả các phần tử thỏa mảng điều kiện thì return true

  const obj1 = {
    key: 1,
    name: "Tình",
  };

  const obj2 = {
    key1: 2,
    name1: "Phan",
  };

  console.log(Object.assign(obj1, obj2));

  return <Loading />;
}
