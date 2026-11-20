/* =========================================================
   KONFIGURASI UNDANGAN PERNIKAHAN
   Ubah nilai di bawah ini saja. Tidak perlu menyentuh file lain.
   Nilai yang masih memakai tanda [ ] adalah placeholder.
   ========================================================= */

window.WEDDING = {
  /* Tanggal dan jam acara. Format ISO dengan zona waktu +07:00 (WIB).
     Dipakai untuk hitungan mundur dan tombol Simpan Tanggal. */
  dateISO: "2026-12-03T08:30:00+07:00",
  calendarEndISO: "2026-12-03T15:00:00+07:00",

  /* Teks tanggal yang tampil di halaman.
     Samakan dengan dateISO di atas. */
  event: {
    dateLabel: "Kamis, 3 Desember 2026",
    dateShort: "03 . 12 . 2026",
    dayName: "Kamis",
    day: "03",
    month: "Desember",
    year: "2026",
    timeLabel: "Akad 08.30 WIB, resepsi 14.00 WIB",
    akadTime: "08.30 WIB",
    resepsiTime: "14.00 WIB",
    venue: "Dukuh Gajihan",
    venueLine: "Gajihan, Desa Ngablak",
    address: "RT 009/RW 004, Desa Ngablak, Kecamatan Wonosamodro, Boyolali, Jawa Tengah",
    mapsUrl: "https://maps.app.goo.gl/XPjVHuDeAKRskJbC6"
  },

  /* Tombol Simpan Tanggal (Google Calendar) */
  calendarTitle: "Pernikahan Tri Wulandari & Mifthakhul Huda",
  calendarDetails: "Akad nikah 08.30 WIB, resepsi 14.00 WIB. Dukuh Gajihan, RT 009/RW 004, Desa Ngablak, Kecamatan Wonosamodro, Boyolali.",

  /* Nomor WhatsApp untuk RSVP: 62 + nomor tanpa 0 di depan.
     Biarkan kosong sampai nomor asli tersedia. Tombol akan
     menampilkan peringatan, bukan membuka nomor yang salah. */
  rsvpWhatsapp: "+6281392146739",

  /* Hadiah. Ganti nomor rekening di bawah. Selama masih ada tanda [ ],
     tombol salin dinonaktifkan agar tamu tidak menyalin data yang belum jadi. */
  gift: {
    accounts: [
      {
        bank: "SeaBank",
        number: "901914066592",
        holder: "a.n. Tri Wulandari"
      }
    ]
  },

  /* Nama tamu default jika URL tidak memiliki ?to= */
  guestFallback: "Tamu Undangan"
};
