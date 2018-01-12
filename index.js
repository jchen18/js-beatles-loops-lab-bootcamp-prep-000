function theBeatlesPlay(musicians,instruments){
  var pairing = [];
  for (var i = 0; i < musicians.length; i++){
    pairing.push("${musicians[i]} plays ${instruments[i]}")
  }
 return pairing 
}

function johnLennonFacts(facts){
  var length = facts.length
  while (length > 0){
    facts.push("${fact[i]} + !!!")
  }
}