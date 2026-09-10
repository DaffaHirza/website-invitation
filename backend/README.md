# Backend API - Undangan Pernikahan Ricky & Fellycia

Ini adalah bagian server/API (backend) dari aplikasi undangan pernikahan, dibangun menggunakan **Laravel 11**. Backend ini berfungsi secara khusus sebagai penyedia *RESTful API* ringan untuk menerima, memproses, dan menyimpan data tamu (Konfirmasi Kehadiran / RSVP dan Ucapan Doa).

## Persyaratan Sistem
- **PHP** (versi 8.2 atau terbaru disarankan)
- **Composer** (untuk manajemen dependensi paket PHP)
- **PostgreSQL** atau **MySQL** (sebagai database relasional)

## Setup dan Cara Menjalankan Lokal

1. Buka terminal dan arahkan langsung ke dalam direktori `backend`:
   ```bash
   cd backend
   ```

2. Instal seluruh dependensi PHP yang dibutuhkan via Composer:
   ```bash
   composer install
   ```

3. Salin konfigurasi environment bawaan dan *generate* application key:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. Konfigurasi Database:
   Buka file `.env` menggunakan *text editor* dan sesuaikan pengaturan kredensial database dengan *environment* lokalmu. (Catatan: *Database* harus dibuat terlebih dahulu secara manual di SQL server kamu). Contoh untuk PostgreSQL:
   ```env
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=undangan
   DB_USERNAME=postgres
   DB_PASSWORD=password
   ```

5. Jalankan migrasi database:
   Perintah ini akan membaca skema *blueprint* dan membuat tabel `rsvps` dan `wishes` secara otomatis di database-mu.
   ```bash
   php artisan migrate
   ```

6. Jalankan server lokal Laravel:
   ```bash
   php artisan serve
   ```
   Secara *default*, server API akan berjalan di `http://localhost:8000`. 
   
   **Endpoint API utama yang tersedia:**
   - `POST /api/rsvp` (untuk memproses form konfirmasi kehadiran).
   - `GET /api/wishes` (untuk mengambil seluruh daftar ucapan).
   - `POST /api/wishes` (untuk menyimpan ucapan/doa baru).

## Arsitektur & Keputusan Teknis
- Backend ini dirancang seramping mungkin sebagai penyedia data statis (hanya API), sehingga rute web standar bawaan Laravel (`routes/web.php`) tidak digunakan secara aktif. Seluruh *logic endpoint* diletakkan pada `routes/api.php`.
- Laravel otomatis menyuntikkan *timestamp* (`created_at` dan `updated_at`) pada semua model database sehingga bagian antarmuka (*frontend*) tidak perlu lagi mengirimkan tanggal secara manual.
- Laravel sudah otomatis diatur untuk menangani koneksi lintas aplikasi (*Cross-Origin Resource Sharing / CORS*), memastikan UI lokal Vite bisa mengambil dan mengirim data tanpa diblokir oleh sistem keamanan *browser*.
