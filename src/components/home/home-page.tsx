import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight, CarFront, Droplets, FileText, House, TriangleAlert } from "lucide-react";
import { home } from "@/content/home";
import { getDemoPhoto, illustrativeDocumentAssets } from "@/content/assets";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { MapFigure } from "@/components/content/map-figure";
import { SourceLink } from "@/components/content/source-link";

const issueIcons = { roads: CarFront, water: Droplets, growth: House, plan: FileText };

function HomeHero() {
  const photo = getDemoPhoto(home.hero.photoSlot);
  if (!photo.publicPath || !photo.width || !photo.height) throw new Error("Home hero source is missing");
  return <section className="home-hero" aria-labelledby="home-title" data-blueprint-section="H-01">
    <Container className="home-hero-grid">
      <div className="home-hero-copy">
        <p className="eyebrow text-coral">{home.hero.eyebrow}</p>
        <h1 id="home-title" className="home-hero-title">
          {home.hero.titleLines.map((line, index) => <Fragment key={line}>
            {index > 0 && <>{" "}<br /></>}
            {line.split(/(health, safety,|welfare)/).map((part, partIndex) =>
              part === "health, safety," || part === "welfare"
                ? <span className="text-teal" key={partIndex}>{part}</span>
                : <Fragment key={partIndex}>{part}</Fragment>)}
          </Fragment>)}
        </h1>
        <p className="home-hero-message">{home.hero.message}</p>
        <div className="home-problem">
          <TriangleAlert className="size-10 shrink-0" fill="var(--coral)" stroke="var(--white)" aria-hidden="true" />
          <p>{home.hero.problem}</p>
        </div>
      </div>
      <div className="home-hero-visual">
        <Image src={photo.publicPath} width={photo.width} height={photo.height}
          alt={home.hero.alt} loading="eager" fetchPriority="high" unoptimized
          className="home-hero-image" data-photo-slot={photo.id} />
        <div className="home-hero-actions">
          <Button asChild><Link href="/issues">View the Issues<ArrowRight aria-hidden="true" /></Link></Button>
          <Button asChild variant="outline"><Link href="/the-facts">View the Evidence<ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </div>
    </Container>
  </section>;
}

