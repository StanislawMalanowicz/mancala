let boxesOne = document.querySelectorAll('.One > div');
let boxesTwo = document.querySelectorAll('.Two > div');
let allBoxes = [...boxesOne, ...boxesTwo];
const playerTwoPoints = document.querySelector('.Two > .point');
const playerOnePoints = document.querySelector('.One > .point');
const activeBoxes = document.querySelectorAll('.box');

// console.log(activeBoxes)
let currentBoxPoints;
// const lastIndex = 13;

const click = (element, index) => {
  // console.log('click', element," and ", index);
  currentBoxPoints = parseInt(element.innerHTML);
  element.innerHTML = 0;
  // console.log('points: ',currentBoxPoints);
}

allBoxes.forEach((box, index) =>{
  
  box.className !== "point" ?   (
    box.innerHTML = 4,
    box.addEventListener('click', () => {
      click(box, index);
      // console.log('current points: ', currentBoxPoints);
      let lastCupIndex;
      for(let i=index; i<currentBoxPoints+index; i++){
          // i>13 ? i = 0: null;
          const cupNumber = i<13 ? i : i-14;
          // console.log('index nr: ', cupNumber);
          const cupPoints =  parseInt(allBoxes[cupNumber+1].innerHTML );
          allBoxes[cupNumber+1].innerHTML = cupPoints +1;
          lastCupIndex = i===currentBoxPoints+index-1 ? cupNumber < 6 ? cupNumber+1 : cupNumber-6  : null;
          // console.log("last Cup index: ", lastCupIndex);
        };
        getOpositePoints(lastCupIndex, box, allBoxes);
      // playerOne.checkScore();
      // playerTwo.checkScore();
    })
  ) : null  
})

const getOpositePoints = (lastIndex, selectedElement, eachElements) => {
  if(lastIndex !== 6){
    const enemyIndex = 5 - lastIndex;
    console.log("lastIndex is: ",  lastIndex);
    console.log("And oposite index is: ", enemyIndex);
  };
  console.log("is box class contains Two? ", selectedElement.parentNode.classList.contains("Two"));
    
};

class Player{
  constructor(scoreWrapper, name){
    this.name = name;
    this.points = 0;
    this.scoreWrapper = scoreWrapper;
    this.scoreWrapper.innerHTML = this.points;
    this.gameOver = false;
    
  }
  checkScore(){
    this.points = parseInt(this.scoreWrapper.innerHTML);
    console.log(`player ${this.name} points: ${this.points}`);
  }
  
}

const playerOne = new Player(playerOnePoints, "PlayerOne");

const playerTwo = new Player(playerTwoPoints, "PlayerTwo");







