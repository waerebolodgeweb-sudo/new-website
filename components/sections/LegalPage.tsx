import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalPageProps {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16 lg:pt-20">
        <section className="mx-auto max-w-3xl px-6 pt-12 pb-20 lg:px-10 lg:pt-20 lg:pb-28">
          <p className="mb-3 text-base font-normal text-savana-600">Legal</p>
          <h1 className="mb-4 text-4xl leading-tight font-semibold text-neutral-900 lg:text-5xl">
            {title}
          </h1>
          <p className="mb-2 text-base leading-relaxed text-pale-savana-500">
            {intro}
          </p>
          <p className="mb-12 text-sm text-neutral-300">
            Last updated: {lastUpdated}
          </p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-semibold text-neutral-900 lg:text-2xl">
                  {i + 1}. {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-base leading-relaxed text-neutral-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-neutral-050 p-6 lg:p-8">
            <h2 className="mb-2 text-lg font-semibold text-neutral-900">
              Questions?
            </h2>
            <p className="text-base leading-relaxed text-neutral-600">
              If you have any questions about this page, reach out to us at{" "}
              <a
                href="mailto:waerebolodge@gmail.com"
                className="font-medium text-savana-700 hover:underline"
              >
                waerebolodge@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="https://wa.me/6285339021145"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-savana-700 hover:underline"
              >
                +62 853 3902 1145
              </a>
              . Waerebo Lodge — Dintor, Manggarai, Flores, Indonesia.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
