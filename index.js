function GasStation(strArr) {
    const N = strArr[0];
    let totalGas = 0;
    let currentGas = 0;
    let startStation = 0;
  
    for (let i = 1; i <= N; i++) {
      const [g, c] = strArr[i].split(':').map(Number);
      totalGas += g - c;
      currentGas += g - c;
      console.log(totalGas, currentGas)
  
      if (currentGas < 0) {
        startStation = i;
        currentGas = 0;
      }
    }
  
    console.log(totalGas >= 0 ? startStation + 1 : 'impossible');
  }

GasStation(["4", "2:2", "1:2", "3:1", "0:1"]);