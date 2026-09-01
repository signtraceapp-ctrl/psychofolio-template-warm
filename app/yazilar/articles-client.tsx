"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import type { SiteContent } from "@/lib/content";

export function ArticlesClient({ content: c }: { content: SiteContent }) {
  return (
    <div className="font-sans bg-bg text-fg">
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-14">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                <BookOpen className="h-3.5 w-3.5" /> Bilgi Paylasimi
              </span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-fg">
                Yazilarim
              </h1>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {c.articles.map((a, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  className="group rounded-[32px] border-2 border-primary/8 bg-bg p-7 shadow-sm hover:shadow-2xl transition-shadow duration-300 space-y-5 cursor-pointer ring-1 ring-inset ring-primary/5"
                >
                  <div className="flex justify-between items-center">
                    <span className="rounded-full bg-accent/10 px-3.5 py-1.5 text-[9px] font-bold text-accent-fg uppercase tracking-wider">
                      {a.category}
                    </span>
                    <span className="text-[10px] text-fg-muted font-medium">
                      {a.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-fg leading-snug group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  {a.date && (
                    <p className="text-xs text-fg-muted mt-2">{a.date}</p>
                  )}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary pt-2">
                    Okumaya devam et{" "}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
