let nilai = 75;

if (nilai >= 80) {
    console.log("Nilai Anda A");
} else if (nilai >= 70) {
    console.log("Nilai Anda B");
} else if (nilai >= 60) {
    console.log("Nilai Anda C");
} else {
    console.log("Nilai Anda D");
}

let hari = "Kamis";
let aktivitas;

switch (hari) {
    case "Senin":
        aktivitas = "Meeting";
        break;
    case "Selasa":
    case "Rabu":
        aktivitas = "Mengajar";
        break;
    case "Kamis":
        aktivitas = "kerja kelompok";
        break;
    default:
        aktivitas = "Libur";
}
console.log(`Hari ini: ${hari}, Aktivitas: ${aktivitas}`);


for (let i = 1; i <= 5; i++) {
    console.log(`baris ke-${i}`);
}

let counter = 0;
while (counter < 5) {
    console.log(`Perulangan ke-${counter}`);
    counter++;
}

let angka = 1;
do {
    console.log(`Angka: ${angka}`);
    angka++;
} while (angka <= 5);

function tambah(a, b) {
    return a + b;
}

let hasil = tambah(5, 50);
console.log(`Hasil penjumlahan: ${hasil}`);