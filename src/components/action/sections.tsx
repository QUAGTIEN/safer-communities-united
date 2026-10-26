"use client";

import { useState, type ReactNode } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import {
  Car, Construction, Droplet, FileText, House, Link2, Mail, Megaphone, MessageCircle, MessageSquare, Settings, Share2, User, Users, X,
  type LucideIcon,
} from "lucide-react";
import { cards, hero, links, petition, share, stories, story } from "@/content/action";
import { a11y } from "@/content/site";
import { asset, type AssetId } from "@/lib/assets";
import { useNotAvailable, useReturnFocus } from "@/components/layout/not-available";
import { PetitionForm, StorySection, SupporterForm } from "./forms";

// Take Action (S6) — A1 hero, A2 three actions, H3 supporter application, A3 story, A4 sharing, A5 stories, A6 petition.
// Estimates from approved images p237 (A1), p246 (A2), p241 (H3), p248 (A3), p254 (A4), p258 (A5), p267 (A6).
// Forms only simulate sending in this preview (docs/FORMS_SPEC.md §0); sharing choices are display-only (TXT:2288).

function Img({ id, alt = "", className }: { id: AssetId; alt?: string; className?: string }) {
  const image = asset(id);
  // eslint-disable-next-line @next/next/no-img-element -- static export serves pre-encoded WebP
  return <img src={image.src} width={image.width} height={image.height} alt={alt} className={className} />;
}

function Kicker({ icon: Icon, tone, children }: { icon: LucideIcon; tone: string; children: ReactNode }) {
  return <div className="act-kicker">
    <span className={`act-kicker-icon is-${tone}`} aria-hidden="true"><Icon strokeWidth={2.25} /></span>
    <p>{children}</p>
  </div>;
}

function goTo(id: string, focus?: string) {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ block: "start" });
  if (focus) window.setTimeout(() => target.querySelector<HTMLElement>(focus)?.focus({ preventScroll: true }), 350);
}

const topicIcons: Record<(typeof story.topics)[number]["id"], { icon: LucideIcon; tone: string }> = {
  roads: { icon: Construction, tone: "brown" }, water: { icon: Droplet, tone: "blue" }, traffic: { icon: Car, tone: "amber" },
  housing: { icon: House, tone: "green" }, infrastructure: { icon: Settings, tone: "purple" }, services: { icon: Users, tone: "navy" },
  other: { icon: MessageCircle, tone: "grey" },
};
const storyIcons = { road: topicIcons.roads, water: topicIcons.water, access: topicIcons.housing };

// A static sharing panel over the unchanged page (p255): nothing is shared, composed or copied.
function SharePanel({ open, onOpenChange, onCloseAutoFocus }: { open: boolean; onOpenChange: (open: boolean) => void; onCloseAutoFocus: (event: Event) => void }) {
  return <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="notice-overlay" />
      <DialogPrimitive.Content className="act-dialog act-share-dialog" aria-describedby="share-panel-intro" onCloseAutoFocus={onCloseAutoFocus}>
        <DialogPrimitive.Title className="act-dialog-title">{share.panel.title}</DialogPrimitive.Title>
        <p id="share-panel-intro" className="act-dialog-lead">{share.panel.intro}</p>
        <ul className="act-share-choices">
          {share.panel.choices.map((choice) => <li key={choice}><button type="button" className="act-share-choice">{choice}</button></li>)}
        </ul>
        <DialogPrimitive.Close className="notice-close" aria-label={a11y.close}><X aria-hidden="true" strokeWidth={1.75} /></DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
}

