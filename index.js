function theBeatlesPlay(musicians,instruments){
  var pairing = [];
  for (let i = 0; i < musicians.length; i++){
    var specific_musician = alert(musicians[i])
    var specific_instrument = alert(instruments[i])
    pairing.push("${specific_musician} plays ${specific_instrument}")
  }
 return pairing 
}