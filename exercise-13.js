//Logic Challenge - X dan O
function xo(str) {
  let counter = 0;
  let panjangString = str.length;
  let hurufX = 'x';
  let hurufO = 'o';
  let counterX = 0;
  let counterO = 0;
  let result;
  while (counter < panjangString) {
    if (str[counter] === hurufX) {
      counterX++;
    }else if (str[counter] === hurufO) {
      counterO++;
    }
    counter++;
  }
  if (counterO === counterX){
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(xo('xxo'));
