// import { ChevronDown, ChevronUp, Upload, Save, Loader2 } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import "./style/HomeTab.css";

// interface ContactData {
//   id: number;
//   path: string;
//   alt: string | null;
//   created_at: string;
//   updated_at: string;
// }

// const getImageUrl = (path: string): string => {
//   if (!path) return "/placeholder.svg";
//   // Si le path commence par http, c'est déjà une URL complète
//   if (path.startsWith("http")) return path;
//   // Sinon, ajouter l'URL du serveur backend
//   return `http://localhost:5000${path}`;
// };

// const ContactTab: React.FC = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isContactOpen, setIsContactOpen] = useState(true);
//   const [contactImage, setContactImage] = useState<ContactData[]>([]);
//   const [contactsImages, setContactsImages] = useState("");
//   const [contactImagas1, setContactImages1] = useState<string[]>([]);
//   const fetchContact = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       console.log("🚀 Début de la récupération des banners...");

//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Erreur HTTP: ${response.status}`);
//       }

//       const data: ContactData[] = await response.json();

//       setContactImage(data);

//       // Trier les banners par ID pour avoir un ordre cohérent
//       const sortedContact = data.sort((a, b) => a.id - b.id);
//       console.log("🔄 Sections triées par ID:", sortedContact);

//       const about_contact = sortedContact.find((contact) => contact.id === 1);
//       console.log("📚 Banner livre du mois (ID 1):", about_contact);
//       if (about_contact) {
//         setContactsImages(getImageUrl(about_contact.path));
//         console.log(
//           "📚 URL complète du livre du mois:",
//           getImageUrl(about_contact.path)
//         );
//       } else {
//         console.log(
//           "📚 Aucune banner ID 4 trouvée, utilisation de l'image par défaut"
//         );
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Erreur inconnue");
//       // setContactsImages(
//       //   defaultImages.banners.slice(0, 3).map((contact) => contact.path)
//       // );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     console.log("🔄 useEffect déclenché - Appel de fetchContact");
//     fetchContact();
//   }, []);

//   const handleImageUpload = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setter:
//       | React.Dispatch<React.SetStateAction<string>>
//       | React.Dispatch<React.SetStateAction<string[]>>,
//     index?: number
//   ) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = () => {
//       const result = reader.result as string;
//       if (index !== undefined) {
//         // Cas des tableaux (homeImages1 et homeImages2)
//         if (setter === setContactImages1) {
//           setter((prev: string[]) => {
//             const newImages = [...prev];
//             newImages[index] = result;
//             return newImages;
//           });
//         }
//       } else {
//         // Cas des images uniques
//         if (typeof setter === "function") {
//           (setter as React.Dispatch<React.SetStateAction<string>>)(result);
//         }
//       }
//     };
//     reader.readAsDataURL(file);
//   };

//   const base64ToFile = (base64String: string, filename: string): File => {
//     const arr = base64String.split(",");
//     const mime = arr[0].match(/:(.*?);/)?.[1] || "image/jpeg";
//     const bstr = atob(arr[1]);
//     let n = bstr.length;
//     const u8arr = new Uint8Array(n);
//     while (n--) {
//       u8arr[n] = bstr.charCodeAt(n);
//     }
//     return new File([u8arr], filename, { type: mime });
//   };

//   const saveContact = async (id: number, imageData: string, alt?: string) => {
//     try {
//       console.log(`💾 Début de la sauvegarde de la banner ID ${id}`);

//       let body: FormData | string;
//       const headers: Record<string, string> = {};

//       // Vérifier si c'est une image base64 (uploadée localement)
//       if (imageData.startsWith("data:image/")) {
//         console.log(
//           `📤 Image base64 détectée pour ID ${id}, conversion en FormData`
//         );

//         // Convertir base64 en File
//         const file = base64ToFile(imageData, `banner-${id}.jpg`);

//         // Créer FormData
//         const formData = new FormData();
//         formData.append("image", file);
//         formData.append("alt", alt || "Updated Contact");

//         body = formData;
//         // Ne pas définir Content-Type pour FormData, le navigateur le fait automatiquement
//       } else {
//         console.log(`📤 URL d'image existante pour ID ${id}, envoi en JSON`);
//         // Image existante, envoyer en JSON
//         headers["Content-Type"] = "application/json";
//         body = JSON.stringify({
//           path: imageData,
//           alt: alt || "Updated Contact",
//         });
//       }

//       const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
//         method: "PUT",
//         headers: headers,
//         body: body,
//       });

//       console.log(`📡 Réponse de sauvegarde pour ID ${id}:`, response);

//       if (!response.ok) {
//         throw new Error(`Erreur HTTP: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(`✅ Contact ID ${id} sauvegardée avec succès:`, result);

//       return result;
//     } catch (error) {
//       console.error(
//         `❌ Erreur lors de la sauvegarde de la Contact ID ${id}:`,
//         error
//       );
//       throw error;
//     }
//   };
//   // const handleSaveImage = () => {
//   //   if (contactImage) {
//   //     console.log("Image de contact sauvegardée:", contactImage);
//   //   }
//   // };
//   const handleSaveImage = async (
//     imageData: string | string[],
//     section: string,
//     bannerId?: number
//   ) => {
//     try {
//       console.log(`💾 Sauvegarde demandée pour ${section}:`, {
//         imageData,
//         bannerId,
//       });

