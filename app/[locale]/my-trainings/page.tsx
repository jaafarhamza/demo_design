import Link from "next/link";
import { localizeHref, type Locale, uiDictionary } from "../../i18n";

export default async function MyTrainingsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = uiDictionary[locale].pages.myTrainings;

  return (
    <main className="mx-auto flex w-full max-w-360 flex-1 flex-col px-3 pb-16 pt-8 sm:px-4 sm:pt-10 lg:px-6 lg:pb-24">
      <section className="px-2 py-8 sm:px-3 sm:py-10 lg:px-4 lg:py-14 xl:px-6">
        <div className="rounded-[2rem] border border-border/70 bg-background/68 p-6 shadow-card backdrop-blur-xl sm:p-8">
          <span className="hero-kicker">{copy.eyebrow}</span>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.1rem,5vw,4.4rem)] leading-[0.96] tracking-[-0.05em] text-foreground">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-muted-strong sm:text-[1.08rem]">
            {copy.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={localizeHref(locale, "/trainings")}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-contrast shadow-soft transition-colors hover:bg-brand-700"
            >
              {uiDictionary[locale].nav.trainings}
            </Link>
            <Link
              href={localizeHref(locale, "/")}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong/55 bg-background/85 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
            >
              {uiDictionary[locale].nav.home}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
