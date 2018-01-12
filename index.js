function theBeatlesPlay(musicians,instruments){
  var pairing = [];
  for (let i = 1; i < musicians.length; i++){
    pairing.push("${i} plays ${i}")
  }
 return pairing 
}