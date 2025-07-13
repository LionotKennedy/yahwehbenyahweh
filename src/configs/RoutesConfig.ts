import type React from "react"
import { lazy } from "react"

// Lazy loading des composants pour optimiser les performances
const HomePage = lazy(() => import("../pages/HomePage"))

// Pages principales
const UniverseOfYahweh = lazy(() => import("../pages/(sous-page)/UniverseOfYahweh/UniverseOfYahweh"))
const CulturalAttire = lazy(() => import("../pages/(sous-page)/CulturalAttire/CulturalAttire"))
const About_Yahweh = lazy(() => import("../pages/(sous-page)/About_Yahweh/About_Yahweh"))
const AboutYahwehBenYahweh = lazy(() => import("../pages/(sous-page)/About_Yahweh_Ben_Yahweh/About_Yahweh_Ben_Yahweh"))
const The_Followers_of_Yahweh_Ben_Yahweh = lazy(
    () => import("../pages/(sous-page)/The_Followers_of_Yahweh_Ben_Yahweh/The_Followers_of_Yahweh_Ben_Yahweh"),
)
const Contact_Us = lazy(() => import("../pages/(sous-page)/Contact_Us/Contact_Us"))
const Tetragrammaton = lazy(() => import("../pages/(sous-page)/Tetragrammaton/Tetragrammaton"))
const The_Nation_of_Yahweh = lazy(() => import("../pages/(sous-page)/The_Nation_of_Yahweh/The_Nation_of_Yahweh"))
const The_Feasts_of_Yahweh = lazy(() => import("../pages/(sous-page)/The_Feasts_of_Yahweh/The_Feasts_of_Yahweh"))
const The_Good_News_of_Yahweh = lazy(
    () => import("../pages/(sous-page)/The_Good_News_of_Yahweh/The_Good_News_of_Yahweh"),
)
const Back_issues = lazy(() => import("../pages/(sous-page)/The_Good_News_of_Yahweh/(sous page)/back_issues"))
const Back_issues_p2 = lazy(() => import("../pages/(sous-page)/The_Good_News_of_Yahweh/(sous page)/back_issues_p2"))
const The_Crucifixion = lazy(() => import("../pages/(sous-page)/The_Crucifixion/The_Crucifixion"))
const Shocking_Revelations = lazy(() => import("../pages/(sous-page)/Shocking_Revelations/Shocking_Revelations"))
const Page_2 = lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(page)/Page_2"))
const Page_3 = lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(page)/Page_3"))
const The_Sabbath = lazy(() => import("../pages/(sous-page)/The_Sabbath/The_Sabbath"))
const Erosion_of_The_Constitution = lazy(
    () => import("../pages/(sous-page)/Erosion_of_The_Constitution/Erosion_of_The_Constitution"),
)
const Operation_Word_War = lazy(() => import("../pages/(sous-page)/Operation_Word_War/Operation_Word_War"))
const Balance_Justice = lazy(() => import("../pages/(sous-page)/Balance_Justice/Balance_Justice"))
const Book_of_the_Month = lazy(() => import("../pages/(sous-page)/Book_of_the_Month/Book_of_the_Month"))
const Books_for_the_Year = lazy(() => import("../pages/(sous-page)/Books_for_the_Year/Books_for_the_Year"))
// SHOP
const Shop = lazy(() => import("../pages/(sous-page)/Shop/Shop"))

// Pages Shocking Revelations - Page 1
const shockingRevelationsPage1 = {
    The_Stirring_Up_of_Grecia: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/The_Stirring_Up_of_Grecia"),
    ),
    An_Uprising_In_The_Camp: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/An_Uprising_In_The_Camp"),
    ),
    Let_Him_That_Readeth_Understand: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/Let_Him_That_Readeth_Understand"),
    ),
    Many_False_Prophets_Shall_Rise: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/Many_False_Prophets_Shall_Rise"),
    ),
    The_Abomination_of_Desolation: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/The_Abomination_of_Desolation"),
    ),
    The_Seven_Seals_of_The_Apocalypse: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/The_Seven_Seals_of_The_Apocalypse"),
    ),
    The_Rising_of_The: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/The_Rising_of_The")),
    Another_Beast_Coming: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/Another_Beast_Coming"),
    ),
    The_Beast_Like: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/The_Beast_Like")),
    The_Seven_Last_Plagues: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/The_Seven_Last_Plagues"),
    ),
    The_Sign_of_The_Times: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/The_Sign_of_The_Times"),
    ),
    Behold_A_White_Cloud: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page)/Behold_A_White_Cloud"),
    ),
}

// Pages Shocking Revelations - Page 2
const shockingRevelationsPage2 = {
    YBY_The_Appointed: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/YBY_The_Appointed")),
    The_Day_of_The_Lord: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/The_Day_of_The_Lord")),
    Nebuchadnezzar: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/Nebuchadnezzar")),
    Judgment_Shall_Sit: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/Judgment_Shall_Sit")),
    The_Sheep_of_YBY: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/The_Sheep_of_YBY")),
    The_Decryption_of_Shadrach: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/The_Decryption_of_Shadrach"),
    ),
    The_Mysteries: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/The_Mysteries")),
    Mystery_Babylon: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/Mystery_Babylon")),
    The_Bottomless_Pit: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/The_Bottomless_Pit")),
    The_Final_Judgment: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/The_Final_Judgment")),
    Get_Thee_Out: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/Get_Thee_Out")),
    The_Wall_of_Jericho: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page2)/The_Wall_of_Jericho")),
}

