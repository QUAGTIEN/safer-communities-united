import Link from "next/link";
import { ArrowRight, Car, Droplet, FileText, House, type LucideIcon } from "lucide-react";
import { issueCards, issueSection, type IssueCard } from "@/content/home";
import { asset } from "@/lib/assets";

// HOME-CARDS (M4) — references p021 (1536), p085 (768), p091 (390).
// The topic circles are drawn as vectors exactly over the circles baked into the extracted photos:
// home.css places them in the photo's own pixel coordinates, scaled the same way as the photo.
const icons: Record<IssueCard["id"], LucideIcon> = { roads: Car, water: Droplet, needs: House, plan: FileText };

export function HomeIssueCards() {
  return (
    <section className="home-issues" aria-labelledby="home-issues-title">
      <div className="home-issues-inner">
        <div className="home-issues-head">
          <div>
            <p className="home-issues-eyebrow">{issueSection.eyebrow}</p>
            <h2 id="home-issues-title" className="home-issues-title">{issueSection.title}</h2>
          </div>
          <p className="home-issues-intro">{issueSection.intro}</p>
        </div>
        <ul className="home-cards">
          {issueCards.map((card) => <li key={card.id}><IssueCardLink card={card} /></li>)}
        </ul>
      </div>
    </section>
  );
}

function IssueCardLink({ card }: { card: IssueCard }) {
  const image = asset(card.image);
  const Icon = icons[card.id];
  return (
    <Link href={card.href} className={`home-card is-${card.id}`} aria-label={card.linkName}>
      <div className="home-card-media">
        {card.caption && <p className="home-card-caption">{card.caption[0]}<br />{card.caption[1]}</p>}
        <div className="home-card-photo">
          <div className="home-card-photo-clip">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP */}
            <img src={image.src} width={image.width} height={image.height} alt="" />
          </div>
          <span className="home-card-icon" aria-hidden="true"><Icon strokeWidth={2} /></span>
        </div>
      </div>
      <span className="home-card-arrow" aria-hidden="true"><ArrowRight strokeWidth={2.5} /></span>
      <div className="home-card-body">
        <h3 className="home-card-title">{card.title[0]}<br />{card.title[1]}</h3>
        <p className="home-card-text">{card.text}</p>
      </div>
    </Link>
  );
}
