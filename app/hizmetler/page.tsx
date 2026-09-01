import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hizmetler" };

export default function ServicesPage() {
  const c = getContent();
  return (
    <div className="font-sans bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            <div className="text-center space-y-4">
              <h1 className="font-display text-4xl font-light tracking-tight text-fg">Terapi Hizmetleri</h1>
              <p className="text-sm text-fg-muted">
                Seans bilgisi için iletişime geçin.
              </p>
            </div>
            <div className="mx-auto max-w-3xl grid gap-6 sm:grid-cols-2">
              {c.services.map((s, i) => (
                <div
                  key={i}
                  className="rounded-[32px] border border-border/50 bg-bg p-8 space-y-4 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-xl text-fg">{s.title}</h2>
                    <span className="flex-shrink-0 text-[10px] tracking-[0.15em] uppercase text-primary/70 bg-accent/60 rounded-full px-3 py-1 font-medium">
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-sm text-fg-muted font-light leading-relaxed">{s.desc}</p>
                  <p className="text-xs italic text-fg-muted/70">{s.method}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
