# Website Undangan Pernikahan Digital 

Website komprehensif untuk undangan pernikahan digital interaktif. Dibangun dengan arsitektur *full-stack* modern yang mendukung fitur galeri foto, penghitung waktu mundur (*countdown*), formulir kehadiran tamu (RSVP), buku tamu digital (*wishes*), serta pemutar musik latar yang dinamis. Proyek ini merupakan bagian dari *hometask* Invitato.

---

## 🎯 Fitur Utama

| No | Modul                           | Deskripsi                                                    |
| -- | ------------------------------- | ------------------------------------------------------------ |
| 1  | **Opening / Cover Page**  | Halaman pembuka interaktif dengan animasi buka undangan      |
| 2  | **Hero & Story Section**  | Menampilkan foto utama dan perkenalan profil kedua mempelai  |
| 3  | **Countdown Timer**       | Penghitung waktu mundur real-time menuju hari H pernikahan   |
| 4  | **Galeri Foto (Masonry)** | Kolase foto momen kebersamaan yang estetik dan minimalis     |
| 5  | **Informasi Acara**       | Detail jadwal & lokasi untuk Akad Nikah dan Resepsi          |
| 6  | **RSVP Form**             | Formulir digital bagi tamu untuk mengonfirmasi kehadiran     |
| 7  | **Buku Tamu (Wishes)**    | Kolom ucapan dan doa yang di-*render* secara *real-time* |
| 8  | **Floating Music Player** | Pemutar musik latar otomatis yang mengikuti*scroll* layar  |

---

## 💻 Panduan Multi-Platform & Kolaborasi Tim

Proyek ini dirancang agar dapat dijalankan dengan mudah oleh seluruh anggota tim di berbagai sistem operasi (**Windows**, **macOS**, dan **Linux**).

### 🛠️ Prerequisites (Kebutuhan Perangkat)

Sebelum menjalankan proyek, pastikan perangkat masing-masing sudah terinstall:

* **Node.js** `>= 18.0.0` & **npm** `>= 9.0.0` (Untuk Frontend Vite)
  * Check versi: `node -v` dan `npm -v`
* **PHP** `>= 8.2` & **Composer** (Untuk Backend Laravel)
* **PostgreSQL / MySQL** (Lokal via PgAdmin/Services/Homebrew/Docker atau Remote Server)
* **Git** (Rekomendasi konfigurasi line-ending agar tidak bentrok antar OS):
  * **Windows**: `git config --global core.autocrlf true`
  * **macOS / Linux**: `git config --global core.autocrlf input`

---

## 🚀 Langkah-Langkah Setup Proyek

### 1. Clone Repository

```bash
git clone <repository-url>
cd undangan
```

---

### 2. Setup Backend Server (Laravel)

```bash
# Masuk ke direktori backend
cd backend

# Install dependensi PHP
composer install
```

#### Setup File `.env` Backend:

Salin file `.env.example` menjadi `.env`:

* **Windows (PowerShell)**:
  ```powershell
  copy .env.example .env
  ```
* **macOS / Linux / Git Bash**:
  ```bash
  cp .env.example .env
  ```

Generate application key dan sesuaikan isi `.env` backend dengan pengaturan database lokal masing-masing:

```bash
php artisan key:generate
```

```env
# Server Database
DB_CONNECTION=pgsql   # Ubah ke mysql jika menggunakan MySQL
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=undangan
DB_USERNAME=postgres
DB_PASSWORD=password
```

#### Setup Database Laravel:

```bash
# Jalankan migrasi database
php artisan migrate
```

---

### 3. Setup Frontend Client (React)

Buka terminal baru atau pindah ke direktori frontend:

```bash
cd ../frontend

# Install dependensi
npm install
```

*(Opsional)* Anda dapat membuat file `.env` di frontend jika ingin mengonfigurasi URL backend yang berbeda. Secara *default*, frontend diarahkan ke `http://localhost:8000/api`.

---

### 4. Menjalankan Server Development

#### Terminal 1 — Backend:

```bash
cd backend
php artisan serve
```

*Backend API akan berjalan di: `http://localhost:8000`*

#### Terminal 2 — Frontend:

```bash
cd frontend
npm run dev
```

*Frontend UI akan berjalan di: `http://localhost:5173`*

---

## 🔧 Troubleshooting & Tips Lintas Perangkat

### 1. Masalah Koneksi Database di Windows vs macOS/Linux

