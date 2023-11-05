import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../Home");
  };

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <div className=" mb-3">
        <h1>Ini Halaman Contact</h1>
        <button onClick={handleClick}>Klik menuju Home</button>
      </div>

      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Contact Me!</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} name="contact-form">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nama Lengkap
                </label>
                <input type="text" className="form-control" id="name" aria-describedby="name" name="nama" value={formData.nama} onChange={(e) => setFormData({ ...formData, nama: e.target.value })} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" aria-describedby="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div className="mb-3">
                <label htmlFor="pesan" className="form-label">
                  Pesan
                </label>
                <textarea className="form-control" id="pesan" rows="3" name="pesan" value={formData.pesan} onChange={(e) => setFormData({ ...formData, pesan: e.target.value })} />
              </div>

              <button type="submit" className="btn btn-primary btn-kirim">
                Kirim
              </button>

              <button className="btn btn-primary btn-loading d-none" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            </form>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d6efd"
          fillOpacity="1"
          d="M0,32L20,53.3C40,75,80,117,120,138.7C160,160,200,160,240,176C280,192,320,224,360,224C400,224,440,192,480,181.3C520,171,560,181,600,186.7C640,192,680,192,720,186.7C760,181,800,171,840,144C880,117,920,75,960,74.7C1000,75,1040,117,1080,133.3C1120,149,1160,139,1200,138.7C1240,139,1280,149,1320,165.3C1360,181,1400,203,1420,213.3L1440,224L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Contact;
