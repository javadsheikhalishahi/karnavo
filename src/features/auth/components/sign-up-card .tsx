import { DotSeparator } from "@/components/dot-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const SignUpCard = () => {
  return (
    <>
      <Card className="w-full h-full md:w-[487px] border-none shadow-xl pt-2">
        <CardHeader className="flex text-center items-center justify-center p-7">
          <CardTitle className="text-3xl font-extrabold text-gray-800 animate-slideInRight">
            Sign Up
            <Image
              src="/signup.svg"
              width={400}
              height={400}
              alt="Signin"
              className="mt-7 animate-slideInRight1"
            />
          </CardTitle>
          
        </CardHeader>
        <div className="px-5">
          <DotSeparator className="animate-slideInRight2" />
        </div>
        <CardContent className="p-7 animate-slideInRight2">
          <form className="space-y-4">
            <Input
              required
              type="text"
              value={""}
              onChange={() => {}}
              placeholder="Enter your name"
              disabled={false}
            />
            <Input
              required
              type="email"
              value={""}
              onChange={() => {}}
              placeholder="Enter email address"
              disabled={false}
            />
            <Input
              required
              type="password"
              value={""}
              onChange={() => {}}
              placeholder="Enter password"
              disabled={false}
              min={8}
              max={50}
            />
            <Button className="w-full rounded-lg" size="lg" disabled={false}>
              Sign Up
            </Button>
          </form>
        </CardContent>
        <div className="px-7">
          <DotSeparator className="animate-slideInRight2" />
        </div>
        <CardContent className="flex flex-col p-7 gap-y-4 animate-slideInRight3">
          <Button
            className="w-full"
            variant="secondary"
            size="lg"
            disabled={false}
          >
            <Image src="/google.svg" width={20} height={20} alt="Google"/>
            Login with Google
          </Button>
          <Button
            className="w-full"
            variant="secondary"
            size="lg"
            disabled={false}
          >
            <Image src="/github.svg" width={25} height={25} alt="Github"/>
            Login with GitHub
          </Button>
          <CardDescription className="text-center items-center justify-center mt-3">
            By signing up, you agree to our{" "}
            <Link href="/privacy">
              <span className="text-blue-600 hover:underline">Privacy Policy</span>
            </Link>{" "}
            and {" "}
            <Link href="/terms">
              <span className="text-blue-600 hover:underline">Terms of Service</span>
            </Link>

          </CardDescription>
        </CardContent>
      </Card>
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
          . All rights reserved.
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
