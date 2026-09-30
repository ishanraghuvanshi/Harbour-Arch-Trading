import React, { useState } from "react";
// Bridge mark only. The wordmark is set as text beside it so it stays legible at header size.
import logoPath from "../assets/logo_icon.png";
import { Menu, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const EMAIL = "ishan@harbourarchtrading.com.au";
const PHONE = "0432 263 400";
const LINKEDIN = "https://www.linkedin.com/in/ishan-raghuvanshi";
// Google Calendar appointment schedule (Workspace Business Starter).
const BOOKING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1r-NnITPbGtvpDVRHxEuy3Eo7j5O6xxoyxdH2xeuGMQsbNVXS2OIf8753mcD5QoGVk-WGvqFEi";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  business: z.string().min(2, "Brand or business name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// Content below matches slides 5 and 6 of the India Market Entry decks
// (Food & Beverage and Supplements & Nutraceuticals versions).
const stages = [
  {
    stage: "Stage 1",
    name: "Readiness assessment",
    what: "Your products assessed against Indian law, item by item.",
    fee: "A$3,500 + GST (food and beverage) · A$5,500 + GST (supplements)",
    decision: "Proceed or stop, on evidence",
  },
  {
    stage: "Stage 2",
    name: "Compliance execution",
    what: "Registrations, label artwork, approvals for anything flagged in Stage 1.",
    fee: "Scoped after Stage 1",
    decision: "Priced against real findings",
  },
  {
    stage: "Stage 3",
    name: "Market entry",
    what: "Importer of record, first consignment, pricing and channel terms.",
    fee: "Scoped at Stage 2 close",
    decision: "Your call on structure",
  },
  {
    stage: "Stage 4",
    name: "Distribution",
    what: "Harbour Arch as your India distributor, offered and never assumed.",
    fee: "Commercial terms",
    decision: "Optional. You choose.",
  },
];

const stageOnePricing = [
  {
    sector: "Food and beverage",
    title: "India Market Readiness Assessment",
    fee: "A$3,500 + GST",
    skus: "Five SKUs. Additional SKUs A$400 + GST each.",
    time: "4 weeks",
  },
  {
    sector: "Supplements and nutraceuticals",
    title: "Formulation & Compliance Mapping",
    fee: "A$5,500 + GST",
    skus: "Five SKUs. Additional SKUs A$650 + GST each.",
    time: "6 weeks",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      business: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("business", data.business);
      formData.append("email", data.email);
      formData.append("phone", data.phone || "");
      formData.append("message", data.message);

      const response = await fetch("https://formspree.io/f/xkoypzag", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Record the enquiry in Google Analytics as a lead (no form contents are sent).
        (window as any).gtag?.("event", "generate_lead", { form: "diagnostic_request" });
        toast({
          title: "Message sent",
          description: "Thank you. Ishan will reply within one business day.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: `Something went wrong. Please try again or email ${EMAIL}.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `Something went wrong. Please try again or email ${EMAIL}.`,
        variant: "destructive",
      });
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "#diagnostic", label: "Free diagnostic" },
    { href: "#stages", label: "How it works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoPath}
              alt=""
              className="h-10 w-auto object-contain"
              data-testid="img-logo"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-wide text-primary">HARBOUR ARCH</span>
              <span className="font-semibold text-sm tracking-[0.3em] text-[#8E8F8A] mt-1">TRADING</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-primary text-muted-foreground">
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a free diagnostic</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b bg-background px-4 py-4 space-y-4 shadow-lg absolute w-full left-0 top-16">
            {navLinks.map((l) => (
              <a key={l.href} onClick={closeMobileMenu} href={l.href} className="block text-sm font-medium hover:text-primary">
                {l.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={closeMobileMenu}
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a free diagnostic</a>
            </Button>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* 2. HERO */}
        <section className="py-20 md:py-28 container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
                India market entry for Australian brands
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
                Selling your food, beverage or supplement brand into India
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Regulatory, compliance and pricing readiness, assessed against Indian law before you ship a single
                pallet. India is open to Australian brands. We make sure yours arrives ready to sell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-testid="hero-book-btn">Book a free diagnostic</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                  <a href="#stages" data-testid="hero-how-btn">See how it works</a>
                </Button>
              </div>
            </div>

            <div id="diagnostic" className="md:col-span-2 bg-muted/50 border border-border rounded-xl p-6 md:p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-primary mb-3">Free 45-minute diagnostic</h2>
              <p className="text-muted-foreground mb-5">
                Start with a label photo. Send it with two or three headline ingredients for up to two of your
                products. No cost, and no obligation to go further.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "45-minute call on two of your products",
                  "Three written findings, each citing the Indian regulation",
                  "A follow-up page within 24 hours",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. WHY FIRST */}
        <section className="bg-muted/50 py-16 border-y border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">Know your route into India before you commit to it</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A freight forwarder moves your goods and clears the shipment. This is the earlier question: whether the
              product itself is permitted, correctly labelled and correctly classified before anything is booked.
            </p>
          </div>
        </section>

        {/* 4. FOUR GATES */}
        <section id="stages" className="py-24 container mx-auto px-4 max-w-6xl scroll-mt-16">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Four gates. You decide at each one.</h2>
            <p className="text-muted-foreground text-lg">
              You hold the decision at every gate. Each stage ends with one, and stopping is a normal outcome rather
              than a failed engagement.
            </p>
          </div>

          {/* Phones: one card per stage */}
          <div className="md:hidden space-y-4">
            {stages.map((s) => (
              <div key={s.stage} className="rounded-xl border border-border p-5 space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-primary">{s.stage}</div>
                  <div className="text-muted-foreground">{s.name}</div>
                </div>
                <p className="text-foreground">{s.what}</p>
                <div>
                  <span className="font-medium text-foreground">Fee: </span>
                  <span className="text-muted-foreground">{s.fee}</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Your decision: </span>
                  <span className="text-muted-foreground">{s.decision}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tablets and desktops: table */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm md:text-base">
              <thead className="bg-muted/60 text-primary">
                <tr>
                  <th className="text-left font-semibold p-4">Stage</th>
                  <th className="text-left font-semibold p-4">What happens</th>
                  <th className="text-left font-semibold p-4">Fee</th>
                  <th className="text-left font-semibold p-4">Your decision</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((s) => (
                  <tr key={s.stage} className="border-t border-border align-top">
                    <td className="p-4 min-w-[150px]">
                      <div className="font-semibold text-primary">{s.stage}</div>
                      <div className="text-muted-foreground">{s.name}</div>
                    </td>
                    <td className="p-4 min-w-[220px] text-foreground">{s.what}</td>
                    <td className="p-4 min-w-[180px] text-foreground">{s.fee}</td>
                    <td className="p-4 min-w-[160px] text-muted-foreground">{s.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
            Delivered from Sydney, with regulatory and commercial contacts in Delhi and Bangalore. No incumbent
            distributor relationships, so nothing competes with your brand for attention.
          </p>
        </section>

        {/* 5. STAGE 1 PRICING */}
        <section id="pricing" className="py-24 bg-muted/40 border-y border-border/40 scroll-mt-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Stage 1: fixed scope, fixed fee</h2>
              <p className="text-muted-foreground text-lg">
                A written report rating every ingredient, additive, claim and label element against the governing
                Indian instrument.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              <div className="bg-background rounded-xl border border-border p-5">
                <div className="font-semibold text-secondary mb-1">Green</div>
                <p className="text-sm text-muted-foreground">Compliant as supplied. Nothing to do.</p>
              </div>
              <div className="bg-background rounded-xl border border-border p-5">
                <div className="font-semibold text-amber-600 mb-1">Amber</div>
                <p className="text-sm text-muted-foreground">
                  Label change required. Sticker or reprint, with the cost of each.
                </p>
              </div>
              <div className="bg-background rounded-xl border border-border p-5">
                <div className="font-semibold text-red-700 mb-1">Red</div>
                <p className="text-sm text-muted-foreground">
                  Not compliant. You get the fix (compliant dose or approval route), not just the breach.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {stageOnePricing.map((p) => (
                <div key={p.sector} className="bg-background rounded-xl border border-border shadow-sm p-6 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">{p.sector}</p>
                  <h3 className="text-xl font-semibold text-primary mb-4">{p.title}</h3>
                  <div className="text-3xl font-bold text-primary mb-6">{p.fee}</div>
                  <dl className="space-y-3 text-sm">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-border/60 pb-3">
                      <dt className="font-medium text-foreground">Products</dt>
                      <dd className="text-muted-foreground sm:text-right">{p.skus}</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-border/60 pb-3">
                      <dt className="font-medium text-foreground">Time</dt>
                      <dd className="text-muted-foreground sm:text-right">
                        {p.time} from receipt of a complete product dossier
                      </dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <dt className="font-medium text-foreground">Payment</dt>
                      <dd className="text-muted-foreground sm:text-right">Half on signing, half on delivery</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            <ul className="mt-10 space-y-3 text-muted-foreground max-w-3xl">
              <li>
                <span className="font-medium text-foreground">Also included:</span> landed cost modelled to shelf price,
                tariff classification with both duty scenarios, label gap matrix and claims disposition.
              </li>
              <li>
                <span className="font-medium text-foreground">You receive:</span> a written report, plus a meeting in
                Sydney or a call elsewhere.
              </li>
              <li>
                <span className="font-medium text-foreground">What we need:</span> formulation, artwork, shelf life and
                ex-works pricing. A mutual NDA is signed before anything is sent.
              </li>
              <li>
                <span className="font-medium text-foreground">Stage 2 credit:</span> sign Stage 2 within 30 days of
                receiving the report and 50% of your Stage 1 fee is credited against it.
              </li>
            </ul>
          </div>
        </section>

        {/* 6. ABOUT */}
        <section id="about" className="py-24 bg-primary text-primary-foreground scroll-mt-16">
          <div className="container mx-auto px-4 max-w-3xl space-y-6 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="text-primary-foreground/90">
              Harbour Arch Trading Pty Ltd is a Sydney company run by Ishan Raghuvanshi CPA. Ishan was previously at
              EY and PwC, and worked in risk, audit and commercial operations at De Lage Landen, a Rabobank
              subsidiary.
            </p>
            <p className="text-primary-foreground/90">You deal with Ishan directly, from the diagnostic onward.</p>
            <p className="text-base text-primary-foreground/70">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary">
                LinkedIn
              </a>
              <span className="mx-3 text-primary-foreground/30">|</span>
              ABN 55 697 775 447
            </p>
          </div>
        </section>

        {/* 7. CONTACT */}
        <section id="contact" className="py-24 container mx-auto px-4 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Book a free diagnostic</h2>
              <p className="text-muted-foreground text-lg">
                Pick a time now, or send the form and Ishan will reply within one business day.
              </p>
              <Button asChild size="lg" className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-testid="contact-book-btn">
                  Choose a time
                </a>
              </Button>
            </div>

            <div className="grid md:grid-cols-5 gap-12 lg:gap-24">
              <div className="md:col-span-3 bg-card rounded-xl border shadow-sm p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" name="contact">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Full name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="business"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Brand or business name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your brand" {...field} data-testid="input-business" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@yourbrand.com.au" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Phone number</FormLabel>
                            <FormControl>
                              <Input placeholder="Optional" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Which products would you like reviewed? *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Product names and two or three headline ingredients. Label photos can follow by email."
                              className="min-h-[150px] resize-y"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 text-lg"
                      data-testid="btn-submit"
                    >
                      Request my diagnostic
                    </Button>
                  </form>
                </Form>
              </div>

              <div className="md:col-span-2 space-y-8">
                <div className="bg-muted/50 p-8 rounded-xl border border-border h-full">
                  <h3 className="text-xl font-semibold text-primary mb-6">Contact</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Company</h4>
                      <p className="text-foreground font-medium">Harbour Arch Trading Pty Ltd</p>
                      <p className="text-foreground">Ishan Raghuvanshi CPA</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Location</h4>
                      <p className="text-foreground">Sydney, NSW<br />Australia</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Email</h4>
                      <a href={`mailto:${EMAIL}`} className="text-primary hover:underline break-all">
                        {EMAIL}
                      </a>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Phone</h4>
                      <a href="tel:+61432263400" className="text-foreground hover:underline">{PHONE}</a>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Hours</h4>
                      <p className="text-foreground">Monday to Friday, 9am to 5pm Sydney time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logoPath}
                alt=""
                className="h-10 w-auto object-contain brightness-0 invert"
                data-testid="img-footer-logo"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg tracking-wide text-primary-foreground">HARBOUR ARCH</span>
                <span className="font-semibold text-sm tracking-[0.3em] text-primary-foreground/60 mt-1">TRADING</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-primary-foreground/70">
              <span>ABN 55 697 775 447</span>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <span>Sydney, NSW, Australia</span>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <a href={`mailto:${EMAIL}`} className="hover:text-secondary transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Harbour Arch Trading Pty Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
