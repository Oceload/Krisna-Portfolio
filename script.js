/* ==========================================================
   BAGIAN YANG BISA KAMU UBAH
   ========================================================== */

// Email tujuan form kontak
const EMAIL_TUJUAN = "email@kamu.com";

// level: 1 = Pemula, 2 = Menengah, 3 = Ahli
const editSkills = [
  {nama:"Logo Edit", level:1},
  {nama:"Video Edit", level:2},
  {nama:"Animasi Edit", level:1}
];
const codingSkills = [
  {nama:"HTML", level:2},
  {nama:"CSS", level:1},
  {nama:"JS", level:1},
  {nama:"Java", level:1},
  {nama:"Python", level:2}
];

// gambar: isi nama file gambar (contoh "proyek1.jpg"), kosongkan "" kalau belum ada
const proyek = [
  {judul:"Website Portfolio", singkat:"Belajar membuat Website Portfolio sejak dini", detail:"Website portofolio pribadi yang dibuat untuk memperkenalkan diri, menampilkan keterampilan, serta mendokumentasikan berbagai proyek yang telah dikerjakan. Proyek ini bertujuan untuk mengembangkan kemampuan dalam HTML, CSS, dan JavaScript sekaligus membangun personal branding di dunia digital.", gambar:"Images/Portfolio.jpg"},
  {judul:"Penanaman Kangkung", singkat:"Menanam kangkung pada tong sampah", detail:"Kegiatan penanaman kangkung menggunakan tong sampah sebagai media tanam alternatif. Proyek ini bertujuan untuk mempelajari cara menanam dan merawat tanaman, mengamati proses pertumbuhannya, serta meningkatkan kreativitas dalam memanfaatkan barang bekas menjadi sesuatu yang bermanfaat.", gambar:"Images/Kangkung.png"},
  {judul:"Penanaman Cabai", singkat:"Menanam cabai pada 10 Polybag", detail:"Kegiatan budidaya tanaman cabai menggunakan 10 polybag sebagai media tanam. Proyek ini meliputi persiapan media tanam, penanaman bibit, penyiraman, dan perawatan tanaman. Melalui kegiatan ini, saya belajar tentang proses budidaya tanaman, kedisiplinan, serta pemanfaatan lahan secara efektif.", gambar:"Images/Cabai.png"},
  {judul:"Belajar Dicoding", singkat:"Mempelajari AI lebih mendalam lewat Dicoding", detail:"Kegiatan pembelajaran melalui platform Dicoding untuk memperdalam pengetahuan di bidang teknologi, khususnya Artificial Intelligence (AI). Pembelajaran ini bertujuan untuk memahami konsep dasar kecerdasan buatan, mengenal penerapannya dalam kehidupan sehari-hari, serta mengembangkan keterampilan digital secara mandiri.", gambar:"Images/Dicoding.jpg"},
  {judul:"Website Gunting Batu Kertas", singkat:"Belajar membuat Website game gunting bar=tu kertas sendiri", detail:"Proyek pembuatan permainan Gunting, Batu, Kertas berbasis website yang memungkinkan pengguna bermain melawan komputer. Proyek ini dibuat untuk mempelajari HTML, CSS, dan JavaScript, sekaligus melatih logika pemrograman, penggunaan percabangan, serta pembuatan fitur interaktif dalam sebuah website.", gambar:"Images/RPS.png"},
  {judul:"Website AI Expression", singkat:"Belajar membuat Website AI Expression", detail:"Proyek pengembangan website berbasis kecerdasan buatan yang bertujuan untuk mempelajari penerapan teknologi AI dalam aplikasi web interaktif. Proyek ini menjadi sarana untuk memahami cara kerja model AI, mengintegrasikan teknologi machine learning, serta mengembangkan kemampuan pemrograman dan pemecahan masalah.", gambar:"Images/Expression.png"}
];
const sertifikat = [
  {judul:"Belajar dasar AI", singkat:"Diterbitkan Dicoding , Tahun 2026", detail:"Sertifikat yang diperoleh setelah mengikuti pembelajaran dasar Artificial Intelligence (AI) melalui Dicoding pada tahun 2026. Pembelajaran ini memberikan pemahaman mengenai konsep dasar kecerdasan buatan, cara kerjanya, serta penerapannya dalam berbagai bidang kehidupan dan perkembangan teknologi modern.", gambar:"Images/Sertifikat1.png"},
  {judul:"Introduction to Financial Literacy", singkat:"Diterbitkan Dicoding , Tahun 2026", detail:"Sertifikat yang diperoleh setelah mengikuti pembelajaran mengenai literasi keuangan pada tahun 2026. Materi ini membantu meningkatkan pemahaman tentang pengelolaan keuangan, penyusunan anggaran, kebiasaan menabung, serta pentingnya mengambil keputusan keuangan secara bijak dan bertanggung jawab.", gambar:"Images/Sertifikat2.png"},
  {judul:"Memulai Pemrograman dengan Python", singkat:"Diterbitkan Dicoding , Tahun 2026", detail:"Sertifikat yang diperoleh setelah mempelajari dasar-dasar pemrograman menggunakan bahasa Python melalui Dicoding pada tahun 2026. Pembelajaran ini mencakup pengenalan sintaks, variabel, tipe data, operator, percabangan, dan perulangan sebagai fondasi untuk mengembangkan kemampuan pemrograman.", gambar:"Images/Sertifikat3.png"},
  {judul:"Prestasi Akademik", singkat:"Diterbitkan SMPN 29 Gresik , Tahun 2026", detail:"Sertifikat penghargaan yang berkaitan dengan pencapaian di bidang akademik. Sertifikat ini menjadi bentuk apresiasi atas usaha dan pencapaian dalam kegiatan pendidikan, sekaligus motivasi untuk terus meningkatkan prestasi, mengembangkan potensi diri, dan mempertahankan semangat belajar.", gambar:"Images/Akademis.jpg"},
  {judul:"Tes Kemampuan Akademik", singkat:"Diterbitkan SMPN 29 Gresik , Tahun 2026", detail:"Sertifikat yang berkaitan dengan pelaksanaan Tes Kemampuan Akademik (TKA). Sertifikat ini menjadi dokumentasi pengalaman akademik dan dapat digunakan sebagai bukti keikutsertaan atau hasil tes sesuai dengan keterangan pada dokumen asli. Pengalaman ini juga menjadi motivasi untuk terus mengembangkan kemampuan berpikir kritis dan pemahaman akademik.", gambar:"Images/TKA.jpg"}
];