function HomeMapComparison() {
  return <section id="map-comparison" className="home-maps" aria-labelledby="map-comparison-title">
    <Container>
      <section className="home-boundary" data-blueprint-section="H-02" aria-labelledby="map-comparison-title">
        <div className="home-map-heading">
          <h2 id="map-comparison-title" className="home-map-title">{home.boundary.title}</h2>
          <p className="home-map-source">{home.boundary.source}</p>
          <SourceLink sourceId={home.boundary.sourceId}>{home.boundary.sourceLink}</SourceLink>
        </div>
        <MapFigure assetId={home.boundary.mapId} title={home.boundary.title} alt={home.boundary.alt} caption={home.boundary.caption} />
      </section>
      <section className="home-area" data-blueprint-section="H-03" aria-labelledby="area-title">
        <div className="home-versus" aria-label="Versus"><span>VS.</span></div>
        <div className="home-area-intro">
          <h2 id="area-title" className="home-map-title">{home.area.title}</h2>
          <p className="home-map-subtitle">{home.area.subtitle}</p>
          <p className="home-detail">{home.area.detail}</p>
        </div>
        <MapFigure assetId={home.area.mapId} title={home.area.title} alt={home.area.alt} />
        <div className="home-map-reading">
          <div className="home-reading-block">
            <h3>{home.area.existingTitle}</h3><p>{home.area.existingText}</p>
          </div>
          <div className="home-reading-block">
            <h3>{home.area.protectionTitle}</h3>
            <p className="home-lead text-teal">{home.area.protectionLead}</p>
            <p>{home.area.protectionText}</p>
            <p className="home-source-note">{home.area.measurement}{" "}Sources:{" "}
              {home.area.sources.map((source, index) => <span key={source.id}>
                <SourceLink sourceId={source.id} inline>{source.label}</SourceLink>
                {index < home.area.sources.length - 1 ? "; " : "."}
              </span>)}
            </p>
          </div>
          <p className="home-landscape-statement">{home.area.landscapeTitle}</p>
          <div className="home-nature-message"><h3>{home.area.natureTitle}</h3><p>{home.area.natureText}</p></div>
          <section className="home-reading-block home-parcels" aria-labelledby="parcels-title" data-blueprint-section="H-04">
            <h3 id="parcels-title">{home.parcels.title}</h3><p>{home.parcels.text}</p>
            <p className="home-source-note">{home.parcels.note}</p>
            <p className="home-source-note"><span className="font-semibold">Parcel methodology: </span>{home.parcels.methodology}</p>
            <div className="home-source-list">{home.parcels.sources.map((source) =>
              <SourceLink key={source.id} sourceId={source.id}>{source.label}</SourceLink>)}
            </div>
          </section>
        </div>
      </section>
      <section className="home-roads" data-blueprint-section="H-05" aria-labelledby="roads-map-title">
        <div className="home-map-heading"><h2 id="roads-map-title" className="home-map-title">{home.roads.title}</h2></div>
        <MapFigure assetId={home.roads.mapId} title={home.roads.title} alt={home.roads.alt} />
        <div className="home-map-reading home-road-reading">
          <p className="home-lead">{home.roads.text}</p>
          <p className="home-source-note">{home.roads.note}</p>
          <SourceLink sourceId={home.roads.trafficSource.id}>{home.roads.trafficSource.label}</SourceLink>
          <div className="home-roads-continuation">
            <Link href="/issues/roads-safety" className="underline decoration-gray underline-offset-4 hover:decoration-teal">{home.roads.continuation}</Link>
            <SourceLink sourceId={home.roads.studySource.id}>{home.roads.studySource.label}</SourceLink>
          </div>
        </div>
      </section>
    </Container>
    <div className="home-transition"><Container>
      <h2>{home.roads.transitionTitle}</h2>
      <div className="home-transition-actions">
        <Button asChild size="lg"><Link href="/the-facts">Explore the evidence<ArrowRight aria-hidden="true" /></Link></Button>
        <Link href="/take-action#petition" className="home-transition-link">Read the petition<ArrowRight className="size-4" aria-hidden="true" /></Link>
        <Link href="/take-action#supporter-application" className="home-transition-link">Become a supporter<ArrowRight className="size-4" aria-hidden="true" /></Link>
      </div>
    </Container></div>
  </section>;
}

function HomeIssues() {
  return <section className="home-issues" aria-labelledby="issues-title" data-blueprint-section="H-06">
    <Container>
      <div className="home-issues-heading">
        <div><p className="eyebrow text-coral">{home.issues.eyebrow}</p><h2 id="issues-title">{home.issues.title}</h2></div>
        <p>{home.issues.intro}</p>
      </div>
      <div className="home-issues-grid">
        {home.issues.cards.map((card) => {
          const photo = card.id === "plan" ? illustrativeDocumentAssets.find((item) => item.id === card.photoSlot) : getDemoPhoto(card.photoSlot);
          if (!photo?.publicPath || !photo.width || !photo.height) throw new Error(`Home issue visual is missing: ${card.photoSlot}`);
          const Icon = issueIcons[card.id];
          return <article key={card.id} className={`home-issue-card home-issue-${card.id}`} aria-labelledby={`issue-${card.id}-title`}
            aria-describedby={card.id === "water" ? "home-water-scope" : undefined}>
            <div className="home-issue-visual">
              <Image src={photo.publicPath} width={photo.width} height={photo.height} alt={card.alt}
                unoptimized className="home-issue-image" style={{ maxWidth: photo.width }} data-photo-slot={card.photoSlot} />
              <span className="home-issue-icon" aria-hidden="true"><Icon /></span>
            </div>
            <div className="home-issue-body">
              {card.id === "plan" && <p className="home-illustration-label">Illustrative document preview</p>}
              <h3 id={`issue-${card.id}-title`}>{card.title}</h3><p>{card.text}</p>
              {"timeline" in card && <p className="home-issue-timeline">{card.timeline}</p>}
              {card.id === "water" && <p id="home-water-scope" className="home-water-scope">{home.issues.waterScope}</p>}
              <Link href={card.href} className="home-issue-link">{card.cta}<ArrowRight className="size-4 shrink-0" aria-hidden="true" /></Link>
            </div>
          </article>;
        })}
      </div>
    </Container>
  </section>;
}

export function HomePageContent() { return <><HomeHero /><HomeMapComparison /><HomeIssues /></>; }
