// console.log(1000 % 1000);
// console.log(2000 % 1000);
// console.log(2500 % 1000);

const greedyAlgorithm = (n) => {
  let b1 = 100;
  let b1Count = 0;
  let b5 = 500;
  let b5Count = 0;
  let b10 = 1000;
  let b10Count = 0;

  while (n >= b10) {
    n = n - b10;
    b10Count++;
  }

  while (n >= b5) {
    n = n - b5;
    b5Count++;
  }

  while (n >= b1) {
    n = n - b1;
    b1Count++;
  }

  console.log({
    แบงค์พัน: b10Count,
    แบงค์ห้าร้อย: b5Count,
    แบงค์ร้อย: b1Count,
  });
};

greedyAlgorithm(1000);
