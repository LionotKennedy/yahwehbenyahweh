

// // API base URL
// const API_BASE_URL = "http://localhost:5000/api"

// // Fetch data from API
// const fetchData_2_2 = async (endpoint: string, setDataFunction: (data: any) => void) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/${endpoint}`)
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`)
//     }
//     const data = await response.json()
//     if (data.success && data.data && data.data.length > 0) {
//       setDataFunction(data.data[0])
//     }
//   } catch (error) {
//     console.error(`Error fetching ${endpoint}:`, error)
//   }
// }

// // Update data via API
// const updateData_2_2 = async (endpoint: string, id: number, data: any) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`)
//     }
//     const result = await response.json()
//     console.log(`Update successful for ${endpoint}:`, result)
//     return result
//   } catch (error) {
//     console.error(`Error updating ${endpoint}:`, error)
//     throw error
//   }
// }

// Load all data on component mount
// useEffect(() => {
//   // Load Tetragrama data
//   fetchData_2_2("tetragrama", (data) => {
//     setTitle(data.title || "")
//     setDescription(data.description || "")
//     setDescription2(data.description2 || "")
//   })

//   // Load Nation data
//   fetchData_2_2("nation", (data) => {
//     setTitleNation(data.titlenation || "")
//     setDescriptionNation(data.descriptionnation || "")
//     setDescriptionNation2(data.descriptionnation2 || "")
//     setDescriptionNation3(data.descriptionnation3 || "")
//   })

//   // Load Universe data
//   fetchData_2_2("universe", (data) => {
//     setDescriptionUniverse1(data.descriptionuniverse1 || "")
//     setDescriptionUniverse2(data.descriptionuniverse2 || "")
//     setDescriptionUniverse3(data.descriptionuniverse3 || "")
//     setDescriptionUniverse4(data.descriptionuniverse4 || "")
//     setVideoLinkUniverse(data.videolinkuniverse || "")
//   })

//   // Load Feasts data
//   fetchData_2_2("feasts", (data) => {
//     setTitleFeasts(data.titlefeasts || "")
//     setTitleFeasts2(data.titlefeasts2 || "")
//     setFieldFeasts2(data.fieldfeasts2 || "")
//     setTitleFeasts3(data.titlefeasts3 || "")
//     setFieldFeasts3(data.fieldfeasts3 || "")
//     setTitleFeasts4(data.titlefeasts4 || "")
//     setFieldFeasts4(data.fieldfeasts4 || "")
//     setDescriptionFeasts4(data.descriptionfeasts4 || "")
//     setVideoFeasts4(data.videofeasts4 || "")
//     setTitleFeasts5(data.titlefeasts5 || "")
//     setFieldFeasts5(data.fieldfeasts5 || "")
//     setDescriptionFeasts5(data.descriptionfeasts5 || "")
//     setVideoFeasts5(data.videofeasts5 || "")
//     setTitleFeasts6(data.titlefeasts6 || "")
//     setFieldFeasts6a(data.fieldfeasts6a || "")
//     setFieldFeasts6b(data.fieldfeasts6b || "")
//   })

//   fetchData_2_2("crucifixion", (data) => {
//     setTitleCrucifixion(data.titlecrucifixion || "")
//     setDescriptionCrucifixion1(data.descriptioncrucifixion1 || "")
//     setDescriptionCrucifixion2(data.descriptioncrucifixion2 || "")
//     setDescriptionCrucifixion3(data.descriptioncrucifixion3 || "")
//     setDescriptionCrucifixion4(data.descriptioncrucifixion4 || "")
//     setDescriptionCrucifixion5(data.descriptioncrucifixion5 || "")
//     setDescriptionCrucifixion6(data.descriptioncrucifixion6 || "")
//     setDescriptionCrucifixion7(data.descriptioncrucifixion7 || "")
//     setDescriptionCrucifixion8(data.descriptioncrucifixion8 || "")
//     setDescriptionCrucifixion9(data.descriptioncrucifixion9 || "")
//     setDescriptionCrucifixion10(data.descriptioncrucifixion10 || "")
//     setDescriptionCrucifixion11(data.descriptioncrucifixion11 || "")
//   })

//   // Load Sabbath data
//   fetchData_2_2("sabbath", (data) => {
//     setTitleSabbath(data.titlesabbath || "")
//     setDescriptionSabbath1(data.descriptionsabbath1 || "")
//     setDescriptionSabbath2(data.descriptionsabbath2 || "")
//     setDescriptionSabbath3(data.descriptionsabbath3 || "")
//     setDescriptionSabbath4(data.descriptionsabbath4 || "")
//     setDescriptionSabbath5(data.descriptionsabbath5 || "")
//   })

//   // Load Erosion data
//   fetchData_2_2("erosion", (data) => {
//     setDescriptionErosion(data.descriptionerosion || "")
//   })

//   // Load Operation data
//   fetchData_2_2("operation", (data) => {
//     setDescriptionOperation1(data.descriptionoperation1 || "")
//     setDescriptionOperation2(data.descriptionoperation2 || "")
//     setDescriptionOperation3(data.descriptionoperation3 || "")
//     setDescriptionOperation4(data.descriptionoperation4 || "")
//   })

//   // Load Balance data
//   fetchData_2_2("balance", (data) => {
//     setTitleBalance(data.titlebalance || "")
//     setDescriptionBalance1(data.descriptionbalance1 || "")
//     setDescriptionBalance2(data.descriptionbalance2 || "")
//     setDescriptionBalance3(data.descriptionbalance3 || "")
//     setDescriptionBalance4(data.descriptionbalance4 || "")
//   })
// }, [])

// // Handler functions with API integration
// const handleSaveTetragrama = async () => {
//   try {
//     const data = {
//       title,
//       description,
//       description2,
//     }
//     await updateData_2_2("tetragrama", 1, data)
//   } catch (error) {
//     console.error("Error saving Tetragrama:", error)
//   }
// }

// const handleSaveNation = async () => {
//   try {
//     const data = {
//       titleNation: titleNation,
//       descriptionNation: descriptionNation,
//       descriptionNation2: descriptionNation2,
//       descriptionNation3: descriptionNation3,
//     }
//     await updateData_2_2("nation", 1, data)
//   } catch (error) {
//     console.error("Error saving Nation:", error)
//   }
// }

// const handleSaveUniverse = async () => {
//   try {
//     const data = {
//       descriptionUniverse1: descriptionUniverse1,
//       descriptionUniverse2: descriptionUniverse2,
//       descriptionUniverse3: descriptionUniverse3,
//       descriptionUniverse4: descriptionUniverse4,
//       videoLinkUniverse: videoLinkUniverse,
//     }
//     await updateData_2_2("universe", 1, data)
//   } catch (error) {
//     console.error("Error saving Universe:", error)
//   }
// }

// const handleSaveCrucifixion = async () => {
//   try {
//     const data = {
//       titleCrucifixion: titleCrucifixion,
//       descriptionCrucifixion1: descriptionCrucifixion1,
//       descriptionCrucifixion2: descriptionCrucifixion2,
//       descriptionCrucifixion3: descriptionCrucifixion3,
//       descriptionCrucifixion4: descriptionCrucifixion4,
//       descriptionCrucifixion5: descriptionCrucifixion5,
//       descriptionCrucifixion6: descriptionCrucifixion6,
//       descriptionCrucifixion7: descriptionCrucifixion7,
//       descriptionCrucifixion8: descriptionCrucifixion8,
//       descriptionCrucifixion9: descriptionCrucifixion9,
//       descriptionCrucifixion10: descriptionCrucifixion10,
//       descriptionCrucifixion11: descriptionCrucifixion11,
//     }
//     console.log("Sending data:", data) // Ajoutez ce log pour vérifier
//     await updateData_2_2("crucifixion", 1, data)
//   } catch (error) {
//     console.error("Error saving Crucifixion:", error)
//   }
// }

// const handleSaveSabbath = async () => {
//   try {
//     const data = {
//       titleSabbath: titleSabbath,
//       descriptionSabbath1: descriptionSabbath1,
//       descriptionSabbath2: descriptionSabbath2,
//       descriptionSabbath3: descriptionSabbath3,
//       descriptionSabbath4: descriptionSabbath4,
//       descriptionSabbath5: descriptionSabbath5,
//     }
//     await updateData_2_2("sabbath", 1, data)
//   } catch (error) {
//     console.error("Error saving Sabbath:", error)
//   }
// }

// const handleSaveErosion = async () => {
//   try {
//     const data = {
//       descriptionErosion: descriptionErosion,
//     }
//     await updateData_2_2("erosion", 1, data)
//   } catch (error) {
//     console.error("Error saving Erosion:", error)
//   }
// }

// const handleSaveOperation = async () => {
//   try {
//     const data = {
//       descriptionOperation1: descriptionOperation1,
//       descriptionOperation2: descriptionOperation2,
//       descriptionOperation3: descriptionOperation3,
//       descriptionOperation4: descriptionOperation4,
//     }
//     await updateData_2_2("operation", 1, data)
//   } catch (error) {
//     console.error("Error saving Operation:", error)
//   }
// }

