//Konversi Menit
function konversiMenit(menit) {
  let jam = menit / 60;
  let displayJam = Math.floor(jam);
  let displayMenit1 = jam - displayJam;
  let displayMenit2 = displayMenit1 * 60;
  displayMenit2 = Math.floor(displayMenit2);
  if(menit > 60 && displayMenit2 < 10){
    console.log(`${displayJam}:0${displayMenit2}`);
  } else if (menit > 60 && displayMenit2 >= 10){
    console.log(`${displayJam}:${displayMenit2}`);
  } else if (menit < 60 && displayMenit2 >= 10) {
    console.log(`00:${displayMenit2}`);
  } else {
    console.log(`00:0${displayMenit2}`);
  }
  return;
}
konversiMenit(100); // output 1:40
/* untuk menjalankan function tidak perlu mengetikkan
console.log, sehingga lebih efisien dan mudah */
