//Konversi Menit
function konversiMenit(menit) {
  let jam = menit / 60;
  let displayJam = Math.floor(jam);
  let displayMenit1 = jam - displayJam;
  let displayMenit2 = displayMenit1 * 60;
  displayMenit2 = Math.floor(displayMenit2);
  let displayAkhir = ``;
  if(menit > 60 && displayMenit2 < 10){
    displayAkhir = `${displayJam}:0${displayMenit2}`;
  } else if (menit > 60 && displayMenit2 >= 10){
    displayAkhir = `${displayJam}:${displayMenit2}`;
  } else if (menit < 60 && displayMenit2 >= 10) {
    displayAkhir = `0:${displayMenit2}`;
  } else {
    displayAkhir = `0:0${displayMenit2}`;
  }
  return displayAkhir;
}
console.log(konversiMenit(100));
