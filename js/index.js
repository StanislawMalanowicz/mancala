let boxesOne = document.querySelectorAll('.One > div');
let boxesTwo = document.querySelectorAll('.Two > div');
let allBoxes = [...boxesOne, ...boxesTwo];
const playerTwoPoints = document.querySelector('.Two > .point');
const playerOnePoints = document.querySelector('.One > .point');
const activeBoxes = document.querySelectorAll('.box');

// console.log(activeBoxes)
let currentBoxPoints;
const lastIndex = 13;

const click = (element, index) => {
  console.log('click', element," and ", index);
  currentBoxPoints = parseInt(element.innerHTML);
  element.innerHTML = 0;
  console.log('points: ',currentBoxPoints);
}

allBoxes.forEach((box, index) =>{
  
  box.className !== "point" ?   (
    box.innerHTML = 4,
    box.addEventListener('click', () => {
      click(box, index);
      console.log('current points: ', currentBoxPoints);
      for(let i = index; i < currentBoxPoints+index; i++){
          // i>13 ? i = 0: null;
          console.log('index nr: ', i);
          const cup =  parseInt(allBoxes[i+1].innerHTML );
          allBoxes[i+1].innerHTML = cup +1;
          
        };  
    })
  ) : null
    


})

class Player{
  constructor(scoreWrapper){
    this.points = 0;
    this.scoreWrapper = scoreWrapper;
    this.scoreWrapper.innerHTML = this.points;
    
  }
  
}

const playerOne = new Player(playerOnePoints);

const playerTwo = new Player(playerTwoPoints);







// allBoxes.forEach((cup, index) => {
//     1
//     if (cup.className !== 'point') {
//         let limit = 14;
//         cup.addEventListener('click', function () {
//             let cupPoints = Number(this.innerText);
//             let count = index + 1;
//             this.innerText = 0;
//             for (let i = 0; i < cupPoints; i++) {
//                 if (count < limit) {
//                     var otherCupPoints = Number(allBoxes[count].innerText);
//                     allBoxes[count].innerText = otherCupPoints + 1;
//                     count += 1;
//                 } else {
//                     count = 0;
//                     var otherCupPoints = Number(allBoxes[count].innerText);
//                     allBoxes[count].innerText = otherCupPoints + 1;
//                     count += 1;
//                 }

//             }
//             let currentCup = allBoxes[count - 1].innerText;
//             if (currentCup == 1 && allBoxes[count - 1].className !== 'point') {
//                 allBoxes[count - 1].innerText = 0;
//                 let plOnePts = Number(playerOnePoints.innerText);
//                 playerOnePoints.innerText = plOnePts + 1;
//             }
//         })
//     }
// })