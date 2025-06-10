import { UserButton } from "@/features/auth/components/user-button";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const { t, locale } = useI18n();
  const isFarsi = locale === "fa";

  return (
    <nav
      className={cn(
        "flex items-center justify-between pt-6 px-1",
        isFarsi && "flex-row-reverse"
      )}
    >
      <div className={cn("flex-col hidden lg:flex", isFarsi && "text-right")}>
        <h1
          className={cn(
            "text-2xl font-bold tracking-tight",
            isFarsi ? "font-farsi text-3xl text-gray-900" : "text-gray-900"
          )}
        >
          {t("Home")}
        </h1>
        <p
          className={cn(
            "text-muted-foreground text-sm",
            isFarsi ? "font-farsi leading-7" : ""
          )}
        >
          {t("Monitor all of your projects and tasks here")}
        </p>
      </div>

      <div className={cn("flex items-center gap-3", isFarsi && "flex-row-reverse")}>
        <LanguageSwitcher />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
