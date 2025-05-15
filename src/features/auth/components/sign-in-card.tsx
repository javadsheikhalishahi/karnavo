import { DotSeparator } from "@/components/dot-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n";
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const SignInCard = () => {
  const { t } = useI18n();
  
  return (
    <>
      <Card className="w-full h-full max-w-md mx-auto border-none shadow-xl pt-2">
        {/* Header */}
        <CardHeader className="flex flex-col items-center text-center p-6">
          <CardTitle className="text-3xl font-extrabold text-gray-800 animate-slideInRight">
          {t("welcome")}
          </CardTitle>
          <Image
            src="/signin.svg"
            width={300}
            height={300}
            alt="Sign in illustration"
            className="mt-6 animate-slideInRight1"
            priority
          />
        </CardHeader>
        <div className="px-6">
          <DotSeparator className="animate-slideInRight2" />
        </div>
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
            <Button variant="secondary" className="w-full rounded-lg" size="lg">
            {t("signUp")}
            </Button>
          </form>
        </CardContent>
        <div className="px-6">
          <DotSeparator className="animate-slideInRight2" />
        </div>
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
