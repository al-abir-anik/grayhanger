import { currentUser } from "@clerk/nextjs/server";
import Cart from "../Cart";
import Favourites from "../Favourites";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import NavMenu from "../NavMenu";
import SearchBar from "../SearchBar";
import Container from "./Container";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import SignIn from "../auth/SignIn";

const Header = async () => {
  const user = await currentUser();

  return (
    <header className="py-5 sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <Container className="flex items-center justify-between text-shop-light-color">
        <div className="w-auto flex items-center justify-start gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <NavMenu />

        <div className="w-auto flex items-center justify-end gap-5">
          <SearchBar />
          <Cart />
          <Favourites />

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
