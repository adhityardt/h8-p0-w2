let nama = 'Adhit';
let peran = 'Penyihir';
let peran1 = '';

if (nama === '') {
  console.log('Nama harus diisi!');
} else {
  if (peran === 'Ksatria') {
    peran1 = peran;
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran1} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
  } else if (peran === 'Tabib'){
    peran1 = peran;
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran1} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
  } else if (peran === 'Penyihir') {
    peran1 = peran;
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran1} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
  } else { console.log('Isi peran anda! pilih antara Ksatria, Tabib, atau Penyihir');}
}