* **Windows**: Pengguna Windows sering kali memiliki password default `postgres` atau port `5432`. Pastikan service berjalan di `Services.msc`.
* **macOS**: Jika menggunakan Homebrew (`brew services start postgresql`), pastikan user PostgreSQL sesuai dengan username Mac Anda.
* **XAMPP**: Jika menggunakan MySQL via XAMPP, pastikan `DB_CONNECTION=mysql` dan port default adalah `3306`.

### 2. Bentrok Port

Jika port `8000` atau `5173` sudah terpakai oleh aplikasi lain:

* **Backend**: Jalankan dengan `php artisan serve --port=8001`. Pastikan mengubah URL fetch di frontend (`frontend/src/sections/`).
* **Frontend**: Vite akan otomatis mencari port kosong lain seperti `5174`.

---

## 🏗️ Arsitektur Sistem & Tech Stack

### Frontend

| Teknologi               | Versi   | Kegunaan                      |
| ----------------------- | ------- | ----------------------------- |
| **React**         | ^19.2.8 | UI Library                    |
| **Vite**          | ^8.2.2  | Build Tool & Dev Server       |
| **Tailwind CSS**  | ^4.3.3  | Utility-first CSS Framework   |
| **Framer Motion** | ^13.2.0 | Animasi & Transisi Interaktif |

### Backend

| Teknologi                  | Versi | Kegunaan            |
| -------------------------- | ----- | ------------------- |
| **PHP**              | >=8.2 | Runtime Environment |
| **Laravel**          | ^11.9 | Web & API Framework |
| **PostgreSQL/MySQL** | -     | Database Relasional |

---

## 📁 Struktur Folder Proyek

```
undangan/
├── frontend/                          # React Client Application
│   ├── public/                        # Static assets (images, music)
│   ├── src/
│   │   ├── components/                # Komponen UI global (MusicPlayer)
│   │   ├── pages/                     # Halaman utama (OpeningPage)
│   │   ├── sections/                  # Modul konten per-bagian (Hero, Story, dll)
│   │   ├── App.jsx                    # Root component penyusun Sections
│   │   └── main.jsx                   # Entry point React
│   └── package.json
│
├── backend/                           # Laravel API Server
│   ├── app/
│   │   ├── Http/Controllers/          # Logika Rsvp & Wishes
│   │   └── Models/                    # Model database Eloquent
│   ├── database/
│   │   └── migrations/                # Skema Database
│   ├── routes/
│   │   └── api.php                    # Endpoints router API
│   ├── .env.example                   # Template env backend
│   └── composer.json
│
├── .gitignore
└── README.md
```

---

## 🗄️ Skema Database (Struktur Migrasi)

```sql
-- Tabel RSVPs
CREATE TABLE rsvps (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    attendance VARCHAR(50) NOT NULL, -- 'hadir' / 'tidak_hadir'
    guests INTEGER DEFAULT 0,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Tabel Wishes
CREATE TABLE wishes (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

---

## 🌐 API Endpoints Utama

### Buku Tamu & RSVP

| Method | Endpoint        | Deskripsi                                 | Auth |
| ------ | --------------- | ----------------------------------------- | ---- |
| POST   | `/api/rsvp`   | Mengirim data konfirmasi kehadiran (RSVP) | ❌   |
| GET    | `/api/wishes` | Mengambil seluruh daftar ucapan/doa       | ❌   |
| POST   | `/api/wishes` | Menyimpan ucapan/doa baru                 | ❌   |

---

## 🤖 Disclosure Penggunaan AI Tools/Agents

Workspace kode ini dibangun secara berpasangan dan kolaboratif (*pair programming*) bersama **AI Agent (Antigravity by Google Deepmind)**.

Seluruh alur pengerjaan diselesaikan dengan bantuan eksekusi asisten AI, meliputi:

- Pemecahan struktur kode dan arsitektur *Monorepo*.
- *Setup* backend Laravel 13, migrasi database, dan integrasi API *Controller*.
- Modifikasi *layout* responsif Tailwind CSS dan penerapan desain estetis *minimalis* pada React/Vite.
- Pembuatan dan integrasi animasi kompleks menggunakan Framer Motion.
- Perbaikan *bug* lintas komponen (seperti sinkronisasi *timestamp* RSVP dan fitur pemutar musik).

Beberapa file kustomisasi tersembunyi (seperti folder `.agents/` dan `AGENTS.md`) sengaja digunakan di *environment* lokal sebagai panduan *prompt/skill* untuk membatasi *behavior* dan *output* asisten AI agar tidak generik dan sepenuhnya mematuhi standar desain eksklusif Invitato. File-file "otak" AI ini tidak diunggah ke repository (*untracked/gitignored*).

---

## 📄 Lisensi

Proyek ini dibangun untuk keperluan *hometask / test case* oleh Invitato.
