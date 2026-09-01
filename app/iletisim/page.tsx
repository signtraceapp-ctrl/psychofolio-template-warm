import { getContent } from "@/lib/content";
import { Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "İletişim" };

export default function ContactPage() {
  const c = getContent();
  return (
    <div className="font-sans bg-bg text-fg">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16">
            <h1 className="font-display text-4xl font-light text-center tracking-tight text-fg">{c.contact.title}</h1>
            <p className="text-center text-fg-muted font-light leading-relaxed max-w-lg mx-auto">
              {c.contact.intro}
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 rounded-full bg-accent/40 px-6 py-3 text-sm text-fg-muted">
                <Mail className="h-4 w-4 text-primary/70" />
                <span>{c.site.email}</span>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-accent/40 px-6 py-3 text-sm text-fg-muted">
                <MapPin className="h-4 w-4 text-primary/70" />
                <span>{c.site.address}</span>
              </div>
            </div>

            {/* Contact Form - disabled in demo */}
            <div className="mx-auto max-w-md rounded-[32px] border border-border/50 bg-bg-secondary/30 p-8 space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={c.contact.formName}
                  disabled
                  className="w-full rounded-2xl border border-border/60 bg-bg px-5 py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={c.contact.formEmail}
                  disabled
                  className="w-full rounded-2xl border border-border/60 bg-bg px-5 py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-primary focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder={c.contact.formMessage}
                  disabled
                  className="w-full rounded-2xl border border-border/60 bg-bg px-5 py-3 text-sm text-fg placeholder:text-fg-muted/50 focus:border-primary focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center rounded-full px-10 py-3 text-sm font-medium shadow-sm bg-primary text-primary-fg opacity-50 cursor-not-allowed"
                >
                  {c.contact.formSubmit}
                </button>
              </div>
              <p className="text-center text-xs text-fg-muted/60 italic">
                Örnek sitede form çalışmaz. Satın aldığınızda kendi e-posta adresinize bağlanır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