// const handleSaveBalance = async () => {
//   try {
//     const data = {
//       titlebalance: titleBalance,
//       descriptionbalance1: descriptionBalance1,
//       descriptionbalance2: descriptionBalance2,
//       descriptionbalance3: descriptionBalance3,
//       descriptionbalance4: descriptionBalance4,
//     }
//     await updateData_2_2("balance", 1, data)
//   } catch (error) {
//     console.error("Error saving Balance:", error)
//   }
// }
// const handleSaveFeasts = async () => {
//   try {
//     const data = {
//       titleFeasts: titleFeasts,
//       titleFeasts2: titleFeasts2,
//       fieldFeasts2: fieldFeasts2,
//       titleFeasts3: titleFeasts3,
//       fieldFeasts3: fieldFeasts3,
//       titleFeasts4: titleFeasts4,
//       fieldFeasts4: fieldFeasts4,
//       descriptionFeasts4: descriptionFeasts4,
//       videoFeasts4: videoFeasts4,
//       titleFeasts5: titleFeasts5,
//       fieldFeasts5: fieldFeasts5,
//       descriptionFeasts5: descriptionFeasts5,
//       videoFeasts5: videoFeasts5,
//       titleFeasts6: titleFeasts6,
//       fieldFeasts6a: fieldFeasts6a,
//       fieldFeasts6b: fieldFeasts6b
//     }
//     await updateData_2_2("feasts", 1, data)
//   } catch (error) {
//     console.error("Error saving Feasts:", error)
//   }
// }












// "use client"

// import { ChevronDown, ChevronUp, FileText, Save, Type } from "lucide-react"
// import type React from "react"
// import { useState, useEffect } from "react"
// import { fetchData_2_2, updateData_2_2 } from "../../../api/api"; 

// const MenuTab: React.FC = () => {
//   // Tetragrama states
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const [description2, setDescription2] = useState("")

//   // Nation states
//   const [titleNation, setTitleNation] = useState("")
//   const [descriptionNation, setDescriptionNation] = useState("")
//   const [descriptionNation2, setDescriptionNation2] = useState("")
//   const [descriptionNation3, setDescriptionNation3] = useState("")

//   // Universe states
//   const [descriptionUniverse1, setDescriptionUniverse1] = useState("")
//   const [descriptionUniverse2, setDescriptionUniverse2] = useState("")
//   const [descriptionUniverse3, setDescriptionUniverse3] = useState("")
//   const [descriptionUniverse4, setDescriptionUniverse4] = useState("")
//   const [videoLinkUniverse, setVideoLinkUniverse] = useState("")

//   // Feasts states
//   const [titleFeasts, setTitleFeasts] = useState("")
//   const [titleFeasts2, setTitleFeasts2] = useState("")
//   const [fieldFeasts2, setFieldFeasts2] = useState("")
//   const [titleFeasts3, setTitleFeasts3] = useState("")
//   const [fieldFeasts3, setFieldFeasts3] = useState("")
//   const [titleFeasts4, setTitleFeasts4] = useState("")
//   const [fieldFeasts4, setFieldFeasts4] = useState("")
//   const [descriptionFeasts4, setDescriptionFeasts4] = useState("")
//   const [videoFeasts4, setVideoFeasts4] = useState("")
//   const [titleFeasts5, setTitleFeasts5] = useState("")
//   const [fieldFeasts5, setFieldFeasts5] = useState("")
//   const [descriptionFeasts5, setDescriptionFeasts5] = useState("")
//   const [videoFeasts5, setVideoFeasts5] = useState("")
//   const [titleFeasts6, setTitleFeasts6] = useState("")
//   const [fieldFeasts6a, setFieldFeasts6a] = useState("")
//   const [fieldFeasts6b, setFieldFeasts6b] = useState("")

//   // Crucifixion states
//   const [titleCrucifixion, setTitleCrucifixion] = useState("")
//   const [descriptionCrucifixion1, setDescriptionCrucifixion1] = useState("")
//   const [descriptionCrucifixion2, setDescriptionCrucifixion2] = useState("")
//   const [descriptionCrucifixion3, setDescriptionCrucifixion3] = useState("")
//   const [descriptionCrucifixion4, setDescriptionCrucifixion4] = useState("")
//   const [descriptionCrucifixion5, setDescriptionCrucifixion5] = useState("")
//   const [descriptionCrucifixion6, setDescriptionCrucifixion6] = useState("")
//   const [descriptionCrucifixion7, setDescriptionCrucifixion7] = useState("")
//   const [descriptionCrucifixion8, setDescriptionCrucifixion8] = useState("")
//   const [descriptionCrucifixion9, setDescriptionCrucifixion9] = useState("")
//   const [descriptionCrucifixion10, setDescriptionCrucifixion10] = useState("")
//   const [descriptionCrucifixion11, setDescriptionCrucifixion11] = useState("")

//   // Sabbath states
//   const [titleSabbath, setTitleSabbath] = useState("")
//   const [descriptionSabbath1, setDescriptionSabbath1] = useState("")
//   const [descriptionSabbath2, setDescriptionSabbath2] = useState("")
//   const [descriptionSabbath3, setDescriptionSabbath3] = useState("")
//   const [descriptionSabbath4, setDescriptionSabbath4] = useState("")
//   const [descriptionSabbath5, setDescriptionSabbath5] = useState("")

//   // Erosion states
//   const [descriptionErosion, setDescriptionErosion] = useState("")

//   // Operation states
//   const [descriptionOperation1, setDescriptionOperation1] = useState("")
//   const [descriptionOperation2, setDescriptionOperation2] = useState("")
//   const [descriptionOperation3, setDescriptionOperation3] = useState("")
//   const [descriptionOperation4, setDescriptionOperation4] = useState("")

//   // Balance states
//   const [titleBalance, setTitleBalance] = useState("")
//   const [descriptionBalance1, setDescriptionBalance1] = useState("")
//   const [descriptionBalance2, setDescriptionBalance2] = useState("")
//   const [descriptionBalance3, setDescriptionBalance3] = useState("")
//   const [descriptionBalance4, setDescriptionBalance4] = useState("")

//   // Section toggle states
//   const [isTetragramaOpen, setIsTetragramaOpen] = useState(true)
//   const [isNationOpen, setIsNationOpen] = useState(true)
//   const [isUniverseOpen, setIsUniverseOpen] = useState(true)
//   const [isFeastsOpen, setIsFeastsOpen] = useState(true)
//   const [isCrucifixionOpen, setIsCrucifixionOpen] = useState(true)
//   const [isSabbathOpen, setIsSabbathOpen] = useState(true)
//   const [isErosionOpen, setIsErosionOpen] = useState(true)
//   const [isOperationOpen, setIsOperationOpen] = useState(true)
//   const [isBalanceOpen, setIsBalanceOpen] = useState(true)

//   // Load all data on component mount


//   // API base URL
//   const API_BASE_URL = "http://localhost:5000/api"

//   // Fetch data from API
//   const fetchData_2_2 = async (endpoint: string, setDataFunction: (data: any) => void) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/${endpoint}`)
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }
//       const data = await response.json()
//       if (data.success && data.data && data.data.length > 0) {
//         setDataFunction(data.data[0])
//       }
//     } catch (error) {
//       console.error(`Error fetching ${endpoint}:`, error)
//     }
//   }

//   // Update data via API
//   const updateData_2_2 = async (endpoint: string, id: number, data: any) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }
//       const result = await response.json()
//       console.log(`Update successful for ${endpoint}:`, result)
//       return result
//     } catch (error) {
//       console.error(`Error updating ${endpoint}:`, error)
//       throw error
//     }
//   }

//   // Load all data on component mount
//   useEffect(() => {
//     // Load Tetragrama data
//     fetchData_2_2("tetragrama", (data) => {
//       setTitle(data.title || "")
//       setDescription(data.description || "")
//       setDescription2(data.description2 || "")
//     })

//     // Load Nation data
//     fetchData_2_2("nation", (data) => {
//       setTitleNation(data.titlenation || "")
//       setDescriptionNation(data.descriptionnation || "")
//       setDescriptionNation2(data.descriptionnation2 || "")
//       setDescriptionNation3(data.descriptionnation3 || "")
//     })

//     // Load Universe data
//     fetchData_2_2("universe", (data) => {
//       setDescriptionUniverse1(data.descriptionuniverse1 || "")
//       setDescriptionUniverse2(data.descriptionuniverse2 || "")
//       setDescriptionUniverse3(data.descriptionuniverse3 || "")
//       setDescriptionUniverse4(data.descriptionuniverse4 || "")
//       setVideoLinkUniverse(data.videolinkuniverse || "")
//     })

