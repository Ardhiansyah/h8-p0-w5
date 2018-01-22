function kaliTerusRekursif(angka) {
  if (angka.toString().length == 1) {
  	return angka;
  } else {
  	return kaliTerusRekursif(Number(angka.toString().slice(0, 1)) * kaliTerusRekursif(Number(angka.toString().slice(1))));
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6