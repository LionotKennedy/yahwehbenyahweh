import "./style/contact_Us.css";
import "./style/responsive.css";
export function Contact_Us() {
  return (
    <div id="backdrop-contact" className="contact-us-page">
      <div id="pg-banner-contact" className="page-banner"></div>
      <div id="top-bar-gold-contact" className=""></div>
      <div id="Yahweh_Ben_Yahweh_contact" className="pg-btm-pd-mod">
        <img
          src="/src/pages/(sous-page)/Contact_Us/image/To_Contact_Us.png"
          alt="To Contact Us"
          className="Yahweh_Ben_Yahweh_width"
        />
      </div>
      <div className="sec-text pg-text-fmt">
        <div className="side-image">
          <img
            className="img-size-mail"
            src="/src/pages/(sous-page)/Contact_Us/image/mail.png"
            alt="mail icon"
          />
        </div>
        <div className="">
          <span className="pg-link-text-ul">
            <strong>Office Address:</strong>
          </span>
          <br />
          P.E.E.S.S. Foundation
          <br />
          1777 NE Loop 410, Suite 600
          <br />
          San Antonio, TX 78217
        </div>
        <div className="side-clear"></div>
      </div>
      <div className="sec-bar-fol pg-top-pd-mod"></div>
      <div className="sec-text pg-text-fmt">
        <div className="side-image">
          <img
            className="img-size-mail"
            src="/src/pages/(sous-page)/Contact_Us/image/mail.png"
            alt="mail icon"
          />
        </div>
        <div className="side-text ">
          <span className="pg-link-text-ul">
            <strong>Post Office Box:</strong>
          </span>
          <br />
          P.E.E.S.S. Foundation
          <br />
          P.O. Box 884
          <br />
          Seguin, TX 78156-0884
        </div>
        <div className="side-clear"></div>
      </div>
      <div className="sec-bar-fol pg-top-pd-mod"></div>
      <div className="sec-text pg-text-fmt">
        <div className="side-text side-padding-ls">
          OR CALL (FROM USA or CANADA)
          <br />
        </div>
        <div className="side-clear"></div>
      </div>
      <div className="sec-text pg-text-fmt side-padding div-phone-fmt">
        <div className="side-text">
          <span className="pg-link-text-ul">1-800-967-7337</span>
          <br />
          <span className="pg-link-text-ul">(210) 678-3061</span>
        </div>
        <div className="side-phone">
          <img
            className="img-size-phone"
            src="/src/pages/(sous-page)/Contact_Us/image/phone.png"
            alt="phone icon"
          />
        </div>
        <div className="side-clear"></div>
      </div>
      <div className="wrapper-contact">
        <div id="Email_Us">
          <p>
            <span className="pg-link-text-ul-1">
              <strong>Our Email address</strong>
            </span>
            <br />
            yahweh@yahwehbenyahweh.com
          </p>
        </div>
        <div id="pg-btm-media-contact">
          <img
            className="bottom-media-img-contact"
            src="/src/pages/(sous-page)/Contact_Us/image/bottom-media.jpg"
          />
        </div>
      </div>
      <div id="top-bar-gold">
        </div>
      {/* Coucou 7 */}
    </div>
  );
}
export default Contact_Us;
