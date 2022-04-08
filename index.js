const headquarters = 42;

const feet = 264;


 function distanceFromHqInBlocks(num) {
     if(num > 42){
       return num - headquarters;
     } else if (num < 42) {
       return headquarters - num;
     }
    };

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
};


function distanceTravelledInFeet(headquarters, num2) {
    if (num2 > headquarters){
      return (num2 - headquarters)*feet;
    } else {
      return (headquarters - num2)*feet; 
  }
};

function calculatesFarePrice(start, destination) {
   const num2 = Math.abs(start - destination) * 264;
    if(num2 <= 400) {
      return 0;
   } else if (num2 > 400 && num2 <= 2000) {
     return (num2 - 400) * .02;
   } else if (num2 > 2000 && num2 <= 2500) {
     return 25;
   } else if (num2 > 2500) {
  return 'cannot travel that far';
}
};






