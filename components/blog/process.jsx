import React from "react";

const Process = () => {
  return (
    <>
      {/* <!-- Process --> */}
      <section className="py-24 ">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden"></picture>
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#8358ff] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(131,88,255,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Pigu
              </h3>
              <p className="dark:text-jacarta-300">
                Mūsų platformos dėka, klientai gali gauti pagalbą iš aukštos
                kvalifikacijos terapeutų už konkurencingas kainas, sutaupant
                laiko ir išlaidų, susijusių su tradicinėmis terapijos
                paslaugomis.
              </p>
            </div>
            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#10b981] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(16,185,129,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Patogu
              </h3>
              <p className="dark:text-jacarta-300">
                GeraPagalba teikia individualizuotas terapijos sesijas bet kur
                ir bet kada. Mūsų platforma leidžia klientams gauti terapiją
                tiesiogiai iš savo namų, be papildomo galvos skausmo.
              </p>
            </div>
            <div className="relative rounded-2.5xl border border-jacarta-100 bg-white p-10 shadow-[0_5px_0_0_#ef4444] transition-shadow hover:shadow-[0_16px_24px_-8px_rgba(239,68,68,.3)] dark:border-jacarta-700 dark:bg-jacarta-700">
              <h3 className="mb-4 font-display text-lg text-jacarta-700 dark:text-white">
                Efektyvu
              </h3>
              <p className="dark:text-jacarta-300">
                Mūsų platforma pasižymi plačiu terapijos metodų pasirinkimu už
                prieinamas kainas, leidžiančių suteikti individualiai pritaikytą
                pagalbą kiekvienam
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end process --> */}
    </>
  );
};

export default Process;
