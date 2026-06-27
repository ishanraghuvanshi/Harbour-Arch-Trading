import React, { useState } from "react";
import { Link } from "wouter";
import logoPath from "../assets/logo_transparent.png";
import imgTowels from "../assets/AdobeStock_365294624_1778384305501.jpeg";
import imgBedding from "../assets/AdobeStock_78653038_1778384305500.jpeg";
import imgHero from "../assets/hero-trading-harbour.jpg";
import imgBathMat from "../assets/bath-mat.png";
import imgBedSheets from "../assets/bed-sheet-1.png";
import imgHandTowel from "../assets/hand-towel.png";
import imgPillowcase from "../assets/pillow-case.jpg";
import {
  Anchor,
  Menu,
  X,
  MapPin,
  MapPinHouse,
  ShieldCheck,
  CheckCircle,
  MessageSquare,
  PackageCheck,
  BedDouble,
  Bath,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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


import PacksSection from "../components/PacksSection";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  business: z.string().min(2, "Business name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

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
      toast({
        title: "Message Sent",
        description: "Thank you for getting in touch. We will respond shortly.",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  }
};

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const productData = [
    {
      id: "bath-towel",
      name: "Bath Towels",
      image: imgTowels,
      imagePosition: "object-center",
      imageAlt: "Harbour Arch Trading bath towels — stacked white commercial towels",
      desc: "Commercial-grade 100% combed cotton bath towels designed for frequent high-temperature washing.",
      specs: [
        { label: "Dimensions", value: "70×140 cm" },
        { label: "Weight", value: "500–550 GSM" },
        { label: "Material", value: "100% combed cotton" },
        { label: "Color", value: "Optical white" },
        { label: "Care", value: "80°C industrial wash" },
      ],
    },
    {
      id: "hand-towel",
      name: "Hand Towels",
      image: imgHandTowel,
      imagePosition: "object-center",
      imageAlt: "Harbour Arch Trading hand towels — white hand towel on ring",
      desc: "Durable and highly absorbent cotton hand towels ideal for hotel and serviced apartment bathrooms.",
      specs: [
        { label: "Dimensions", value: "40×70 cm" },
        { label: "Weight", value: "450–500 GSM" },
        { label: "Material", value: "100% combed cotton" },
        { label: "Color", value: "Optical white" },
        { label: "Care", value: "80°C industrial wash" },
      ],
    },
    {
      id: "bath-mat",
      name: "Bath Mats",
      image: imgBathMat,
      imagePosition: "object-center",
      imageAlt: "Harbour Arch Trading bath mats — white bath mat in bathroom setting",
      desc: "Heavy-duty woven bath mats offering superior durability and slip resistance.",
      specs: [
        { label: "Dimensions", value: "50×80 cm" },
        { label: "Weight", value: "900–1100 GSM" },
        { label: "Material", value: "100% cotton with heavy-duty backing" },
        { label: "Color", value: "Optical white" },
        { label: "Care", value: "60°C wash" },
        { label: "Note", value: "Size subject to supplier confirmation" },
      ],
    },
    {
      id: "fitted-sheet",
      name: "Fitted Sheets",
      image: imgBedSheets,
      imagePosition: "object-center",
      imageAlt: "Harbour Arch Trading fitted sheets — white hotel bed with crisp fitted sheet",
      desc: "Crisp, hotel-quality fitted sheets with deep pockets for commercial mattresses.",
      specs: [
        { label: "Queen Size", value: "153×203 cm, 40 cm pocket" },
        { label: "King Size", value: "183×203 cm, 40 cm pocket" },
        { label: "Thread Count", value: "250–300 TC" },
        { label: "Material", value: "100% cotton (60/40 poly-cotton option)" },
        { label: "Color", value: "Optical white" },
        { label: "Care", value: "80°C commercial" },
      ],
    },
    {
      id: "flat-sheet",
      name: "Flat Sheets",
      image: imgBedSheets,
      imagePosition: "object-bottom",
      imageAlt: "Harbour Arch Trading flat sheets — white hotel flat sheet on bed",
      desc: "Generously sized flat sheets designed for perfect commercial tucking and long-lasting whiteness.",
      specs: [
        { label: "Queen Size", value: "250×290 cm" },
        { label: "King Size", value: "280×290 cm" },
        { label: "Thread Count", value: "250–300 TC" },
        { label: "Material", value: "100% cotton (60/40 poly-cotton option)" },
        { label: "Color", value: "Optical white" },
        { label: "Care", value: "80°C commercial" },
      ],
    },
    {
      id: "pillowcases",
      name: "Pillowcases",
      image: imgPillowcase,
      imagePosition: "object-center",
      imageAlt: "Harbour Arch Trading pillowcases — white pillowcases on hotel bed with lamp",
      desc: "Standard commercial pillowcase pairs matching our sheet specifications.",
      specs: [
        { label: "Dimensions", value: "50×75 cm standard queen pair" },
        { label: "Thread Count", value: "250–300 TC" },
        { label: "Material", value: "Matches sheet spec" },
        { label: "Color", value: "Optical white" },
        { label: "Care", value: "80°C commercial" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
      {/* 1. HEADER */}
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
              <span className="font-bold text-base tracking-wide text-primary">HARBOUR ARCH</span>
              <span className="font-medium text-xs tracking-widest text-muted-foreground uppercase">Trading</span>
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
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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

      <main className="flex-1">
        {/* 2. HERO */}
        <section className="py-20 md:py-32 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
<h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight">
  Hospitality Linen &amp; Trading Services for Australian Businesses
</h1>
<p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
  Harbour Arch Trading provides CPA-led import sourcing and export agency services for Australian businesses
  that want clearer, more reliable product trade.We also specialise in supplying commercial-grade hospitality linen for Hotels, BNBs, Gyms and Spas. 
</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  <a href="#contact" data-testid="hero-quote-btn">Request a Quote</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                  <a href="#products" data-testid="hero-products-btn">View Products</a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden border border-border/50 shadow-sm">
              <img
                src={imgHero}
                alt="White hotel room bed with fresh commercial linen — Harbour Arch Trading"
                className="w-full h-full object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </section>

        {/* 3. TRUST SIGNALS */}
        <section id="about-trust" className="bg-muted/50 py-20 border-y border-border">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Why Harbour Arch Trading</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <MapPin className="w-10 h-10 text-secondary mb-4" />
                  <CardTitle className="text-primary text-xl">Sydney-Based Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Local supplier providing reliable service to Australian businesses without offshore middlemen.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <ShieldCheck className="w-10 h-10 text-secondary mb-4" />
                  <CardTitle className="text-primary text-xl">Commercial-Grade Linen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Products engineered and tested for heavy industrial wash cycles and daily commercial use.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <MessageSquare className="w-10 h-10 text-secondary mb-4" />
                  <CardTitle className="text-primary text-xl">Trading Expertise & Clear Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We explain buyer/supplier options, pricing and trade-offs in plain language so your team can make clean decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
{/* 4b. SERVICES TEASER */}
<section id="services" className="py-20 bg-muted/40 border-y border-border/40">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="text-center mb-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-3">
        Import &amp; Export Sourcing
      </h2>
      <p className="text-muted-foreground text-base md:text-lg">
        Harbour Arch Trading operates as a lean trading house for Australian
        businesses that need offshore sourcing or export reach without building
        an in-house trade team.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Card 1: Import Sourcing */}
      <div className="bg-background border border-border/60 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-primary mb-2">
          Import Sourcing Agency
        </h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          CPA-led import sourcing for Australian SMEs and hospitality operators.
          We qualify factories in Asia, coordinate samples and give you clear
          landed cost numbers before you commit to an order.
        </p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-primary text-primary hover:bg-primary/5"
        >
          <Link href="/services">Learn more</Link>
        </Button>
      </div>

      {/* Card 2: Export Agency */}
      <div className="bg-background border border-border/60 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-primary mb-2">
          Australian Export Agency
        </h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          Export representation for Australian brands looking at Asian buyers.
          We help match your products with the right distributors and channels
          and manage the early stages of the export relationship.
        </p>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-primary text-primary hover:bg-primary/5"
        >
          <Link href="/services">Learn more</Link>
        </Button>
      </div>
    </div>
  </div>
</section>
        {/* 4. PRODUCTS */}
        <section id="products" className="py-24 container mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Hospitality Linen Range</h2>
            <p className="text-muted-foreground text-lg">
              Engineered for the rigorous demands of commercial hospitality while maintaining comfort and quality for guests.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productData.map((product) => {
              const [specsOpen, setSpecsOpen] = useState(false);
              
              return (
                <Card key={product.id} className="flex flex-col border-border/60 shadow-sm overflow-hidden">
                  <CardHeader className="p-0 border-b border-border/40">
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        loading="lazy"
                        className={`w-full h-full object-cover ${product.imagePosition}`}
                        data-testid={`img-product-${product.id}`}
                      />
                    </div>
                    <div className="px-6 pt-5 pb-4">
                    <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {product.desc}
                    </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between group text-primary border-border"
                      onClick={() => setSpecsOpen(!specsOpen)}
                      data-testid={`toggle-specs-${product.id}`}
                    >
                      View Specs
                      <Info className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${specsOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}
                    >
                      <div className="space-y-3 bg-muted/40 rounded-md p-4 text-sm">
                        {product.specs.map((spec, i) => (
                          <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-border/40 last:border-0 pb-2 last:pb-0">
                            <span className="font-medium text-foreground">{spec.label}</span>
                            <span className="text-muted-foreground sm:text-right">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <PacksSection />
        {/* 5. ABOUT */}
        <section id="about" className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">About Harbour Arch Trading</h2>
            <div className="text-lg text-primary-foreground/90 leading-relaxed mb-12 text-center md:text-left">
             <p>
  Harbour Arch Trading is a Sydney-based trading business supplying hospitality linen to Australian buyers and supporting selected clients with import sourcing and export agency services.
  We focus on commercial-grade essentials with clear specifications, CPA-level landed cost insight and practical sourcing support for businesses that need dependable product supply and clearer trade decisions.
</p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Clear Specifications</h3>
                <p className="text-primary-foreground/70 text-sm"> No guessing. Exact measurements, GSM ratings and product specs for every linen line and sourcing engagement.</p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                  <PackageCheck className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Practical Sourcing</h3>
                <p className="text-primary-foreground/70 text-sm">Reliable supply chains for hospitality linen plus CPA-led support when you need offshore sourcing or export coordination.</p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                <div className="bg-primary-foreground/10 p-3 rounded-full">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Responsive Communication</h3>
                <p className="text-primary-foreground/70 text-sm">Fast replies and proactive updates on orders, sourcing briefs and export discussions so you always know where things stand.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONTACT */}
        <section id="contact" className="py-24 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">
                Request a quote or ask us about our product specifications.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-12 lg:gap-24">
              <div className="md:col-span-3 bg-card rounded-xl border shadow-sm p-6 md:p-8">
                <Form {...form}>
                  <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-6"
                    data-netlify="true"
                    name="contact"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} data-testid="input-name" />
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
                            <FormLabel className="text-foreground">Business Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Hotel Sydney" {...field} data-testid="input-business" />
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
                            <FormLabel className="text-foreground">Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
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
                            <FormLabel className="text-foreground">Phone Number</FormLabel>
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
                          <FormLabel className="text-foreground">Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please detail your quantity requirements or questions..." 
                              className="min-h-[150px] resize-y"
                              {...field} 
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 text-lg" data-testid="btn-submit">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>

              <div className="md:col-span-2 space-y-8">
                <div className="bg-muted/50 p-8 rounded-xl border border-border h-full">
                  <h3 className="text-xl font-semibold text-primary mb-6">Business Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Company</h4>
                      <p className="text-foreground font-medium">Harbour Arch Trading</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Location</h4>
                      <p className="text-foreground">Sydney, NSW<br />Australia</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Email</h4>
                      <a href="mailto:info@harbourarchtrading.com.au" className="text-primary hover:underline">
                        info@harbourarchtrading.com.au
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Phone</h4>
                      <p className="text-foreground">0432 263 400</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Hours</h4>
                      <p className="text-foreground">Monday–Friday, 9:00 AM – 5:00 PM AEST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER */}
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
                <span className="font-bold text-base tracking-wide text-primary-foreground">HARBOUR ARCH</span>
                <span className="font-medium text-xs tracking-widest text-primary-foreground/60 uppercase">Trading</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-primary-foreground/70">
              <span>ABN: 55 697 775 447</span>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <span>Sydney, NSW, Australia</span>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <a href="mailto:info@harbourarchtrading.com.au" className="hover:text-secondary transition-colors">
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
}
