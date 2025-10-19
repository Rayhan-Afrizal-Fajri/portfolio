import HeroImage from "/assets/hero-img.webp";
import NavbarImage from "/assets/logo-white.webp";

const Image = {
    HeroImage,
    NavbarImage
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/laravel.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/php.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/photoshop.png";
import Tools13 from "/assets/tools/alpine.js.png";
import Tools14 from "/assets/tools/livewire.png";

export const listTools = [
    {
        id: 1,
        gambar: Tools1,
        nama: "Visual Studio Code",
        ket: "Code Editor",
        dad: "100"
    }, {
        id: 2,
        gambar: Tools2,
        nama: "React JS",
        ket: "Framework",
        dad: "200"
    }, {
        id: 3,
        gambar: Tools3,
        nama: "Laravel",
        ket: "Framework",
        dad: "300"
    }, {
        id: 4,
        gambar: Tools4,
        nama: "Tailwind CSS",
        ket: "Framework",
        dad: "400"
    }, {
        id: 5,
        gambar: Tools5,
        nama: "PHP",
        ket: "Language",
        dad: "500"
    }, {
        id: 6,
        gambar: Tools6,
        nama: "JavaScript",
        ket: "Language",
        dad: "600"
    }, {
        id: 7,
        gambar: Tools7,
        nama: "Node JS",
        ket: "JavaScript Runtime",
        dad: "700"
    }, {
        id: 8,
        gambar: Tools8,
        nama: "GitHub",
        ket: "Repository",
        dad: "800"
    }, {
        id: 9,
        gambar: Tools9,
        nama: "Adobe Illustrator",
        ket: "Design App",
        dad: "900"
    }, {
        id: 10,
        gambar: Tools10,
        nama: "Canva",
        ket: "Design App",
        dad: "1000"
    }, {
        id: 11,
        gambar: Tools11,
        nama: "Figma",
        ket: "Design App",
        dad: "1100"
    }, {
        id: 12,
        gambar: Tools12,
        nama: "Adobe Photoshop",
        ket: "Design App",
        dad: "1200"
    }, {
        id: 13,
        gambar: Tools13,
        nama: "Alpine.js",
        ket: "JavaScript Framework",
        dad: "1300"
    }, {
        id: 14,
        gambar: Tools14,
        nama: "Livewire",
        ket: "Laravel Frontend Framework",
        dad: "1400"
    }
];

import Proyek1 from "/assets/proyek/banner.webp";
// asset banner
import BannerJkbOlympic from "/assets/proyek/banner/jkb-olympic.webp";
import BannerPemilihanHimatris from "/assets/proyek/banner/pemilihan-himatris.webp";
import BannerPKMO from "/assets/proyek/banner/pkmo-himatris.webp";
import BannerReorHimatris from "/assets/proyek/banner/reor-himatris.webp";
import BannerSeJkb from "/assets/proyek/banner/se-jkb.webp";
import BannerSertijabHimatris from "/assets/proyek/banner/sertijab-himatris.webp";
// asset banner

import Proyek2 from "/assets/proyek/logo.webp";
// asset logo
import LogoFutsalCup from "/assets/proyek/logo/logo_futsal_cup_pnc.webp";
import LogoJKB from "/assets/proyek/logo/logo_jkb.webp";
import LogoKonpicabIpmPekuncen from "/assets/proyek/logo/logo_konpicab_ipm_pekuncen.webp";
import LogoMusycabIpmPekuncen from "/assets/proyek/logo/logo_musycab_ipm_pekuncen.webp";
import LogoSmanaMasukKampus from "/assets/proyek/logo/logo_smana_masuk_kampus_6.0.webp";
import LogoTefa from "/assets/proyek/logo/logo_tefa.webp";
import LogoTrpl from "/assets/proyek/logo/logo_trpl.webp";
// asset logo

import Proyek3 from "/assets/proyek/poster.webp";
// asset poster
import PosterBadmintonJkbOlympic from "/assets/proyek/poster/badminton_jkb_olympic.webp";
import PosterIitc from "/assets/proyek/poster/iitc_judi.webp";
import PosterMlbbJkbOlympic from "/assets/proyek/poster/mlbb_jkb_olympic.webp";
import PosterReorHimatris from "/assets/proyek/poster/reor_himatris.webp";
import PosterRsifcHariNasional from "/assets/proyek/poster/rsifc_hari_nasional.webp";
import PosterRsifcJadwalDokter from "/assets/proyek/poster/rsifc_jadwal_dokter.webp";
import PosterRsifcPengumuman from "/assets/proyek/poster/rsifc_pengumuman.webp";
// asset poster

import Proyek4 from "/assets/proyek/e-alumni.webp";
import Proyek5 from "/assets/proyek/siwali-jkb.webp";
import Proyek6 from "/assets/proyek/kampoengkepiting.com.webp";
import NavBar from "./components/NavBar";

export const listProyek = [
    {
        id: 1,
        tipe: "Desain",
        gambar: Proyek1,
        nama: "Desain Banner",
        galeri: [
            { // ✅ galeri semua gambar untuk modal
                img: BannerJkbOlympic,
                nama: "Banner JKB Olympic 2024",
                desk: "Banner ini dibuat untuk kegiatan tahunan JKB Olympic 2024, sebuah ajang olahra" +
                        "ga antar mahasiswa Jurusan Komputer dan Bisnis yang bertujuan mempererat sil" +
                        "aturahmi sekaligus menumbuhkan semangat sportivitas."
            }, {
                img: BannerPemilihanHimatris,
                nama: "Banner Pemilihan Ketua Himpunan Himatris 2024",
                desk: "Banner pemilihan Ketua Himpunan Mahasiswa Komputer dan Bisnis (HIMATRIS) tahun" +
                        " 2024 ini dirancang untuk menciptakan kesan formal sekaligus menarik perhatian" +
                        " mahasiswa agar berpartisipasi dalam pemilihan."
            }, {
                img: BannerPKMO,
                nama: "Banner PKMO Himatris 2024",
                desk: "Banner PKMO (Pelatihan Keterampilan dan Manajemen Organisasi) HIMATRIS 2024 in" +
                        "i digunakan sebagai media promosi kegiatan pelatihan yang ditujukan untuk memb" +
                        "ekali anggota baru dengan keterampilan kepemimpinan dan manajerial."
            }, {
                img: BannerReorHimatris,
                nama: "Banner Reorganisasi HIMATRIS",
                desk: "Banner ini dibuat untuk kegiatan Reorganisasi HIMATRIS 2024, sebuah momen pent" +
                        "ing dalam regenerasi kepengurusan himpunan dengan nuansa formal dan profesiona" +
                        "l."
            }, {
                img: BannerSeJkb,
                nama: "Banner Study Ekskursi JKB 2024",
                desk: "Banner Study Ekskursi JKB 2024 ini menampilkan konsep edukatif dan inspiratif " +
                        "sebagai promosi kegiatan kunjungan industri dan pembelajaran di luar kampus."
            }, {
                img: BannerSertijabHimatris,
                nama: "Banner Serah Terima Jabatan Himatris 2024",
                desk: "Banner ini dibuat untuk acara Serah Terima Jabatan HIMATRIS 2024, yang menggam" +
                        "barkan momen transisi kepemimpinan secara resmi dengan desain elegan."
            }
        ],
        desk: "Banner ini dibuat untuk berbagai kegiatan di Jurusan Komputer dan Bisnis Polit" +
                "eknik Negeri Cilacap, seperti JKB Olympic, pemilihan ketua himpunan, dan lainn" +
                "ya.",
        tools: ["Adobe Illustrator"],
        dad: "200"
    }, {
        id: 2,
        tipe: "Desain",
        gambar: Proyek2,
        nama: "Desain Logo",
        galeri: [
            {
                img: LogoFutsalCup,
                nama: "Logo Futsal Cup PNC 2024",
                desk: "Logo ini dirancang untuk turnamen Futsal Cup Politeknik Negeri Cilacap 2024, m" +
                        "encerminkan semangat kompetisi dan kebersamaan antar mahasiswa."
            }, {
                img: LogoJKB,
                nama: "Logo Jurusan Komputer dan Bisnis",
                desk: "Logo ini merupakan identitas resmi Jurusan Komputer dan Bisnis Politeknik Nege" +
                        "ri Cilacap, mencerminkan profesionalisme dan inovasi di bidang teknologi infor" +
                        "masi."
            }, {
                img: LogoKonpicabIpmPekuncen,
                nama: "Logo Konferensi Pimpinan Cabang IPM Pekuncen",
                desk: "Logo ini dibuat untuk Konferensi Pimpinan Cabang Ikatan Pelajar Muhammadiyah (" +
                        "IPM) Pekuncen 2024, mencerminkan semangat kepemimpinan dan kebersamaan di kala" +
                        "ngan pelajar."
            }, {
                img: LogoMusycabIpmPekuncen,
                nama: "Logo Musyawarah Cabang IPM Pekuncen",
                desk: "Logo ini dibuat untuk Musyawarah Cabang Ikatan Pelajar Muhammadiyah (IPM) Peku" +
                        "ncen 2024, mencerminkan kesatuan dalam kepemimpinan dan keanekaragaman gagasan" +
                        " pelajar."
            }, {
                img: LogoSmanaMasukKampus,
                nama: "Logo Smana Masuk Kampus 6.0",
                desk: "Logo ini dibuat untuk kegiatan Smana Masuk Kampus 6.0, sebuah acara pengenalan" +
                        " kampus bagi siswa SMA Negeri 1 Ajibarang."
            }, {
                img: LogoTefa,
                nama: "Logo Teaching Factory Jurusan Komputer dan Bisnis Politeknik Negeri Cilacap",
                desk: "Logo ini dibuat untuk Teaching Factory Jurusan Komputer dan Bisnis Politeknik " +
                        "Negeri Cilacap, sebuah program yang mengintegrasikan teori dan praktik dalam p" +
                        "embelajaran teknologi informasi dan bisnis."
            }, {
                img: LogoTrpl,
                nama: "Logo Teknologi Rekayasa Perangkat Lunak PNC",
                desk: "Logo ini merupakan identitas resmi Program Studi Teknologi Rekayasa Perangkat " +
                        "Lunak Politeknik Negeri Cilacap, mencerminkan fokus pada pengembangan perangka" +
                        "t lunak dan inovasi teknologi."
            }
        ],
        desk: "Logo ini dibuat untuk berbagai acara, organisasi, dan program resmi di Politek" +
                "nik Negeri Cilacap, seperti turnamen futsal, identitas jurusan, kegiatan kampu" +
                "s, hingga program studi.",
        tools: ["Adobe Illustrator"],
        dad: "300"
    }, {
        id: 3,
        tipe: "Desain",
        gambar: Proyek3,
        nama: "Desain Poster",
        desk: "Poster ini dibuat untuk berbagai acara dan kegiatan di Jurusan Komputer dan Bi" +
                "snis Politeknik Negeri Cilacap, lomba, serta sebagai feed promosi untuk kemitr" +
                "aan Teaching Factory.",
        galeri: [
            {
                img: PosterBadmintonJkbOlympic,
                nama: "Poster Badminton JKB Olympic 2024",
                desk: "Poster ini dirancang untuk turnamen Badminton JKB Olympic 2024, yang berisi in" +
                        "formasi tentang ketentuan lomba, lokasi, waktu pelaksanaan, dan tautan pendaftaran. Desainnya mencermink" +
                        "an semangat kompetisi antar mahasiswa."
            }, {
                img: PosterIitc,
                nama: "Poster Intermedia Information Technology Competition 2024",
                desk: "Poster ini dibuat untuk Intermedia Information Technology Competition (IITC) 2" +
                        "024, sebuah lomba teknologi informasi yang diadakan oleh Universitas Amikom Pu" +
                        "rwokerto. Desain poster yang dibuat bertema bahaya judi online, dengan tujuan " +
                        "untuk meningkatkan kesadaran masyarakat tentang dampak negatif judi online."
            }, {
                img: PosterMlbbJkbOlympic,
                nama: "Poster Technical Meeting MLBB JKB Olympic 2024",
                desk: "Poster ini dibuat untuk technical meeting turnamen Mobile Legends: Bang Bang dalam rangka JKB Ol" +
                        "ympic 2024, berisi informasi waktu pelaksanaan technical meeting dan kompetisi, lokasi, dan " +
                        "tautan pendaftaran dengan desain yang mencerminkan semangat e-sports dan sportivitas."
            }, {
                img: PosterReorHimatris,
                nama: "Poster Reorganisasi HIMATRIS 2024",
                desk: "Poster ini dibuat untuk kegiatan Reorganisasi HIMATRIS 2024, menampilkan infor" +
                        "masi tentang tanggal pelaksanaan dan tema kegiatan dengan desain yang" +
                        " menarik perhatian mahasiswa."
            }, {
                img: PosterRsifcHariNasional,
                nama: "Poster Hari Nasional Rumah Sakit Islam Fatimah Cilacap",
                desk: "Poster ini dibuat untuk memperingati Hari Nasional di Rumah Sakit Islam Fatima" +
                        "h Cilacap, dengan desain yang menonjolkan tema kesehatan dan semangat kebersam" +
                        "aan."
            }, {
                img: PosterRsifcJadwalDokter,
                nama: "Poster Jadwal Dokter Rumah Sakit Islam Fatimah Cilacap",
                desk: "Poster ini berisi informasi jadwal praktik dokter di Rumah Sakit Islam Fatimah" +
                        " Cilacap, dirancang dengan layout yang jelas dan mudah dibaca oleh pasien."
            }, {
                img: PosterRsifcPengumuman,
                nama: "Poster Pengumuman Rumah Sakit Islam Fatimah Cilacap",
                desk: "Poster ini dibuat untuk menyampaikan pengumuman penting dari Rumah Sakit Islam" +
                        " Fatimah Cilacap, dengan desain yang sederhana namun informatif agar mudah dip" +
                        "ahami masyarakat."
            }

        ],
        tools: [
            "Adobe Illustrator", "Adobe Photoshop"
        ],
        dad: "400"
    }, {
        id: 4,
        gambar: Proyek4,
        tipe: "Website",
        link: "https://github.com/danielinzaghi/Sistem-Informasi-Alumni",
        nama: "e-Alumni PNC",
        desk: "Sistem Informasi Alumni Politeknik Negeri Cilacap dirancang untuk memudahkan a" +
                "lumni dalam mengakses informasi terkait kegiatan, berita, dan layanan yang ter" +
                "sedia di kampus. Selain itu, sistem ini juga memungkinkan alumni untuk mengisi" +
                " tracer study guna mendukung peningkatan nilai akreditasi kampus. Pembuatan si" +
                "stem ini merupakan bagian dari tugas praktikum Program Profesional.",
        tools: [
            "Laravel",
            "Alpine.js",
            "TailwindCSS",
            "JavaScript",
            "Vite",
            "Node.js"
        ],
        dad: "500"
    }, {
        id: 5,
        gambar: Proyek5,
        tipe: "Website",
        link: "https://github.com/Protic-PNC/jkb-sistem-dosen-wali/",
        nama: "Siwali JKB",
        desk: "Sistem Informasi Dosen Wali Jurusan Komputer dan Bisnis Politeknik Negeri Cilacap (PNC) " +
                "dirancang untuk mempermudah dosen wali dalam mengelola laporan dosen wali serta " +
                " data akademik dan non-akademik mahasiswa. Sistem ini juga memungkinkan pihak jurusan " +
                "memantau laporan dosen wali secara terpusat. Pembangunan sistem ini " +
                "merupakan bagian dari Tugas Akhir sebagai syarat kelulusan.",
        tools: [
            "TailwindCSS",
            "Alpine.js",
            "Laravel",
            "Livewire",
            "Vite",
            "Node.js"
        ],
        dad: "600"
    }, {
        id: 8,
        gambar: Proyek6,
        tipe: "Website",
        link: "https://kampoengkepiting.com/",
        nama: "kampoengkepiting.com",
        desk: "Sistem Informasi Kampoeng Kepiting dirancang untuk mempromosikan sekaligus memudahkan " +
                "pengunjung dalam memperoleh informasi terkait wisata kuliner kepiting di kampung laut, " +
                "Cilacap. Sistem ini menyajikan informasi lengkap mengenai menu, harga, " +
                "dan fasilitas yang tersedia. Pembangunan sistem ini merupakan program Pengabdian Kepada Masyarakat " +
                "yang dilaksanakan oleh dosen PNC.",
        tools: [
            "TailwindCSS",
            "Alpine.js",
            "Laravel",
            "Livewire",
            "Vite",
            "Node.js"
        ],
        dad: "700"
    }
];