//     // Load Feasts data
//     fetchData_2_2("feasts", (data) => {
//       setTitleFeasts(data.titlefeasts || "")
//       setTitleFeasts2(data.titlefeasts2 || "")
//       setFieldFeasts2(data.fieldfeasts2 || "")
//       setTitleFeasts3(data.titlefeasts3 || "")
//       setFieldFeasts3(data.fieldfeasts3 || "")
//       setTitleFeasts4(data.titlefeasts4 || "")
//       setFieldFeasts4(data.fieldfeasts4 || "")
//       setDescriptionFeasts4(data.descriptionfeasts4 || "")
//       setVideoFeasts4(data.videofeasts4 || "")
//       setTitleFeasts5(data.titlefeasts5 || "")
//       setFieldFeasts5(data.fieldfeasts5 || "")
//       setDescriptionFeasts5(data.descriptionfeasts5 || "")
//       setVideoFeasts5(data.videofeasts5 || "")
//       setTitleFeasts6(data.titlefeasts6 || "")
//       setFieldFeasts6a(data.fieldfeasts6a || "")
//       setFieldFeasts6b(data.fieldfeasts6b || "")
//     })

//     fetchData_2_2("crucifixion", (data) => {
//       setTitleCrucifixion(data.titlecrucifixion || "")
//       setDescriptionCrucifixion1(data.descriptioncrucifixion1 || "")
//       setDescriptionCrucifixion2(data.descriptioncrucifixion2 || "")
//       setDescriptionCrucifixion3(data.descriptioncrucifixion3 || "")
//       setDescriptionCrucifixion4(data.descriptioncrucifixion4 || "")
//       setDescriptionCrucifixion5(data.descriptioncrucifixion5 || "")
//       setDescriptionCrucifixion6(data.descriptioncrucifixion6 || "")
//       setDescriptionCrucifixion7(data.descriptioncrucifixion7 || "")
//       setDescriptionCrucifixion8(data.descriptioncrucifixion8 || "")
//       setDescriptionCrucifixion9(data.descriptioncrucifixion9 || "")
//       setDescriptionCrucifixion10(data.descriptioncrucifixion10 || "")
//       setDescriptionCrucifixion11(data.descriptioncrucifixion11 || "")
//     })

//     // Load Sabbath data
//     fetchData_2_2("sabbath", (data) => {
//       setTitleSabbath(data.titlesabbath || "")
//       setDescriptionSabbath1(data.descriptionsabbath1 || "")
//       setDescriptionSabbath2(data.descriptionsabbath2 || "")
//       setDescriptionSabbath3(data.descriptionsabbath3 || "")
//       setDescriptionSabbath4(data.descriptionsabbath4 || "")
//       setDescriptionSabbath5(data.descriptionsabbath5 || "")
//     })

//     // Load Erosion data
//     fetchData_2_2("erosion", (data) => {
//       setDescriptionErosion(data.descriptionerosion || "")
//     })

//     // Load Operation data
//     fetchData_2_2("operation", (data) => {
//       setDescriptionOperation1(data.descriptionoperation1 || "")
//       setDescriptionOperation2(data.descriptionoperation2 || "")
//       setDescriptionOperation3(data.descriptionoperation3 || "")
//       setDescriptionOperation4(data.descriptionoperation4 || "")
//     })

//     // Load Balance data
//     fetchData_2_2("balance", (data) => {
//       setTitleBalance(data.titlebalance || "")
//       setDescriptionBalance1(data.descriptionbalance1 || "")
//       setDescriptionBalance2(data.descriptionbalance2 || "")
//       setDescriptionBalance3(data.descriptionbalance3 || "")
//       setDescriptionBalance4(data.descriptionbalance4 || "")
//     })
//   }, [])

//   // Handler functions with API integration
//   const handleSaveTetragrama = async () => {
//     try {
//       const data = {
//         title,
//         description,
//         description2,
//       }
//       await updateData_2_2("tetragrama", 1, data)
//     } catch (error) {
//       console.error("Error saving Tetragrama:", error)
//     }
//   }

//   const handleSaveNation = async () => {
//     try {
//       const data = {
//         titleNation: titleNation,
//         descriptionNation: descriptionNation,
//         descriptionNation2: descriptionNation2,
//         descriptionNation3: descriptionNation3,
//       }
//       await updateData_2_2("nation", 1, data)
//     } catch (error) {
//       console.error("Error saving Nation:", error)
//     }
//   }

//   const handleSaveUniverse = async () => {
//     try {
//       const data = {
//         descriptionUniverse1: descriptionUniverse1,
//         descriptionUniverse2: descriptionUniverse2,
//         descriptionUniverse3: descriptionUniverse3,
//         descriptionUniverse4: descriptionUniverse4,
//         videoLinkUniverse: videoLinkUniverse,
//       }
//       await updateData_2_2("universe", 1, data)
//     } catch (error) {
//       console.error("Error saving Universe:", error)
//     }
//   }

//   const handleSaveCrucifixion = async () => {
//     try {
//       const data = {
//         titleCrucifixion: titleCrucifixion,
//         descriptionCrucifixion1: descriptionCrucifixion1,
//         descriptionCrucifixion2: descriptionCrucifixion2,
//         descriptionCrucifixion3: descriptionCrucifixion3,
//         descriptionCrucifixion4: descriptionCrucifixion4,
//         descriptionCrucifixion5: descriptionCrucifixion5,
//         descriptionCrucifixion6: descriptionCrucifixion6,
//         descriptionCrucifixion7: descriptionCrucifixion7,
//         descriptionCrucifixion8: descriptionCrucifixion8,
//         descriptionCrucifixion9: descriptionCrucifixion9,
//         descriptionCrucifixion10: descriptionCrucifixion10,
//         descriptionCrucifixion11: descriptionCrucifixion11,
//       }
//       console.log("Sending data:", data) // Ajoutez ce log pour vérifier
//       await updateData_2_2("crucifixion", 1, data)
//     } catch (error) {
//       console.error("Error saving Crucifixion:", error)
//     }
//   }

//   const handleSaveSabbath = async () => {
//     try {
//       const data = {
//         titleSabbath: titleSabbath,
//         descriptionSabbath1: descriptionSabbath1,
//         descriptionSabbath2: descriptionSabbath2,
//         descriptionSabbath3: descriptionSabbath3,
//         descriptionSabbath4: descriptionSabbath4,
//         descriptionSabbath5: descriptionSabbath5,
//       }
//       await updateData_2_2("sabbath", 1, data)
//     } catch (error) {
//       console.error("Error saving Sabbath:", error)
//     }
//   }

//   const handleSaveErosion = async () => {
//     try {
//       const data = {
//         descriptionErosion: descriptionErosion,
//       }
//       await updateData_2_2("erosion", 1, data)
//     } catch (error) {
//       console.error("Error saving Erosion:", error)
//     }
//   }

//   const handleSaveOperation = async () => {
//     try {
//       const data = {
//         descriptionOperation1: descriptionOperation1,
//         descriptionOperation2: descriptionOperation2,
//         descriptionOperation3: descriptionOperation3,
//         descriptionOperation4: descriptionOperation4,
//       }
//       await updateData_2_2("operation", 1, data)
//     } catch (error) {
//       console.error("Error saving Operation:", error)
//     }
//   }

//   const handleSaveBalance = async () => {
//     try {
//       const data = {
//         titlebalance: titleBalance,
//         descriptionbalance1: descriptionBalance1,
//         descriptionbalance2: descriptionBalance2,
//         descriptionbalance3: descriptionBalance3,
//         descriptionbalance4: descriptionBalance4,
//       }
//       await updateData_2_2("balance", 1, data)
//     } catch (error) {
//       console.error("Error saving Balance:", error)
//     }
//   }
//   const handleSaveFeasts = async () => {
//     try {
//       const data = {
//         titleFeasts: titleFeasts,
//         titleFeasts2: titleFeasts2,
//         fieldFeasts2: fieldFeasts2,
//         titleFeasts3: titleFeasts3,
//         fieldFeasts3: fieldFeasts3,
//         titleFeasts4: titleFeasts4,
//         fieldFeasts4: fieldFeasts4,
//         descriptionFeasts4: descriptionFeasts4,
//         videoFeasts4: videoFeasts4,
//         titleFeasts5: titleFeasts5,
//         fieldFeasts5: fieldFeasts5,
//         descriptionFeasts5: descriptionFeasts5,
//         videoFeasts5: videoFeasts5,
//         titleFeasts6: titleFeasts6,
//         fieldFeasts6a: fieldFeasts6a,
//         fieldFeasts6b: fieldFeasts6b
//       }
//       await updateData_2_2("feasts", 1, data)
//     } catch (error) {
//       console.error("Error saving Feasts:", error)
//     }
//   }




// MenuTab.tsx
"use client"

import { ChevronDown, ChevronUp, FileText, Save, Type } from "lucide-react"
import type React from "react"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"
import { fetchData_2, updateData_2 } from "../../../api/api"

