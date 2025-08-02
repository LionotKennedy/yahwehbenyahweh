
// ContactTab.tsx
"use client"

import { ChevronDown, ChevronUp, Upload, Save, Loader2 } from "lucide-react"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import "./style/HomeTab.css"
import { fetchContactAPI, updateContactAPI } from "../../../api/contact"
import { URL } from "../../../api/url";

interface ContactData {
  id: number
  src: string
  // path: string
  alt: string | null
  created_at: string
  updated_at: string
}

const getImageUrl = (path: string): string => {
  if (!path) return "/placeholder.svg"
  if (path.startsWith("http")) return path
  // return `http://localhost:5000${path}`
  return `${URL}${path}`
}

const ContactTab: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(true)
  const [contactImage, setContactImage] = useState<ContactData[]>([])
  const [contactsImages, setContactsImages] = useState("")
  const [, setContactImages1] = useState<string[]>([])

  // const fetchContact = async () => {
  //   try {
  //     setLoading(true)
  //     setError(null)
  //     const data = await fetchContactAPI()
  //     setContactImage(data)
  //     const sortedContact = data.sort((a: any, b: any) => a.id - b.id)
  //     const about_contact = sortedContact.find((contact: any) => contact.id === 1)
  //     if (about_contact) {
  //       setContactsImages(getImageUrl(about_contact.path))
  //     }
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Erreur inconnue")
  //   } finally {
  //     setLoading(false)
  //   }
  // }

//   const fetchContact = async () => {
//   try {
//     setLoading(true);
//     setError(null);
//     const data = await fetchContactAPI();
//     setContactImage(data);

//     const sortedContact = data.sort((a: any, b: any) => a.id - b.id);
//     const about_contact = sortedContact.find((contact: any) => contact.id === 1);

//     if (about_contact) {
//       const fullUrl = getImageUrl(about_contact.path);
//       console.log("📸 Image distante récupérée :", fullUrl); // <-- ici
//       setContactsImages(fullUrl);
//     }
//   } catch (err) {
//     setError(err instanceof Error ? err.message : "Erreur inconnue");
//   } finally {
//     setLoading(false);
//   }
// };

