# Frontend - Undangan Pernikahan Ricky & Fellycia

Ini adalah bagian antarmuka pengguna (UI) dari aplikasi undangan pernikahan, dibangun menggunakan **React**, **Vite**, **Tailwind CSS**, dan **Framer Motion**.

## Persyaratan Sistem
- **Node.js** (versi 18 atau terbaru disarankan)
- **npm** (atau package manager lain seperti yarn/pnpm)

## Setup dan Cara Menjalankan Lokal

1. Buka terminal dan arahkan langsung ke dalam direktori `frontend`:
   ```bash
   cd frontend
   ```

2. Instal seluruh dependensi paket yang dibutuhkan:
   ```bash
   npm install
   ```

3. Pastikan API backend (Laravel) sudah menyala di *tab* terminal lain (biasanya di `http://localhost:8000`). Komponen UI untuk form `WishesSection` dan `RsvpSection` akan otomatis mengirimkan datanya (fetch POST) ke endpoint lokal tersebut.

4. Jalankan server pengembangan Vite:
   ```bash
   npm run dev
   ```

5. Akses website:
   Buka web browser dan akses alamat URL lokal yang tertera di terminal (secara *default* adalah `http://localhost:5173`).
   
Website ini dilengkapi dengan *Hot Module Replacement (HMR)*, jadi setiap penulisan/perubahan di kode (*source code*) akan di-*render* secara seketika (*real-time*) di browser tanpa perlu me-*refresh* halaman.

## Panduan Desain (*Design System*)
Desain antarmuka dikembangkan dengan mematuhi pedoman *minimalist UI* dan estetika *editorial*:
- **Warna Utama**: Menggunakan *token* palet yang bersih, yakni *Ink* (`#1A1A1A`), *Cream* (`#F2EFE9`), *Dusty Blue* (`#A9B7C4`), dan *White* (`#FFFFFF`). Tidak menggunakan warna gradasi bawaan standar.
- **Tipografi**: Menggunakan kombinasi Serif elegan (*Cormorant Garamond* / *Great Vibes*) untuk memberi kesan premium pada *heading*, serta Sans-serif yang di-*spacing* rapi untuk berbagai label data agar keterbacaannya tetap fungsional.
