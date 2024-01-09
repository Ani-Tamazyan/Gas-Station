function GasStation(strArr) {
    const N = strArr[0];
    let all = 0;
    let current = 0;
    let startStation = 0;
  
    for (let i = 1; i <= N; i++) {
      const [g, c] = strArr[i].split(':').map(Number);
      all += g - c;
      current += g - c;
  
      if (current < 0) {
        startStation = i;
        current = 0;
      }
    }
  
    console.log(all >= 0 ? startStation + 1 : 'impossible');
  }

GasStation(["4", "2:2", "1:2", "3:1", "0:1"]);