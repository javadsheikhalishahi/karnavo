"use client";

import { Loader2, LogOut } from "lucide-react";
import { useState } from "react";
import { useCurrent } from "../api/use-current";
import { useLogout } from "../api/use-loginout";

import { DotSeparator } from "@/components/dot-separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/lib/i18n";

export const UserButton = () => {
  const { mutate: logout } = useLogout();
  const { data: user, isLoading } = useCurrent();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { t, locale } = useI18n();
  const isFarsi = locale === "fa";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center size-10 rounded-full bg-neutral-200 border-neutral-300">
        <Loader2 className="size-4 animate-spin text-blue-600 text-muted-foreground" />
      </div>
    );
  }

  if (!user) return null;

  const { name, email } = user;
  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : email.charAt(0).toUpperCase() ?? "You";

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="relative outline-none">
          <Avatar className="size-10 border border-blue-500 shadow-md hover:opacity-80 transition-opacity duration-200">
            <AvatarFallback className="bg-blue-100 text-black font-semibold flex items-center justify-center">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          side="bottom"
          className="w-64 rounded-2xl border bg-white/70 shadow-xl backdrop-blur-[2px] transition-all"
          sideOffset={12}
        >
          <div className="flex flex-col items-center gap-3 px-4 py-5">
            <Avatar className="size-14 border border-blue-500 shadow-sm">
              <AvatarFallback className="bg-blue-100 text-xl text-black font-semibold flex items-center justify-center">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="text-base font-semibold text-neutral-800">
                {name || "User"}
              </p>
              <p className="text-xs text-neutral-800 mt-2">{email}</p>
            </div>
          </div>

          <DotSeparator className="mb-2" />

          <div
            onClick={() => setDialogOpen(true)}
            className="group flex items-center justify-center gap-2 mx-4 mb-4 h-10 rounded-xl bg-rose-200 text-rose-600 hover:bg-rose-200 transition-all cursor-pointer"
          >
            <LogOut className="size-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-semibold group-hover:opacity-90 transition-opacity duration-200">
              {t("Logout")}
            </span>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent
          className={`data-[state=open]:animate-dialogShow data-[state=closed]:animate-dialogHide
      rounded-2xl border border-neutral-200 bg-white/80 
      backdrop-blur-sm shadow-2xl transition-all duration-300 ease-out 
      ${isFarsi ? "text-right" : "text-left"}`}
        >
          <AlertDialogHeader>
            <AlertDialogTitle
              className={`text-xl font-bold text-neutral-900 ${
                isFarsi ? "text-right" : ""
              }`}
            >
              {t("Are you sure you want to log out?")}
            </AlertDialogTitle>
            <AlertDialogDescription
              className={`text-sm font-semibold text-neutral-600 mt-1 mr-1 ${
                isFarsi ? "text-right" : ""
              }`}
            >
              {t("You’ll need to sign in again to continue using the app.")}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="gap-3">
            <AlertDialogCancel className="rounded-2xl px-5 py-2 text-sm shadow-lg bg-neutral-100 hover:bg-neutral-200 hover:scale-105 transition">
              {t("Cancel")}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => logout()}
              className="rounded-2xl px-5 py-2 text-sm shadow-lg bg-rose-600 text-white hover:scale-105 transition"
            >
              {t("Logout")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
