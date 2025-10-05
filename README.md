# 🎮 Prediktor Magic Chess GoGo

Website prediksi lawan untuk game Magic Chess Mobile Legends dengan sistem eliminasi dinamis dan prediksi akurat berdasarkan pola matchmaking yang terbukti.

## ✨ Fitur Utama

### 🎯 Prediksi Akurat
- **Pola Terbukti**: Berdasarkan analisis data real "Lawan di Ronde I/II → Lawan DI DEPAN mereka di Ronde III"
- **Semua Ronde**: Prediksi lengkap dari Ronde III sampai VIII
- **Pola Berkelanjutan**: Ronde IV-VIII mengikuti pola yang konsisten dengan pergeseran urutan

### 🔄 Sistem Eliminasi Dinamis
- **Auto Replacement**: Player tereliminasi otomatis diganti dengan player aktif berikutnya
- **Real-time Update**: Prediksi langsung terupdate saat status eliminasi berubah
- **Visual Clear**: Status player (Aktif/Pengganti/Eliminasi) mudah dibaca

### 📱 Fully Responsive
- **Mobile First**: Optimized untuk smartphone
- **Tablet Ready**: Layout perfect untuk tablet
- **Desktop Optimized**: Pengalaman terbaik di desktop
- **Touch Friendly**: Button besar dan mudah diklik

## 🚀 Cara Menggunakan

### 1. Input Data Lawan
- **I-2** : [Nama lawan di I-2]
- **I-3** : [Nama lawan di I-3]
- **I-4** : [Nama lawan di I-4]
- **II-1**: [Nama lawan di II-1]
- **II-2**: [Nama lawan di II-2]
- **II-4**: [Nama lawan di II-4]
- **II-5**: [Nama lawan di II-5]
- **II-6**: [Nama lawan di II-6]


### 2. Kelola Eliminasi
- Klik tombol **"Eliminasi"** di samping input untuk menandai player yang sudah tereliminasi
- Player tereliminasi akan otomatis diganti dalam prediksi
- Klik lagi untuk membatalkan eliminasi

### 3. Generate Prediksi
- Klik **"Generate Semua Ronde"** untuk melihat prediksi Ronde III-VIII
- Scroll ke bawah untuk melihat semua prediksi berurutan

## 🎮 Pola Prediksi

### 📊 Ronde III (Pola Dasar)

| Step | Lawan | Pola |
|------|-------|------|
| III-1 | Lawan dari I-3 | Dari I-3 |
| III-2 | Lawan dari I-4 | Dari I-4 |
| III-3 | 🎯 Creep | PvE Stage |
| III-4 | Lawan dari II-1 | Dari II-1 |
| III-5 | Lawan dari II-2 | Dari II-2 |
| III-6 | Lawan dari II-4 | Dari II-4 |
| III-7 | Lawan dari II-5 | Dari II-5 |

### 🔄 Ronde IV-VIII

| Ronde | Pola | Keterangan |
|-------|------|------------|
| IV | Geser 1 posisi | Dari Ronde III |
| V | Geser 2 posisi | Dari Ronde III |
| VI | Geser 3 posisi | Dari Ronde III |
| VII | Geser 4 posisi | Dari Ronde III |
| VIII | Geser 5 posisi | Dari Ronde III |

## 📊 Status Player

| Status | Ikon | Warna | Keterangan |
|--------|------|-------|------------|
| 🎯 Aktif | ✅ | Hijau | Player masih bermain normal |
| 🔄 Pengganti | 🔄 | Kuning | Menggantikan player tereliminasi |
| 👾 Creep | 👾 | Biru | Stage PvE (melawan creep) |
| 🚫 Eliminasi | ❌ | Merah | Hanya di daftar eliminasi |

## 🛠️ Teknologi yang Digunakan

