function pesan(namaProduk) {

    // Nomor WhatsApp toko
    let nomor = "6285836617726";

    // Pesan otomatis
    let teks = "Halo LIVRA! Saya ingin memesan "
               + namaProduk;

    // Link WhatsApp
    let link = "https://wa.me/" + nomor
               + "?text=" + encodeURIComponent(teks);

    // Buka WhatsApp
    window.location.href = link;

}