// Pages Shocking Revelations - Page 3
const shockingRevelationsPage3 = {
    The_Chronicles: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/The_Chronicles")),
    The_Missionary_Spirit: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/The_Missionary_Spirit"),
    ),
    Overcome_Blood: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/Overcome_Blood")),
    First_Resurrection: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/First_Resurrection")),
    The_Redeemed: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/The_Redeemed")),
    Submitting_To_The_Will: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/Submitting_To_The_Will"),
    ),
    The_Healing_Light: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/The_Healing_Light")),
    The_Sign_Of_The_Times: lazy(
        () => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/The_Sign_Of_The_Times"),
    ),
    Who_Is_Worthy: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/Who_Is_Worthy")),
    YBY_Coming_In: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/YBY_Coming_In")),
    Behold_A_Throne: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/Behold_A_Throne")),
    A_Message_For: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/A_Message_For")),
    Go_To_The_Ant: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/Go_To_The_Ant")),
    YBY_The_Only_Door: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/YBY_The_Only_Door")),
    When_The_Sun: lazy(() => import("../pages/(sous-page)/Shocking_Revelations/(sous page3)/When_The_Sun")),
}

// Pages Admin (à créer)
const AdminDashboard = lazy(() => import("../admin/pages/Dashboard/Dashboard"))
const AdminUsers = lazy(() => import("../admin/pages/Users/Users"))
const AdminContent = lazy(() => import("../admin/pages/Content/Content"))
const AdminImage = lazy(() => import("../admin/pages/Image/Image"))
const AdminSettings = lazy(() => import("../admin/pages/Settings/Settings"))

export interface RouteConfig {
    path: string
    component: React.LazyExoticComponent<React.ComponentType<any>>
    requiresAuth?: boolean
}

// Configuration centralisée des routes
export const routesConfig: RouteConfig[] = [
    // Route principale
    { path: "/", component: HomePage },

    // Pages principales
    { path: "/The_Universe_of_Yahweh", component: UniverseOfYahweh },
    { path: "/Cultural_Attire", component: CulturalAttire },
    { path: "/About_Yahweh", component: About_Yahweh },
    { path: "/About_Yahweh_Ben_Yahweh", component: AboutYahwehBenYahweh },
    { path: "/The_Followers_of_Yahweh_Ben_Yahweh", component: The_Followers_of_Yahweh_Ben_Yahweh },
    { path: "/Contact_Us", component: Contact_Us },
    { path: "/Tetragrammaton", component: Tetragrammaton },
    { path: "/The_Nation_of_Yahweh", component: The_Nation_of_Yahweh },
    { path: "/The_Feasts_of_Yahweh", component: The_Feasts_of_Yahweh },
    { path: "/The_Good_News_of_Yahweh", component: The_Good_News_of_Yahweh },
    { path: "/The_Good_News_of_Yahweh/back_issues", component: Back_issues },
    { path: "/The_Good_News_of_Yahweh/back_issues/2", component: Back_issues_p2 },
    { path: "/The_Crucifixion", component: The_Crucifixion },
    { path: "/Shocking_Revelations", component: Shocking_Revelations },
    { path: "/Shocking_Revelations/2", component: Page_2 },
    { path: "/Shocking_Revelations/3", component: Page_3 },
    { path: "/The_Sabbath", component: The_Sabbath },
    { path: "/Erosion_of_The_Constitution", component: Erosion_of_The_Constitution },
    { path: "/Operation_Word_War", component: Operation_Word_War },
    { path: "/Balance_Justice", component: Balance_Justice },
    { path: "/Book_of_the_Month", component: Book_of_the_Month },
    { path: "/Books_for_the_Year", component: Books_for_the_Year },
    { path: "/Shop", component: Shop },

    // Routes Admin (protégées)
    { path: "/admin", component: AdminDashboard, requiresAuth: true },
    { path: "/admin/users", component: AdminUsers, requiresAuth: true },
    { path: "/admin/content", component: AdminContent, requiresAuth: true },
    { path: "/admin/images", component: AdminImage, requiresAuth: true },
    { path: "/admin/settings", component: AdminSettings, requiresAuth: true },
]

// Génération automatique des routes Shocking Revelations
export const generateShockingRevelationsRoutes = (): RouteConfig[] => {
    const routes: RouteConfig[] = []

    // Page 1
    Object.entries(shockingRevelationsPage1).forEach(([key, component]) => {
        routes.push({
            path: `/Shocking_Revelations/${key}`,
            component,
        })
    })

    // Page 2
    Object.entries(shockingRevelationsPage2).forEach(([key, component]) => {
        routes.push({
            path: `/Shocking_Revelations/2/${key}`,
            component,
        })
    })

    // Page 3
    Object.entries(shockingRevelationsPage3).forEach(([key, component]) => {
        routes.push({
            path: `/Shocking_Revelations/3/${key}`,
            component,
        })
    })

    return routes
}

// Toutes les routes combinées
export const allRoutes: RouteConfig[] = [...routesConfig, ...generateShockingRevelationsRoutes()]
