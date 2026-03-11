"use client";

import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header role="user" isAuthenticated={false} onLogout={() => {}} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
