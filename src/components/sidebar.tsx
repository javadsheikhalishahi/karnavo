import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./navigation";
import { Separator } from "./ui/separator";

export const Sidebar = () => {
  const { t, locale } = useI18n();
  const isFarsi = locale === "fa";
  
  return (
    <aside
      className={cn(
        "w-full h-full p-4  bg-gradient-to-br from-[#0d0d0f] via-[#0f0f11] to-[#131316]",
        isFarsi ? "rounded-l-3xl" : "rounded-r-3xl",
      )}
    >
      <Link href="/">
      <div
          className={cn(
            "flex items-center gap-3 p-2 rounded-xl backdrop-blur-sm transition-all duration-300 ease-in-out cursor-pointer shadow-sm",
            "hover:scale-105",
             isFarsi ? "flex-row-reverse" : "flex-row"
          )}
        >
          <Image
            src="/logo.svg"
            width={72}
            height={72}
            alt="Karnavo Logo"
            priority
            className="rounded-lg shadow-md"
          />
          <span
    className={cn(
      "text-white tracking-wide font-semibold",
      isFarsi ? "font-farsi text-xl tracking-wider" : "text-lg font-sans"
    )}
  >
    {t("Karnavo")}
  </span>
        </div>
      </Link>

      <Separator className="my-4" />
      <Navigation />
    </aside>
  );
};
