"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  const { t } = useI18n();

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="min-w-screen-xl mx-auto px-4 py-6">
        {/* Navbar */}
        <nav className="flex md:top-0 sticky justify-between items-center mb-6">
          {/* Logo + Brand */}
          <div className="flex flex-col items-start">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="Karnavo Logo"
              className="h-auto w-auto"
              priority
            />
            <span className="text-sm font-bold text-gray-600 mt-0 ml-5">
              Karnavo
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <Button
              asChild
              className="rounded-xl glassmorphism text-black px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-xl hover:bg-white/20 hover:border-cyan-500 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
              {isSignIn ? t("sign_up") : t("login")}
              </Link>
            </Button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center pt-6 md:pt-2">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
