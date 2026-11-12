function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function hitung() {
  var harga = Number(document.getElementById("paket").value);
  var jumlah = Number(document.getElementById("jumlah").value);
  var promo = document.getElementById("promo").value.trim().toUpperCase();
  var hasil = document.getElementById("hasil");

  if (jumlah < 1) {
    hasil.innerHTML = "Jumlah peserta minimal 1.";
    return;
  }

  // SE 1: harga x jumlah
  var hargaAwal = harga * jumlah;

  // SE 2: cek diskon
  var diskon = 0;
  var keterangan = "";

  if (promo === "MAHASISWA10") {
    diskon = hargaAwal * 0.1;
    keterangan = "Kode promo MAHASISWA10 dipakai (diskon 10%)";
  } else if (jumlah >= 3) {
    diskon = hargaAwal * 0.1;
    keterangan = "Diskon pendaftaran kolektif (min. 3 peserta)";
  } else if (promo !== "") {
    keterangan = "Kode promo tidak valid";
  } else {
    keterangan = "Tidak ada diskon";
  }

  var total = hargaAwal - diskon;

  hasil.innerHTML =
    "<p>Harga awal: " + formatRupiah(hargaAwal) + "</p>" +
    "<p>Potongan diskon: " + formatRupiah(diskon) + "</p>" +
    "<p><b>Total bayar: " + formatRupiah(total) + "</b></p>" +
    "<p><i>" + keterangan + "</i></p>";
}
