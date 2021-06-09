// console.log(1000 % 1000);
// console.log(2000 % 1000);
// console.log(2500 % 1000);

const greedyAlgorithm = (x) => {
  let b1 = 100;
  let b1Count = 0;
  let b1Limit = 0;
  let b5 = 500;
  let b5Count = 0;
  let b5Limit = 2;
  let b10 = 1000;
  let b10Count = 0;
  let b10Limit = 1;

  let moneyUserWanted = x;

  if (moneyUserWanted > b1 * b1Limit + b5 * b5Limit + b10 * b10Limit) {
    return console.log({ error: "จำนวนธนบัตรในตู้ไม่พอ" });
  }

  while (moneyUserWanted >= b10 && b10Limit !== 0) {
    moneyUserWanted = moneyUserWanted - b10;
    b10Limit = b10Limit - 1;
    b10Count++;
  }

  while (moneyUserWanted >= b5 && b5Limit !== 0) {
    moneyUserWanted = moneyUserWanted - b5;
    b5Limit = b5Limit - 1;
    b5Count++;
  }

  while (moneyUserWanted >= b1 && b1Limit !== 0) {
    moneyUserWanted = moneyUserWanted - b1;
    b1Limit = b1Limit - 1;
    b1Count++;
  }

  // console.log(b10Count * b10);
  // console.log(b5Count * b5);
  // console.log(b1Count * b1);
  // console.log(b10Count * b10 + b5Count * b5 + b1Count * b1);
  // console.log(x);

  if (b10Count * b10 + b5Count * b5 + b1Count * b1 !== x) {
    return console.log({ error: "จำนวนธนบัตรในตู้ ไม่ตรงกับที่ต้องการ" });
  }

  return console.log({
    แบงค์พัน: b10Count,
    แบงค์ห้าร้อย: b5Count,
    แบงค์ร้อย: b1Count,
  });
};

greedyAlgorithm(1000);