| Layer | Technology | Purpose |
|-------|------------|---------|
| 🎨 Frontend | HTML5 | Struktur website |
| 🎨 Styling | CSS3 dengan Grid & Flexbox | Responsive design |
| ⚡ Logic | JavaScript ES6+ | Prediksi & eliminasi |
| 📐 Layout | CSS Grid & Media Queries | Responsive breakpoints |
| 🎯 UX | CSS Animations | Smooth interactions |

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout Input | Features |
|--------|------------|--------------|----------|
| 📱 Mobile | ≤ 480px | 1 kolom vertikal | Touch-optimized buttons |
| 📟 Tablet | 481px - 768px | 1 kolom dengan button samping | Balanced spacing |
| 💻 Small Desktop | 769px - 1023px | 2 kolom grid | Optimal reading |
| 🖥️ Large Desktop | ≥ 1024px | 2-3 kolom grid | Maximum space utilization |

## 🎨 Fitur Khusus

### ✨ User Experience

| Feature | Description | Benefit |
|---------|-------------|---------|
| Auto-focus | Input pertama langsung aktif | Efisiensi waktu |
| Real-time Notification | Feedback setiap aksi | User awareness |
| Smooth Animations | Transisi halus | Pengalaman visual |
| Horizontal Scroll | Table responsive di mobile | Aksesibilitas data |

### 🔧 Functional Features

| Feature | Implementation | Purpose |
|---------|----------------|---------|
| Input Validation | JavaScript validation | Data integrity |
| Auto-generate | Real-time prediction update | Dynamic response |
| Reset Function | One-click clear | User convenience |
| Eliminasi Management | Toggle system | Flexible control |

### 📊 Informational Features

| Feature | Content | Purpose |
|---------|---------|---------|
| Summary Perubahan | Ringkasan penggantian | Quick overview |
| Strategi Tips | Saran berdasarkan eliminasi | Decision support |
| Pattern Explanation | Penjelasan pola prediksi | User understanding |
| Status Tracking | Monitor semua player | Real-time awareness |

## 🚀 Deployment Options

| Platform | Type | Best For | Setup |
|----------|------|----------|-------|
| GitHub Pages | Free static hosting | Open source projects | Automatic from repo |
| Netlify | Static site hosting | Professional projects | Drag & drop deploy |
| Vercel | Frontend platform | React/Next.js apps | Git integration |
| Firebase Hosting | Google infrastructure | Enterprise projects | CLI deployment |

## 📝 Panduan Input Data

### ✅ Format yang Disarankan

| Field | Contoh | Keterangan |
|-------|--------|------------|
| I-2 | `Nama Player` | Gunakan nickname konsisten |
| I-3 | `Nama Player` | Hindari karakter special |
| I-4 | `Nama Player` | Spasi diperbolehkan |
| II-1 | `Nama Player` | Underscore diperbolehkan |
| II-2 | `Nama Player` | Kapitalisasi bebas |
| II-4 | `Nama Player` | Hash tag diperbolehkan |
| II-5 | `Nama Player` | Nama biasa |
| II-6 | `Nama Player` | Bisa sama dengan I-2 |

### ❌ Format yang Harus Dihindari

| Pattern | Contoh | Alasan |
|---------|--------|--------|
| Too long | `PlayerNameVeryLong123` | Sulit dibaca di mobile |
| Special chars | `P!@yer#$%` | Bisa error sistem |
| Empty | `` | Wajib diisi semua |
| Duplicate elimination | - | Sistem handle otomatis |

## 🔮 Contoh Penggunaan Lengkap

### 📥 Input Data

| Round | Player Name |
|-------|-------------|
| I-2 | `Player1` |
| I-3 | `Player2` |
| I-4 | `Player3` |
| II-1 | `Player4` |
| II-2 | `Player5` |
| II-4 | `Player6` |
| II-5 | `Player7` |
| II-6 | `Player1` |

### 🎯 Prediksi Hasil (Ronde III)

