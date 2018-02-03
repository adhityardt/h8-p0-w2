//1. Melakukan Looping Menggunakan while
console.log('LOOPING PERTAMA');
var counter = 2;
var limit = 20;
var increment = 2;
while (counter <= limit){
  console.log(counter + ' - I love coding');
  counter += increment;
}

console.log('LOOPING KEDUA');
counter -= 2;
while (counter >= 0) {
  console.log(counter + ' - I will become fullstack developer');
  counter -= increment;
}

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
var limit = 20;
for(var counter = 1; counter <= limit; counter++){
  console.log(counter + ' - I love coding');
}
console.log('LOOPING KEDUA');
counter--;
for(limit = 1; limit <= counter; counter--){
  console.log(counter + ' - I will become fullstack developer');
}

//3. Angka Ganjil dan Genap
console.log('Menampilkan GANJIL dan GENAP untuk nilai counter');
let limit = 100;
for(let counter = 1; counter <= limit; counter++){
  if(counter%2 === 1){
    console.log('GANJIL');} else {
      console.log('GENAP');
    }
}
console.log('Menampilkan 3 KELIPATAN 3 pada counter');
for(let counter = 1; counter <= limit; counter += 2){
  if(counter%3 === 0){
    console.log('3 KELIPATAN 3');
  } else{console.log(' ');}
}
console.log('Menampilkan 6 KELIPATAN 6 pada counter');
for(let counter = 1; counter <= limit; counter += 5){
  if(counter%6 === 0){
    console.log('6 KELIPATAN 6');
  } else{console.log(' ');}
}
console.log('Menampilkan 10 KELIPATAN 10 pada counter');
for(let counter = 1; counter <= limit; counter += 9){
  if(counter%10 === 0){
    console.log('10 KELIPATAN 10');
  } else{console.log(' ');}
}