function StoryPanel({ item, onClose, onCloseAutoFocus }: { item: (typeof stories.items)[number] | null; onClose: () => void; onCloseAutoFocus: (event: Event) => void }) {
  return <DialogPrimitive.Root open={item !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="notice-overlay" />
      <DialogPrimitive.Content className="act-dialog act-story-dialog" aria-describedby="story-panel-quote" onCloseAutoFocus={onCloseAutoFocus}>
        {item && <>
          <p className="act-dialog-sample">{stories.sample}</p>
          <DialogPrimitive.Title className="act-dialog-title is-upper">{item.label}</DialogPrimitive.Title>
          <p id="story-panel-quote" className="act-dialog-quote">{item.quote}</p>
          <p className="act-dialog-who">{item.who}</p>
          <p className="act-dialog-date">{item.date}</p>
        </>}
        <DialogPrimitive.Close className="notice-close" aria-label={a11y.close}><X aria-hidden="true" strokeWidth={1.75} /></DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
}

export function TakeActionContent() {
  const [shareOpen, setShareOpen] = useState(false);
  const [openStory, setOpenStory] = useState<(typeof stories.items)[number] | null>(null);
  const notAvailable = useNotAvailable();
  const shareFocus = useReturnFocus();
  const storyFocus = useReturnFocus();
  const openShare = () => { shareFocus.remember(); setShareOpen(true); };
  const openSupporter = () => goTo("supporter-application", "input[name=fullName]");
  const openPetition = () => goTo("petition", "input[name=name]");
  const openStoryForm = () => goTo("share-story", "input[name=name]");

  return <div className="act-page">
    <section id="top" className="act-hero" aria-labelledby="act-hero-title">
      <div className="act-wrap act-hero-grid">
        <div>
          <Kicker icon={Megaphone} tone="hero">{hero.kicker}</Kicker>
          <h1 id="act-hero-title" className="act-display">{hero.title}</h1>
          <p className="act-lead">{hero.intro}</p>
          <button type="button" className="act-button" onClick={() => goTo("three-actions")}>{hero.cta}</button>
        </div>
        <Img id={hero.photo} alt={hero.photoAlt} className="act-hero-photo" />
      </div>
    </section>

    <section id="three-actions" className="act-cards" aria-labelledby="act-cards-title">
      <div className="act-wrap">
        <Kicker icon={Users} tone="cards">{cards.kicker}</Kicker>
        <h2 id="act-cards-title" className="act-display is-medium">{cards.title}</h2>
        <p className="act-lead is-wide">{cards.intro}</p>
        <a className="act-text-link is-underlined" href={links.minutes} target="_blank" rel="noopener noreferrer">{cards.minutes}</a>
        <div className="act-card-grid">
          <article className="act-card">
            <Img id={cards.support.image} className="act-card-image" />
            <div className="act-card-body">
              <span className="act-card-icon is-blue" aria-hidden="true"><Users strokeWidth={2.25} /></span>
              <h3>{cards.support.title}</h3>
              <p>{cards.support.text}</p>
              <div className="act-card-actions">
                <button type="button" className="act-button is-block" onClick={openSupporter}>{cards.support.primary}</button>
                <button type="button" className="act-button is-block is-outline" onClick={openPetition}>{cards.support.secondary}</button>
              </div>
            </div>
          </article>
          <article className="act-card">
            <Img id={cards.story.image} className="act-card-image" />
            <div className="act-card-body">
              <span className="act-card-icon is-green" aria-hidden="true"><MessageSquare strokeWidth={2.25} /></span>
              <h3>{cards.story.title}</h3>
              <p>{cards.story.text}</p>
              <div className="act-card-actions">
                <button type="button" className="act-button is-block" onClick={openStoryForm}>{cards.story.cta}</button>
              </div>
            </div>
          </article>
          <article className="act-card">
            <Img id={cards.share.image} className="act-card-image" />
            <div className="act-card-body">
              <span className="act-card-icon is-orange" aria-hidden="true"><FileText strokeWidth={2.25} /></span>
              <h3>{cards.share.title}</h3>
              <p>{cards.share.text}</p>
              <p className="act-card-channels">{cards.share.channels.join(" • ")}</p>
              <div className="act-card-actions">
                <button type="button" className="act-button is-block" aria-haspopup="dialog" onClick={openShare}>{cards.share.cta}</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SupporterForm onSwitchToPetition={openPetition} />

    <section id="share-story" className="act-story" aria-labelledby="act-story-title">
      <div className="act-wrap">
        <StorySection left={<>
          <Kicker icon={MessageCircle} tone="story">{story.kicker}</Kicker>
          <h2 id="act-story-title" className="act-heading">{story.title}</h2>
          <p className="act-lead">{story.intro}</p>
          <ul className="act-topics">
            {story.topics.map((topic) => {
              const { icon: Icon, tone } = topicIcons[topic.id as keyof typeof topicIcons];
              return <li key={topic.id}><span className={`act-topic-icon is-${tone}`} aria-hidden="true"><Icon strokeWidth={2.25} /></span>{topic.label}</li>;
            })}
          </ul>
          <div className="act-story-lower">
            <button type="button" className="act-button" onClick={openStoryForm}>{story.cta}</button>
            <Img id={story.photo} alt={story.photoAlt} className="act-story-photo" />
          </div>
        </>} />
      </div>
    </section>

    <section id="share-information" className="act-share" aria-labelledby="act-share-title">
      <div className="act-wrap act-share-grid">
        <div>
          <Kicker icon={Share2} tone="hero">{share.kicker}</Kicker>
          <h2 id="act-share-title" className="act-heading">{share.title}</h2>
          <p className="act-lead">{share.intro}</p>
          <p className="act-share-lead">{share.lead}</p>
          <ul className="act-channels">
            {share.channels.map((channel, i) => {
              const Icon = [null, Mail, Link2][i];
              return <li key={channel}>
                <span className={`act-channel-icon is-${["facebook", "email", "link"][i]}`} aria-hidden="true">
                  {Icon ? <Icon strokeWidth={2.25} /> : <svg viewBox="0 0 24 24"><path fill="currentColor" d="M13.3 23v-8.2h2.6l.4-3h-3V9.9c0-.9.3-1.5 1.5-1.5h1.6V5.7a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.6v3h2.6V23z" /></svg>}
                </span>
                {channel}
              </li>;
            })}
          </ul>
          <button type="button" className="act-button" aria-haspopup="dialog" onClick={openShare}>{share.cta}</button>
          <div className="act-share-note">
            <span aria-hidden="true"><Users strokeWidth={2.25} /></span>
            <p>{share.note}</p>
          </div>
        </div>
        <Img id={share.photo} alt={share.photoAlt} className="act-share-photo" />
      </div>
    </section>

    <section id="community-stories" className="act-stories" aria-labelledby="act-stories-title">
      <div className="act-wrap">
        <Kicker icon={MessageCircle} tone="stories">{stories.kicker}</Kicker>
        <h2 id="act-stories-title" className="act-display is-medium">{stories.title}</h2>
        <p className="act-lead">{stories.intro}</p>
        <div className="act-sample-row">
          <p className="act-sample">{stories.sample}</p>
          <p className="act-tagline">{stories.tagline}</p>
        </div>
        <div className="act-card-grid">
          {stories.items.map((item) => {
            const { icon: Icon, tone } = storyIcons[item.id as keyof typeof storyIcons];
            return <article key={item.id} className="act-card is-story">
              <Img id={item.image} className="act-card-image" />
              <div className="act-card-body">
                <p className="act-story-label"><span className={`act-topic-icon is-${tone}`} aria-hidden="true"><Icon strokeWidth={2.25} /></span>{item.label}</p>
                <blockquote>{item.quote}</blockquote>
                <div className="act-person">
                  <span className={`act-avatar${item.id === "water" ? " is-navy" : ""}`} aria-hidden="true"><User strokeWidth={2.5} /></span>
                  <p>{item.who}<br /><span>{item.date}</span></p>
                </div>
                <button type="button" className="act-read" aria-haspopup="dialog" onClick={() => { storyFocus.remember(); setOpenStory(item); }}>{stories.read}<span className="sr-only"> — {item.label}</span></button>
              </div>
            </article>;
          })}
        </div>
        <p className="act-center"><button type="button" className="act-button" aria-haspopup="dialog" onClick={notAvailable}>{stories.viewAll}</button></p>
        <Img id={stories.landscape} className="act-landscape" />
      </div>
    </section>

    <section id="petition" className="act-petition" aria-labelledby="act-petition-title">
      <div className="act-wrap is-narrow act-pet-intro">
        <h2>{petition.intro.title}</h2>
        <p>{petition.intro.text}</p>
      </div>
      <div className="act-pet-band">
        <Img id={petition.sideLeft} className="act-pet-side is-left" />
        <Img id={petition.sideRight} className="act-pet-side is-right" />
        <p className="act-pet-kicker">{petition.kicker}</p>
        <h2 id="act-petition-title" className="act-pet-title">{petition.title}</h2>
      </div>
      <div className="act-pet-panel">
        <h3 className="act-pet-heading">{petition.heading}</h3>
        <p className="act-pet-eyebrow">{petition.eyebrow}</p>
        <h4 className="act-pet-name">{petition.name}</h4>
        <p className="act-pet-tagline">{petition.tagline}</p>
        <p className="act-pet-to">{petition.to}</p>
        <p>{petition.body}</p>
        <h4>{petition.whyTitle}</h4>
        <p>{petition.why}</p>
        <h4>{petition.doTitle}</h4>
        <ul>{petition.do.map((item) => <li key={item}>{item}</li>)}</ul>
        <p>{petition.declaration}</p>
        <p className="act-independent">{petition.independent}</p>
        <PetitionForm />
        <p className="act-pet-member">{petition.notMember}</p>
        <button type="button" className="act-text-link is-underlined" onClick={openSupporter}>{petition.become}</button>
        <p className="act-pet-footer">{petition.independent}</p>
      </div>
    </section>

    <SharePanel open={shareOpen} onOpenChange={setShareOpen} onCloseAutoFocus={shareFocus.restore} />
    <StoryPanel item={openStory} onClose={() => setOpenStory(null)} onCloseAutoFocus={storyFocus.restore} />
  </div>;
}
