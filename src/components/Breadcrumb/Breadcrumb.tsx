"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { theme } from "@/theme";

const Breadcrumb = ({ pathname }: { pathname?: string }) => {
  const currentPath = pathname || usePathname() || "/"; // ✅ Default to "/"
  const pathSegments = currentPath.split("/").filter((segment) => segment);

  return (
    <nav
      className={"text-sm my-4 flex space-x-2"}
      role="navigation"
      aria-label="breadcrumb"
    >
      <ul className="flex">
        {/* Home Link */}
        <li>
          <Link href="/" className={theme.colors.text.link}>
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className={"mx-2"}>/</span>
              {isLast ? (
                <span className={theme.colors.text.muted}>
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                <Link href={href} className={theme.colors.text.link}>
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
