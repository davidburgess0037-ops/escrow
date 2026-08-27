import Link from "next/link";
import NightMode from "../components/NightMode";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

      {/* Navigation / Theme */}
      <div className="flex justify-end p-4">
        <NightMode />
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="mb-4 font-semibold uppercase tracking-widest text-adainyellow">
              Secure Escrow Banking
            </p>

            <h1 className="font-monteserat text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Secure Transactions.
              <span className="block text-adainyellow">
                Trusted Protection.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-popins text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
              A secure escrow platform designed to protect buyers and sellers
              by keeping funds safely held until agreed transaction conditions
              are successfully met.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/Job"
                className="w-fit rounded-lg bg-adainyellow px-6 py-3 font-bold text-white transition hover:opacity-90"
              >
                Get Started
              </Link>

              <Link
                href="#how-it-works"
                className="w-fit rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                How It Works
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-gray-200 bg-gray-50 px-6 py-12 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-3">

          <div>
            <div className="mb-3 text-3xl font-bold text-adainyellow">
              🔒
            </div>
            <h3 className="text-lg font-bold">
              Secure Funds
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Funds are held securely until the agreed transaction conditions
              are satisfied.
            </p>
          </div>

          <div>
            <div className="mb-3 text-3xl font-bold text-adainyellow">
              🤝
            </div>
            <h3 className="text-lg font-bold">
              Buyer & Seller Protection
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Create confidence between parties with a transparent transaction
              process.
            </p>
          </div>

          <div>
            <div className="mb-3 text-3xl font-bold text-adainyellow">
              ⚡
            </div>
            <h3 className="text-lg font-bold">
              Simple Transactions
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Manage transactions through an easy-to-use digital platform.
            </p>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-8 text-center">
            <p className="font-semibold uppercase tracking-widest text-adainyellow">
              About Us
            </p>

            <h2 className="mt-2 font-monteserat text-3xl font-bold sm:text-4xl">
              About Escrow Bank
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <p className="font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              Escrow Bank is a digital transaction protection platform built
              to make online and business transactions safer, more transparent
              and more reliable.
            </p>

            <p className="mt-5 font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              We provide an escrow-based approach where funds can be securely
              held while buyers and sellers complete their agreed obligations.
              This helps reduce transaction risk and gives both parties greater
              confidence throughout the process.
            </p>

            <p className="mt-5 font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our goal is to create a trusted digital financial environment
              where individuals and businesses can transact with greater
              confidence.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-gray-50 px-6 py-16 dark:bg-gray-900 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-adainyellow">
              Simple Process
            </p>

            <h2 className="mt-2 font-monteserat text-3xl font-bold sm:text-4xl">
              How Escrow Works
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">

            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="text-3xl font-bold text-adainyellow">
                01
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Create a Transaction
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                The buyer and seller agree on the transaction terms, amount
                and conditions.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="text-3xl font-bold text-adainyellow">
                02
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Buyer Deposits Funds
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                The agreed funds are deposited into the escrow process rather
                than being sent directly to the seller.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="text-3xl font-bold text-adainyellow">
                03
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Agreement Is Completed
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                The seller delivers the agreed product or service according to
                the transaction terms.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="text-3xl font-bold text-adainyellow">
                04
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Funds Are Released
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Once the agreed conditions are satisfied, the transaction can
                proceed to fund release.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-adainyellow">
              Why Choose Us
            </p>

            <h2 className="mt-2 font-monteserat text-3xl font-bold sm:text-4xl">
              Built Around Trust
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="text-xl font-bold">
                Transaction Security
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                Designed to reduce transaction risks by providing a structured
                escrow process between participating parties.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="text-xl font-bold">
                Transparency
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                Clearly defined transaction terms help buyers and sellers
                understand what needs to happen before funds are released.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="text-xl font-bold">
                Business Confidence
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                Give customers and business partners an additional layer of
                confidence when conducting transactions online.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-adainyellow px-6 py-12 text-center text-white sm:px-12">

          <h2 className="font-monteserat text-3xl font-bold sm:text-4xl">
            Transact With Confidence
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-popins text-lg">
            Protect your transactions with a structured escrow process designed
            to create confidence between buyers and sellers.
          </p>

          <Link
            href="/Job"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-bold text-gray-900 transition hover:bg-gray-100"
          >
            Get Started
          </Link>

        </div>
      </section>



      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8 dark:border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>
            <h3 className="font-bold text-adainyellow">
              Escrow Bank
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Secure transactions. Trusted protection.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Escrow Bank. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Home;