function sum() {
    var number = [];
    while (true) {
      var value = prompt("Timur write number", 0);
      if (value === "" ||  value === null ||  !isFinite(value)) break;
      number.push(+value);
    }
    var sum = 0;
    for (var numbers of number) { sum += numbers; } return sum;
  }
  
  alert(sum());