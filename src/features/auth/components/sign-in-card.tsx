'use client';

import { DotSeparator } from "@/components/dot-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLogin } from "../api/use-login";
import { loginSchema } from "../schemas";

export const SignInCard = () => {
  const { mutate, isPending } = useLogin();
  const { t, locale } = useI18n();
  const isFarsi = locale === "fa";
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate({ json: values });
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Card className="w-full h-full glassmorphism max-w-lg mx-auto border-none shadow-xl pt-0">
        {/* Header Image */}
        <CardHeader className="flex flex-col items-center text-center p-0 -mb-6">
          <Image
            src="/welcome3.png"
            width={260}
            height={50}
            alt="Sign in illustration"
            className="mt-1 mb-0 animate-slideInRight1"
            priority
          />
        </CardHeader>

        {/* Description */}
        <div className="px-6 text-center animate-fadeIn mb-4">
          <p className="text-base text-muted-foreground mb-3 leading-snug">
            {t("description_login_signup")}
          </p>
        </div>

        {/* Divider */}
        <div className="px-6">
          <DotSeparator className="animate-slideInRight2" />
        </div>

        {/* Form */}
        <CardContent className="p-6 animate-slideInRight2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} type="email" className={isFarsi ? "text-right" : "text-left"}
                        dir={isFarsi ? "rtl" : "ltr"} placeholder={t("email")} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

<FormField
  name="password"
  control={form.control}
  render={({ field }) => {
    return (
      <FormItem>
        <FormControl>
          <div className="relative">
            <Input
              {...field}
              type={showPassword ? "text" : "password"}
              className={`${isFarsi ? "pl-10 pr-2 text-right" : "pr-10 pl-2 text-left"}`}
              dir={isFarsi ? "rtl" : "ltr"}
              placeholder={t("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={`absolute inset-y-0 flex items-center text-muted-foreground ${isFarsi ? "left-2" : "right-2"}`}
              dir={isFarsi ? "rtl" : "ltr"}
              tabIndex={-1} 
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }}
/>
              <div className="pt-3">
                <Button
                  className="w-full rounded-xl"
                  size="lg"
                  disabled={isPending}
                >
                  {t("login")}
                </Button>
              </div>

              <div className="text-center mt-2">
                <span className="text-sm text-muted-foreground">
                  {t("dont_have_account")}{" "}
                  <Link
                    href="/sign-up"
                    className="font-semibold text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                  >
                    {t("register")}
                  </Link>
                </span>
              </div>
            </form>
          </Form>
        </CardContent>

        {/* Divider */}
        <div className="flex items-center justify-center my-6 w-full animate-fadeIn">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
          <span className="mx-4 text-sm font-semibold text-muted-foreground tracking-wider backdrop-blur-2xl px-2 rounded-md">
            {t("OR")}
          </span>
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
        </div>

        {/* Social Login */}
        <CardContent className="flex flex-col gap-4 p-6 animate-slideInRight3">
          <Button
            className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 px-5 py-3 text-md font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:font-bold hover:scale-[1.015] active:scale-100"
            size="lg"
            disabled={isPending}
          >
            <Image
              src="/google.svg"
              width={22}
              height={22}
              alt="Google"
              className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
            />
            <span className="text-gray-500 group-hover:text-gray-900 tracking-tight">
              {t("login_google")}
            </span>
          </Button>

          <Button
            className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 px-5 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:scale-[1.015] hover:font-bold active:scale-100"
            size="lg"
            disabled={isPending}
          >
            <Image
              src="/github.svg"
              width={24}
              height={24}
              alt="GitHub"
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            />
            <span className="text-gray-500 group-hover:text-gray-900 tracking-tight">
              {t("login_github")}
            </span>
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