const fetchContact = async () => {
  try {
    setLoading(true)
    setError(null)
    const data = await fetchContactAPI()
    console.log("Données contact reçues du backend:", data) // Ajout de ce log
    setContactImage(data)
    const sortedContact = data.sort((a: any, b: any) => a.id - b.id)
    const about_contact = sortedContact.find((contact: any) => contact.id === 1)
    console.log("Données contact reçues du backend preci:", about_contact) // Ajout de ce log
    if (about_contact) {
      const imageUrl = getImageUrl(about_contact.src)
      // const imageUrl = getImageUrl(about_contact.path)
      console.log("URL de l'image contact:", imageUrl) // Ajout de ce log
      setContactsImages(imageUrl)
    }
  } catch (err) {
    setError(err instanceof Error ? err.message : "Erreur inconnue")
  } finally {
    setLoading(false)
  }
}


  useEffect(() => {
    fetchContact()
  }, [])

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter:
      | React.Dispatch<React.SetStateAction<string>>
      | React.Dispatch<React.SetStateAction<string[]>>,
    index?: number
  ) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      if (index !== undefined) {
        if (setter === setContactImages1) {
          setter((prev: string[]) => {
            const newImages = [...prev]
            newImages[index] = result
            return newImages
          })
        }
      } else {
        if (typeof setter === "function") {
          ;(setter as React.Dispatch<React.SetStateAction<string>>)(result)
        }
      }
    }
    reader.readAsDataURL(file)
  }

  const base64ToFile = (base64String: string, filename: string): File => {
    const arr = base64String.split(",")
    const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg"
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
  }

  const saveContact = async (id: number, imageData: string, alt?: string) => {
    try {
      let body: FormData | string
      const headers: Record<string, string> = {}
      if (imageData.startsWith("data:image/")) {
        const file = base64ToFile(imageData, `banner-${id}.jpg`)
        const formData = new FormData()
        formData.append("image", file)
        formData.append("alt", alt || "Updated Contact")
        body = formData
      } else {
        headers["Content-Type"] = "application/json"
        body = JSON.stringify({ src: imageData, alt: alt || "Updated Contact" })
        // body = JSON.stringify({ path: imageData, alt: alt || "Updated Contact" })
      }
      await updateContactAPI(id, body, headers)
      toast.success("Image sauvegardée !")
      await fetchContact()
    } catch (error) {
      console.error(error)
      toast.error("Erreur lors de la sauvegarde.")
      throw error
    }
  }

  const handleSaveImage = async (
    imageData: string | string[],
    _section: string,
    bannerId?: number
  ) => {
    try {
      if (bannerId && typeof imageData === "string") {
        await saveContact(bannerId, imageData)
      } else {
        toast("Sauvegarde locale uniquement")
      }
    } catch {
      /* toast déjà appelé dans saveContact */
    }
  }

  const handleRefresh = () => {
    fetchContact()
  }

  if (loading) {
    return (
      <div className="home-container">
        <div
          className="loading-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Loader2 className="animate-spin" size={32} />
          <p>Chargement des images...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="home-container">
      {error && (
        <div
          className="error-container"
          style={{
            backgroundColor: "#fee2e2",
            border: "1px solid #fecaca",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "16px",
            color: "#dc2626",
          }}
        >
          <p>Erreur lors du chargement: {error}</p>
          <button
            onClick={handleRefresh}
            style={{
              marginTop: "8px",
              padding: "4px 8px",
              backgroundColor: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
        </div>
      )}

      {/* Section Contact */}
      <section className="home-section">
        <div
          className="section-header"
          onClick={() => setIsContactOpen(!isContactOpen)}
        >
          <h1 className="section-title">Contact</h1>
          <button className="toggle-section">
            {isContactOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
        {isContactOpen && (
          <div className="section-content">
            <div className="single-image-container">
              <div className="image-preview large">
                <img
                  src={contactsImages || "/placeholder.svg"}
                  alt={contactImage.find((b) => b.id === 1)?.alt || ""}
                  className="preview-image"
                />
                {contactImage.find((b) => b.id === 5) && (
                  <div
                    className="image-info"
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      left: "8px",
                      backgroundColor: "rgba(0,0,0,0.7)",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px",
                    }}
                  >
                    ID: 5
                  </div>
                )}
              </div>
              <div className="image-controls">
                <label className="upload-btn">
                  <Upload size={16} />
                  Choisir une image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setContactsImages)}
                    hidden
                  />
                </label>
                <button
                  onClick={() =>
                    handleSaveImage(contactsImages, "About-Contact", 1)
                  }
                  className="save-btn"
                  disabled={!contactImage}
                >
                  <Save size={16} />
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default ContactTab




































// "use client"

// import { ChevronDown, ChevronUp, Upload, Save, Loader2 } from "lucide-react"
// import React, { useEffect, useState } from "react"
// import toast from "react-hot-toast"
// import "./style/HomeTab.css"
// import { fetchContactAPI, updateContactAPI } from "../../../api/contact"
// import { URL } from "../../../api/url";

// interface ContactData {
//   id: number
//   src: string // Changé de "path" à "src" pour correspondre à la réponse de l'API
//   alt: string | null
//   created_at: string
//   updated_at: string
// }

// const getImageUrl = (path: string): string => {
//   if (!path) return "/placeholder.svg"
//   if (path.startsWith("http")) return path
//   return `${URL}${path}` // Utilise la constante URL importée
// }

// const ContactTab: React.FC = () => {
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [isContactOpen, setIsContactOpen] = useState(true)
//   const [contactImage, setContactImage] = useState<ContactData[]>([])
//   const [contactsImages, setContactsImages] = useState("")
//   const [, setContactImages1] = useState<string[]>([])

//   const fetchContact = async () => {
//     try {
//       setLoading(true)
//       setError(null)
//       const data = await fetchContactAPI()
//       console.log("Données contact reçues du backend:", data)
//       setContactImage(data)
//       const sortedContact = data.sort((a: any, b: any) => a.id - b.id)
//       const about_contact = sortedContact.find((contact: any) => contact.id === 1)
//       console.log("Données contact reçues du backend preci:", about_contact)
//       if (about_contact) {
//         const imageUrl = getImageUrl(about_contact.src) // Changé de "path" à "src"
//         console.log("URL de l'image contact:", imageUrl)
//         setContactsImages(imageUrl)
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Erreur inconnue")
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchContact()
//   }, [])

//   const handleImageUpload = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setter:
//       | React.Dispatch<React.SetStateAction<string>>
//       | React.Dispatch<React.SetStateAction<string[]>>,
//     index?: number
//   ) => {
//     const file = e.target.files?.[0]
//     if (!file) return
//     const reader = new FileReader()
//     reader.onload = () => {
//       const result = reader.result as string
//       if (index !== undefined) {
//         if (setter === setContactImages1) {
//           setter((prev: string[]) => {
//             const newImages = [...prev]
//             newImages[index] = result
//             return newImages
//           })
//         }
//       } else {
//         if (typeof setter === "function") {
//           ;(setter as React.Dispatch<React.SetStateAction<string>>)(result)
//         }
//       }
//     }
//     reader.readAsDataURL(file)
//   }

//   const base64ToFile = (base64String: string, filename: string): File => {
//     const arr = base64String.split(",")
//     const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg"
//     const bstr = atob(arr[1])
//     let n = bstr.length
//     const u8arr = new Uint8Array(n)
//     while (n--) {
//       u8arr[n] = bstr.charCodeAt(n)
//     }
//     return new File([u8arr], filename, { type: mime })
//   }

//   const saveContact = async (id: number, imageData: string, alt?: string) => {
//     try {
//       let body: FormData | string
//       const headers: Record<string, string> = {}
//       if (imageData.startsWith("data:image/")) {
//         const file = base64ToFile(imageData, `banner-${id}.jpg`)
//         const formData = new FormData()
//         formData.append("image", file)
//         formData.append("alt", alt || "Updated Contact")
//         body = formData
//       } else {
//         headers["Content-Type"] = "application/json"
//         body = JSON.stringify({ path: imageData, alt: alt || "Updated Contact" })
//       }
//       await updateContactAPI(id, body, headers)
//       toast.success("Image sauvegardée !")
//       await fetchContact()
//     } catch (error) {
//       console.error(error)
//       toast.error("Erreur lors de la sauvegarde.")
//       throw error
//     }
//   }

//   const handleSaveImage = async (
//     imageData: string | string[],
//     _section: string,
//     bannerId?: number
//   ) => {
//     try {
//       if (bannerId && typeof imageData === "string") {
//         await saveContact(bannerId, imageData)
//       } else {
//         toast("Sauvegarde locale uniquement")
//       }
//     } catch {
//       /* toast déjà appelé dans saveContact */
//     }
//   }

//   const handleRefresh = () => {
//     fetchContact()
//   }

//   if (loading) {
//     return (
//       <div className="home-container">
//         <div
//           className="loading-container"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "200px",
//             flexDirection: "column",
//             gap: "16px",
//           }}
//         >
//           <Loader2 className="animate-spin" size={32} />
//           <p>Chargement des images...</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="home-container">
//       {error && (
//         <div
//           className="error-container"
//           style={{
//             backgroundColor: "#fee2e2",
//             border: "1px solid #fecaca",
//             borderRadius: "8px",
//             padding: "12px",
//             marginBottom: "16px",
//             color: "#dc2626",
//           }}
//         >
//           <p>Erreur lors du chargement: {error}</p>
//           <button
//             onClick={handleRefresh}
//             style={{
//               marginTop: "8px",
//               padding: "4px 8px",
//               backgroundColor: "#dc2626",
//               color: "white",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//           >
//             Réessayer
//           </button>
//         </div>
//       )}

//       <section className="home-section">
//         <div
//           className="section-header"
//           onClick={() => setIsContactOpen(!isContactOpen)}
//         >
//           <h1 className="section-title">Contact</h1>
//           <button className="toggle-section">
//             {isContactOpen ? (
//               <ChevronUp size={24} />
//             ) : (
//               <ChevronDown size={24} />
//             )}
//           </button>
//         </div>
//         {isContactOpen && (
//           <div className="section-content">
//             <div className="single-image-container">
//               <div className="image-preview large">
//                 <img
//                   src={contactsImages || "/placeholder.svg"}
//                   alt={contactImage.find((b) => b.id === 1)?.alt || ""}
//                   className="preview-image"
//                 />
//                 {contactImage.find((b) => b.id === 1) && (
//                   <div
//                     className="image-info"
//                     style={{
//                       position: "absolute",
//                       bottom: "8px",
//                       left: "8px",
//                       backgroundColor: "rgba(0,0,0,0.7)",
//                       color: "white",
//                       padding: "4px 8px",
//                       borderRadius: "4px",
//                       fontSize: "14px",
//                     }}
//                   >
//                     ID: 1
//                   </div>
//                 )}
//               </div>
//               <div className="image-controls">
//                 <label className="upload-btn">
//                   <Upload size={16} />
//                   Choisir une image
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => handleImageUpload(e, setContactsImages)}
//                     hidden
//                   />
//                 </label>
//                 <button
//                   onClick={() =>
//                     handleSaveImage(contactsImages, "About-Contact", 1)
//                   }
//                   className="save-btn"
//                   disabled={!contactsImages}
//                 >
//                   <Save size={16} />
//                   Sauvegarder
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   )
// }

// export default ContactTab