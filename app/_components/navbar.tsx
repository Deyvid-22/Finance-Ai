"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between px-8 py-4 border-b border-solid">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" width={176} height={39} alt="Finance-Ai" />
        <Link
          href="/"
          className={
            pathname == "/" ? "text-primary font-bold" : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="transactions"
          className={
            pathname == "/transactions"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname == "/subscription"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          Assinaturas
        </Link>
      </div>
      <UserButton showName />
    </nav>
  );
}
