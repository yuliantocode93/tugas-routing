import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../Home");
  };
  return (
    <>
      <h1>Ini Halaman About</h1>

      <button onClick={handleClick}>Klik menuju Home</button>

      <div>
        <div
          className="p-5 text-center bg-image"
          style={{ backgroundImage: "url('https://media.istockphoto.com/id/1304093999/id/foto/konsep-e-commerce-bitcoin-di-layar-digital.webp?s=1024x1024&w=is&k=20&c=wTICBoih3knmavATCZSshez412fwzFqqKpeVLz5-TsQ=')", height: 400 }}
        >
          <div className="container py-4">
            <h1 className="display-5 fw-bold text-white">Selamat Data di Halaman About</h1>
            <h3 className="d-flex justify-content-center fw-bold align-items-center h-100 text-white">
              Saya Yulianto berasal dari Lampung.
              <br />
              Saya 1 tahun lalu berprofesi sebagai Guru Swasta dan Tenaga Admanistrasi Di Sekolah Swasta Selama lebih dari 3 tahun.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
