import { SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold text-light-color hover:text-dark-color">
        <User className="w-5 h-5 hover:text-green" />
      </button>
      {/* text-sm font-medium flex flex-col items-center gap-1 text-darkColor hover:text-sky-600 transition-colors */}
    </SignInButton>
  );
};

export default SignIn;
