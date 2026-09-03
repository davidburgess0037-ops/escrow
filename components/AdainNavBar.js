import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

function AdainNavBar() {
  const [navbar, setNavbar] = useState(false);

  const closeMenu = () => {
    setNavbar(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex h-16 items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center"
            >
              <span className="text-lg font-bold tracking-wide text-adainblack">
                Escrow Wave
                <span className="text-adainyellow">
                  Bank
                </span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-8 md:flex">

              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition hover:text-adainyellow"
              >
                Home
              </Link>

              <Link
                href="/About"
                className="text-sm font-medium text-gray-700 transition hover:text-adainyellow"
              >
                About
              </Link>

              <Link
                href="/Contact"
                className="text-sm font-medium text-gray-700 transition hover:text-adainyellow"
              >
                Contact
              </Link>

              <Link
                href="/customer/signup"
                className="rounded-lg bg-adainyellow px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
              >
                Sign up
              </Link>

            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setNavbar(!navbar)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={navbar}
            >
              {navbar ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>

          </div>

          {/* MOBILE NAVIGATION */}
          {navbar && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-100 py-4 md:hidden"
            >

              <div className="flex flex-col gap-2">

                <Link
                  href="/"
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-adainyellow"
                >
                  Home
                </Link>

                <Link
                  href="/About"
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-adainyellow"
                >
                  About
                </Link>

                <Link
                  href="/Contact"
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-adainyellow"
                >
                  Contact
                </Link>

                <Link
                  href="/SignIn"
                  onClick={closeMenu}
                  className="mt-2 rounded-lg bg-adainyellow px-4 py-3 text-center text-sm font-semibold text-white hover:bg-orange-600"
                >
                  Sign in
                </Link>

              </div>

            </motion.div>
          )}

        </div>

      </motion.div>

    </nav>
  );
}

export default AdainNavBar;