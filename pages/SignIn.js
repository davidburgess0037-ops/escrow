import { useState } from "react";
import { useRouter } from "next/router";

function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("admin@escrowbank.com");
  const [password, setPassword] = useState("Escrow@123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Demo credentials
    const defaultEmail = "admin@escrowbank.com";
    const defaultPassword = "Escrow@123";

    if (
      email.trim().toLowerCase() === defaultEmail &&
      password === defaultPassword
    ) {
      // Store a simple demo login state
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", email);

      // Navigate to dashboard
      //await router.push("/dashboard");
    } else {
      setError("Invalid email or password.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md">

        {/* Logo / Brand */}
        <div className="mb-8 text-center">
          <h1 className="font-monteserat text-3xl font-bold text-adainyellow">
            Escrow Bank
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Secure Transactions. Trusted Protection.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900">

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Sign In
            </h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Sign in to access your Escrow Bank dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-adainyellow focus:ring-2 focus:ring-adainyellow/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-adainyellow focus:ring-2 focus:ring-adainyellow/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-adainyellow px-4 py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

          </form>

          {/* Demo Credentials */}
          {/* <div className="mt-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <p className="text-center text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Demo Credentials
            </p>

            <div className="mt-3 text-center text-sm">
              <p className="text-gray-600 dark:text-gray-300">
                Email:{" "}
                <span className="font-semibold">
                  admin@escrowbank.com
                </span>
              </p>

              <p className="mt-1 text-gray-600 dark:text-gray-300">
                Password:{" "}
                <span className="font-semibold">
                  Escrow@123
                </span>
              </p>
            </div>
          </div> */}

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Escrow Bank. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default SignIn;