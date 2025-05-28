import { DotSeparator } from "@/components/dot-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { CheckCircle, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  email: z.string().email(),
  password: z.string().min(8, "Minimum of 8 characters required"),
});

export const SignUpCard = () => {
  const { t, locale } = useI18n();
  const isFarsi = locale === "fa";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <>
    <div
  className={`flex flex-col lg:flex-row max-w-5xl mx-auto gap-10 px-4 py-8 ${
    isFarsi ? "rtl" : ""
  }`}
  dir={isFarsi ? "rtl" : "ltr"}
>
       {/* Explanation Section */}
       <div className="hidden lg:flex w-full lg:w-1/2 max-w-lg mx-auto p-8 flex-col justify-center rounded-3xl space-y-8">
  <h2 className="text-4xl font-extrabold text-gray-800 flex items-center gap-3 animate-slideInRight4">
    <CheckCircle className="text-blue-600 w-10 h-10 animate-pulse" />
    {t("why_sign_up")} 🤔
  </h2>

  <div className="space-y-6 text-stone-600 text-base leading-relaxed tracking-wide font-medium animate-slideInRight5">
    <p className="flex font-semibold items-start gap-3">
      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
      {t("signup_explanation_paragraph1")}
    </p>
    <p className="flex font-semibold items-start gap-3">
      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
      {t("signup_explanation_paragraph2")}
    </p>
    <p className="flex font-semibold items-start gap-3">
      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
      {t("signup_explanation_paragraph3")}
    </p>
    <p className="flex font-semibold items-start gap-3">
      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
      {t("signup_explanation_paragraph4")}
    </p>
  </div>

  <div className="flex justify-center animate-slideInRight6">
    <Image
      src="/signupexplain.svg"
      alt="Why Sign Up"
      width={400}
      height={280}
      className="rounded-2xl transition-transform hover:scale-105 duration-300 ease-in-out"
      priority
    />
  </div>
</div>
      {/* Sign Up Form Card */}
      <Card className="w-full h-full lg:w-1/2 glassmorphism max-w-lg mx-auto border-none shadow-xl pt-0">
        <CardHeader className="flex text-center items-center justify-center p-7">
          <CardTitle className="text-3xl font-bold text-gray-600 animate-slideInRight">
            {t("sign_up")}
            <Image
              src="/signup.svg"
              width={500}
              height={400}
              alt="Signin"
              className="mt-7 animate-slideInRight1"
            />
          </CardTitle>
          <CardDescription>
            <p className="text-sm text-center text-muted-foreground">
              {t("signup_agreement_prefix")}{" "}
              <Link href="/terms" passHref>
                <span className="text-blue-700 hover:underline text-xs font-semibold">
                  {t("terms_of_service")}
                </span>
              </Link>{" "}
              {t("and")}{" "}
              <Link href="/privacy" passHref>
                <span className="text-blue-700 hover:underline text-xs font-semibold">
                  {t("privacy_policy")}{" "}
                </span>
              </Link>
              {t("signup_agreement_suffix")}
            </p>
          </CardDescription>
        </CardHeader>
        <div className="px-5">
          <DotSeparator className="animate-slideInRight2" />
        </div>
        <CardContent className="p-7 animate-slideInRight2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Form Fields */}
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder={t("name")}
                        className={isFarsi ? "text-right" : "text-left"}
                        dir={isFarsi ? "rtl" : "ltr"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder={t("email")}
                        className={isFarsi ? "text-right" : "text-left"}
                        dir={isFarsi ? "rtl" : "ltr"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder={t("password")}
                        className={isFarsi ? "text-right" : "text-left"}
                        dir={isFarsi ? "rtl" : "ltr"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full rounded-lg" size="lg" disabled={false}>
                {t("Signing_Up")}
              </Button>
            </form>
          </Form>
        </CardContent>
        <div className="px-7">
          <DotSeparator className="animate-slideInRight2" />
        </div>
        <CardContent className="flex flex-col gap-4 p-8 animate-slideInRight3">
          {/* Social Buttons */}
          <Button
            className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 px-5 py-3 text-md font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:font-bold hover:scale-[1.015] active:scale-100"
            size="lg"
            disabled={false}
          >
            <Image
              src="/google.svg"
              width={22}
              height={22}
              alt="Google"
              className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
            />
            <span className="text-gray-500 group-hover:text-gray-900 tracking-wide">
              {t("login_google1")}
            </span>
          </Button>

          <Button
            className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 px-5 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:scale-[1.015] hover:font-bold active:scale-100"
            size="lg"
            disabled={false}
          >
            <Image
              src="/github.svg"
              width={24}
              height={24}
              alt="GitHub"
              className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
            />
            <span className="text-gray-500 group-hover:text-gray-900 tracking-tight">
              {t("login_github1")}
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>

    {/* Footer remains unchanged */}
    <footer className="text-center text-sm text-gray-600 mt-7 mb-4 flex flex-col items-center gap-2">
      <div>
        © 2025{" "}
        <a
          href="https://www.linkedin.com/in/javad-sheikhalishahi-60094629b/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 hover:underline"
        >
          Javad Sheikhalishahi
        </a>
        {t("all_rights_reserved")}
      </div>
      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/in/javad-sheikhalishahi-60094629b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-all hover:scale-110 transform"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={18} />
        </a>
      </div>
    </footer>
  </>
);
};
