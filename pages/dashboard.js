import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

function Dashboard() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedEscrow, setSelectedEscrow] = useState(null);

  const [escrows, setEscrows] = useState([
    {
      id: "ESC-1001",
      title: "Website Development",
      buyer: "admin@escrowbank.com",
      seller: "developer@example.com",
      amount: 150000,
      status: "Pending",
      date: "Aug 27, 2026",
      description:
        "Payment for the development and delivery of a business website.",
    },
    {
      id: "ESC-1002",
      title: "Laptop Purchase",
      buyer: "admin@escrowbank.com",
      seller: "store@example.com",
      amount: 850000,
      status: "Completed",
      date: "Aug 25, 2026",
      description:
        "Purchase of a laptop computer from the seller.",
    },
    {
      id: "ESC-1003",
      title: "Logo Design",
      buyer: "admin@escrowbank.com",
      seller: "designer@example.com",
      amount: 75000,
      status: "Pending",
      date: "Aug 24, 2026",
      description:
        "Professional logo design and brand identity package.",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    seller: "",
    amount: "",
    description: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const authenticated = localStorage.getItem("isAuthenticated");
    const email = localStorage.getItem("userEmail");

    if (!authenticated) {
      router.replace("/");
      return;
    }

    setUserEmail(email || "admin@escrowbank.com");
  }, [router]);

  const formatMoney = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const totalEscrow = useMemo(() => {
    return escrows
      .filter(
        (item) =>
          item.status === "Pending" ||
          item.status === "Disputed"
      )
      .reduce((sum, item) => sum + item.amount, 0);
  }, [escrows]);

  const completedAmount = useMemo(() => {
    return escrows
      .filter((item) => item.status === "Completed")
      .reduce((sum, item) => sum + item.amount, 0);
  }, [escrows]);

  const pendingCount = useMemo(() => {
    return escrows.filter((item) => item.status === "Pending").length;
  }, [escrows]);

  const createEscrow = (e) => {
    e.preventDefault();

    const amount = Number(form.amount);

    if (!form.title.trim()) {
      alert("Please enter a transaction title.");
      return;
    }

    if (!form.seller.trim()) {
      alert("Please enter the seller email.");
      return;
    }

    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const newEscrow = {
      id: `ESC-${Date.now().toString().slice(-6)}`,
      title: form.title.trim(),
      buyer: userEmail,
      seller: form.seller.trim(),
      amount,
      status: "Pending",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      description: form.description.trim(),
    };

    setEscrows((current) => [newEscrow, ...current]);

    setForm({
      title: "",
      seller: "",
      amount: "",
      description: "",
    });

    setShowCreateModal(false);
  };

  const releaseFunds = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to release the escrow funds?"
    );

    if (!confirmed) {
      return;
    }

    setEscrows((current) =>
      current.map((escrow) =>
        escrow.id === id
          ? {
              ...escrow,
              status: "Completed",
            }
          : escrow
      )
    );
  };

  const cancelEscrow = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this escrow transaction?"
    );

    if (!confirmed) {
      return;
    }

    setEscrows((current) =>
      current.map((escrow) =>
        escrow.id === id
          ? {
              ...escrow,
              status: "Cancelled",
            }
          : escrow
      )
    );
  };

  const openDetails = (escrow) => {
    setSelectedEscrow(escrow);
    setShowDetailsModal(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");

    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

          <div>
            <h1 className="font-monteserat text-2xl font-bold text-adainyellow">
              Escrow Bank
            </h1>

            <p className="hidden text-xs text-gray-500 sm:block">
              Secure Transactions. Trusted Protection.
            </p>
          </div>

          <div className="flex items-center gap-3">

            <div className="hidden text-right md:block">
              <p className="text-sm font-semibold">
                {userEmail}
              </p>

              <p className="text-xs text-gray-500">
                Account Administrator
              </p>
            </div>

            <button
              type="button"
              onClick={logout}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              Logout
            </button>

          </div>

        </div>

      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* WELCOME */}
        <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-adainyellow">
              Escrow Dashboard
            </p>

            <h2 className="mt-2 font-monteserat text-3xl font-bold">
              Welcome back 👋
            </h2>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Manage and monitor your escrow transactions.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowCreateModal(true)}
            className="rounded-lg bg-adainyellow px-6 py-3 font-bold text-white shadow-sm transition hover:bg-orange-600"
          >
            + Create Escrow
          </button>

        </section>

        {/* STATISTICS */}
        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Available Balance"
            value={formatMoney(2500000)}
            subtitle="Available for transactions"
            icon="₦"
          />

          <StatCard
            title="Funds in Escrow"
            value={formatMoney(totalEscrow)}
            subtitle="Currently protected"
            icon="🔒"
          />

          <StatCard
            title="Pending Escrow"
            value={pendingCount}
            subtitle="Awaiting completion"
            icon="⏳"
          />

          <StatCard
            title="Completed"
            value={formatMoney(completedAmount)}
            subtitle="Successfully completed"
            icon="✓"
          />

        </section>

        {/* HOW IT WORKS */}
        <section className="mt-10">

          <div className="mb-5">
            <h2 className="font-monteserat text-xl font-bold">
              How Escrow Works
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Simple protection for buyers and sellers.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <ProcessCard
              number="01"
              title="Create"
              description="Create an escrow transaction and define the agreement."
            />

            <ProcessCard
              number="02"
              title="Fund"
              description="The buyer provides the agreed funds for the transaction."
            />

            <ProcessCard
              number="03"
              title="Deliver"
              description="The seller delivers the agreed product or service."
            />

            <ProcessCard
              number="04"
              title="Release"
              description="Funds are released when the agreed conditions are satisfied."
            />

          </div>

        </section>

        {/* TRANSACTIONS */}
        <section className="mt-10">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <h2 className="font-monteserat text-xl font-bold">
                Escrow Transactions
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View and manage your transactions.
              </p>
            </div>

            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
              {escrows.length} Transactions
            </span>

          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 md:block">

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead className="bg-gray-50 dark:bg-gray-800">

                  <tr className="border-b border-gray-200 dark:border-gray-700">

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-gray-500">
                      Transaction
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-gray-500">
                      Seller
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-gray-500">
                      Amount
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-gray-500">
                      Date
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-gray-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-gray-500">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {escrows.map((escrow) => (

                    <tr
                      key={escrow.id}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/50"
                    >

                      <td className="px-6 py-5">

                        <button
                          type="button"
                          onClick={() => openDetails(escrow)}
                          className="text-left"
                        >
                          <p className="font-semibold hover:text-adainyellow">
                            {escrow.title}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
                            {escrow.id}
                          </p>
                        </button>

                      </td>

                      <td className="px-6 py-5 text-sm">
                        {escrow.seller}
                      </td>

                      <td className="px-6 py-5 font-bold">
                        {formatMoney(escrow.amount)}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-500">
                        {escrow.date}
                      </td>

                      <td className="px-6 py-5">
                        <StatusBadge status={escrow.status} />
                      </td>

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-2">

                          <button
                            type="button"
                            onClick={() => openDetails(escrow)}
                            className="rounded-md border border-gray-300 px-3 py-2 text-xs font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                          >
                            View
                          </button>

                          {escrow.status === "Pending" && (
                            <>
                              <button
                                type="button"
                                onClick={() =>
                                  releaseFunds(escrow.id)
                                }
                                className="rounded-md bg-green-600 px-3 py-2 text-xs font-semibold text-white hover:bg-green-700"
                              >
                                Release
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  cancelEscrow(escrow.id)
                                }
                                className="rounded-md bg-red-100 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-200"
                              >
                                Cancel
                              </button>
                            </>
                          )}

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          {/* MOBILE */}
          <div className="space-y-4 md:hidden">

            {escrows.map((escrow) => (

              <div
                key={escrow.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h3 className="font-bold">
                      {escrow.title}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {escrow.id}
                    </p>
                  </div>

                  <StatusBadge status={escrow.status} />

                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">

                  <div>
                    <p className="text-xs text-gray-500">
                      Seller
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold">
                      {escrow.seller}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Amount
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      {formatMoney(escrow.amount)}
                    </p>
                  </div>

                </div>

                <div className="mt-5 flex gap-2">

                  <button
                    type="button"
                    onClick={() => openDetails(escrow)}
                    className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-xs font-semibold dark:border-gray-700"
                  >
                    View
                  </button>

                  {escrow.status === "Pending" && (
                    <>
                      <button
                        type="button"
                        onClick={() => releaseFunds(escrow.id)}
                        className="flex-1 rounded-md bg-green-600 px-3 py-2 text-xs font-semibold text-white"
                      >
                        Release
                      </button>

                      <button
                        type="button"
                        onClick={() => cancelEscrow(escrow.id)}
                        className="flex-1 rounded-md bg-red-100 px-3 py-2 text-xs font-semibold text-red-600"
                      >
                        Cancel
                      </button>
                    </>
                  )}

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

      {/* =====================================================
          CREATE ESCROW MODAL
          ===================================================== */}

      {showCreateModal && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowCreateModal(false);
            }
          }}
        >

          <div
            className="relative z-[101] max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 text-gray-900 shadow-2xl dark:bg-gray-900 dark:text-white sm:p-8"
            onMouseDown={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}
            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-adainyellow">
                  New Transaction
                </p>

                <h2 className="mt-1 font-monteserat text-2xl font-bold">
                  Create Escrow
                </h2>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Create a protected transaction between a buyer and seller.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                ×
              </button>

            </div>

            {/* FORM */}
            <form
              onSubmit={createEscrow}
              className="mt-7 space-y-5"
            >

              {/* TITLE */}
              <div>

                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-semibold"
                >
                  Transaction Title
                </label>

                <input
                  id="title"
                  type="text"
                  value={form.title}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      title: e.target.value,
                    })
                  }
                  placeholder="e.g. Website Development"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-adainyellow focus:ring-2 focus:ring-orange-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-orange-900/30"
                  required
                />

              </div>

              {/* SELLER */}
              <div>

                <label
                  htmlFor="seller"
                  className="mb-2 block text-sm font-semibold"
                >
                  Seller Email
                </label>

                <input
                  id="seller"
                  type="email"
                  value={form.seller}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      seller: e.target.value,
                    })
                  }
                  placeholder="seller@example.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-adainyellow focus:ring-2 focus:ring-orange-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-orange-900/30"
                  required
                />

              </div>

              {/* AMOUNT */}
              <div>

                <label
                  htmlFor="amount"
                  className="mb-2 block text-sm font-semibold"
                >
                  Escrow Amount
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-500">
                    ₦
                  </span>

                  <input
                    id="amount"
                    type="number"
                    min="1"
                    value={form.amount}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        amount: e.target.value,
                      })
                    }
                    placeholder="0"
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-adainyellow focus:ring-2 focus:ring-orange-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-orange-900/30"
                    required
                  />

                </div>

              </div>

              {/* DESCRIPTION */}
              <div>

                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold"
                >
                  Transaction Description
                </label>

                <textarea
                  id="description"
                  rows={4}
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe the product or service being exchanged..."
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-adainyellow focus:ring-2 focus:ring-orange-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-orange-900/30"
                />

              </div>

              {/* INFORMATION */}
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-900/50 dark:bg-orange-900/20">

                <div className="flex gap-3">

                  <span className="text-lg">
                    🔒
                  </span>

                  <div>
                    <p className="text-sm font-bold text-orange-800 dark:text-orange-300">
                      Escrow Protection
                    </p>

                    <p className="mt-1 text-xs leading-5 text-orange-700 dark:text-orange-400">
                      The transaction should only be completed and funds
                      released according to the agreed transaction terms.
                    </p>
                  </div>

                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-adainyellow px-4 py-3 font-bold text-white transition hover:bg-orange-600"
                >
                  Create Escrow
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

      {/* =====================================================
          DETAILS MODAL
          ===================================================== */}

      {showDetailsModal && selectedEscrow && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowDetailsModal(false);
            }
          }}
        >

          <div
            className="relative z-[101] max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 text-gray-900 shadow-2xl dark:bg-gray-900 dark:text-white"
            onMouseDown={(e) => e.stopPropagation()}
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-xs font-bold uppercase tracking-wider text-adainyellow">
                  {selectedEscrow.id}
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {selectedEscrow.title}
                </h2>

              </div>

              <button
                type="button"
                onClick={() => setShowDetailsModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 dark:bg-gray-800 dark:text-gray-300"
              >
                ×
              </button>

            </div>

            <div className="mt-6">

              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-5 dark:bg-gray-800">

                <div>
                  <p className="text-sm text-gray-500">
                    Escrow Amount
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    {formatMoney(selectedEscrow.amount)}
                  </p>
                </div>

                <StatusBadge status={selectedEscrow.status} />

              </div>

              <div className="mt-6 space-y-5">

                <DetailRow
                  label="Buyer"
                  value={selectedEscrow.buyer}
                />

                <DetailRow
                  label="Seller"
                  value={selectedEscrow.seller}
                />

                <DetailRow
                  label="Created"
                  value={selectedEscrow.date}
                />

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Description
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {selectedEscrow.description ||
                      "No description provided."}
                  </p>
                </div>

              </div>

            </div>

            {selectedEscrow.status === "Pending" && (

              <div className="mt-7 flex gap-3 border-t border-gray-200 pt-6 dark:border-gray-800">

                <button
                  type="button"
                  onClick={() => {
                    releaseFunds(selectedEscrow.id);
                    setShowDetailsModal(false);
                  }}
                  className="flex-1 rounded-lg bg-green-600 px-4 py-3 font-bold text-white hover:bg-green-700"
                >
                  Release Funds
                </button>

                <button
                  type="button"
                  onClick={() => {
                    cancelEscrow(selectedEscrow.id);
                    setShowDetailsModal(false);
                  }}
                  className="flex-1 rounded-lg bg-red-100 px-4 py-3 font-bold text-red-600 hover:bg-red-200"
                >
                  Cancel
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}


/* =========================================================
   STAT CARD
   ========================================================= */

function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            {value}
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 font-bold text-adainyellow dark:bg-orange-900/30">
          {icon}
        </div>

      </div>

      <p className="mt-3 text-xs text-gray-500">
        {subtitle}
      </p>

    </div>
  );
}


/* =========================================================
   PROCESS CARD
   ========================================================= */

function ProcessCard({ number, title, description }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">

      <span className="text-2xl font-bold text-adainyellow">
        {number}
      </span>

      <h3 className="mt-3 font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
        {description}
      </p>

    </div>
  );
}


/* =========================================================
   STATUS BADGE
   ========================================================= */

function StatusBadge({ status }) {

  const styles = {
    Pending:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",

    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",

    Cancelled:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",

    Disputed:
      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}


/* =========================================================
   DETAIL ROW
   ========================================================= */

function DetailRow({ label, value }) {
  return (
    <div className="border-b border-gray-100 pb-4 dark:border-gray-800">

      <p className="text-xs font-semibold uppercase text-gray-500">
        {label}
      </p>

      <p className="mt-1 break-all text-sm font-medium">
        {value}
      </p>

    </div>
  );
}


export default Dashboard;