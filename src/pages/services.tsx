// src/pages/Services.tsx
import React, { useState } from "react";
import { Link } from "wouter";
import logoPath from "../assets/logo_transparent.png";
import { CheckCircle, Globe2, Ship, ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
      {/* 1. HEADER – same as Home, but using /# anchors */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoPath}
              alt="Harbour Arch Trading logo"
              className="h-10 w-auto object-contain"
              data-testid="img-logo"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base tracking-wide text-primary">
                HARBOUR ARCH
              </span>
              <span className="font-medium text-xs tracking-widest text-muted-foreground uppercase">
                Trading
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Home
            </Link>
            <a
              href="/#products"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Products
            </a>
            <a
              href="/#packs"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Packs
            </a>
            <Link
              href="/services"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Services
            </Link>
            <a
              href="/#about"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              About
            </a>
            <a
              href="/#contact"
              className="transition-colors hover:text-primary text-muted-foreground"
            >
              Contact
            </a>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <a href="/#contact">Request a Quote</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <span className="sr-only">Close menu</span>
            ) : (
              <span className="sr-only">Open menu</span>
            )}
            {mobileMenuOpen ? null : null}
            {mobileMenuOpen ? null : null}
            {/* Use the same icons as Home */}
            {mobileMenuOpen ? (
              // close
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // menu
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b bg-background px-4 py-4 space-y-4 shadow-lg absolute w-full left-0 top-16">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block text-sm font-medium hover:text-primary"
            >
              Home
            </Link>
            <a
              onClick={closeMobileMenu}
              href="/#products"
              className="block text-sm font-medium hover:text-primary"
            >
              Products
            </a>
            <a
              onClick={closeMobileMenu}
              href="/#packs"
              className="block text-sm font-medium hover:text-primary"
            >
              Packs
            </a>
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className="block text-sm font-medium hover:text-primary"
            >
              Services
            </Link>
            <a
              onClick={closeMobileMenu}
              href="/#about"
              className="block text-sm font-medium hover:text-primary"
            >
              About
            </a>
            <a
              onClick={closeMobileMenu}
              href="/#contact"
              className="block text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
            <Button
              asChild
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              onClick={closeMobileMenu}
            >
              <a href="/#contact">Request a Quote</a>
            </Button>
          </div>
        )}
      </header>

      {/* 2. PAGE CONTENT */}
      <main className="flex-1">
        {/* HERO / INTRO */}
        <section className="border-b border-border/40 bg-background">
          <div className="container mx-auto px-4 py-16 md:py-20 max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
              Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
              Trading &amp; Sourcing Services for Australian Businesses
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mb-8">
              Harbour Arch Trading helps Australian businesses source, import and
              export products with clear specifications, CPA-level cost visibility
              and practical, responsive communication throughout each trade.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                CPA-led landed cost analysis
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-secondary" />
                Asia-focused supplier and buyer networks
              </span>
              <span className="inline-flex items-center gap-2">
                <Ship className="w-4 h-4 text-secondary" />
                Import &amp; export coordination
              </span>
            </div>
          </div>
        </section>

        {/* IMPORT SOURCING AGENCY */}
        <section className="py-16 bg-muted/40 border-b border-border/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                  Import Sourcing Agency
                </h2>
                <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                  Commission-based product sourcing for Australian SMEs who want
                  reliable factories, professional communication and clean landed
                  cost calculations on every order.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Who this is for
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Australian SMEs, hospitality operators and product businesses
                    importing 5,000–100,000+ of goods per year who want better
                    control over suppliers, quality and landed costs.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Common problems we solve
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground list-disc list-inside">
                    <li>Difficulty finding and qualifying reliable manufacturers in Asia.</li>
                    <li>Unclear landed costs once freight, duty and GST are included.</li>
                    <li>Weak quality control and communication with overseas suppliers.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    How we work
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground list-disc list-inside">
                    <li>
                      Identify and vet factories using trusted B2B platforms and
                      on-the-ground networks.
                    </li>
                    <li>
                      Coordinate samples and match specifications (GSM, dimensions,
                      packaging and compliance).
                    </li>
                    <li>
                      Negotiate pricing and Incoterms, then oversee production and
                      shipment.
                    </li>
                    <li>
                      Provide CPA-led landed cost analysis before you commit to an
                      order.
                    </li>
                  </ul>
                </div>

                <div className="bg-background border border-border/60 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Commercial model
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3">
                    Fixed or success-based sourcing fees agreed upfront, typically
                    as a percentage of the confirmed order value. You pay factories
                    directly – we act as your commercial sourcing agent.
                  </p>
                  <p className="text-[11px] md:text-xs text-muted-foreground">
                    Detailed fee structure is provided in a written proposal once we
                    understand your category, volume and project scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUSTRALIAN EXPORT AGENCY */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                  Australian Export Agency
                </h2>
                <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                  Commission-based export representation for Australian brands
                  expanding into Asia via distributors, cross-border e-commerce
                  channels and trusted buyer networks.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Who this is for
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Australian manufacturers and brands in health supplements,
                    natural skincare, specialty foods or premium textiles that are
                    export-curious but under-resourced.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    Common problems we solve
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground list-disc list-inside">
                    <li>No in-house export capability or buyer network in Asia.</li>
                    <li>
                      Uncertainty around cross-border e-commerce channels,
                      distributors and compliance.
                    </li>
                    <li>
                      Difficulty converting initial interest into recurring export
                      orders.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                    How we work
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-muted-foreground list-disc list-inside">
                    <li>Map suitable markets and channel options for your product.</li>
                    <li>
                      Identify and approach vetted distributors and CBEC operators in
                      target markets.
                    </li>
                    <li>
                      Coordinate product samples, trial orders and ongoing
                      relationship management.
                    </li>
                    <li>
                      Work alongside trade agencies and logistics partners to keep
                      compliance and delivery on track.
                    </li>
                  </ul>
                </div>

                <div className="bg-muted/40 border border-border/60 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    Commercial model
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm mb-3">
                    Commission-based representation with fees linked to successful
                    export orders, paid by the supplier. Our role is as your export
                    agent – buyer contracts and payments flow directly between buyer
                    and supplier.
                  </p>
                  <p className="text-[11px] md:text-xs text-muted-foreground">
                    Commission ranges and terms are set out in a written export
                    agency agreement tailored to your category and target markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to scope a sourcing or export brief?
            </h2>
            <p className="text-primary-foreground/90 text-base md:text-lg mb-6">
              Share your product, volumes and timelines and we&apos;ll confirm
              within one business day whether Harbour Arch Trading is a fit for
              your trade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
              >
                <a href="/#contact">Use the contact form</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/40 bg-primary text-primary-foreground hover:bg-primary/80"
              >
                <a href="mailto:info@harbourarchtrading.com.au">
                  Email brief
                  <ArrowRightCircle className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER – same as Home */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logoPath}
                alt="Harbour Arch Trading logo"
                className="h-10 w-auto object-contain brightness-0 invert"
                data-testid="img-footer-logo"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base tracking-wide text-primary-foreground">
                  HARBOUR ARCH
                </span>
                <span className="font-medium text-xs tracking-widest text-primary-foreground/60 uppercase">
                  Trading
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-primary-foreground/70">
              <span>ABN: 55 697 775 447</span>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <span>Sydney, NSW, Australia</span>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <a
                href="mailto:info@harbourarchtrading.com.au"
                className="hover:text-secondary transition-colors"
              >
                info@harbourarchtrading.com.au
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Harbour Arch Trading. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;