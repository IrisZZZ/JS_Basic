function decode(message) {
    let result = "";
    let y = 0;
    let isDown = true;
    if(message.length == 0){
      return result;
    }
    for(let i = 0; i< message[0].length; i++){
      if(isDown && y < message.length-1){
        result += message[y][i];
        y++;
        console.log(y);

      }else if(isDown && y == message.length-1){
        isDown = false;
        result += message[y][i];
        y--;
      }else if(!isDown && y > 0){
        result += message[y][i];
        y--
      }else if(!isDown && y == 0){
        isDown = true;
        result += message[y][i];
        y++;
  
      }
    }
    console.log(result);
    return result;
    // your code here
  }



  decode([['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D'] 
])