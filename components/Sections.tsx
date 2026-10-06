"use client";

import { FormEvent, useId, useState } from "react";
import inventory from "@/data/listings.json";
import type { Leaf } from "@/lib/dictionary";
import { useDict } from "@/lib/dictionary";
import { EMAIL, lane, MAPS, PHONE_DISPLAY, PHONE_TEL, RECRUIT_EMAIL, SOCIAL } from "@/lib/lane";
import { useLocale } from "@/lib/prefs";
import { BrassPrice, BrassRule, InView, TextEffect } from "./motion";

type Listing = (typeof inventory.listings)[number];

const listings = inventory.listings as Listing[];
const week = listings.find((item) => item.ofTheWeek) as Listing;
const coastIds = ["25884958", "22382775", "25645524", "21651680", "20436064", "19145308"];
const premiumIds = ["23326290", "19304628", "26318693", "24495514", "19592606"];
const coast = coastIds.map((id) => listings.find((item) => item.id === id) as Listing);
const premium = premiumIds.map((id) => listings.find((item) => item.id === id) as Listing);
const TYPES = ["T0", "T1", "T2", "T3", "T4", "T5", "T6+"];

function byId(id: string) {
  return listings.find((item) => item.id === id) as Listing;
}

export function Sections() {
  return (
    <main>
      <Hero />
      <Properties />
      <Premium />
      <Developments />
      <Zones />
      <Cascais />
      <OffMarket />
      <Riviera />
      <Ledger />
      <About />
      <Recruit />
      <Newsletter />
      <Contact />
    </main>
  );
}

function Kicker({ children }: { children: string }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">{children}</p>;
}

