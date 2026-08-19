"use client";

import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";
import { useLang } from "@/lib/i18n";
import { creditGroups, creditImageSrc, creditsCopy } from "../data";

export default function CreditsContent() {
  const { lang } = useLang();

  const totalFiles = creditGroups.reduce(
    (sum, group) =>
      sum + group.entries.reduce((n, entry) => n + entry.files.length, 0),
    0
  );

  return (
    <section className="bg-neutral-050 py-14 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <header className="mb-12 lg:mb-16">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-savana-600 uppercase">
            Waerebo Lodge
          </p>
          <h1 className="text-4xl leading-tight font-semibold text-savana-800 lg:text-5xl">
            {creditsCopy.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-pale-savana-500">
            {creditsCopy.intro[lang]}
          </p>
          <p className="mt-3 text-sm text-pale-savana-300">
            {creditsCopy.ownNotice[lang]}
          </p>
        </header>

        {/* Credit groups */}
        <div className="space-y-12 lg:space-y-16">
          {creditGroups.map((group) => (
            <section key={group.id}>
              <h2 className="mb-6 border-b border-savana-800/15 pb-3 text-xl font-semibold text-savana-800 lg:text-2xl">
                {group.title[lang]}
              </h2>

              <ul className="space-y-5">
                {group.entries.map((entry, i) => (
                  <li
                    key={`${group.id}-${i}`}
                    className="flex flex-col gap-3 border-b border-savana-800/8 pb-6 last:border-0 sm:flex-row sm:gap-6"
                  >
                    {/* Owner */}
                    <div className="sm:w-[34%] sm:flex-shrink-0 sm:pt-1">
                      {entry.href ? (
                        <a
                          href={entry.href}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="inline-flex items-center gap-1.5 text-base font-semibold text-savana-800 underline-offset-4 transition-colors hover:text-savana-600 hover:underline"
                        >
                          {entry.owner}
                          <IoOpenOutline size={14} className="opacity-60" />
                        </a>
                      ) : (
                        <span className="text-base font-semibold text-savana-800">
                          {entry.owner}
                        </span>
                      )}
                    </div>

                    {/* Credited images */}
                    <ul className="flex min-w-0 flex-1 flex-wrap gap-3">
                      {entry.files.map((file) => (
                        <li key={file} className="w-[136px] sm:w-[150px]">
                          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-savana-200/50 ring-1 ring-savana-800/10">
                            <Image
                              src={creditImageSrc(file)}
                              alt={`${entry.owner} — ${file}`}
                              fill
                              loading="lazy"
                              sizes="150px"
                              className="object-cover"
                            />
                          </div>
                          <p className="mt-1.5 font-mono text-[10px] leading-snug break-all text-pale-savana-300">
                            {file}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Takedown notice */}
        <aside className="mt-14 rounded-2xl bg-savana-200/60 p-6 lg:mt-20 lg:p-8">
          <h2 className="mb-2 text-lg font-semibold text-savana-800">
            {creditsCopy.takedownHeading[lang]}
          </h2>
          <p className="text-sm leading-relaxed text-pale-savana-500">
            {creditsCopy.takedownBody[lang]}
          </p>
        </aside>

        <p className="mt-8 text-xs text-pale-savana-300">
          {totalFiles} {lang === "id" ? "berkas dikreditkan" : "files credited"}
        </p>
      </div>
    </section>
  );
}
