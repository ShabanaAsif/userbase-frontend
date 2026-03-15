"use client";

import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NotificationBell } from "@/components/notification-bell";

interface HeaderProps {
  role: string; // Role of the current user, either 'admin' or 'user'
  isAuthenticated: boolean; // Checks if the user is authenticated
  onLogout: () => void; // Logout handler
}

const Header: FC<HeaderProps> = ({ role, isAuthenticated, onLogout }) => {
  const router = useRouter();

  const handleLogout = () => {
    onLogout();
    router.push("/login");
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="text-2xl font-bold">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 text-white"
            >
              <path
                fill="currentColor"
                d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-3.86 0-7 2-7 4.5V20h14v-1.5c0-2.5-3.14-4.5-7-4.5z"
              />
            </svg>
          </span>
          UMS
        </Link>
      </div>

      <nav>
        <ul className="flex flex-wrap items-center justify-center gap-4 md:justify-start md:gap-6">
          <li>
            <Link href="/" className="hover:text-gray-400">
              
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-400">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <Link href="/profile" className="hover:text-gray-400">
                  Profile
                </Link>
              </li>
              <li>
                <NotificationBell />
              </li>
              {role === "admin" && (
                <>
                  <li>
                    <Link href="/admin/dashboard" className="hover:text-gray-400">
                      Admin Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/notifications"
                      className="hover:text-gray-400"
                    >
                      Notifications
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
        </ul>
      </nav>

      <div className="flex justify-center md:justify-end">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <div className="flex w-full items-center justify-center gap-3 md:w-auto md:justify-end">
            <Link
              href="/login"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