const MenuTab: React.FC = () => {
  // ------------ États ------------
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [description2, setDescription2] = useState("")

  const [titleNation, setTitleNation] = useState("")
  const [descriptionNation, setDescriptionNation] = useState("")
  const [descriptionNation2, setDescriptionNation2] = useState("")
  const [descriptionNation3, setDescriptionNation3] = useState("")

  const [descriptionUniverse1, setDescriptionUniverse1] = useState("")
  const [descriptionUniverse2, setDescriptionUniverse2] = useState("")
  const [descriptionUniverse3, setDescriptionUniverse3] = useState("")
  const [descriptionUniverse4, setDescriptionUniverse4] = useState("")
  const [videoLinkUniverse, setVideoLinkUniverse] = useState("")

  const [titleFeasts, setTitleFeasts] = useState("")
  const [titleFeasts2, setTitleFeasts2] = useState("")
  const [fieldFeasts2, setFieldFeasts2] = useState("")
  const [titleFeasts3, setTitleFeasts3] = useState("")
  const [fieldFeasts3, setFieldFeasts3] = useState("")
  const [titleFeasts4, setTitleFeasts4] = useState("")
  const [fieldFeasts4, setFieldFeasts4] = useState("")
  const [descriptionFeasts4, setDescriptionFeasts4] = useState("")
  const [videoFeasts4, setVideoFeasts4] = useState("")
  const [titleFeasts5, setTitleFeasts5] = useState("")
  const [fieldFeasts5, setFieldFeasts5] = useState("")
  const [descriptionFeasts5, setDescriptionFeasts5] = useState("")
  const [videoFeasts5, setVideoFeasts5] = useState("")
  const [titleFeasts6, setTitleFeasts6] = useState("")
  const [fieldFeasts6a, setFieldFeasts6a] = useState("")
  const [fieldFeasts6b, setFieldFeasts6b] = useState("")

  const [titleCrucifixion, setTitleCrucifixion] = useState("")
  const [descriptionCrucifixion1, setDescriptionCrucifixion1] = useState("")
  const [descriptionCrucifixion2, setDescriptionCrucifixion2] = useState("")
  const [descriptionCrucifixion3, setDescriptionCrucifixion3] = useState("")
  const [descriptionCrucifixion4, setDescriptionCrucifixion4] = useState("")
  const [descriptionCrucifixion5, setDescriptionCrucifixion5] = useState("")
  const [descriptionCrucifixion6, setDescriptionCrucifixion6] = useState("")
  const [descriptionCrucifixion7, setDescriptionCrucifixion7] = useState("")
  const [descriptionCrucifixion8, setDescriptionCrucifixion8] = useState("")
  const [descriptionCrucifixion9, setDescriptionCrucifixion9] = useState("")
  const [descriptionCrucifixion10, setDescriptionCrucifixion10] = useState("")
  const [descriptionCrucifixion11, setDescriptionCrucifixion11] = useState("")

  const [titleSabbath, setTitleSabbath] = useState("")
  const [descriptionSabbath1, setDescriptionSabbath1] = useState("")
  const [descriptionSabbath2, setDescriptionSabbath2] = useState("")
  const [descriptionSabbath3, setDescriptionSabbath3] = useState("")
  const [descriptionSabbath4, setDescriptionSabbath4] = useState("")
  const [descriptionSabbath5, setDescriptionSabbath5] = useState("")

  const [descriptionErosion, setDescriptionErosion] = useState("")

  const [descriptionOperation1, setDescriptionOperation1] = useState("")
  const [descriptionOperation2, setDescriptionOperation2] = useState("")
  const [descriptionOperation3, setDescriptionOperation3] = useState("")
  const [descriptionOperation4, setDescriptionOperation4] = useState("")

  const [titleBalance, setTitleBalance] = useState("")
  const [descriptionBalance1, setDescriptionBalance1] = useState("")
  const [descriptionBalance2, setDescriptionBalance2] = useState("")
  const [descriptionBalance3, setDescriptionBalance3] = useState("")
  const [descriptionBalance4, setDescriptionBalance4] = useState("")

  const [isTetragramaOpen, setIsTetragramaOpen] = useState(true)
  const [isNationOpen, setIsNationOpen] = useState(true)
  const [isUniverseOpen, setIsUniverseOpen] = useState(true)
  const [isFeastsOpen, setIsFeastsOpen] = useState(true)
  const [isCrucifixionOpen, setIsCrucifixionOpen] = useState(true)
  const [isSabbathOpen, setIsSabbathOpen] = useState(true)
  const [isErosionOpen, setIsErosionOpen] = useState(true)
  const [isOperationOpen, setIsOperationOpen] = useState(true)
  const [isBalanceOpen, setIsBalanceOpen] = useState(true)

  // ------------ Chargement initial ------------
  useEffect(() => {
    fetchData_2("tetragrama").then((d) => {
      setTitle(d?.title || "")
      setDescription(d?.description || "")
      setDescription2(d?.description2 || "")
    })
    fetchData_2("nation").then((d) => {
      setTitleNation(d?.titlenation || "")
      setDescriptionNation(d?.descriptionnation || "")
      setDescriptionNation2(d?.descriptionnation2 || "")
      setDescriptionNation3(d?.descriptionnation3 || "")
    })
    fetchData_2("universe").then((d) => {
      setDescriptionUniverse1(d?.descriptionuniverse1 || "")
      setDescriptionUniverse2(d?.descriptionuniverse2 || "")
      setDescriptionUniverse3(d?.descriptionuniverse3 || "")
      setDescriptionUniverse4(d?.descriptionuniverse4 || "")
      setVideoLinkUniverse(d?.videolinkuniverse || "")
    })
    fetchData_2("feasts").then((d) => {
      setTitleFeasts(d?.titlefeasts || "")
      setTitleFeasts2(d?.titlefeasts2 || "")
      setFieldFeasts2(d?.fieldfeasts2 || "")
      setTitleFeasts3(d?.titlefeasts3 || "")
      setFieldFeasts3(d?.fieldfeasts3 || "")
      setTitleFeasts4(d?.titlefeasts4 || "")
      setFieldFeasts4(d?.fieldfeasts4 || "")
      setDescriptionFeasts4(d?.descriptionfeasts4 || "")
      setVideoFeasts4(d?.videofeasts4 || "")
      setTitleFeasts5(d?.titlefeasts5 || "")
      setFieldFeasts5(d?.fieldfeasts5 || "")
      setDescriptionFeasts5(d?.descriptionfeasts5 || "")
      setVideoFeasts5(d?.videofeasts5 || "")
      setTitleFeasts6(d?.titlefeasts6 || "")
      setFieldFeasts6a(d?.fieldfeasts6a || "")
      setFieldFeasts6b(d?.fieldfeasts6b || "")
    })
    fetchData_2("crucifixion").then((d) => {
      setTitleCrucifixion(d?.titlecrucifixion || "")
      setDescriptionCrucifixion1(d?.descriptioncrucifixion1 || "")
      setDescriptionCrucifixion2(d?.descriptioncrucifixion2 || "")
      setDescriptionCrucifixion3(d?.descriptioncrucifixion3 || "")
      setDescriptionCrucifixion4(d?.descriptioncrucifixion4 || "")
      setDescriptionCrucifixion5(d?.descriptioncrucifixion5 || "")
      setDescriptionCrucifixion6(d?.descriptioncrucifixion6 || "")
      setDescriptionCrucifixion7(d?.descriptioncrucifixion7 || "")
      setDescriptionCrucifixion8(d?.descriptioncrucifixion8 || "")
      setDescriptionCrucifixion9(d?.descriptioncrucifixion9 || "")
      setDescriptionCrucifixion10(d?.descriptioncrucifixion10 || "")
      setDescriptionCrucifixion11(d?.descriptioncrucifixion11 || "")
    })
    fetchData_2("sabbath").then((d) => {
      setTitleSabbath(d?.titlesabbath || "")
      setDescriptionSabbath1(d?.descriptionsabbath1 || "")
      setDescriptionSabbath2(d?.descriptionsabbath2 || "")
      setDescriptionSabbath3(d?.descriptionsabbath3 || "")
      setDescriptionSabbath4(d?.descriptionsabbath4 || "")
      setDescriptionSabbath5(d?.descriptionsabbath5 || "")
    })
    fetchData_2("erosion").then((d) => setDescriptionErosion(d?.descriptionerosion || ""))
    fetchData_2("operation").then((d) => {
      setDescriptionOperation1(d?.descriptionoperation1 || "")
      setDescriptionOperation2(d?.descriptionoperation2 || "")
      setDescriptionOperation3(d?.descriptionoperation3 || "")
      setDescriptionOperation4(d?.descriptionoperation4 || "")
    })
    fetchData_2("balance").then((d) => {
      setTitleBalance(d?.titlebalance || "")
      setDescriptionBalance1(d?.descriptionbalance1 || "")
      setDescriptionBalance2(d?.descriptionbalance2 || "")
      setDescriptionBalance3(d?.descriptionbalance3 || "")
      setDescriptionBalance4(d?.descriptionbalance4 || "")
    })
  }, [])

  // ------------ Handlers ------------
  // const handleSaveTetragrama = () =>
  //   updateData_2("tetragrama", 1, { title, description, description2 })

  const handleSaveTetragrama = async () => {
    try {
      await updateData_2("tetragrama", 1, { title, description, description2 })
      toast.success("Section Tetragrama mise à jour !")
    } catch {
      toast.error("Erreur lors de la sauvegarde.")
    }
  }
  const handleSaveNation = async () => {
    try {
      await updateData_2("nation", 1, {
        titleNation,
        descriptionNation,
        descriptionNation2,
        descriptionNation3,
      })
      toast.success("Section nation mise à jour !")
    } catch {
      toast.error("Erreur lors de la sauvegarde.")
    }
  }

  const handleSaveUniverse = async () => {
    try {
      await updateData_2("universe", 1, {
        descriptionUniverse1,
        descriptionUniverse2,
        descriptionUniverse3,
        descriptionUniverse4,
        videoLinkUniverse,
      })
      toast.success("Section universe mise à jour !")
    } catch {
      toast.error("Erreur lors de la sauvegarde.")
    }
  }

  const handleSaveCrucifixion = async () => {
    try {
      await updateData_2("crucifixion", 1, {
        titleCrucifixion,
        descriptionCrucifixion1,
        descriptionCrucifixion2,
        descriptionCrucifixion3,
        descriptionCrucifixion4,
        descriptionCrucifixion5,
        descriptionCrucifixion6,
        descriptionCrucifixion7,
        descriptionCrucifixion8,
        descriptionCrucifixion9,
        descriptionCrucifixion10,
        descriptionCrucifixion11,
      })
      toast.success("Section crucifixion mise à jour !")
    } catch {
      toast.error("Erreur lors de la sauvegarde.")
    }
  }

  const handleSaveSabbath = async () => {
    try {
      await updateData_2("sabbath", 1, {
        titleSabbath,
        descriptionSabbath1,
        descriptionSabbath2,
        descriptionSabbath3,
        descriptionSabbath4,
        descriptionSabbath5,
      })
      toast.success("Section sabbath mise à jour !")
    } catch {
      toast.error("Erreur lors de la sauvegarde.")
    }
  }

  const handleSaveErosion = async () => {
    try {
      await updateData_2("erosion", 1, { descriptionErosion })
      toast.success("Section erosion mise à jour !")
    } catch {
      toast.error("Erreur lors de la sauvegarde.")
    }
  }

  const handleSaveOperation = async () => {
    try {
      await updateData_2("operation", 1, {
        descriptionOperation1,
        descriptionOperation2,
        descriptionOperation3,
        descriptionOperation4,
      })
      toast.success("Section operation mise à jour !")
    } catch {
      toast.error("Erreur lors de la sauvegarde.")
    }
  }

  const handleSaveBalance = async () => {
    try {
      await updateData_2("balance", 1, {
        titlebalance: titleBalance,
        descriptionbalance1: descriptionBalance1,
        descriptionbalance2: descriptionBalance2,
        descriptionbalance3: descriptionBalance3,
        descriptionbalance4: descriptionBalance4,
      })
      toast.success("Section balance mise à jour !")
    } catch {
      toast.error("Erreur lors de la sauvegarde.")
    }
  }

  const handleSaveFeasts = async () => {
    try {
      await updateData_2("feasts", 1, {
        titleFeasts,
        titleFeasts2,
        fieldFeasts2,
        titleFeasts3,
        fieldFeasts3,
        titleFeasts4,
        fieldFeasts4,
        descriptionFeasts4,
        videoFeasts4,
        titleFeasts5,
        fieldFeasts5,
        descriptionFeasts5,
        videoFeasts5,
        titleFeasts6,
        fieldFeasts6a,
        fieldFeasts6b,
      })
      toast.success("Section feasts mise à jour !")
    } catch {
      toast.error("Erreur lors de la sauvegarde.")
    }
  }

  // ------------ Rendu ------------

  return (
    <div className="tab-content fade-in">
      {/* Section Tetragrama */}
      <section className="home-section">
        <div className="section-header" onClick={() => setIsTetragramaOpen(!isTetragramaOpen)}>
          <h1 className="section-title">Tetragrama</h1>
          <button className="toggle-section">
            {isTetragramaOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isTetragramaOpen && (
          <div className="section-content">
            <p>Welcome to the official website of the Yahweh Ben Yahweh community.</p>
            <p>This platform serves as a resource for spiritual growth and community connection.</p>
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button onClick={handleSaveTetragrama} className="save-button title-save" disabled={!title.trim()}>
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveTetragrama}
                    className="save-button description-save"
                    disabled={!description.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 2
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={description2}
                    onChange={(e) => setDescription2(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveTetragrama}
                    className="save-button description-save"
                    disabled={!description2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section Nation */}
      <section className="home-section">
        <div className="section-header" onClick={() => setIsNationOpen(!isNationOpen)}>
          <h1 className="section-title">The Nation of Yahweh</h1>
          <button className="toggle-section">
            {isNationOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isNationOpen && (
          <div className="section-content">
            <p>Welcome to the official website of the Yahweh Ben Yahweh community.</p>
            <p>This platform serves as a resource for spiritual growth and community connection.</p>
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleNation}
                    onChange={(e) => setTitleNation(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveNation}
                    className="save-button title-save"
                    disabled={!titleNation.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={descriptionNation}
                    onChange={(e) => setDescriptionNation(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveNation}
                    className="save-button description-save"
                    disabled={!descriptionNation.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 2
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={descriptionNation2}
                    onChange={(e) => setDescriptionNation2(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveNation}
                    className="save-button description-save"
                    disabled={!descriptionNation2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description 3
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={descriptionNation3}
                    onChange={(e) => setDescriptionNation3(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveNation}
                    className="save-button description-save"
                    disabled={!descriptionNation3.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section The Universe of Yahweh */}
      <section className="home-section">
        <div className="section-header" onClick={() => setIsUniverseOpen(!isUniverseOpen)}>
          <h1 className="section-title">The Universe of Yahweh</h1>
          <button className="toggle-section">
            {isUniverseOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isUniverseOpen && (
          <div className="section-content">
            <p>Welcome to the official website of the Yahweh Ben Yahweh community.</p>
            <p>This platform serves as a resource for spiritual growth and community connection.</p>
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>
              {/* 4 champs description */}
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="input-group">
                  <label className="input-label">
                    <FileText className="label-icon" size={16} />
                    Description {num}
                  </label>
                  <div className="input-wrapper">
                    <textarea
                      value={
                        num === 1
                          ? descriptionUniverse1
                          : num === 2
                            ? descriptionUniverse2
                            : num === 3
                              ? descriptionUniverse3
                              : descriptionUniverse4
                      }
                      onChange={(e) => {
                        if (num === 1) setDescriptionUniverse1(e.target.value)
                        else if (num === 2) setDescriptionUniverse2(e.target.value)
                        else if (num === 3) setDescriptionUniverse3(e.target.value)
                        else setDescriptionUniverse4(e.target.value)
                      }}
                      placeholder="Entrez la description..."
                      className="custom-textarea"
                      rows={3}
                    />
                    <button
                      onClick={handleSaveUniverse}
                      className="save-button description-save"
                      disabled={
                        !(num === 1
                          ? descriptionUniverse1.trim()
                          : num === 2
                            ? descriptionUniverse2.trim()
                            : num === 3
                              ? descriptionUniverse3.trim()
                              : descriptionUniverse4.trim())
                      }
                    >
                      <Save size={14} />
                      Sauvegarder
                    </button>
                  </div>
                </div>
              ))}
              {/* Champ lien vidéo */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Lien Vidéo
                </label>
                <div className="input-wrapper">
                  <input
                    type="url"
                    value={videoLinkUniverse}
                    onChange={(e) => setVideoLinkUniverse(e.target.value)}
                    placeholder="Entrez le lien vidéo..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveUniverse}
                    className="save-button title-save"
                    disabled={!videoLinkUniverse.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section The Feasts of Yahweh */}
      <section className="home-section">
        <div className="section-header" onClick={() => setIsFeastsOpen(!isFeastsOpen)}>
          <h1 className="section-title">The Feasts of Yahweh</h1>
          <button className="toggle-section">
            {isFeastsOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isFeastsOpen && (
          <div className="section-content">
            <p>Welcome to the official website of the Yahweh Ben Yahweh community.</p>
            <p>This platform serves as a resource for spiritual growth and community connection.</p>
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>
              {/* Titre principal */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleFeasts}
                    onChange={(e) => setTitleFeasts(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button
                    // onClick={() => handleSaveFeasts("title", titleFeasts)}
                    onClick={handleSaveFeasts}
                    className="save-button title-save"
                    disabled={!titleFeasts.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* Titre 2 avec champ */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre 2
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleFeasts2}
                    onChange={(e) => setTitleFeasts2(e.target.value)}
                    placeholder="Entrez le titre 2..."
                    className="custom-input"
                  />
                  <button
                    // onClick={() => handleSaveFeasts("title2", titleFeasts2)}
                    onClick={handleSaveFeasts}
                    className="save-button title-save"
                    disabled={!titleFeasts2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Champ Titre 2
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={fieldFeasts2}
                    onChange={(e) => setFieldFeasts2(e.target.value)}
                    placeholder="Entrez le contenu..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    // onClick={() => handleSaveFeasts("field2", fieldFeasts2)}
                    onClick={handleSaveFeasts}
                    className="save-button description-save"
                    disabled={!fieldFeasts2.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* Titre 3 avec champ */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre 3
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleFeasts3}
                    onChange={(e) => setTitleFeasts3(e.target.value)}
                    placeholder="Entrez le titre 3..."
                    className="custom-input"
                  />
                  <button
                    // onClick={() => handleSaveFeasts("title3", titleFeasts3)}
                    onClick={handleSaveFeasts}
                    className="save-button title-save"
                    disabled={!titleFeasts3.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Champ Titre 3
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={fieldFeasts3}
                    onChange={(e) => setFieldFeasts3(e.target.value)}
                    placeholder="Entrez le contenu..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    // onClick={() => handleSaveFeasts("field3", fieldFeasts3)}
                    onClick={handleSaveFeasts}
                    className="save-button description-save"
                    disabled={!fieldFeasts3.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* Titre 4 avec champ, description et vidéo */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre 4
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleFeasts4}
                    onChange={(e) => setTitleFeasts4(e.target.value)}
                    placeholder="Entrez le titre 4..."
                    className="custom-input"
                  />
                  <button
                    // onClick={() => handleSaveFeasts("title4", titleFeasts4)}
                    onClick={handleSaveFeasts}
                    className="save-button title-save"
                    disabled={!titleFeasts4.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Champ Titre 4
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={fieldFeasts4}
                    onChange={(e) => setFieldFeasts4(e.target.value)}
                    placeholder="Entrez le contenu..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    // onClick={() => handleSaveFeasts("field4", fieldFeasts4)}
                    onClick={handleSaveFeasts}
                    className="save-button description-save"
                    disabled={!fieldFeasts4.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description Titre 4
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={descriptionFeasts4}
                    onChange={(e) => setDescriptionFeasts4(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    // onClick={() => handleSaveFeasts("description4", descriptionFeasts4)}
                    onClick={handleSaveFeasts}
                    className="save-button description-save"
                    disabled={!descriptionFeasts4.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Vidéo Titre 4
                </label>
                <div className="input-wrapper">
                  <input
                    type="url"
                    value={videoFeasts4}
                    onChange={(e) => setVideoFeasts4(e.target.value)}
                    placeholder="Entrez le lien vidéo..."
                    className="custom-input"
                  />
                  <button
                    // onClick={() => handleSaveFeasts("video4", videoFeasts4)}
                    onClick={handleSaveFeasts}
                    className="save-button title-save"
                    disabled={!videoFeasts4.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* Titre 5 avec champ, description et vidéo */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre 5
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleFeasts5}
                    onChange={(e) => setTitleFeasts5(e.target.value)}
                    placeholder="Entrez le titre 5..."
                    className="custom-input"
                  />
                  <button
                    // onClick={() => handleSaveFeasts("title5", titleFeasts5)}
                    onClick={handleSaveFeasts}
                    className="save-button title-save"
                    disabled={!titleFeasts5.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Champ Titre 5
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={fieldFeasts5}
                    onChange={(e) => setFieldFeasts5(e.target.value)}
                    placeholder="Entrez le contenu..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    // onClick={() => handleSaveFeasts("field5", fieldFeasts5)}
                    onClick={handleSaveFeasts}
                    className="save-button description-save"
                    disabled={!fieldFeasts5.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description Titre 5
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={descriptionFeasts5}
                    onChange={(e) => setDescriptionFeasts5(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    // onClick={() => handleSaveFeasts("description5", descriptionFeasts5)}
                    onClick={handleSaveFeasts}
                    className="save-button description-save"
                    disabled={!descriptionFeasts5.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Vidéo Titre 5
                </label>
                <div className="input-wrapper">
                  <input
                    type="url"
                    value={videoFeasts5}
                    onChange={(e) => setVideoFeasts5(e.target.value)}
                    placeholder="Entrez le lien vidéo..."
                    className="custom-input"
                  />
                  <button
                    // onClick={() => handleSaveFeasts("video5", videoFeasts5)}
                    onClick={handleSaveFeasts}
                    className="save-button title-save"
                    disabled={!videoFeasts5.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* Titre 6 avec 2 champs */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre 6
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleFeasts6}
                    onChange={(e) => setTitleFeasts6(e.target.value)}
                    placeholder="Entrez le titre 6..."
                    className="custom-input"
                  />
                  <button
                    // onClick={() => handleSaveFeasts("title6", titleFeasts6)}
                    onClick={handleSaveFeasts}
                    className="save-button title-save"
                    disabled={!titleFeasts6.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Champ A Titre 6
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={fieldFeasts6a}
                    onChange={(e) => setFieldFeasts6a(e.target.value)}
                    placeholder="Entrez le contenu A..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    // onClick={() => handleSaveFeasts("field6a", fieldFeasts6a)}
                    onClick={handleSaveFeasts}
                    className="save-button description-save"
                    disabled={!fieldFeasts6a.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Champ B Titre 6
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={fieldFeasts6b}
                    onChange={(e) => setFieldFeasts6b(e.target.value)}
                    placeholder="Entrez le contenu B..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    // onClick={() => handleSaveFeasts("field6b", fieldFeasts6b)}
                    onClick={handleSaveFeasts}
                    className="save-button description-save"
                    disabled={!fieldFeasts6b.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section The Crucifixion */}
      <section className="home-section">
        <div className="section-header" onClick={() => setIsCrucifixionOpen(!isCrucifixionOpen)}>
          <h1 className="section-title">The Crucifixion</h1>
          <button className="toggle-section">
            {isCrucifixionOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isCrucifixionOpen && (
          <div className="section-content">
            <p>Welcome to the official website of the Yahweh Ben Yahweh community.</p>
            <p>This platform serves as a resource for spiritual growth and community connection.</p>
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>
              {/* Titre */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleCrucifixion}
                    onChange={(e) => setTitleCrucifixion(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveCrucifixion}
                    className="save-button title-save"
                    disabled={!titleCrucifixion.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* 11 champs description */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                <div key={num} className="input-group">
                  <label className="input-label">
                    <FileText className="label-icon" size={16} />
                    Description {num}
                  </label>
                  <div className="input-wrapper">
                    <textarea
                      value={
                        num === 1
                          ? descriptionCrucifixion1
                          : num === 2
                            ? descriptionCrucifixion2
                            : num === 3
                              ? descriptionCrucifixion3
                              : num === 4
                                ? descriptionCrucifixion4
                                : num === 5
                                  ? descriptionCrucifixion5
                                  : num === 6
                                    ? descriptionCrucifixion6
                                    : num === 7
                                      ? descriptionCrucifixion7
                                      : num === 8
                                        ? descriptionCrucifixion8
                                        : num === 9
                                          ? descriptionCrucifixion9
                                          : num === 10
                                            ? descriptionCrucifixion10
                                            : descriptionCrucifixion11
                      }
                      onChange={(e) => {
                        if (num === 1) setDescriptionCrucifixion1(e.target.value)
                        else if (num === 2) setDescriptionCrucifixion2(e.target.value)
                        else if (num === 3) setDescriptionCrucifixion3(e.target.value)
                        else if (num === 4) setDescriptionCrucifixion4(e.target.value)
                        else if (num === 5) setDescriptionCrucifixion5(e.target.value)
                        else if (num === 6) setDescriptionCrucifixion6(e.target.value)
                        else if (num === 7) setDescriptionCrucifixion7(e.target.value)
                        else if (num === 8) setDescriptionCrucifixion8(e.target.value)
                        else if (num === 9) setDescriptionCrucifixion9(e.target.value)
                        else if (num === 10) setDescriptionCrucifixion10(e.target.value)
                        else setDescriptionCrucifixion11(e.target.value)
                      }}
                      placeholder="Entrez la description..."
                      className="custom-textarea"
                      rows={3}
                    />
                    <button
                      onClick={handleSaveCrucifixion}
                      className="save-button description-save"
                      disabled={
                        !(num === 1
                          ? descriptionCrucifixion1.trim()
                          : num === 2
                            ? descriptionCrucifixion2.trim()
                            : num === 3
                              ? descriptionCrucifixion3.trim()
                              : num === 4
                                ? descriptionCrucifixion4.trim()
                                : num === 5
                                  ? descriptionCrucifixion5.trim()
                                  : num === 6
                                    ? descriptionCrucifixion6.trim()
                                    : num === 7
                                      ? descriptionCrucifixion7.trim()
                                      : num === 8
                                        ? descriptionCrucifixion8.trim()
                                        : num === 9
                                          ? descriptionCrucifixion9.trim()
                                          : num === 10
                                            ? descriptionCrucifixion10.trim()
                                            : descriptionCrucifixion11.trim())
                      }
                    >
                      <Save size={14} />
                      Sauvegarder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Section The Sabbath */}
      <section className="home-section">
        <div className="section-header" onClick={() => setIsSabbathOpen(!isSabbathOpen)}>
          <h1 className="section-title">The Sabbath</h1>
          <button className="toggle-section">
            {isSabbathOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isSabbathOpen && (
          <div className="section-content">
            <p>Welcome to the official website of the Yahweh Ben Yahweh community.</p>
            <p>This platform serves as a resource for spiritual growth and community connection.</p>
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>
              {/* Titre */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleSabbath}
                    onChange={(e) => setTitleSabbath(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveSabbath}
                    className="save-button title-save"
                    disabled={!titleSabbath.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* 5 champs description */}
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="input-group">
                  <label className="input-label">
                    <FileText className="label-icon" size={16} />
                    Description {num}
                  </label>
                  <div className="input-wrapper">
                    <textarea
                      value={
                        num === 1
                          ? descriptionSabbath1
                          : num === 2
                            ? descriptionSabbath2
                            : num === 3
                              ? descriptionSabbath3
                              : num === 4
                                ? descriptionSabbath4
                                : descriptionSabbath5
                      }
                      onChange={(e) => {
                        if (num === 1) setDescriptionSabbath1(e.target.value)
                        else if (num === 2) setDescriptionSabbath2(e.target.value)
                        else if (num === 3) setDescriptionSabbath3(e.target.value)
                        else if (num === 4) setDescriptionSabbath4(e.target.value)
                        else setDescriptionSabbath5(e.target.value)
                      }}
                      placeholder="Entrez la description..."
                      className="custom-textarea"
                      rows={3}
                    />
                    <button
                      onClick={handleSaveSabbath}
                      className="save-button description-save"
                      disabled={
                        !(num === 1
                          ? descriptionSabbath1.trim()
                          : num === 2
                            ? descriptionSabbath2.trim()
                            : num === 3
                              ? descriptionSabbath3.trim()
                              : num === 4
                                ? descriptionSabbath4.trim()
                                : descriptionSabbath5.trim())
                      }
                    >
                      <Save size={14} />
                      Sauvegarder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Section Erosion of The Constitution */}
      <section className="home-section">
        <div className="section-header" onClick={() => setIsErosionOpen(!isErosionOpen)}>
          <h1 className="section-title">Erosion of The Constitution</h1>
          <button className="toggle-section">
            {isErosionOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isErosionOpen && (
          <div className="section-content">
            <p>Welcome to the official website of the Yahweh Ben Yahweh community.</p>
            <p>This platform serves as a resource for spiritual growth and community connection.</p>
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>
              {/* 1 champ description */}
              <div className="input-group">
                <label className="input-label">
                  <FileText className="label-icon" size={16} />
                  Description
                </label>
                <div className="input-wrapper">
                  <textarea
                    value={descriptionErosion}
                    onChange={(e) => setDescriptionErosion(e.target.value)}
                    placeholder="Entrez la description..."
                    className="custom-textarea"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveErosion}
                    className="save-button description-save"
                    disabled={!descriptionErosion.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Section Operation Word War */}
      <section className="home-section">
        <div className="section-header" onClick={() => setIsOperationOpen(!isOperationOpen)}>
          <h1 className="section-title">Operation Word War</h1>
          <button className="toggle-section">
            {isOperationOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isOperationOpen && (
          <div className="section-content">
            <p>Welcome to the official website of the Yahweh Ben Yahweh community.</p>
            <p>This platform serves as a resource for spiritual growth and community connection.</p>
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>
              {/* 4 champs description */}
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="input-group">
                  <label className="input-label">
                    <FileText className="label-icon" size={16} />
                    Description {num}
                  </label>
                  <div className="input-wrapper">
                    <textarea
                      value={
                        num === 1
                          ? descriptionOperation1
                          : num === 2
                            ? descriptionOperation2
                            : num === 3
                              ? descriptionOperation3
                              : descriptionOperation4
                      }
                      onChange={(e) => {
                        if (num === 1) setDescriptionOperation1(e.target.value)
                        else if (num === 2) setDescriptionOperation2(e.target.value)
                        else if (num === 3) setDescriptionOperation3(e.target.value)
                        else setDescriptionOperation4(e.target.value)
                      }}
                      placeholder="Entrez la description..."
                      className="custom-textarea"
                      rows={3}
                    />
                    <button
                      onClick={handleSaveOperation}
                      className="save-button description-save"
                      disabled={
                        !(num === 1
                          ? descriptionOperation1.trim()
                          : num === 2
                            ? descriptionOperation2.trim()
                            : num === 3
                              ? descriptionOperation3.trim()
                              : descriptionOperation4.trim())
                      }
                    >
                      <Save size={14} />
                      Sauvegarder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Section Balance Justice */}
      <section className="home-section">
        <div className="section-header" onClick={() => setIsBalanceOpen(!isBalanceOpen)}>
          <h1 className="section-title">Balance Justice</h1>
          <button className="toggle-section">
            {isBalanceOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
        {isBalanceOpen && (
          <div className="section-content">
            <p>Welcome to the official website of the Yahweh Ben Yahweh community.</p>
            <p>This platform serves as a resource for spiritual growth and community connection.</p>
            <div className="admin-controls">
              <h3 className="admin-title">Administration des contenus</h3>
              {/* Titre */}
              <div className="input-group">
                <label className="input-label">
                  <Type className="label-icon" size={16} />
                  Titre
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={titleBalance}
                    onChange={(e) => setTitleBalance(e.target.value)}
                    placeholder="Entrez le titre..."
                    className="custom-input"
                  />
                  <button
                    onClick={handleSaveBalance}
                    className="save-button title-save"
                    disabled={!titleBalance.trim()}
                  >
                    <Save size={14} />
                    Sauvegarder
                  </button>
                </div>
              </div>
              {/* 4 champs description */}
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="input-group">
                  <label className="input-label">
                    <FileText className="label-icon" size={16} />
                    Description {num}
                  </label>
                  <div className="input-wrapper">
                    <textarea
                      value={
                        num === 1
                          ? descriptionBalance1
                          : num === 2
                            ? descriptionBalance2
                            : num === 3
                              ? descriptionBalance3
                              : descriptionBalance4
                      }
                      onChange={(e) => {
                        if (num === 1) setDescriptionBalance1(e.target.value)
                        else if (num === 2) setDescriptionBalance2(e.target.value)
                        else if (num === 3) setDescriptionBalance3(e.target.value)
                        else setDescriptionBalance4(e.target.value)
                      }}
                      placeholder="Entrez la description..."
                      className="custom-textarea"
                      rows={3}
                    />
                    <button
                      onClick={handleSaveBalance}
                      className="save-button description-save"
                      disabled={
                        !(num === 1
                          ? descriptionBalance1.trim()
                          : num === 2
                            ? descriptionBalance2.trim()
                            : num === 3
                              ? descriptionBalance3.trim()
                              : descriptionBalance4.trim())
                      }
                    >
                      <Save size={14} />
                      Sauvegarder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default MenuTab

























// useEffect(() => {
//   const loadAllData = async () => {
//     try {
//       // Load Tetragrama data
//       const tetragramaData = await menuApi.getTetragrama();
//       if (tetragramaData.success && tetragramaData.data?.length > 0) {
//         const data = tetragramaData.data[0];
//         setTitle(data.title || "");
//         setDescription(data.description || "");
//         setDescription2(data.description2 || "");
//       }

//       // Load Nation data
//       const nationData = await menuApi.getNation();
//       if (nationData.success && nationData.data?.length > 0) {
//         const data = nationData.data[0];
//         setTitleNation(data.titlenation || "");
//         setDescriptionNation(data.descriptionnation || "");
//         setDescriptionNation2(data.descriptionnation2 || "");
//         setDescriptionNation3(data.descriptionnation3 || "");
//       }

//       // Load Universe data
//       const universeData = await menuApi.getUniverse();
//       if (universeData.success && universeData.data?.length > 0) {
//         const data = universeData.data[0];
//         setDescriptionUniverse1(data.descriptionuniverse1 || "");
//         setDescriptionUniverse2(data.descriptionuniverse2 || "");
//         setDescriptionUniverse3(data.descriptionuniverse3 || "");
//         setDescriptionUniverse4(data.descriptionuniverse4 || "");
//         setVideoLinkUniverse(data.videolinkuniverse || "");
//       }

//       // Load Feasts data
//       const feastsData = await menuApi.getFeasts();
//       if (feastsData.success && feastsData.data?.length > 0) {
//         const data = feastsData.data[0];
//         setTitleFeasts(data.titlefeasts || "");
//         setTitleFeasts2(data.titlefeasts2 || "");
//         setFieldFeasts2(data.fieldfeasts2 || "");
//         setTitleFeasts3(data.titlefeasts3 || "");
//         setFieldFeasts3(data.fieldfeasts3 || "");
//         setTitleFeasts4(data.titlefeasts4 || "");
//         setFieldFeasts4(data.fieldfeasts4 || "");
//         setDescriptionFeasts4(data.descriptionfeasts4 || "");
//         setVideoFeasts4(data.videofeasts4 || "");
//         setTitleFeasts5(data.titlefeasts5 || "");
//         setFieldFeasts5(data.fieldfeasts5 || "");
//         setDescriptionFeasts5(data.descriptionfeasts5 || "");
//         setVideoFeasts5(data.videofeasts5 || "");
//         setTitleFeasts6(data.titlefeasts6 || "");
//         setFieldFeasts6a(data.fieldfeasts6a || "");
//         setFieldFeasts6b(data.fieldfeasts6b || "");
//       }

//       // Load Crucifixion data
//       const crucifixionData = await menuApi.getCrucifixion();
//       if (crucifixionData.success && crucifixionData.data?.length > 0) {
//         const data = crucifixionData.data[0];
//         setTitleCrucifixion(data.titlecrucifixion || "");
//         setDescriptionCrucifixion1(data.descriptioncrucifixion1 || "");
//         setDescriptionCrucifixion2(data.descriptioncrucifixion2 || "");
//         setDescriptionCrucifixion3(data.descriptioncrucifixion3 || "");
//         setDescriptionCrucifixion4(data.descriptioncrucifixion4 || "");
//         setDescriptionCrucifixion5(data.descriptioncrucifixion5 || "");
//         setDescriptionCrucifixion6(data.descriptioncrucifixion6 || "");
//         setDescriptionCrucifixion7(data.descriptioncrucifixion7 || "");
//         setDescriptionCrucifixion8(data.descriptioncrucifixion8 || "");
//         setDescriptionCrucifixion9(data.descriptioncrucifixion9 || "");
//         setDescriptionCrucifixion10(data.descriptioncrucifixion10 || "");
//         setDescriptionCrucifixion11(data.descriptioncrucifixion11 || "");
//       }

//       // Load Sabbath data
//       const sabbathData = await menuApi.getSabbath();
//       if (sabbathData.success && sabbathData.data?.length > 0) {
//         const data = sabbathData.data[0];
//         setTitleSabbath(data.titlesabbath || "");
//         setDescriptionSabbath1(data.descriptionsabbath1 || "");
//         setDescriptionSabbath2(data.descriptionsabbath2 || "");
//         setDescriptionSabbath3(data.descriptionsabbath3 || "");
//         setDescriptionSabbath4(data.descriptionsabbath4 || "");
//         setDescriptionSabbath5(data.descriptionsabbath5 || "");
//       }

//       // Load Erosion data
//       const erosionData = await menuApi.getErosion();
//       if (erosionData.success && erosionData.data?.length > 0) {
//         const data = erosionData.data[0];
//         setDescriptionErosion(data.descriptionerosion || "");
//       }

//       // Load Operation data
//       const operationData = await menuApi.getOperation();
//       if (operationData.success && operationData.data?.length > 0) {
//         const data = operationData.data[0];
//         setDescriptionOperation1(data.descriptionoperation1 || "");
//         setDescriptionOperation2(data.descriptionoperation2 || "");
//         setDescriptionOperation3(data.descriptionoperation3 || "");
//         setDescriptionOperation4(data.descriptionoperation4 || "");
//       }

//       // Load Balance data
//       const balanceData = await menuApi.getBalance();
//       if (balanceData.success && balanceData.data?.length > 0) {
//         const data = balanceData.data[0];
//         setTitleBalance(data.titlebalance || "");
//         setDescriptionBalance1(data.descriptionbalance1 || "");
//         setDescriptionBalance2(data.descriptionbalance2 || "");
//         setDescriptionBalance3(data.descriptionbalance3 || "");
//         setDescriptionBalance4(data.descriptionbalance4 || "");
//       }
//     } catch (error) {
//       console.error("Error loading menu data:", error);
//     }
//   };

//   loadAllData();
// }, []);

// // Handler functions with API integration
// const handleSaveTetragrama = async () => {
//   try {
//     const data = {
//       title,
//       description,
//       description2,
//     };
//     await menuApi.updateTetragrama(1, data);
//   } catch (error) {
//     console.error("Error saving Tetragrama:", error);
//   }
// };

// const handleSaveNation = async () => {
//   try {
//     const data = {
//       titlenation: titleNation,
//       descriptionnation: descriptionNation,
//       descriptionnation2: descriptionNation2,
//       descriptionnation3: descriptionNation3,
//     };
//     await menuApi.updateNation(1, data);
//   } catch (error) {
//     console.error("Error saving Nation:", error);
//   }
// };

// const handleSaveUniverse = async () => {
//   try {
//     const data = {
//       descriptionuniverse1: descriptionUniverse1,
//       descriptionuniverse2: descriptionUniverse2,
//       descriptionuniverse3: descriptionUniverse3,
//       descriptionuniverse4: descriptionUniverse4,
//       videolinkuniverse: videoLinkUniverse,
//     };
//     await menuApi.updateUniverse(1, data);
//   } catch (error) {
//     console.error("Error saving Universe:", error);
//   }
// };

// const handleSaveFeasts = async () => {
//   try {
//     const data = {
//       titlefeasts: titleFeasts,
//       titlefeasts2: titleFeasts2,
//       fieldfeasts2: fieldFeasts2,
//       titlefeasts3: titleFeasts3,
//       fieldfeasts3: fieldFeasts3,
//       titlefeasts4: titleFeasts4,
//       fieldfeasts4: fieldFeasts4,
//       descriptionfeasts4: descriptionFeasts4,
//       videofeasts4: videoFeasts4,
//       titlefeasts5: titleFeasts5,
//       fieldfeasts5: fieldFeasts5,
//       descriptionfeasts5: descriptionFeasts5,
//       videofeasts5: videoFeasts5,
//       titlefeasts6: titleFeasts6,
//       fieldfeasts6a: fieldFeasts6a,
//       fieldfeasts6b: fieldFeasts6b,
//     };
//     await menuApi.updateFeasts(1, data);
//   } catch (error) {
//     console.error("Error saving Feasts:", error);
//   }
// };

// const handleSaveCrucifixion = async () => {
//   try {
//     const data = {
//       titlecrucifixion: titleCrucifixion,
//       descriptioncrucifixion1: descriptionCrucifixion1,
//       descriptioncrucifixion2: descriptionCrucifixion2,
//       descriptioncrucifixion3: descriptionCrucifixion3,
//       descriptioncrucifixion4: descriptionCrucifixion4,
//       descriptioncrucifixion5: descriptionCrucifixion5,
//       descriptioncrucifixion6: descriptionCrucifixion6,
//       descriptioncrucifixion7: descriptionCrucifixion7,
//       descriptioncrucifixion8: descriptionCrucifixion8,
//       descriptioncrucifixion9: descriptionCrucifixion9,
//       descriptioncrucifixion10: descriptionCrucifixion10,
//       descriptioncrucifixion11: descriptionCrucifixion11,
//     };
//     await menuApi.updateCrucifixion(1, data);
//   } catch (error) {
//     console.error("Error saving Crucifixion:", error);
//   }
// };

// const handleSaveSabbath = async () => {
//   try {
//     const data = {
//       titlesabbath: titleSabbath,
//       descriptionsabbath1: descriptionSabbath1,
//       descriptionsabbath2: descriptionSabbath2,
//       descriptionsabbath3: descriptionSabbath3,
//       descriptionsabbath4: descriptionSabbath4,
//       descriptionsabbath5: descriptionSabbath5,
//     };
//     await menuApi.updateSabbath(1, data);
//   } catch (error) {
//     console.error("Error saving Sabbath:", error);
//   }
// };

// const handleSaveErosion = async () => {
//   try {
//     const data = {
//       descriptionerosion: descriptionErosion,
//     };
//     await menuApi.updateErosion(1, data);
//   } catch (error) {
//     console.error("Error saving Erosion:", error);
//   }
// };

// const handleSaveOperation = async () => {
//   try {
//     const data = {
//       descriptionoperation1: descriptionOperation1,
//       descriptionoperation2: descriptionOperation2,
//       descriptionoperation3: descriptionOperation3,
//       descriptionoperation4: descriptionOperation4,
//     };
//     await menuApi.updateOperation(1, data);
//   } catch (error) {
//     console.error("Error saving Operation:", error);
//   }
// };

// const handleSaveBalance = async () => {
//   try {
//     const data = {
//       titlebalance: titleBalance,
//       descriptionbalance1: descriptionBalance1,
//       descriptionbalance2: descriptionBalance2,
//       descriptionbalance3: descriptionBalance3,
//       descriptionbalance4: descriptionBalance4,
//     };
//     await menuApi.updateBalance(1, data);
//   } catch (error) {
//     console.error("Error saving Balance:", error);
//   }
// };