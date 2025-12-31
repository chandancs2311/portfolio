import git from "../../assets/icons/git.png";
import linkedin from "../../assets/icons/linkedin.png";
import mail from "../../assets/icons/mail.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <h2>Contact</h2>

        <div className="contact-grid">
          {/* GitHub */}
          <a
            href="https://github.com/chandancs2311"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <img src={git} alt="GitHub" />
            <span>  </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/c-s-chandan-86a8b2249/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <img src={linkedin} alt="LinkedIn" />
            <span> </span>
          </a>

          {/* Email */}
          <a
            href="mailto:chandancs160581@gmail.com"
            className="contact-card"
          >
            <img src={mail} alt="Email" />
            <span>  </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