| Step | Lawan | Status | Pola |
|------|-------|--------|------|
| III-1 | `Player2` | 🎯 Aktif | Dari I-3 |
| III-2 | `Player3` | 🎯 Aktif | Dari I-4 |
| III-3 | `Creep` | 👾 Creep | PvE Stage |
| III-4 | `Player4` | 🎯 Aktif | Dari II-1 |
| III-5 | `Player5` | 🎯 Aktif | Dari II-2 |
| III-6 | `Player6` | 🎯 Aktif | Dari II-4 |
| III-7 | `Player7` | 🎯 Aktif | Dari II-5 |

## 🛠️ Troubleshooting

### 🔧 Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| ❌ "Harap isi semua kolom" | Ada field kosong | Isi semua 8 input field |
| 🔄 Prediksi tidak update | Eliminasi belum di-apply | Klik "Generate Semua Ronde" |
| 📱 Layout broken di mobile | Browser cache | Refresh page (Ctrl+F5) |
| ⚡ Notifikasi tidak muncul | Popup blocker | Allow popup untuk site ini |

### 📋 System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Browser | Chrome 60+ | Chrome 90+ |
| JavaScript | ES6 support | ES2020 support |
| Screen Size | 320px width | 1920px width |
| RAM | 512MB | 2GB+ |
| Connection | 3G | 4G/WiFi |

## 📈 Version History

| Version | Date | Features | Changes |
|---------|------|----------|---------|
| v1.0 | Oct 2025 | Basic prediction | Initial release |
| v1.1 | Oct 2025 | Elimination system | Dynamic player replacement |
| v1.2 | Oct 2025 | All rounds (III-VIII) | Complete game coverage |
| v1.3 | Oct 2025 | Full responsive | Mobile/tablet/desktop support |

## 👥 Contributing

### 🎯 How to Contribute

| Step | Action | Description |
|------|--------|-------------|
| 1 | Fork Project | Buat copy repository |
| 2 | Create Branch | `git checkout -b feature/AmazingFeature` |
| 3 | Commit Changes | `git commit -m 'Add AmazingFeature'` |
| 4 | Push Branch | `git push origin feature/AmazingFeature` |
| 5 | Open Pull Request | Submit changes untuk review |

### 📝 Code Standards

| Area | Standard | Tools |
|------|----------|-------|
| HTML | Semantic tags | HTML5 Validator |
| CSS | BEM methodology | Stylelint |
| JavaScript | ES6+ syntax | ESLint |
| Commits | Conventional commits | Commitlint |

## 📞 Support & Contact

### 🔗 Links & Resources

| Platform | Link | Purpose |
|----------|------|---------|
| 📱 Instagram | [@yohanes.prass](https://www.instagram.com/yohanes.prass/) | Updates & tutorials |
| 💬 Issues | GitHub Issues | Bug reports & features |
| 📧 Email | Project maintainer | Direct contact |

### 🐛 Bug Report Template

| Field | Description | Example |
|-------|-------------|---------|
| Title | Ringkasan issue | "Mobile layout broken on iOS" |
| Description | Detail problem | "Table overflow pada Safari iPhone" |
| Steps | Reproduksi steps | 1. Buka site 2. Input data 3. Lihat table |
| Expected | Perilaku yang diharapkan | "Table harus scroll horizontal" |
| Actual | Perilaku aktual | "Table memecah layout" |
| Environment | Device & browser | "iPhone 13, Safari 15" |

## 📜 License

| Aspect | Details |
|--------|---------|
| Type | MIT License |
| Commercial Use | ✅ Allowed |
| Modification | ✅ Allowed |
| Distribution | ✅ Allowed |
| Liability | ❌ No warranty |
| Copyright | © 2025 Yohanes.prass |

## 🎉 Acknowledgments

### 🙏 Credits & Thanks

| Contributor | Role | Contribution |
|-------------|------|--------------|
| Yohanes.prass | Project Creator | Ide awal & development |
| Magic Chess Community | Testers | Feedback & validation |
| TikTok Followers | Supporters | Viral content & sharing |

---

<div align="center">

**⭐ Jika project ini membantu, jangan lupa beri star!**

*Dibuat dengan ❤️ untuk komunitas Magic Chess GoGo*

[⬆ Back to Top](#-prediktor-magic-chess-gogo)

</div>
