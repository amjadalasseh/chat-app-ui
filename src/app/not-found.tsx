"use client"; // ✅ Ensures it runs on the client

import Link from "next/link";
import { theme } from "@/theme";
import { FlixBusLogo } from "@/components/FlixBusLogo/FlixBusLogo";
import Button from "@/components/Button/Button";

export default function NotFoundPage() {
  return (
    <div className={theme.errorPage.container}>
      <FlixBusLogo className="h-16 w-auto mb-6" /> {/* ✅ Logo */}
      <h1 className={theme.errorPage.title}>404 - Page Not Found</h1>
      <p className={theme.errorPage.subtitle}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button label={"Return to Home"} onClick={() => {}} />
      </Link>
    </div>
  );
}
