import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

/**here , what we did here is use the "Outlet" from react router domm
 * so we could see all component in the ui
 *
 *
 * the usNavigation is placed here because the isLoading function will be general
 * so when a component is trying to get data , the isLoading function is fired off before the data
 * arive...so head to Loader.jsx
 */

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}
