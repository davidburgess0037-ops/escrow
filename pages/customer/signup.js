
import { useState } from "react";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    try {
      // Demo signup
      // Replace this with your backend API request later.

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", fullName);

      // Show success popup
      setSuccess(true);
    } catch (err) {
      setError("Unable to create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleContinue = async () => {
    setSuccess(false);
    await router.push("/SignIn");
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

        {/* Signup Card */}
        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900">

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Create your Escrow Bank account to get started.
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSignUp}>

            {/* Full Name */}
            <div className="mb-5">
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-adainyellow focus:ring-2 focus:ring-adainyellow/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

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
                placeholder="Create a password"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-adainyellow focus:ring-2 focus:ring-adainyellow/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />

              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 8 characters.
              </p>
            </div>

            {/* Confirm Password */}
            <div className="mb-5">
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-adainyellow focus:ring-2 focus:ring-adainyellow/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-adainyellow px-4 py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}

              <button
                type="button"
                onClick={() => router.push("/SignIn")}
                className="font-semibold text-adainyellow hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Escrow Bank. All rights reserved.
        </p>
      </div>

      {/* ============================= */}
      {/* SUCCESS POPUP */}
      {/* ============================= */}

      {success && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">

          <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl dark:bg-gray-900">

            {/* Success Icon */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">

              <svg
                className="h-9 w-9 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>

            </div>

            {/* Success Title */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Account Created Successfully!
            </h2>

            {/* Success Message */}
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Welcome,{" "}
              <span className="font-semibold">
                {fullName}
              </span>
              .
              <br />
              Your Escrow Bank account has been created successfully. contact admin to active your account.
              escrowave@gmail.com
            </p>

            {/* Continue Button */}
            <button
              type="button"
              onClick={handleContinue}
              className="mt-6 w-full rounded-lg bg-adainyellow px-4 py-3 font-bold text-white transition hover:opacity-90"
            >
              Continue
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;

