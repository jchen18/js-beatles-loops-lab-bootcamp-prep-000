function theBeatlesPlay(musicians,instruments){
  var pairing = [];
  for (let i = 1; i < 5; i++){
    var specific_musician = musicians[i];
    var specific_instrument = instruments[i];
    pairing.push("${i} plays ${instruments[i]}")
  }
 return pairing 
}