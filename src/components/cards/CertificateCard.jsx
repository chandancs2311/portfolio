const CertificateCard = ({ title, file }) => {
  return (
    <div className="certificate-card">
      <h4>{title}</h4>

      <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className="neon-button"
      >
        View
      </a>
    </div>
  );
};

export default CertificateCard;
