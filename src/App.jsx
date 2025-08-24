import { useState, useRef, useEffect } from "react";
import dataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
    const [filter, setFilter] = useState("Desain"); // default: Desain
    const [showModal, setShowModal] = useState(false);
    const [selectedProyek, setSelectedProyek] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    
    // Tutup dropdown jika klik di luar elemen
    useEffect(() => {
      function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const filteredProjects = listProyek.filter(
      (proyek) => proyek.tipe === filter
    );

  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={dataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <q>Kode yang indah, lahir dari ketekunan.😊</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hai, saya <span className="text-yellow-500">Rayhan</span></h1>
          <p className="text-base/loose mb-6 opacity-50">Saya adalah seorang mahasiswa yang memiliki ketertarikan besar pada dunia Front End Web Development, UI/UX, dan desain grafis. 
            Saya aktif mempelajari berbagai teknologi dan konsep, terutama dalam 
            pengembangan website serta pembuatan karya visual seperti poster, banner, dan logo. 
            Saat ini, saya terus mengasah kemampuan di PHP, Laravel, JavaScript, ReactJS, Tailwind CSS, Figma, Adobe Illustrator, dan GitHub, 
            dengan tujuan membangun fondasi yang kuat untuk berkarya secara kreatif dan bermanfaat di masa depan.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setShowDropdown(!showDropdown) } className="cursor-pointer bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
                Download CV <i className="ri-download-line ri-lg"></i>
              </button>
              {/* dropdown download cv */}
              {showDropdown && (
                <div className="absolute mt-2 w-48 bg-zinc-800 rounded-lg shadow-lg border border-zinc-700">
                    <a
                      href="../assets/CV/cv_it.pdf"
                      download
                      className="block px-4 py-2 hover:bg-zinc-700 rounded-t-lg"
                    >
                      Front End & UI/UX
                    </a>
                    <a
                      href="../assets/CV/cv_design.pdf"
                      download
                      className="block px-4 py-2 hover:bg-zinc-700 rounded-b-lg"
                    >
                      Desain
                    </a>
                </div>
              )}
            </div>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={dataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s rounded-lg" loading="lazy"/>
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={dataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden block" loading="lazy" />
          <p className="text-base/loose mb-10">
              Saya sedang menapaki perjalanan belajar di bidang programming dan desain, 
              dengan fokus pada pengembangan website serta pembuatan desain kreatif seperti poster, banner, dan logo. 
              Saya memiliki minat yang besar untuk menguasai teknologi seperti PHP, Laravel, JavaScript, ReactJS,
              Tailwind CSS, Figma, Adobe Illustrator, Canva, Adobe Photoshop, dan GitHub. Bagi saya, setiap proyek percobaan atau latihan adalah
              kesempatan untuk bereksperimen, mengasah keterampilan, dan mempersiapkan diri menuju dunia kerja yang sesungguhnya.
          </p>
          <div className="flex items-center justify-between">
            <img src={dataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  10<span className="text-violet-500">+</span>
                </h1>
                <span>Proyek Selesai</span>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2<span className="text-violet-500">+</span>
                </h1>
                <span>Tahun Pengalaman</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website ataupun
            desain
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tool.id}
                data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bolc">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* tentang */}

      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa proyek yang telah saya buat.</p>
        {/* pilihan proyek */}
        <div className="flex gap-4 justify-center my-10">
          <button
            className={`px-4 py-2 rounded-md cursor-pointer ${
              filter === "Desain" ? "bg-violet-700 text-white" : "bg-zinc-700"
            }`}
            onClick={() => setFilter("Desain")}
          >
            Desain
          </button>
          <button
            className={`px-4 py-2 rounded-md cursor-pointer ${
              filter === "Website" ? "bg-violet-700 text-white" : "bg-zinc-700"
            }`}
            onClick={() => setFilter("Website")}
          >
            Website
          </button>
        </div>

        {/* proyek */}
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {filteredProjects.map((proyek) => (
            <div key={proyek.id} className="bg-zinc-800 p-4 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  {/* <span className="bg-violet-700 text-white px-3 py-1 rounded-md">{proyek.tipe}</span> */}
                  {proyek.tipe === "Desain" && proyek.galeri && (
                    <span className="text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm bg-green-900 text-green-300">
                      {proyek.galeri.length} {proyek.tipe}
                    </span>
                  )}
                </div>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div>
                  {proyek.tools.map((tool, index) => (
                    <span key={index} className="bg-zinc-600 border border-zinc-500 py-1 px-3 rounded-md mr-2 mb-2 inline-block">{tool}</span>
                  ))}
                </div>
                <div className="text-center mt-8">
                    {/* Tombol Tergantung Tipe */}
                    {proyek.tipe === "Website" ? (
                      <a
                        className="bg-violet-700 hover:bg-violet-600 rounded-lg border border-zinc-600 p-3 block cursor-pointer"
                        href={proyek.link}
                        target="_blank"
                      >
                        Lihat Proyek
                      </a>
                    ) : (
                      <button
                        className="w-full bg-violet-700 hover:bg-violet-600 rounded-lg border border-zinc-600 p-3 block cursor-pointer"
                        onClick={() => {
                          setSelectedProyek(proyek);
                          setShowModal(true);
                        }}
                      >
                        Lihat Desain
                      </button>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DESAIN */}
        {showModal && selectedProyek && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className="bg-zinc-900 text-white p-6 rounded-lg w-[90%] md:w-[80%] lg:w-[65%] max-h-[80%] overflow-y-auto">
              <div className="w-full flex justify-between items">
                <h2 className="text-2xl font-bold mb-4">{selectedProyek.nama}</h2>
                <button className="cursor-pointer hover:text-red-400" onClick={() => setShowModal(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-7">
                    <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"/>
                  </svg>  
                </button>

              </div>
              <p className="mb-4 text-base/loose text-gray-400">{selectedProyek.desk}</p>

              {/* daftar galeri */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {selectedProyek.galeri.map((item, idx) => (
                  <div key={idx} className="rounded p-2 bg-zinc-800 flex flex-col gap-4">
                    <img src={item.img} alt={item.nama} className="rounded" />
                    <h3 className="font-bold text-lg">{item.nama}</h3>
                    <p className="text-sm/loose text-gray-400">{item.desk}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
      {/* proyek */}

      {/* kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl font-bold mb-2 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/rayhanaf230905@gmail.com" method="POST" className="sm:w-fit w-full mx-auto bg-zinc-800 p-10 rounded-md" autoComplete="off"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama"  placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email"  placeholder="Masukkan Email..." className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">Pesan</label>
              <textarea name="pesan" id="pesan" rows="7" cols="45" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 hover:bg-violet-600 rounded-lg border border-zinc-600 p-3 w-full cursor-pointer">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* kontak */}
    </>

  )
}

export default App
