//Balik Kata 
function balikKata(kata) {
  let splitKata = kata.split('');
  let reverseKata = splitKata.reverse();
  return joinKata = reverseKata.join('');
}
console.log(balikKata('Hello'));
