import { DotSeparator } from "@/components/dot-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n";
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const SignInCard = () => {
  const { t } = useI18n();
  
  return (
    <>
     <Card className="w-full h-full glassmorphism max-w-md mx-auto border-none shadow-xl pt-4">
  {/* Header Image */}
  <CardHeader className="flex flex-col items-center text-center p-1">
    <Image
      src="/welcome1.png"
      width={260}
      height={50}
      alt="Sign in illustration"
      className="mt-1 animate-slideInRight1"
      priority
    />
  </CardHeader>

  {/* Friendly Description */}
  <div className="px-6 text-center animate-fadeIn">
    <h1 className="text-lg font-semibold text-gray-800">{t("To")}</h1>
    <h2 className="text-xl font-semibold text-gray-800 mb-1">{t("welcome_to_karnavo")}</h2>
    
    <p className="text-sm text-muted-foreground mb-4">
      {t("description_login_signup")}
    </p>
  </div>

  {/* Divider */}
  <div className="px-6">
    <DotSeparator className="animate-slideInRight2" />
  </div>

  {/* Form */}
  <CardContent className="p-6 animate-slideInRight2">
    <form className="space-y-4">
      <Input
        required
        type="email"
        placeholder={t("email")}
        onChange={() => {}}
        value=""
      />
      <Input
        required
        type="password"
        placeholder={t("password")}
        minLength={8}
        maxLength={50}
        onChange={() => {}}
        value=""
      />
      <Button className="w-full rounded-lg" size="lg">
        {t("login")}
      </Button>
      <div className="text-center mt-2">
    <span className="text-sm text-muted-foreground">
      {t("dont_have_account")}{" "}
      <Link
        href="/sign-up"
        className="font-medium text-blue-600 hover:underline hover:text-blue-800 transition-colors"
      >
        {t("register")}
      </Link>
    </span>
  </div>
    </form>
  </CardContent>

 {/* Divider */}
<div className="flex items-center justify-center my-6 w-full animate-fadeIn">
  <div className="flex-grow h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
  <span className="mx-4 text-sm font-medium text-muted-foreground tracking-wider backdrop-blur-sm px-2 rounded-md">
    OR
  </span>
  <div className="flex-grow h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
</div>

  {/* Social Login */}
  <CardContent className="flex flex-col gap-4 p-6 animate-slideInRight3">
    <Button className="w-full gap-2" variant="secondary" size="lg">
      <Image src="/google.svg" width={20} height={20} alt="Google logo" />
      {t("login_google")}
    </Button>
    <Button className="w-full gap-2" variant="secondary" size="lg">
      <Image src="/github.svg" width={24} height={24} alt="GitHub logo" />
      {t("login_github")}
    </Button>
  </CardContent>
</Card>


      <footer className="mt-8 mb-4 text-center text-sm text-muted-foreground flex flex-col items-center gap-2">
        <div>
          © 2025{" "}
          <Link
            href="https://www.linkedin.com/in/javad-sheikhalishahi-60094629b/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            Javad Sheikhalishahi
          </Link>
          . All rights reserved.
        </div>
        <div className="flex gap-3">
          <Link
            href="https://www.linkedin.com/in/javad-sheikhalishahi-60094629b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-blue-600 hover:text-blue-800 transition-transform hover:scale-110"
          >
            <LinkedinIcon size={18} />
          </Link>
        </div>
      </footer>
    </>
  );
};
