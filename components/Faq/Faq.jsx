import React from "react";
import Head from "next/head"; // This is for adding the stylesheets to the head of your document
import Image from "next/image";
export default function Faq() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-brand">
          Dažnai užduodami klausimai
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-brand2">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Kas yra GeraPagalba?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                GeraPagalba.lt yra internetinė platforma, skirta psichinės
                sveikatos palaikymui ir gydymui. Mūsų misija - suteikti patikimą
                psichologo bei psichiatro pagalbą internetu.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-brand2">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Konsultacijos internetu privalumai
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Konsultacijos internetu siūlo neįtikėtiną patogumą ir
                prieinamumą. Užsirašyti specialisto konsultacijai tereikia
                prieigos prie interneto. Tai ypač naudinga tiems, kurie gyvena
                nutolusiame regione, turėjo sunkumų su judėjimu arba nori
                išsaugoti anonimiškumą.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-brand2">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Kaip galiu užsiregistruoti internetinei konsultacijai?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                1. Prisijunkite arba prisiregistruokite
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                2. Pasirinkite specialistą, su kuriuo norite konsultuotis. Jūs
                galite naršyti per specialistų profilius ir pasirinkti tą, kuris
                atitinka jūsų poreikius ir specializaciją.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                3. Pasirinkite laiką, kuris jums tinka geriausiai. Dauguma
                specialistų suteikia galimybę pasirinkti iš įvairių laiko
                variantų, nuo 15min iki kelių valandų.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                4. Patvirtinimo pranešimas su konsultacijos prisijungimo nuoroda
                buvo išsiųstas jūsų nurodytu el. pašto adresu ir(ar) jūsų
                pasirinktų tel. numeriu.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                5. Laikui atėjus, atsidarykite nuorodą randama Jūsų profilyje
                arba el. pašte ir prisijungite prie konsultacijos. Tam užtenka
                naršyklės, papildomų programų nėra. Kamera nebūtina.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-brand2">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Turite daugiau klausimų?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Galite mums parašyti el. paštu adresu: info@gerapagalba.lt,
                atsakymą gausite per vieną darbo dieną.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
