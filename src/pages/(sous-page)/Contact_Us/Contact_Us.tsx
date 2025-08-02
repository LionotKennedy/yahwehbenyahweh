import "./style/contact-us.css";
import "./style/contact_Us.css";
import "./style/responsive.css";
import mail from "./image/mail.png";
import bottomMedia from "./image/bottom-media.jpg";
import { useEffect, useState } from "react";
import { contactApi } from "../../../admin/api/api";
import { fetchContactAPI } from "../../../admin/api/contact";
import { URL } from "../../../admin/api/url";

interface ContactData {
  id: number
  // path: string
  src: string
  alt: string | null
  created_at: string
  updated_at: string
}
const getImageUrl = (src: string): string => {
  if (!src) return "/placeholder.svg"
  if (src.startsWith("http")) return src
  // return `http://localhost:5000${path}`
  return `${URL}${src}`
}
// const getImageUrl = (path: string): string => {
//   if (!path) return "/placeholder.svg"
//   if (path.startsWith("http")) return path
//   // return `http://localhost:5000${path}`
//   return `${URL}${path}`
// }

export function ContactUs() {


  const [title, setTitle] = useState(null);
  const [description1, setDescription1] = useState(null);
  const [description2, setDescription2] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

  const [, setContactImage] = useState<ContactData[]>([])
  const [contactsImages, setContactsImages] = useState("")


  useEffect(() => {
    const loadContactData = async () => {
      try {
        const contactData = await contactApi.get();
        if (contactData.success && contactData.data?.length > 0) {
          const data = contactData.data[0];
          setTitle(data.title);
          setDescription1(data.description1);
          setDescription2(data.description2);
          setPhone(data.phone);
          setEmail(data.email);
        }
      } catch (error) {
        console.error("Error loading contact data:", error);
      }
    };

    loadContactData();
  }, []);
  const fetchContact = async () => {
    try {

      const data = await fetchContactAPI()
      setContactImage(data)
      const sortedContact = data.sort((a: any, b: any) => a.id - b.id)
      const about_contact = sortedContact.find((contact: any) => contact.id === 1)
      if (about_contact) {
        // setContactsImages(getImageUrl(about_contact.path))
        setContactsImages(getImageUrl(about_contact.src))
      }
    } catch (err) {
      // setError(err instanceof Error ? err.message : "Erreur inconnue")
    } finally {
      // setLoading(false)
    }
  }

  useEffect(() => {
    fetchContact()
  }, [])

  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-banner" style={{ backgroundImage: `url(${contactsImages})` }}></div>
      <div className="gold-bar"></div>

      {/* Title Section */}
      <div className="title-section">
        {/* <img
          // src="/public/Contact_Us/image/To_Contact_Us.png?height=200&width=600"
          src={To_Contact_Us}
          alt="To Contact Us"
          className="title-image"
        /> */}
        <h1 className="contact-title">{title}</h1>
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
                {/* P.E.E.S.S. Foundation
                <br />
                1777 NE Loop 410, Suite 600
                <br />
                San Antonio, TX 78217 */}
                {description1}
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
                {/* P.E.E.S.S. Foundation
                <br />
                P.O. Box 884
                <br />
                Seguin, TX 78156-0884 */}
                {description2}
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
                <span className="phone-number">{phone}</span>
                {/* <span className="phone-number">1-800-967-7337</span> */}
                {/* <span className="phone-number">(210) 678-3061</span> */}
              </div>
            </div>
            <div className="icon-container">
              <img
                src="/public/Contact_Us/image/phone.png?height=60&width=60"
                // src={phone}
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
                {/* <span>yahweh@yahwehbenyahweh.com</span> */}
                <span>{email}</span>
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


// export default ContactUs;
export default ContactUs;
