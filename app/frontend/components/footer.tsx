export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-gray-900 text-gray-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm sm:flex-row">
        <a href="/" className="cursor-pointer hover:text-white">
          © 2026 User Management System
        </a>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms
          </a>
          <a href="/support" className="hover:text-white">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
