//             x
//            x x
//           x   x
//          x     x
//         x       x
//        x         x
//       x           x
//      x             x
//     x               x
//    x                 x
//   x                   x
//  x                     x
// x x x x x x x x x x x x x

//             x
//           x   x
//          x     x
//         x       x
//        x         x
//       x           x
//     x               x
//    x                 x
//   x                   x
//  x                     x
// x x x x x x x x x x x x x

// const drawTriangle = (n) => {
//   let draw = "";

//   if (n % 2 === 0) {
//     nn = n + 1;
//   } else {
//     nn = n;
//   }

//   for (let x = 1; x <= n; x++) {
//     for (let y = 1; y <= nn; y++) {
//       if (x === nn) {
//         draw = draw + "X";
//       } else if (x === n) {
//         draw = draw + "X";
//       }
//     }
//     draw = draw + "\n";
//   }
//   console.log(draw);
// };

// drawTriangle(3);

// const drawTriangle = (n) => {
//   for (let x = 1; x <= n; x++) {
//     let draw = "";
//     let X = "X ";
//     let space = " ";

//     for (let y = 1; y <= n; y++) {
//       if (y - x > n - 2 * x) {
//         draw = draw + X;
//       } else {
//         draw = draw + space;
//       }
//     }

//     console.log(draw);
//   }
// };

// drawTriangle(4);

const drawTriangle = (n) => {
  for (let x = 1; x <= n; x++) {
    let draw = "";
    let X = "X ";
    let space = "  ";

    // for (let y = 1; y <= n; y++) {
    //   if (y - x > n - 2 * x) {
    //     draw = draw + X;
    //   } else {
    //     draw = draw + space;
    //   }
    // }

    // ปีกซ้าย
    for (let y = 1; y < n; y++) {
      if (y - x > n - 2 * x && y + x === n + 1 && x !== n) {
        draw = draw + X;
      } else if (x === n) {
        draw = draw + X;
      } else {
        draw = draw + space;
      }
    }

    // ตรงกลาง
    for (let z = 1; z < n; z++) {
      if (z === 1) {
        if (x === 1 || x === n) {
          draw = draw + X;
        } else {
          draw = draw + space;
        }
      }
    }

    // ปีกขวา
    for (let y = 1; y < n; y++) {
      if (x > 1 && x - y === 1) {
        draw = draw + X;
      } else if (x === n) {
        draw = draw + X;
      } else {
        draw = draw + space;
      }
    }

    // if (x !== 2 && x !== 8) {
    console.log(draw);
    // }
  }
};

drawTriangle(13);
