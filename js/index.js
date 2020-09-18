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
      let lastIndexOfAllCups;
      for(let i=index; i<currentBoxPoints+index; i++){
          // i>13 ? i = 0: null;
          const cupNumber = i<13 ? i : i-14;
          lastIndexOfAllCups = cupNumber+1;
          // console.log('index nr: ', cupNumber);
          const cupPoints =  parseInt(allBoxes[cupNumber+1].innerHTML );
          allBoxes[cupNumber+1].innerHTML = cupPoints +1;
          lastCupIndex = i===currentBoxPoints+index-1 ? cupNumber<6 ? cupNumber+1 : cupNumber-6  : null;
          // console.log("last Cup index: ", lastCupIndex);
        };
        getOpositePoints(lastIndexOfAllCups, box, allBoxes);
      // playerOne.checkScore();
      // playerTwo.checkScore();
    })
  ) : null  
})

const getOpositePoints = (lastIndex, selectedElement, eachElements) => {
  const playerOneCups = eachElements.filter(cup => cup.parentNode.classList.contains('One'));
  const playerTwoCups = eachElements.filter(cup => cup.parentNode.classList.contains('Two'));
  const playerOneTurn = selectedElement.parentNode.classList.contains('One');
  const lastCup = eachElements[lastIndex];
  // console.log('last cup is: ', lastCup);
  
  if(playerOneTurn){
      console.log('last cup is: ', lastCup.innerHTML, "and last Index is: ", lastIndex);
    parseInt(lastCup.innerHTML)===1 && lastIndex<6 ? (
      console.log("HI I working ", lastIndex),
      opositeCup = playerTwoCups[5-lastIndex],
      console.log('oposite cup: ',opositeCup),
      opositePoints = parseInt(opositeCup.innerHTML),
      opositeCup.innerHTML = 0,
      playerOneCups[6].innerHTML = opositePoints + parseInt(playerOneCups[6].innerHTML)
      
    ) : null;
  }else{
     // blockEnemy(playerOneCups);
  }
  
  // console.logaasds('player one turn: ', playerOneTurn);
  // console.log('player one cups" ', playerOneCups);
  // if(lastIndex !== 6){
  //   const enemyIndex = 5-lastIndex;
  //   console.log("lastIndex is: ",  lastIndex);
  //   console.log("And oposite index is: ", enemyIndex);
  // };
  // console.log("is box class contains Two? ", selectedElement);
  
};

const blockEnemy = enemyCups => {
  enemyCups.forEach(cup => {
    const new_element = cup.cloneNode(true);
    cup.parentNode.replaceChild(new_element, cup);
    });
}

class Player{
  constructor(scoreWrapper, name){
    this.name = name;
    this.points = 0;
    this.scoreWrapper = scoreWrapper;
    this.scoreWrapper.innerHTML = this.points;
    this.myTurn = false;
    
  }
  checkScore(){
    this.points = parseInt(this.scoreWrapper.innerHTML);
    console.log(`player ${this.name} points: ${this.points}`);
  }
  
}

const playerOne = new Player(playerOnePoints, "PlayerOne");

const playerTwo = new Player(playerTwoPoints, "PlayerTwo");

