let hari = 21;
let bulan = 12;
let tahun = 1945;
let hasil = ``;

switch(bulan) {
  case 1  : { hasil = `${hari} Januari ${tahun}`;
  break; }
  case 2  : { hasil = `${hari} Februari ${tahun}`;
  break; }
  case 3  : { hasil = `${hari} Maret ${tahun}`;
  break;  }
  case 4  : { hasil = `${hari} April ${tahun}`;
  break; }
  case 5  : { hasil = `${hari} Mei ${tahun}`;
  break;  }
  case 6  : { hasil = `${hari} Juni ${tahun}`;
  break;  }
  case 7  : { hasil = `${hari} Juli ${tahun}`;
  break;  }
  case 8  : { hasil = `${hari} Agustus ${tahun}`;
  break;  }
  case 9  : { hasil = `${hari} September ${tahun}`;
  break;  }
  case 10 : { hasil = `${hari} Oktober ${tahun}`;
  break;  }
  case 11 : { hasil = `${hari} November ${tahun}`;
  break;  }
  case 12 : { hasil = `${hari} Desember ${tahun}`;
  break;  }
  default:  { console.log ("tidak ada data");
  break; }

}
console.log(hasil);
