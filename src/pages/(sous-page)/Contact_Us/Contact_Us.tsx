import "./style/contact-us.css";
import "./style/contact_Us.css";
import "./style/responsive.css";
// import "./style/news.css";
import To_Contact_Us from "./image/To_Contact_Us.png";
import mail from "./image/mail.png";
import phone from "./image/phone.png";
import bottomMedia from "./image/bottom-media.jpg";

export function ContactUs() {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-banner"></div>
      <div className="gold-bar"></div>

      {/* Title Section */}
      <div className="title-section">
        <img
          // src="/public/Contact_Us/image/To_Contact_Us.png?height=200&width=600"
          src={To_Contact_Us}
          alt="To Contact Us"
          className="title-image"
        />
      </div>

      {/* Contact Information Sections */}
      <div className="contact-content">
        {/* Office Address */}
        <div className="contact-section">
          <div className="contact-item">
            <div className="icon-container">
              <img
                // src="/public/Contact_Us/image/mail.png?height=80&width=80"
                src={mail}
                alt="mail icon"
                className="contact-icon"
              />
            </div>
            <div className="contact-text">
              <span className="contact-label">
                <strong>Adiresy Ofisiny:</strong>
              </span>
              <div className="address">
                P.E.E.S.S. Foundation
                <br />
                1777 NE Loop 410, Suite 600
                <br />
                San Antonio, TX 78217
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        {/* Mailing Address */}
        <div className="contact-section">
          <div className="contact-item">
            <div className="icon-container">
              <img
                // src="/public/Contact_Us/image/mail.png"
                src={mail}
                alt="mail icon"
                className="contact-icon"
              />
            </div>
            <div className="contact-text">
              <span className="contact-label">
                <strong>Adiresy Paositra:</strong>
              </span>
              <div className="address">
                P.E.E.S.S. Foundation
                <br />
                P.O. Box 884
                <br />
                Seguin, TX 78156-0884
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        {/* Phone Section Header */}
        <div className="contact-section">
          <div className="phone-header">
            NA ANTSOY (AVY any AMERIKA SY KANADA)
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="contact-section">
          <div className="contact-item phone-item">
            <div className="contact-text">
              <div className="phone-numbers">
                <span className="phone-number">1-800-967-7337</span>
                <span className="phone-number">(210) 678-3061</span>
              </div>
            </div>
            <div className="icon-container">
              <img
                // src="/public/Contact_Us/image/phone.png?height=60&width=60"
                src={phone}
                alt="phone icon"
                className="phone-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-contact">
        <div id="Email_Us">
          <p className="dd">
            <span className="dds">
              <span className="pg-link-text-ul-1-contact xx">
                <strong>Ny adiresy mailakanay</strong>
              </span>
              <br />
              <span>
                <span>yahweh@yahwehbenyahweh.com</span>
              </span>
            </span>
          </p>
        </div>
        <div id="pg-btm-media-contact">
          <img
            className="bottom-media-img-contact"
            // src="/public/Contact_Us/image/bottom-media.jpg"
            src={bottomMedia}
          />
        </div>
      </div>
      <div className="gold-bar"></div>
    </div>
  );
}

export default ContactUs;
