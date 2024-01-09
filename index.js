// 1. tarberak

// function GasStation(strArr) {
//     const N = strArr[0];
//     let all = 0;
//     let current = 0;
//     let startStation = 0;
  
//     for (let i = 1; i <= N; i++) {
//       const [g, c] = strArr[i].split(':').map(Number);

//       let diffrence = g - c;
//       all += diffrence;
//       current += diffrence;
  
//       if (current < 0) {
//         startStation = i; 
//         current = 0;
//       }
//     }
  
//     console.log(all >= 0 ? startStation + 1 : 'impossible');
//   }

// GasStation(["4", "2:2", "2:5", "3:1", "0:1"]);



//2. tarberak (error e talis spliti hamar)


// function GasStation(strArr) {
//     const N = strArr[0];
  
//     for (let startStation = 1; startStation <= N; startStation++) {
//       let all = 0;
//       let current = 0;
  
//       for (let i = startStation; i < startStation + N; i++) { 
//         console.log(strArr[i].split(':'))    
//         let [g, c] = strArr[i].split(':').map(Number);

//         all += g - c;
//         current += g - c;
  
//         if (current < 0) {
//           break;
//         }
//       }
  
//       if (all >= 0) {
//         console.log (startStation);
//         return;
//       }
//     }
  
//     console.log ('impossible');
//   }

//  GasStation(["4", "0:1", "2:2", "1:2", "3:1"]);


// 3. tarberak

 function GasStation(strArr) {
    const N = strArr[0];
  
    for (let start = 1; start <= N; start++) {
      let gas = 0;
  
      for (let i = 0; i < N; i++) {
        const station = (start + i - 1) % N + 1; // stationi index
        const [g, c] = strArr[station].split(":");
        gas += g - c;
  
        if (gas < 0) {
          break;
        }
      }
  
      if (gas >= 0) {
        console.log (start);
        return
      }
    }
  
    console.log("impossible");
  }

GasStation(["4", "0:1", "2:2", "3:1", "1:2"]);





