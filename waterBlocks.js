var waterBlocks = function (blocks) {
  
  let full = false;
  let tank = [];
  let max = -1;
  let water = 0;
  
  for(let i of blocks) {
    if (i > max)
      max = i;
  }
 
  // build the tank
  for(let i=0; i<blocks.length; i++) {
    tank[i] = Array(max);
    for(let j=0; j<blocks[i]; j++) {
      tank[i][j] = "#";
    }
  }
  
  
//   while(!full) {
    [full,tank, water] = addWater(tank);
    [full,tank, water] = addWater(tank);
//   }

  console.log(tank)
  
  function addWater(tank) {
    lowestY = 10000;
    lowestX = 10000;

    // find lowest
    for(let i=0; i<blocks.length; i++) {
      for(let j=max-1; j>=0; j--)  {
        if(tank[i][j] === undefined) {
          console.log(i,j, lowestX, lowestY)
          if( j < lowestY )
            lowestY = j;
            lowestX = i;
        }
      }
    }

    if( lowestY < max-1) {
      tank[lowestX][lowestY] = '.';
    }

    return [full, tank, water]
  }
  
};

console.log(waterBlocks([5,1,1,1,1,5]))
