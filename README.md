# Undangan Pernikahan: Tri Wulandari & Mifthakhul Huda

Undangan statis tanpa build step. Tema buku pernikahan: kertas gading, hijau
pinus, dan terakota. Versi ini dibuat dari sisi mempelai wanita, dengan
rangkaian akad dan resepsi pada 3 Desember 2026 di Desa Ngablak, Wonosamodro.

## Struktur

```
index.html            markup dan seluruh teks undangan
css/style.css         tampilan, termasuk versi layar pendek
js/config.js          data acara, WhatsApp, dan rekening hadiah
js/main.js            cover, menu, hitungan mundur, RSVP, galeri
assets/img/           foto WebP yang sudah dioptimalkan
```

Tidak ada dependency build. Hanya font Google (Fraunces dan Karla) yang
dimuat lewat CDN.

## Data acara

Tanggal, tempat, dan tautan dipusatkan di `js/config.js`. Nilai yang masih
memakai tanda `[ ]` adalah placeholder dan akan tampil apa adanya di halaman.

| Field | Keterangan |
|---|---|
| `dateISO` | tanggal dan jam akad, `2026-12-03T09:30:00+07:00` |
| `calendarEndISO` | akhir acara untuk Simpan Tanggal, `2026-12-03T15:00:00+07:00` |
| `event.dateLabel` | tanggal lengkap, `Kamis, 3 Desember 2026` |
| `event.dateShort` | tanggal ringkas untuk label foto, `03 . 12 . 2026` |
| `event.dayName`, `event.day`, `event.month`, `event.year` | bagian tanggal di bagian Acara |
| `event.timeLabel` | ringkasan jam, `Akad 09.30 WIB, resepsi 14.00 WIB` |
| `event.akadTime`, `event.resepsiTime` | jam tiap kartu acara |
| `event.venue` | nama lokasi, `Dukuh Gajihan` |
| `event.venueLine` | lokasi singkat di halaman pembuka |
| `event.address` | alamat lengkap dan kota |
| `event.mapsUrl` | link Google Maps lokasi acara |
| `calendarTitle`, `calendarDetails` | isi tombol Simpan Tanggal |
| `rsvpWhatsapp` | nomor WhatsApp konfirmasi, `6282121148783` |
| `gift.accounts[].bank`, `number`, `holder` | rekening tanda kasih (SeaBank, a.n. Tri Wulandari) |
| `guestFallback` | nama tamu jika URL dibuka tanpa `?to=` |

Nomor WhatsApp konfirmasi masih memakai nomor yang sama dengan undangan
sebelumnya. Ganti `rsvpWhatsapp` jika konfirmasi untuk sisi mempelai wanita
ingin diarahkan ke nomor lain. Jika nomornya dikosongkan, tombol RSVP hanya
menampilkan peringatan.

Nama mempelai dan orang tua ditulis langsung di `index.html`:

- Tri Wulandari, putri Bapak Wagiman dan Ibu Sumarni
- Mifthakhul Huda, putra Bapak Purwanto dan Ibu Sri Handayani

## Bagian yang sudah final

- Akad nikah pukul 09.30 WIB dan resepsi pukul 14.00 WIB pada Kamis,
  3 Desember 2026.
- Hitungan mundur dan tombol Simpan Tanggal mengarah ke `dateISO`.
- Bagian Acara menampilkan dua kartu terpisah untuk akad dan resepsi,
  lalu satu panel lokasi dengan tautan Google Maps.
- Bagian Hadiah hanya menampilkan satu rekening SeaBank. Tombol salin
  otomatis nonaktif selama data masih berupa placeholder.
- Tautan Lihat lokasi disembunyikan selama nama tempat masih placeholder.
- Jumlah tamu disembunyikan jika tamu memilih Tidak hadir.
- Galeri berisi empat potret adat dengan keterangan di atas foto. Ketuk foto
  untuk membuka tampilan besar.
- Nomor bagian mengikuti urutan: 01 Mempelai, 02 Acara, 03 Galeri,
  04 Hadiah, 05 RSVP.
- Animasi hanya untuk menuntun mata: teks naik pelan, foto tersingkap.
  Semuanya berhenti jika pengguna memilih kurangi gerak
  (`prefers-reduced-motion`).

## Nama tamu lewat URL

Bagikan tautan dengan parameter `to`:

```
https://seekornorth.github.io/undangan-wulan/?to=Bapak%20Budi%20Santoso
```

Nama akan tampil di halaman pembuka. Spasi harus di-encode sebagai `%20`.

## Menjalankan lokal

```bash
python3 -m http.server 8080
```

Buka `http://localhost:8080` di browser.

Jika browser masih menampilkan versi lama, lakukan hard reload atau naikkan
nilai `?v=` pada tautan CSS dan JS di `index.html`.

## Deploy ke GitHub Pages

Repo: `seekornorth/undangan-wulan`, branch `main`, folder root.

```bash
git init
git add .
git commit -m "Undangan pernikahan sisi mempelai wanita"
git branch -M main
git remote add origin https://github.com/seekornorth/undangan-wulan.git
git push -u origin main
```

Setelah itu buka Settings > Pages, pilih Source: Deploy from a branch,
Branch: `main`, Folder: `/ (root)`. Situs akan tersedia di
`https://seekornorth.github.io/undangan-wulan/`.

## Foto

Semua foto yang dimuat berada di `assets/img/` dalam format WebP.

- `hero.webp`: foto halaman pembuka, dipotong penuh di panel kanan
- `cover.webp`: foto utama di bagian atas, bentuk lengkung
- `huda-new.webp` dan `wulan-new.webp`: foto mempelai, rasio 4:5 (900x1125)
- `gallery-03`, `gallery-04`, `gallery-06`, `gallery-08`: empat potret galeri
- varian `-640`: versi lebih kecil untuk layar ponsel lewat `srcset`
- `closing.webp`: foto penutup
- `og.jpg`: gambar pratinjau 1200x630 untuk media sosial
