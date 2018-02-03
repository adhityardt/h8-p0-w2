//Bandingkan Angka
function bandingkanAngka (num1, num2){
  if(num2 > num1){
    console.log('true');
  } else if (num1 === num2) {
    console.log('-1');
  } else {
    console.log('false');
  }
  return;
}

console.log(bandingkanAngka(5, 8));
