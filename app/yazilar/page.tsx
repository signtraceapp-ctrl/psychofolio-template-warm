import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Yazılar" };

export default function ArticlesPage() {
  const c = getContent();
  return (
    <div className="font-sans bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <h1 className="font-display text-4xl font-light text-center tracking-tight text-fg">Yazılar</h1>

            {/* Horizontal card layout with category badges */}
            <div className="mx-auto max-w-3xl space-y-5">
              {c.articles.map((a, i) => (
                <div
                  key={i}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-[24px] border border-border/50 bg-bg p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <span className="inline-block self-start text-[10px] tracking-[0.15em] uppercase text-primary-fg bg-primary/80 rounded-full px-3 py-1 font-semibold flex-shrink-0">
                    {a.category}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-lg text-fg group-hover:text-primary transition-colors leading-snug">{a.title}</h2>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-fg-muted flex-shrink-0">
                    <span>{a.readTime}</span>
                    <span className="text-border">|</span>
                    <span>{a.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
