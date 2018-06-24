 
function getRandomNumber( range: number ) : number {
  return Math.floor(Math.random() * Math.floor( range ));
}

function fisherYates( list: any[] ) : any[] {
  let receivedList = list.slice();
  let shuffledList = [];

  while( receivedList.length > 0 ){
    let currentRandomIndex = getRandomNumber(receivedList.length);
    shuffledList.push(receivedList[currentRandomIndex]);
    receivedList.splice(currentRandomIndex, 1);
  }

  return shuffledList;
}

function durstenfeld( list: any[] ) : any[] {
  let receivedList = list;
  for (let i = receivedList.length-1; i > -1; i--){
    let currentRandomIndex = getRandomNumber(list.length);
    while (currentRandomIndex === i){
      currentRandomIndex = getRandomNumber(list.length);
    }
    [list[i],list[currentRandomIndex]] = [list[currentRandomIndex], list[i]]
  }

  return list;
}

export { fisherYates, durstenfeld };
