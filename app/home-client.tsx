"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Quote, ArrowRight } from "lucide-react";
import type { SiteContent } from "@/lib/content";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

export function HomeClient({ content: c }: { content: SiteContent }) {
  return (
    <div className="font-sans selection:bg-primary/20 bg-bg text-fg">
      {/* Hero - image left, text right (opposite of serene) */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/30 via-bg to-bg" />
        <div className="absolute top-1/3 right-1/4 -z-10 h-80 w-80 rounded-full bg-primary/6 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-16 lg:gap-20">
            {/* Image - left side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[380px] flex-shrink-0"
            >
              <div className="overflow-hidden rounded-[32px] bg-accent/40 p-4 shadow-xl shadow-primary/5">
                <Image
                  src="/warm_hero.png"
                  alt="Sıcak terapi ortamı"
                  width={380}
                  height={480}
                  className="aspect-[4/5] w-full rounded-[24px] object-cover"
                  priority
                />
                <div className="mt-4 px-2 pb-1 text-center">
                  <p className="font-display text-lg italic text-fg">{c.home.cardTitle}</p>
                  <p className="text-[11px] uppercase tracking-wider text-primary/60 mt-1">{c.home.cardSubtitle}</p>
                </div>
              </div>
            </motion.div>

            {/* Text - right side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-xl text-center md:text-left space-y-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase">
                <Heart className="h-3 w-3" /> {c.home.badge}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-fg leading-[1.15]">
                {c.home.headline}<br />
                <span className="italic text-primary font-normal">{c.home.headlineAccent}</span> {c.home.headlineSuffix}
              </h1>
              <p className="max-w-md text-base leading-relaxed text-fg-muted font-light">
                {c.home.description}
              </p>
              <div className="pt-2">
                <a
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-3.5 text-sm font-medium shadow-md shadow-primary/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/15 bg-primary text-primary-fg hover:bg-primary-hover"
                >
                  {c.home.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote - warm background tint */}
      <section className="py-24 bg-accent/25">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-2xl text-center space-y-8"
          >
            <Quote className="h-10 w-10 text-primary/30 mx-auto" />
            <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-fg/85">
              &ldquo;{c.home.quote}&rdquo;
            </p>
            <p className="text-xs tracking-[0.3em] uppercase text-fg-muted">{c.home.quoteAuthor}</p>
          </motion.div>
        </div>
      </section>

      {/* Services - card grid (different from serene's left-border list) */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl md:text-4xl font-light text-fg tracking-tight">Çalışma Alanları</h2>
              <p className="text-sm text-fg-muted">Seans bilgisi için iletişime geçin.</p>
            </div>
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {c.services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group rounded-[32px] border border-border/60 bg-bg p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-fg group-hover:text-primary transition-colors">{s.title}</h3>
                      <span className="flex-shrink-0 text-[10px] tracking-[0.15em] uppercase text-primary/70 bg-accent/60 rounded-full px-3 py-1 font-medium">
                        {s.duration}
                      </span>
                    </div>
                    <p className="text-sm text-fg-muted font-light leading-relaxed">{s.desc}</p>
                    <p className="text-xs text-fg-muted/60 italic">{s.method}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles preview - horizontal cards with category badges */}
      <section className="py-24 bg-bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            <h2 className="font-display text-3xl font-light text-center text-fg tracking-tight">Yazılar</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {c.articles.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-[24px] border border-border/50 bg-bg p-6 hover:shadow-md hover:border-primary/25 transition-all duration-300 cursor-pointer"
                >
                  <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-primary-fg bg-primary/80 rounded-full px-3 py-1 font-semibold mb-4">
                    {a.category}
                  </span>
                  <h3 className="font-display text-base text-fg group-hover:text-primary transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-fg-muted">
                    <span>{a.readTime}</span>
                    <span className="text-border">|</span>
                    <span>{a.date}</span>
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
