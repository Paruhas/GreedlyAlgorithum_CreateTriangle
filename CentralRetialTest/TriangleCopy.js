function draw(n) {
  let triangle = "";

  for (let i = 1; ; i++) {
    if (i == n - 6) {
      continue;
    }
    if (i > n - 2) {
      for (i = 1; i < n; i++) {
        triangle += "x ";
      }
      break;
    }

    for (let j = 1; j <= n; j++) {
      if (j == n - i && i < n - 1) {
        triangle += "x";
      } else {
        if (j == n) {
        } else {
          triangle += " ";
        }
      }
    }
    let j = i;
    while (j - 2 > 0 && i < n - 1) {
      triangle += " ";
      j--;
    }

    j = i;
    while (j - 1 > 0 && i < n - 1) {
      triangle += "x";
      break;
    }

    triangle += "\n";
  }

  console.log(triangle);
}

draw(13);
