import Image from "next/image";
import TeamCard from "../components/TeamCard";
import ProductCard from "../components/ProductCard";

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">

      {/* Page Header */}
      <section className="px-6 py-12 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-semibold uppercase tracking-widest text-adainyellow">
            About Us
          </p>

          <h1 className="mt-2 font-monteserat text-3xl font-bold text-adainyellow sm:text-4xl">
            About Escrow Bank
          </h1>

          <p className="mx-auto mt-5 max-w-3xl font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
            Building trust and confidence in digital transactions through
            secure, transparent and structured escrow services.
          </p>
        </div>
      </section>

      {/* About Images */}
      <section className="px-6 py-8 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-7xl justify-center">

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="flex justify-center">
              <Image
                src="/images/Rectangle 23.png"
                alt="Escrow Bank transaction services"
                width={500}
                height={350}
                className="h-auto w-full max-w-md rounded-xl object-cover shadow-md"
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/Rectangle 26.png"
                alt="Escrow Bank secure payment services"
                width={500}
                height={350}
                className="h-auto w-full max-w-md rounded-xl object-cover shadow-md"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

          {/* Mission */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">

            <h2 className="inline-block rounded-lg bg-adainyellow px-5 py-2 font-monteserat text-xl font-bold text-white">
              Our Mission
            </h2>

            <p className="mt-5 font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              To make transactions safer and more trustworthy by providing
              secure escrow solutions that protect both buyers and sellers
              throughout the transaction process.
            </p>

          </div>

          {/* Vision */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">

            <h2 className="inline-block rounded-lg bg-adainyellow px-5 py-2 font-monteserat text-xl font-bold text-white">
              Our Vision
            </h2>

            <p className="mt-5 font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              To become a trusted digital escrow platform that enables
              individuals and businesses to transact with confidence across
              Nigeria and beyond.
            </p>

          </div>

          {/* Values */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">

            <h2 className="inline-block rounded-lg bg-adainyellow px-5 py-2 font-monteserat text-xl font-bold text-white">
              Our Values
            </h2>

            <p className="mt-5 font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              Trust, transparency, security, innovation, accountability and
              timely delivery are at the heart of everything we do.
            </p>

          </div>

        </div>
      </section>

      {/* Trust & Technology */}
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-adainyellow">
              Our Philosophy
            </p>

            <h2 className="mt-2 font-monteserat text-3xl font-bold sm:text-4xl">
              People. Technology. Possibilities.
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl">

            <p className="font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              Digital commerce continues to transform the way people buy,
              sell, work and conduct business. As technology evolves, the need
              for secure and trustworthy transactions becomes increasingly
              important.
            </p>

            <p className="mt-5 font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              Escrow Bank was created with the goal of helping individuals and
              businesses reduce transaction risks through a structured escrow
              process. Instead of relying solely on trust between parties,
              transactions can be managed around clearly defined conditions
              before funds are released.
            </p>

            <p className="mt-5 font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              Our platform is designed to bring technology, transparency and
              transaction security together, helping create a better digital
              environment for buyers, sellers and businesses.
            </p>

            <p className="mt-5 font-popins text-lg leading-8 text-gray-600 dark:text-gray-300">
              We are committed to continuous improvement, responsible
              innovation and delivering solutions that create meaningful value
              for the people and businesses that use our platform.
            </p>

          </div>

        </div>

      </section>

      {/* Why Escrow Bank */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-adainyellow">
              Why Escrow Bank
            </p>

            <h2 className="mt-2 font-monteserat text-3xl font-bold sm:text-4xl">
              Designed Around Trust
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-xl p-6 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-adainyellow text-2xl text-white">
                🔒
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Security
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                We focus on creating a structured transaction environment
                designed to reduce unnecessary payment risks.
              </p>

            </div>

            <div className="rounded-xl p-6 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-adainyellow text-2xl text-white">
                🤝
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Trust
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                Our escrow model helps establish confidence between parties
                who may not have an existing relationship.
              </p>

            </div>

            <div className="rounded-xl p-6 text-center shadow-sm">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-adainyellow text-2xl text-white">
                💡
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Innovation
              </h3>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                We use technology to simplify transaction management and
                create better digital experiences.
              </p>

            </div>

          </div>

        </div>

      </section>

    

     

      {/* Final CTA */}
      <section className="px-6 pb-16 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-5xl rounded-2xl bg-adainyellow px-6 py-12 text-center text-white sm:px-12">

          <h2 className="font-monteserat text-3xl font-bold sm:text-4xl">
            Building a Safer Future for Digital Transactions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-popins text-lg">
            Whether you are buying, selling or conducting business, Escrow
            Bank is designed to help bring greater confidence to your
            transactions.
          </p>

        </div>

      </section>

      {/* Elfsight */}
      <div className="flex justify-center px-6 pb-12">
        <div className="elfsight-app-597fb779-735d-41ae-a417-35c199b9ebc6"></div>
      </div>

    </div>
  );
}

export default About;