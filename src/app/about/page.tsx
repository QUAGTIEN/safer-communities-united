import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { InformationPreview } from "@/components/demo/information-preview";
import { aboutPreview } from "@/content/information";
import { informationPreviews } from "@/content/site";

export const metadata: Metadata = { title: "About" };
export default function AboutPage() {
  return <Container className="py-10 sm:py-14 lg:py-16">
    <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs sm:mb-12">
      <Link href="/" className="underline-offset-4 hover:underline">Our Community</Link>
      <ChevronRight className="size-3" aria-hidden="true" /><span aria-current="page">About</span>
    </nav>
    <section data-blueprint-section="B-01" aria-labelledby="page-title">
      <p className="eyebrow mb-5 text-teal">SAFER COMMUNITIES UNITED</p>
      <h1 id="page-title" className="page-title">About</h1>
      <div className="page-preview-notice mt-9 max-w-xl">
        <p className="preview-heading text-teal">Demo preview</p>
        <p className="mt-2 text-sm leading-6">{aboutPreview.notice}</p>
      </div>
    </section>
    <section data-blueprint-section="B-02" aria-labelledby="information-title" className="mt-12 border-t border-gray pt-7 sm:mt-16">
      <h2 id="information-title" className="preview-heading">Information</h2>
      <p className="mt-3 max-w-xl text-sm leading-6">{aboutPreview.informationNotice}</p>
      <div className="mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
        {informationPreviews.map((destination) => <InformationPreview key={destination} destination={destination} />)}
      </div>
    </section>
    <nav aria-labelledby="explore-title" className="mt-12 border-t border-gray pt-7 sm:mt-16">
      <h2 id="explore-title" className="preview-heading mb-3">Explore</h2>
      <div className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        {([{ label: "Our Community", href: "/" }, { label: "The Facts", href: "/the-facts" }] as const).map((link) =>
          <Link key={link.href} href={link.href} className="route-link"><span>{link.label}</span><ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link>)}
      </div>
    </nav>
  </Container>;
}