/* ==========================================================
   KODE PROGRAM (tidak perlu diubah)
   ========================================================== */
const label = ["", "Pemula", "Menengah", "Ahli"];

function renderSkills(list, el){
  document.getElementById(el).innerHTML = list.map(s => `
    <div class="skill">
      <div class="skill-top"><span>${s.nama}</span><em>${label[s.level]}</em></div>
      <div class="bar"><i data-w="${s.level * 33.33}"></i></div>
    </div>`).join("");
}
renderSkills(editSkills, "edit-skills");
renderSkills(codingSkills, "code-skills");

function renderCards(list, el, arr){
  document.getElementById(el).innerHTML = list.map((p, i) => `
    <article class="item">
      <div class="thumb">${p.gambar ? `<img src="${p.gambar}" alt="${p.judul}">` : "[Gambar]"}</div>
      <div class="item-body">
        <h3>${p.judul}</h3>
        <p>${p.singkat}</p>
        <button data-list="${arr}" data-i="${i}">Baca selengkapnya</button>
      </div>
    </article>`).join("");
}
renderCards(proyek, "proyek-grid", "proyek");
renderCards(sertifikat, "sertifikat-grid", "sertifikat");

// Modal
const modal = document.getElementById("modal");
const data = {proyek, sertifikat};
document.addEventListener("click", e => {
  const b = e.target.closest("button[data-list]");
  if(b){
    const p = data[b.dataset.list][b.dataset.i];
    document.getElementById("m-thumb").innerHTML = p.gambar ? `<img src="${p.gambar}" alt="${p.judul}">` : "[Gambar]";
    document.getElementById("m-title").textContent = p.judul;
    document.getElementById("m-desc").textContent = p.detail;
    modal.classList.add("open");
  }
  if(e.target === modal || e.target.id === "close") modal.classList.remove("open");
});
document.addEventListener("keydown", e => { if(e.key === "Escape") modal.classList.remove("open"); });

// Menu HP
const menu = document.getElementById("menu");
document.getElementById("burger").onclick = () => menu.classList.toggle("open");
menu.addEventListener("click", e => { if(e.target.tagName === "A") menu.classList.remove("open"); });

// Menu aktif saat scroll
const links = [...menu.querySelectorAll("a")];
const spy = new IntersectionObserver(es => es.forEach(en => {
  if(en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), {rootMargin:"-45% 0px -50% 0px"});
document.querySelectorAll("section").forEach(s => spy.observe(s));

// Animasi bar keahlian
const barObs = new IntersectionObserver(es => es.forEach(en => {
  if(en.isIntersecting){ en.target.style.width = en.target.dataset.w + "%"; barObs.unobserve(en.target); }
}), {threshold:.4});
document.querySelectorAll(".bar i").forEach(b => barObs.observe(b));

// Form kontak: membuka aplikasi email dengan pesan yang sudah terisi
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subjek = f.get("subjek") || "Pesan dari " + f.get("nama");
  const isi = `Nama: ${f.get("nama")}\nEmail: ${f.get("email")}\n\n${f.get("pesan")}`;
  location.href = `mailto:${EMAIL_TUJUAN}?subject=${encodeURIComponent(subjek)}&body=${encodeURIComponent(isi)}`;
  document.getElementById("status").textContent = "Membuka aplikasi email kamu...";
});