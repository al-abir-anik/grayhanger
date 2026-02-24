import { SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-shop-light-color hover:text-shop-dark-color ">
        <User className="w-5 h-5 hover:text-shop-green cursor-pointer hoverEffect" />
      </button>
    </SignInButton>
  );
};

export default SignIn;
