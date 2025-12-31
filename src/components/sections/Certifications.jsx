import certificates from "../../data/certificates";
import CertificateCard from "../cards/CertificateCard";

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="section-container">
        <h2>Certifications</h2>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              file={cert.file}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
