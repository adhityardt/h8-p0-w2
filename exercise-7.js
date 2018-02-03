//1. Menyusun Barisan bintang
let rows1 = 5;
let counter = 0;
while(counter < rows1){
  console.log('*');
  counter++;
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
let counter1 = 0;
let jumlahBintang = 5;
while(counter1 < jumlahBintang){
  let counter2 = 0;
  let bintang = '';
  while(counter2 < jumlahBintang){
    bintang += '*';
    counter2++;
  }
  console.log(bintang);
  counter1++;
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
let counterLuar = 0;
let jumlahBaris = 5;
while (counterLuar < jumlahBaris) {
  let bintang = '';
  let spasi = '';
  let counterSpasi = jumlahBaris - counterLuar - 1 ;
  while (counterSpasi > 0) {
    spasi += '';
    counterSpasi --;
  }
  let counterBintang = 0;
  while (counterBintang <= counterLuar) {
    bintang += '*';
    counterBintang++;
  }
  console.log(spasi + bintang);
  counterLuar++;
}