function Hero() {
  const copy = useDict();
  const locale = useLocale();
  return (
    <section id="pesquisa" className="relative min-h-[100svh]">
      <img
        src="/media/hero.jpg"
        alt="Lane Exclusive Real Estate, Cascais"
        className="plate absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[90rem] flex-col items-center justify-end px-5 pb-16 pt-32 text-center text-[#F4F1EC] md:pb-24">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F4F1EC]/80">{copy.heroKicker}</p>
        <h1 className="max-w-5xl font-serif text-[3.1rem] font-medium leading-[0.92] tracking-[-0.02em] sm:text-7xl lg:text-8xl">
          <TextEffect text={copy.heroLine} italicWord={copy.heroItalic} />
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[13px] tracking-wide">
          {copy.shortcuts.map((item, index) => (
            <span key={item.href} className="flex items-center gap-5">
              {index > 0 ? <span className="hidden text-brass sm:inline" aria-hidden="true">·</span> : null}
              <a href={lane(item.href, locale)} className="border-b border-transparent pb-0.5 hover:border-[#F4F1EC]">
                {item.label}
              </a>
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={lane(copy.searchLive, locale)} className="rounded-full bg-[#F4F1EC] px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-greige">
            {copy.cta}
          </a>
          <a href="#off-market" className="rounded-full border border-[#F4F1EC]/70 px-5 py-2.5 text-sm font-medium text-[#F4F1EC] transition-colors hover:bg-[#F4F1EC]/10">
            {copy.offMarketJump}
          </a>
        </div>
      </div>
    </section>
  );
}

function Properties() {
  const copy = useDict();
  return (
    <section className="mx-auto max-w-page px-5 py-24 md:px-10 md:py-32">
      <InView>
        <div id="propriedades">
          <Kicker>{copy.propertiesKicker}</Kicker>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] md:text-6xl">{copy.propertiesTitle}</h2>
        </div>
      </InView>
      <article className="mt-12 grid overflow-hidden bg-navy text-[#F4F1EC] md:grid-cols-12">
        <a href={week.listingUrl} className="group relative md:col-span-7 lg:col-span-8">
          <img src={week.photo} alt={week.title} className="plate h-[68vw] max-h-[760px] min-h-[320px] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] md:h-full" />
        </a>
        <div className="flex flex-col justify-end gap-6 p-7 md:col-span-5 md:p-10 lg:col-span-4 lg:p-12">
          <Kicker>{copy.weekKicker}</Kicker>
          <h3 className="font-serif text-4xl leading-[1.05]">
            <a href={week.listingUrl} className="hover:text-brass">{week.title}</a>
          </h3>
          <p className="text-sm text-[#B4ADA3]">{week.location}</p>
          <p className="font-serif text-3xl text-brass">
            <BrassPrice>{week.price}</BrassPrice>
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-[#B4ADA3]">{week.typology}</p>
          <a href={week.listingUrl} className="text-sm underline decoration-brass/70 underline-offset-4">{copy.viewListing}</a>
        </div>
      </article>
      <div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
        {coast.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function Premium() {
  const copy = useDict();
  const lead = byId("23326290");
  const rest = premium.slice(1);
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12 lg:gap-16">
        <InView className="lg:col-span-4">
          <div id="premium">
            <Kicker>{copy.premiumKicker}</Kicker>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] md:text-6xl">{copy.premiumTitle}</h2>
          </div>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">{copy.premiumLead}</p>
        </InView>
        <div className="lg:col-span-8">
          <Card item={lead} large />
        </div>
      </div>
      <div className="mx-auto grid max-w-page gap-x-6 gap-y-14 px-5 pb-24 md:grid-cols-2 md:px-10 xl:grid-cols-4">
        {rest.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function Card({ item, large = false }: { item: Listing; large?: boolean }) {
  const copy = useDict();
  const meta = [item.typology, item.area].filter(Boolean).join(" · ");
  return (
    <a href={item.listingUrl} className="group block">
      <div className="overflow-hidden bg-greige/30">
        <img
          src={item.photo}
          alt={item.title}
          className={`plate w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] ${large ? "aspect-[16/10]" : "aspect-[4/5]"}`}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className={`font-serif leading-tight ${large ? "text-3xl md:text-4xl" : "text-[1.65rem]"}`}>{item.title}</h3>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <p className="text-sm text-muted">{item.location}</p>
        <p className="whitespace-nowrap text-sm tracking-wide text-brass">
          <BrassPrice>{item.price}</BrassPrice>
        </p>
      </div>
      <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted">
        {item.badge ? <span className="mr-2 text-brass">{copy.newPrice}</span> : null}
        {meta}
        {item.ref ? <span className="ml-2">{copy.refLabel} {item.ref}</span> : null}
      </p>
    </a>
  );
}

function Developments() {
  const copy = useDict();
  const locale = useLocale();
  const plate = byId("21651680");
  return (
    <section id="empreendimentos" className="relative min-h-[70vh]">
      <img src={plate.photo} alt={plate.title} className="plate absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#0B1620]/45" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-page flex-col justify-start px-5 pb-16 pt-12 text-[#F4F1EC] md:px-10 md:pt-16">
        <InView>
          <div>
          <Kicker>{copy.devKicker}</Kicker>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] md:text-6xl">{copy.devTitle}</h2>
          <p className="mt-5 max-w-md text-[#F4F1EC]/80">{copy.devBody}</p>
          <a href={lane("/empreendimentos", locale)} className="mt-8 inline-flex w-fit rounded-full border border-[#F4F1EC]/70 px-5 py-2.5 text-sm hover:bg-[#F4F1EC] hover:text-navy">
            {copy.devLink}
          </a>
          </div>
        </InView>
      </div>
    </section>
  );
}

function Zones() {
  const copy = useDict();
  const locale = useLocale();
  return (
    <section className="mx-auto grid max-w-page items-start gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
      <InView className="lg:col-span-5">
        <img src="/media/area.jpg" alt="Cascais" className="plate aspect-[4/3] w-full max-w-[640px] border border-[var(--line)] object-cover" />
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{copy.zonesCaption}</p>
      </InView>
      <div className="lg:col-span-7">
        <div id="zonas">
          <Kicker>{copy.zonesKicker}</Kicker>
          <h2 className="mt-4 max-w-xl font-serif text-5xl leading-[0.95] md:text-6xl">{copy.zonesTitle}</h2>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2">
          {copy.zones.map((zone) => (
            <li key={zone.href}>
              <a href={lane(zone.href, locale)} className="font-serif text-2xl leading-tight hover:text-brass md:text-3xl">
                {zone.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Cascais() {
  const copy = useDict();
  const plate = byId("25884958");
  return (
    <section className="border-t border-[var(--line)]">
      <div className="grid lg:grid-cols-2">
        <img src={plate.photo} alt={plate.title} className="plate h-[70vw] max-h-[820px] min-h-[360px] w-full object-cover lg:h-auto" />
        <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-24">
          <InView>
            <div id="cascais">
              <Kicker>{copy.cascaisKicker}</Kicker>
              <h2 className="mt-4 font-serif text-5xl leading-[0.95] md:text-6xl">{copy.cascaisTitle}</h2>
            </div>
            <div className="mt-8 max-w-xl space-y-5 text-[1.05rem] leading-relaxed">
              {copy.cascais.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}

function OffMarket() {
  const copy = useDict();
  const plate = byId("25645524");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const zona = String(form.get("zona") || "").trim();
    const tipologia = String(form.get("tipologia") || "").trim();
    const orcamento = String(form.get("orcamento") || "").trim();
    const obrigatorio = String(form.get("obrigatorio") || "").trim();
    if (!zona || !tipologia || !orcamento || !obrigatorio) {
      setError(copy.offError);
      return;
    }
    setError("");
    const body = [`${copy.offZone}: ${zona}`, `${copy.offType}: ${tipologia}`, `${copy.offBudget}: ${orcamento}`, `${copy.offMust}: ${obrigatorio}`].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(copy.offSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="relative" aria-labelledby="off-market">
      <img src={plate.photo} alt={plate.title} className="plate absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#0B1620]/35" />
      <div className="relative mx-auto max-w-page px-5 py-20 md:px-10 md:py-28">
        <form id="off-market" onSubmit={onSubmit} className="max-w-xl bg-[var(--paper)] px-6 py-10 text-ink md:px-10 md:py-12" noValidate>
          <Kicker>{copy.offKicker}</Kicker>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{copy.offTitle}</h2>
          <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed">
            {copy.offBody.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-x-6 sm:grid-cols-2">
            <label className="block text-xs uppercase tracking-[0.16em] text-muted">
              {copy.offZone}
              <input name="zona" required className="field-input" autoComplete="off" />
            </label>
            <label className="block text-xs uppercase tracking-[0.16em] text-muted">
              {copy.offType}
              <select name="tipologia" required className="field-input" defaultValue="">
                <option value="" disabled>
                  {copy.offType}
                </option>
                {TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs uppercase tracking-[0.16em] text-muted sm:col-span-2">
              {copy.offBudget}
              <input name="orcamento" required className="field-input" autoComplete="off" />
            </label>
            <label className="block text-xs uppercase tracking-[0.16em] text-muted sm:col-span-2">
              {copy.offMust}
              <textarea name="obrigatorio" required rows={3} className="field-input resize-y" />
            </label>
          </div>
          {error ? <p className="mt-4 text-sm text-brass">{error}</p> : null}
          <button type="submit" className="nav-cta mt-8 rounded-full px-5 py-2.5 text-sm font-medium">
            {copy.offSend}
          </button>
        </form>
      </div>
    </section>
  );
}

function Riviera() {
  const copy = useDict();
  const plate = byId("20436064");
  return (
    <section className="grid lg:grid-cols-12">
      <div className="relative lg:col-span-5">
        <img src={plate.photo} alt={plate.title} className="plate h-[78vw] min-h-[420px] w-full object-cover lg:absolute lg:inset-0 lg:h-full" />
      </div>
      <div className="px-5 py-16 md:px-14 md:py-24 lg:col-span-7">
        <InView>
          <div id="investir">
            <Kicker>{copy.rivieraKicker}</Kicker>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] md:text-7xl">{copy.rivieraTitle}</h2>
          </div>
          <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed">
            {copy.riviera.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted">{copy.rivieraCaption}</p>
        </InView>
      </div>
    </section>
  );
}

function Ledger() {
  const copy = useDict();
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8 md:py-32">
        <InView>
          <div id="guia">
            <Kicker>{copy.ledgerKicker}</Kicker>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] md:text-6xl">{copy.ledgerTitle}</h2>
          </div>
          <p className="mt-6 text-[1.05rem] leading-relaxed">{copy.ledgerIntro}</p>
        </InView>
        <div className="mt-10 border-b border-[var(--line)]">
          {copy.ledger.map((entry) => (
            <Collapse key={entry.title} node={entry} />
          ))}
        </div>
        <p className="mt-10 text-[11px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-muted">{copy.disclaimer}</p>
      </div>
    </section>
  );
}

function Collapse({ node, nested = false }: { node: Leaf; nested?: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return (
    <div className={nested ? "border-t border-[var(--line)]" : "border-t border-[var(--line)]"}>
      <button
        type="button"
        className="flex w-full items-baseline justify-between gap-6 py-5 text-left"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`relative min-w-0 ${nested ? "text-[0.98rem] leading-snug" : "font-serif text-2xl leading-tight md:text-[1.7rem]"}`}>
          {node.title}
          <BrassRule drawn={open} inlay />
        </span>
        <span className="shrink-0 font-serif text-xl text-brass" aria-hidden="true">{open ? "–" : "+"}</span>
      </button>
      <div id={panelId} className="collapse-panel" data-open={open ? "true" : "false"}>
        <div className="overflow-hidden">
          <div className={`pb-6 ${nested ? "pl-0" : ""}`}>
            <LeafBody node={node} />
            {node.children?.length ? (
              <div className="mt-2 border-b border-[var(--line)]">
                {node.children.map((child) => (
                  <Collapse key={child.title} node={child} nested />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeafBody({ node }: { node: Leaf }) {
  return (
    <div className="space-y-3 text-[0.98rem] leading-relaxed">
      {node.body?.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
      {node.bullets?.length ? (
        <ul className="space-y-2 pl-4">
          {node.bullets.map((item) => (
            <li key={item.slice(0, 40)} className="list-disc marker:text-brass">{item}</li>
          ))}
        </ul>
      ) : null}
      {node.note ? <p className="text-sm text-muted">{node.note}</p> : null}
    </div>
  );
}

function About() {
  const copy = useDict();
  const plate = byId("26318693");
  return (
    <section className="border-t border-[var(--line)]">
      <div className="grid lg:grid-cols-2">
        <img src={plate.photo} alt={plate.title} className="plate h-[72vw] min-h-[380px] w-full object-cover lg:h-full" />
        <div className="px-5 py-16 md:px-14 md:py-24">
          <InView>
            <div id="empresa">
              <Kicker>{copy.aboutKicker}</Kicker>
              <h2 className="mt-4 font-serif text-5xl leading-[0.95]">{copy.aboutTitle}</h2>
            </div>
            <div className="mt-8 max-w-xl space-y-5 leading-relaxed">
              {copy.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted">{copy.founders}</p>
          </InView>
        </div>
      </div>
      <div className="mx-auto grid max-w-page gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-20">
        <blockquote className="border-t border-brass pt-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brass">{copy.missionLabel}</p>
          <p className="mt-4 font-serif text-3xl leading-snug">{copy.mission}</p>
        </blockquote>
        <blockquote className="border-t border-brass pt-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brass">{copy.visionLabel}</p>
          <p className="mt-4 font-serif text-3xl leading-snug">{copy.vision}</p>
        </blockquote>
      </div>
      <dl className="mx-auto grid max-w-page border-t border-[var(--line)] px-5 md:grid-cols-3 md:px-10">
        {copy.stats.map((stat) => (
          <div key={stat.value} className="border-b border-[var(--line)] py-10 md:border-b-0 md:border-r md:px-8 md:last:border-r-0 md:first:pl-0">
            <dt className="font-serif text-5xl md:text-6xl">{stat.value}</dt>
            <dd className="mt-3 text-sm text-muted">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Recruit() {
  const copy = useDict();
  const plate = byId("24495514");
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-page items-start gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <InView>
            <div id="recrutamento">
              <Kicker>{copy.recruitKicker}</Kicker>
              <h2 className="mt-4 font-serif text-5xl leading-[0.95]">{copy.recruitTitle}</h2>
            </div>
            <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
              {copy.recruit.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brass">{copy.recruitSeek}</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                  {copy.recruitSeekItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brass">{copy.recruitOffer}</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                  {copy.recruitOfferItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 max-w-2xl leading-relaxed">{copy.recruitClose}</p>
            <a href={`mailto:${RECRUIT_EMAIL}`} className="nav-cta mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-medium">
              {copy.recruitSend}
            </a>
          </InView>
        </div>
        <img src={plate.photo} alt={plate.title} className="plate aspect-[4/5] w-full object-cover lg:col-span-5" />
      </div>
    </section>
  );
}

function Newsletter() {
  const copy = useDict();
  const locale = useLocale();
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const consent = form.get("consent");
    if (!email || !consent) {
      setError(copy.newsError);
      return;
    }
    setError("");
    const body = `${email}\n${copy.newsConsent} ${copy.newsTerms} / ${copy.newsPrivacy}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(copy.newsSubject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-3xl px-5 py-24 md:px-8 md:py-28">
        <div id="newsletter">
          <Kicker>{copy.newsKicker}</Kicker>
          <h2 className="mt-4 font-serif text-5xl leading-tight">{copy.newsTitle}</h2>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted">{copy.newsNote}</p>
        <form onSubmit={onSubmit} className="mt-8" noValidate>
          <label className="block text-xs uppercase tracking-[0.16em] text-muted">
            {copy.newsEmail}
            <input name="email" type="email" required className="field-input" autoComplete="email" />
          </label>
          <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed">
            <input name="consent" type="checkbox" required className="mt-1 accent-[#9A7B4F]" />
            <span>
              {copy.newsConsent}{" "}
              <a className="underline" href={lane("/termos-e-condicoes", locale)}>{copy.newsTerms}</a>
              {" "}
              <span aria-hidden="true">·</span>{" "}
              <a className="underline" href={lane("/politica-de-privacidade", locale)}>{copy.newsPrivacy}</a>
            </span>
          </label>
          {error ? <p className="mt-4 text-sm text-brass">{error}</p> : null}
          <button type="submit" className="nav-cta mt-6 rounded-full px-5 py-2.5 text-sm font-medium">{copy.newsSend}</button>
        </form>
      </div>
    </section>
  );
}

function Contact() {
  const copy = useDict();
  const locale = useLocale();
  const plate = byId("19304628");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !message) {
      setError(locale === "pt" ? "Preencha nome, email e mensagem." : "Please complete name, email and message.");
      return;
    }
    const body = [`${copy.contactName}: ${name}`, `${copy.newsEmail}: ${email}`, "", message].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Lane Portugal")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="border-t border-[var(--line)]">
      <div className="grid lg:grid-cols-2">
        <img src={plate.photo} alt={plate.title} className="plate h-[70vw] min-h-[360px] w-full object-cover lg:h-full" />
        <div className="px-5 py-16 md:px-14 md:py-24">
          <div id="contactos">
            <Kicker>{copy.contactKicker}</Kicker>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95]">{copy.contactTitle}</h2>
          </div>
          <div className="mt-6 max-w-xl space-y-4 leading-relaxed">
            {copy.contact.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 space-y-3 text-sm">
            <p className="text-[11px] uppercase tracking-[0.2em] text-brass">{copy.addressLabel}</p>
            <p>
              <a href={MAPS} className="underline decoration-greige underline-offset-4">
                {copy.address[0]}
                <br />
                {copy.address[1]}
              </a>
            </p>
            <p>
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="underline decoration-greige underline-offset-4">{EMAIL}</a>
            </p>
            <p>
              <a href={`mailto:${RECRUIT_EMAIL}`} className="underline decoration-greige underline-offset-4">{RECRUIT_EMAIL}</a>
            </p>
          </div>
          <form onSubmit={onSubmit} className="mt-10 max-w-lg" noValidate>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brass">{copy.contactWrite}</p>
            <label className="mt-4 block text-xs uppercase tracking-[0.16em] text-muted">
              {copy.contactName}
              <input name="name" required className="field-input" autoComplete="name" />
            </label>
            <label className="mt-2 block text-xs uppercase tracking-[0.16em] text-muted">
              {copy.newsEmail}
              <input name="email" type="email" required className="field-input" autoComplete="email" />
            </label>
            <label className="mt-2 block text-xs uppercase tracking-[0.16em] text-muted">
              {copy.contactMessage}
              <textarea name="message" required rows={4} className="field-input resize-y" />
            </label>
            {error ? <p className="mt-3 text-sm text-brass">{error}</p> : null}
            <button type="submit" className="nav-cta mt-6 rounded-full px-5 py-2.5 text-sm font-medium">{copy.contactSend}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const copy = useDict();
  const locale = useLocale();
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <img src="/media/logo.png" alt="Lane Exclusive Real Estate" className="brand-mark h-9 w-auto" />
          <p className="mt-6 text-sm">{copy.legal}</p>
          <p className="mt-6 text-sm">
            <a href={MAPS} className="underline decoration-greige underline-offset-4">{copy.footerVisit}</a>
          </p>
          <p className="mt-2 text-sm">
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            <span className="mx-2 text-greige">·</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <div className="mt-6 flex gap-5 text-sm">
            <a href={SOCIAL.instagram} className="underline decoration-greige underline-offset-4">Instagram</a>
            <a href={SOCIAL.facebook} className="underline decoration-greige underline-offset-4">Facebook</a>
            <a href={SOCIAL.linkedin} className="underline decoration-greige underline-offset-4">LinkedIn</a>
          </div>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brass">{copy.footerLocations}</p>
          <ul className="mt-4 columns-2 gap-6 text-sm leading-8">
            {copy.zones.map((zone) => (
              <li key={zone.href}>
                <a href={lane(zone.href, locale)}>{zone.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-brass">{copy.footerNav}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {copy.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li><a href={lane("/guia-do-comprador", locale)}>{copy.ledgerKicker}</a></li>
            <li><a href={lane("/golden-visa", locale)}>Golden Visa</a></li>
            <li><a href={lane("/residentes-nao-habituais", locale)}>{locale === "pt" ? "Residentes Não Habituais" : "Non-Habitual Residents"}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-10">
          <p>{copy.built}</p>
          <p>{copy.study}</p>
        </div>
      </div>
    </footer>
  );
}
