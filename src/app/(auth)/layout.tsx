import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-slate-100 to-neutral-200">
      <div className="max-w-screen-2xl mx-auto p-2">
        <nav className="flex md:top-0 sticky justify-between items-center">

          <div className="flex flex-col items-start">
            <Image
              src="/logo.svg"
              width={100}
              height={50}
              alt="Karnavo Logo"
              className="h-auto w-auto"
              priority
            />
            <span className="text-sm font-bold text-gray-600 mt-0 ml-5">
              Karnavo
            </span>
          </div>
          
          <div className="relative top-full mt-0 right-0">
      <LanguageSwitcher />
    </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-6 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
