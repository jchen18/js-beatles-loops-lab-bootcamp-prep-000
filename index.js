function theBeatlesPlay(musicians,instruments){
  var pairing = [];
  for (var i = 0; i < musicians.length; i++){
    pairing.push(`${musicians[i]} plays ${instruments[i]}`)
  }
 return pairing 
}

function johnLennonFacts(facts){
  var length = facts.length
  var i = 0
  while (length > 0){
    facts.push(`${facts[i]} + !!!`)
    i = i + 1
  }
  return facts
}