// pages/(sous-page)/Shop/ShopPageWrapper.tsx
import { ShopLayout } from "../../../components/ShopLayout"
// import {ShopHeader} from "./ShopHeader"
import ShopHeader from "./ShopHeader"
import {ShopNavigation} from "./ShopNavigation"
import Shop from "./Shop" // ou ton contenu principal

export default function ShopPageWrapper() {
  return (
    <ShopLayout>
      <ShopHeader />
      <ShopNavigation />
      <Shop />
    </ShopLayout>
  )
}