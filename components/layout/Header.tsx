import { currentUser } from "@clerk/nextjs/server";
import Favourites from "../Favourites";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import NavMenu from "../NavMenu";
import SearchBar from "../SearchBar";
import Container from "./Container";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import SignIn from "../auth/SignIn";
import CartDrawer from "../cart/CartDrawer";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="py-5 sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <Container className="grid grid-cols-3 items-center text-light-color">
        <NavMenu />

        <div className="w-auto flex items-center justify-center gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <div className="w-auto flex items-center justify-end gap-10">
          <SearchBar />
          <CartDrawer />

          {/* auth */}
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <SignIn />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
