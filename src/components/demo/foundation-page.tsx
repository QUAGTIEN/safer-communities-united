import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { pageAnchors, pagePreviews } from "@/content/pages";
import { site, type SitePath } from "@/content/site";

export function FoundationPage({ path }: { path: SitePath }) {
  const page = pagePreviews[path];
  const isIssueDetail = path.startsWith("/issues/");

  return (
    <Container className="py-10 sm:py-14 lg:py-16">
      {path !== "/" && <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-xs sm:mb-12">
        <Link href="/" className="underline-offset-4 hover:underline">Our Community</Link><ChevronRight className="size-3" aria-hidden="true" />
        {isIssueDetail && <><Link href="/issues" className="underline-offset-4 hover:underline">Issues</Link><ChevronRight className="size-3" aria-hidden="true" /></>}
        <span aria-current="page">{page.eyebrow === "DEMO PREVIEW" ? page.title : page.eyebrow}</span>
      </nav>}
      <section aria-labelledby="page-title">
        <p className="eyebrow mb-5 text-teal">{page.eyebrow}</p>
        <h1 id="page-title" className="page-title">{page.title}</h1>
        <div className="page-preview-notice mt-9 max-w-xl">
          <p className="preview-heading text-teal">Demo preview</p>
          <p className="mt-2 text-sm leading-6">Page content is not available in this preview.</p>
        </div>
      </section>
      <section aria-labelledby="explore-title" className="mt-12 border-t border-gray pt-7 sm:mt-16">
        <h2 id="explore-title" className="preview-heading mb-3">Explore</h2>
        <nav aria-labelledby="explore-title" className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {page.related.map((link) => <Link key={link.href} href={link.href} className="route-link">
            <span>{link.label}</span><ArrowRight className="size-4 shrink-0" aria-hidden="true" />
          </Link>)}
        </nav>
      </section>
      {pageAnchors[path] && <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {pageAnchors[path]?.map((anchor) => <section key={anchor.id} id={anchor.id} className="anchor-preview" aria-labelledby={`${anchor.id}-title`}>
          <Card>
            <CardHeader><p className="eyebrow text-teal">Demo preview</p>
              <h2 id={`${anchor.id}-title`} className="font-heading text-2xl leading-snug font-semibold">{anchor.label}</h2>
            </CardHeader>
            <CardContent className="pt-3 text-sm leading-6">
              <p>Section content is not available in this preview.</p>
              {path === "/take-action" && <p className="mt-3 font-medium">{site.demoNotice}</p>}
            </CardContent>
          </Card>
        </section>)}
      </div>}
    </Container>
  );
}
