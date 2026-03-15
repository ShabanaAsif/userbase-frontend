"use client";

import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { useAuth } from "@/lib/context/AuthContext";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        role={user?.role || 'user'}
        isAuthenticated={!!user}
        onLogout={logout}
      />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
