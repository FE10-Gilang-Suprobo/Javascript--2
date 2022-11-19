const makeDiamond = (char) => {
    // your code here
    let words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let row = words.indexOf(char), output = ``,
    col = row * 2 + 1
  
    for(let i = 0; i <= row; i++){
      for(let j = 0; j < col; j++){
        if(j > row - 1 + i && j <= row + i || j <= row - i && j > row-1-i){
          output += `${words[i]}`
        }else{
          output += `·`
        }
      }
      output += `\n`
    }
  
    for(let i = row - 1; i >= 0; i--){
      for(let j = 0; j < col; j++){
        if(j > row - 1 + i && j <= row + i || j <= row - i && j > row-1-i ){
          output += `${words[i]}`
        }else{
          output += `·`
        }
      }
      output += `\n`
    }
  
    return output
    
  };