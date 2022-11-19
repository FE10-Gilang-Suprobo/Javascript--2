const cetakTablePerkalian = (number) => {
    // your code here
    let results = ``
  
    for(let i= 1; i <= number; i++){
      results += '\n'
      for(let j =1; j <= number; j++){
        let kali = (i * j).toString()
        console.log(kali)
        if(kali.length == 2){
          results += `${kali} `
        }else if(kali.length === 1){
          results += `${kali}  `
        }
      }
    }
  
    return results
  };
  
  
  console.log(cetakTablePerkalian(9))