//       if (bannerId && typeof imageData === "string") {
//         // Sauvegarder via l'API
//         await saveContact(bannerId, imageData);
//         alert(`✅ Image ${section} sauvegardée avec succès!`);

//         // Recharger les données pour avoir les dernières informations
//         await fetchContact();
//       } else {
//         // Ancienne logique pour les autres sections
//         console.log(`Image sauvegardée pour ${section}:`, imageData);
//         alert(`⚠️ Sauvegarde locale pour ${section} (pas d'API configurée)`);
//       }
//     } catch (error) {
//       console.error("Erreur lors de la sauvegarde:", error);
//       alert(
//         `❌ Erreur lors de la sauvegarde: ${
//           error instanceof Error ? error.message : "Erreur inconnue"
//         }`
//       );
//     }
//   };
//   const handleRefresh = () => {
//     fetchContact();
//   };

//   // Affichage du loader pendant le chargement
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
//     );
//   }

//   return (
//     <div className="home-container">
//       {/* Affichage d'erreur si nécessaire */}
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

//       {/* Section Contact */}
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
//                 {contactImage.find((b) => b.id === 5) && (
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
//                     ID: 5
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
//                   disabled={!contactImage}
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
//   );
// };

// export default ContactTab;










































// // ContactTab.tsx
// import { ChevronDown, ChevronUp, Upload, Save, Loader2 } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { fetchContact, updateContact, type ContactData } from "../../../api/contact";
// import "./style/HomeTab.css";

// const getImageUrl = (path: string): string => {
//   if (!path) return "/placeholder.svg";
//   if (path.startsWith("http")) return path;
//   return `http://localhost:5000${path}`;
// };

// const ContactTab: React.FC = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isContactOpen, setIsContactOpen] = useState(true);
//   const [contactImage, setContactImage] = useState<ContactData[]>([]);
//   const [contactsImages, setContactsImages] = useState("");

//   const refresh = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const data = await fetchContact();
//       setContactImage(data);
//       const img = data.find((c) => c.id === 1);
//       setContactsImages(img ? getImageUrl(img.path) : "/placeholder.svg");
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Erreur inconnue");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     refresh();
//   }, []);

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) setContactsImages(URL.createObjectURL(file));
//   };

//   const handleSave = async () => {
//     try {
//       const fileInput = document.querySelector(
//         "input[type='file']"
//       ) as HTMLInputElement;
//       const file = fileInput?.files?.[0];
//       await updateContact(1, file || contactsImages, "Contact");
//       alert("✅ Image Contact sauvegardée !");
//       await refresh();
//     } catch (err) {
//       alert(`❌ Erreur : ${(err as Error).message}`);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <Loader2 className="animate-spin" size={32} />
//         <p>Chargement des images...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="home-container">
//       {error && (
//         <div className="error-container">
//           <p>{error}</p>
//           <button onClick={refresh}>Réessayer</button>
//         </div>
//       )}

//       <section className="home-section">
//         <div className="section-header" onClick={() => setIsContactOpen(!isContactOpen)}>
//           <h1 className="section-title">Contact</h1>
//           <button className="toggle-section">
//             {isContactOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//           </button>
//         </div>
//         {isContactOpen && (
//           <div className="section-content">
//             <div className="single-image-container">
//               <div className="image-preview large">
//                 <img src={contactsImages} alt="Contact" />
//               </div>
//               <div className="image-controls">
//                 <label className="upload-btn">
//                   <Upload size={16} />
//                   Choisir une image
//                   <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
//                 </label>
//                 <button onClick={handleSave} className="save-btn">
//                   <Save size={16} />
//                   Sauvegarder
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default ContactTab;



























// ContactTab.tsx
"use client"

import { ChevronDown, ChevronUp, Upload, Save, Loader2 } from "lucide-react"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import "./style/HomeTab.css"
import { fetchContactAPI, updateContactAPI } from "../../../api/contact"

interface ContactData {
  id: number
  path: string
  alt: string | null
  created_at: string
  updated_at: string
}

const getImageUrl = (path: string): string => {
  if (!path) return "/placeholder.svg"
  if (path.startsWith("http")) return path
  return `http://localhost:5000${path}`
}

const ContactTab: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(true)
  const [contactImage, setContactImage] = useState<ContactData[]>([])
  const [contactsImages, setContactsImages] = useState("")
  const [contactImagas1, setContactImages1] = useState<string[]>([])

  const fetchContact = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchContactAPI()
      setContactImage(data)
      const sortedContact = data.sort((a: any, b: any) => a.id - b.id)
      const about_contact = sortedContact.find((contact: any) => contact.id === 1)
      if (about_contact) {
        setContactsImages(getImageUrl(about_contact.path))
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
        body = JSON.stringify({ path: imageData, alt: alt || "Updated Contact" })
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
    section: string,
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