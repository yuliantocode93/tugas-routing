import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1490624068/id/foto/chatbots-sebagai-asisten-pribadi-melihat-ke-masa-depan-ikon-chatbot-memproses-teks-dan.webp?s=1024x1024&w=is&k=20&c=ZWqBSrswxAGIpEWARnYdTONuhAPiCWUtwMJIl79Tl1U=')",
          height: 400,
        }}
      >
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold text-white mb-5">Selamat Data di Halaman Home</h1>
          <h1 class="d-flex justify-content-center fw-bold align-items-center h-200 text-white">Materi Dasar React Routing Saya</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
