import Image from "next/image";
import { ArrowRight, Car, Copy, Droplets, Facebook, FileText, House, Mail, Megaphone, MessageCircle, Route, Settings, Share2, Users } from "lucide-react";
import { action } from "@/content/action";
import { getDemoPhoto, screenshotVisualAssets } from "@/content/assets";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { SourceLink } from "@/components/content/source-link";
import { Button } from "@/components/ui/button";
import { DemoPreview } from "@/components/demo/demo-preview";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ActionPreview } from "./action-preview";

function ActionImage({ id, visual = false, alt = "", eager = false }: { id: string; visual?: boolean; alt?: string; eager?: boolean }) {
  const asset = visual ? screenshotVisualAssets.find((item) => item.id === id) : getDemoPhoto(id);
  if (!asset?.publicPath || !asset.width || !asset.height) throw new Error(`Missing Action asset: ${id}`);
  return <Image src={asset.publicPath} width={asset.width} height={asset.height} unoptimized alt={alt} loading={eager ? "eager" : "lazy"} className="action-image" style={{ maxWidth: asset.width }} data-action-asset={id} />;
}
function DemoNotice({ id }: { id?: string }) { return <p id={id} className="action-demo-notice">{site.demoNotice}</p>; }
function StaticField({ label, id, placeholder }: { label: string; id: string; placeholder?: string }) { return <label className="action-static-field" htmlFor={id}><span>{label}</span><input id={id} type="text" disabled autoComplete="off" placeholder={placeholder} /></label>; }
function StaticChoice({ label, id, radio = false, illustrated = false }: { label: string; id: string; radio?: boolean; illustrated?: boolean }) { return <label className="action-static-choice" htmlFor={id}><input id={id} type={radio ? "radio" : "checkbox"} disabled defaultChecked={illustrated} /><span>{label}</span></label>; }

function Hero() { return <section className="action-section action-hero" data-blueprint-section="A-01" aria-labelledby="action-title"><Container>
  <p className="action-kicker"><Megaphone aria-hidden="true" /><span>{action.hero.label}</span></p><h1 id="action-title">{action.hero.title}</h1><p className="action-lead">{action.hero.text}</p>
  <Button asChild><a href="#add-your-support">{action.hero.cta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></a></Button>
  <ActionImage id="P074-01" alt="Preserved visible family and lakeside landscape from the selected Action hero; not a verified portrait of local residents." eager />
  <p className="action-image-note">Illustrative scene. Only the unobscured portion is available; the hidden hero background has not been reconstructed.</p>
</Container></section>; }

function SupporterApplication() { const content = action.supporter; return <section className="action-supporter" data-blueprint-section="A-03" aria-labelledby="supporter-title">
  <p className="eyebrow text-teal">{content.organization}</p><h3 id="supporter-title">{content.title}</h3><DemoNotice id="supporter-demo-notice" />
  <p className="action-preview-note">Non-editable application preview. The original Consent and Privacy wording below is reproduced for review; no participation or permission is recorded.</p>
  <fieldset disabled aria-describedby="supporter-demo-notice" className="action-audience"><legend className="sr-only">Supporter audience choices — static examples</legend>{content.audience.map((item, i) => <div key={item.choice}><p>{item.heading}</p><StaticChoice id={`supporter-audience-${i}`} label={item.choice} /></div>)}</fieldset>
  <p className="action-supporter-mission">{content.mission}</p><h4>{content.participationTitle}</h4>
  <fieldset disabled aria-describedby="supporter-demo-notice" className="action-choice-list"><legend className="sr-only">Participation choices — static examples</legend>{content.participation.map((label, i) => <StaticChoice key={label} id={`supporter-participation-${i}`} label={label} />)}</fieldset>
  <h4>{content.informationTitle}</h4><fieldset disabled aria-describedby="supporter-demo-notice" className="action-fields"><legend className="sr-only">Supporter information — static examples</legend>{content.fields.map((label, i) => <StaticField key={label} label={label} id={`supporter-field-${i}`} />)}</fieldset>
  <h4>{content.contactTitle}</h4><fieldset disabled aria-describedby="supporter-demo-notice" className="action-inline-choices"><legend className="sr-only">Preferred contact — static examples</legend>{content.contacts.map((label, i) => <StaticChoice key={label} id={`supporter-contact-${i}`} label={label} />)}</fieldset>
  <h4>{content.consentTitle}</h4><p>{content.consent}</p><fieldset disabled aria-describedby="supporter-demo-notice" className="action-fields action-signature-fields"><legend className="sr-only">Supporter signature and date — static examples</legend>{content.signatureFields.map((label, i) => <StaticField key={label} label={label} id={`supporter-signature-${i}`} />)}</fieldset>
  <p className="action-paper-privacy">{content.privacy}</p><p>{content.returnInstructions}</p><DemoNotice />
</section>; }

const topicIcons = [Route, Droplets, Car, House, Settings, Users, MessageCircle];
function StoryPreview() { const content = action.story; return <section className="action-story-preview" data-blueprint-section="A-04" aria-labelledby="story-preview-heading"><div className="action-story-context">
  <p className="action-kicker"><MessageCircle aria-hidden="true" /><span>{content.label}</span></p><h3 id="story-preview-heading">{content.title}</h3><p>{content.text}</p>
  <ul className="action-topics">{content.topics.map((topic, i) => { const Icon = topicIcons[i]; return <li key={topic}><Icon aria-hidden="true" />{topic}</li>; })}</ul>
  <ActionImage id="P080-01" alt="Visible mailbox and roadside portion from the selected story artwork; not a verified submission or recovered full background." />
  <p className="action-image-note">Illustrative scene; only the visible portion is available.</p>
</div><div className="action-story-form" aria-labelledby="story-form-title"><h3 id="story-form-title">{content.previewTitle}</h3><p>{content.previewIntro}</p><DemoNotice id="story-demo-notice" />
  <fieldset disabled aria-describedby="story-demo-notice" className="action-fields action-story-fields"><legend className="sr-only">Story details — static examples</legend><StaticField label={content.name} id="story-name" placeholder="Your name" /><StaticField label={content.area} id="story-area" placeholder="Neighborhood or cross streets" />
    <label className="action-static-field" htmlFor="story-issue"><span>{content.issue}</span><select id="story-issue" disabled defaultValue=""><option value="">{content.issuePlaceholder}</option>{content.topics.map((topic) => <option key={topic}>{topic}</option>)}</select></label>
    <label className="action-static-field" htmlFor="story-text"><span>{content.story}</span><textarea id="story-text" disabled placeholder="Tell us about your experience..." rows={4} /></label>
  </fieldset>
  <div className="action-upload-preview"><DemoPreview title="Upload Photo/Document — no files are accepted in this demo">{content.upload}</DemoPreview><p>Demo only. No files are accepted.</p></div>
  <fieldset disabled aria-describedby="story-demo-notice" className="action-publication"><legend>{content.publication}</legend><div className="action-inline-choices">{content.publicationChoices.map((label, i) => <StaticChoice key={label} id={`story-publication-${i}`} label={label} radio illustrated={i === 0} />)}</div></fieldset>
  <p className="action-preview-note">Illustrative choice only. No publication permission is collected.</p><DemoPreview title="Submit Story — no story is submitted or saved">{content.submit}</DemoPreview>
</div></section>; }

const shareIcons = [Facebook, Mail, Copy];
function ShareChoices({ mock = false }: { mock?: boolean }) { return <div className={mock ? "action-share-mock-choices" : "action-share-choices"}>{action.share.choices.map((label, i) => { const Icon = shareIcons[i]; return mock ? <div key={label}><Icon aria-hidden="true" /><span>{action.share.previewChoices[i]}</span></div> : <DemoPreview key={label} title={`${label} — sharing is not enabled in this demo`}><Icon aria-hidden="true" />{label}</DemoPreview>; })}</div>; }
function SharingPreview() { const content = action.share; return <section className="action-sharing-preview" data-blueprint-section="A-05" aria-labelledby="sharing-title"><div>
  <p className="action-kicker"><Share2 aria-hidden="true" /><span>{content.label}</span></p><h3 id="sharing-title">{content.title}</h3><p>{action.actions.shareText}</p><p>{content.intro}</p><DemoNotice /><ShareChoices /><p className="action-preview-note">Sharing choices are static previews. No Facebook, email or clipboard action occurs.</p>
  <DemoPreview title="Sharing choices — demo preview">{action.actions.shareCta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></DemoPreview><p className="action-sharing-message"><Users aria-hidden="true" />{content.text}</p>
</div><div className="action-laptop-area"><div className="action-laptop" aria-label="Website screen demo preview"><div className="action-screen-header">Safer<br />Communities United</div><div className="action-screen-preview"><p>{site.slogan}</p><p className="action-preview-note">Website screen — demo preview</p><p className="action-preview-note">Independent screen imagery is not available. This is a static HTML layout preview.</p></div></div><aside className="action-share-mock" aria-labelledby="share-this-page"><h4 id="share-this-page">{content.previewTitle}</h4><p>{content.previewIntro}</p><ShareChoices mock /><p className="action-preview-note">Static sharing examples only.</p></aside></div></section>; }

function MainActions() { const content = action.actions; return <section id="add-your-support" className="action-section action-main-actions" data-blueprint-section="A-02" aria-labelledby="action-ways-title"><Container>
  <p className="action-kicker"><Users aria-hidden="true" /><span>{content.label}</span></p><h2 id="action-ways-title">{content.title}</h2><p className="action-lead">{content.text}</p><SourceLink sourceId="SRC-19">{content.minutesCta}</SourceLink>
  <div className="action-card-grid"><article className="action-card"><ActionImage id="P079-01" alt="Illustrative community-support clipboard from the selected card, including its original embedded number and icon." /><div className="action-card-content"><span className="action-card-icon" aria-hidden="true"><Users /></span><p className="sr-only">01 — ADD YOUR SUPPORT</p><h3>{content.supportTitle}</h3><p>{content.supportText}</p><div className="action-card-actions">
    <ActionPreview anchor="supporter-application" title={action.supporter.title} label={content.supporterCta} primary><SupporterApplication /></ActionPreview><Button asChild variant="outline" className="action-card-cta"><a href="#petition">{content.petitionCta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></a></Button>
  </div></div></article>
  <article className="action-card"><ActionImage id="P079-02" alt="Illustrative person writing from the selected story card, including the original embedded number and icon; not a verified contributor." /><div className="action-card-content"><span className="action-card-icon" aria-hidden="true"><MessageCircle /></span><h3>{content.storyTitle}</h3><p>{content.storyText}</p><div className="action-card-actions"><ActionPreview anchor="share-your-story" title="Share Your Story — demo preview" label={content.storyCta}><StoryPreview /></ActionPreview></div></div></article>
  <article className="action-card"><ActionImage id="P079-03" alt="Illustrative books from the selected sharing card, including the original number and icon; not authenticated source documents." /><div className="action-card-content"><span className="action-card-icon" aria-hidden="true"><FileText /></span><h3>{content.shareTitle}</h3><p>{content.shareText}</p><p className="action-card-share-labels">{action.share.choices.join(" • ")}</p><div className="action-card-actions"><ActionPreview anchor="share-information" title="Share Information — demo preview" label={content.shareCta}><SharingPreview /></ActionPreview></div></div></article></div>
  <aside className="action-record-note"><p>{content.record}</p><SourceLink sourceId="SRC-21">{content.recordCta}</SourceLink><p className="action-preview-note">Supplied dated records; current agency status and interpretations have not been independently verified.</p></aside>
</Container></section>; }

function SampleStory({ index }: { index: number }) { const card = action.stories.cards[index]; return <Dialog><DialogTrigger asChild><Button type="button" variant="outline">{action.stories.readCta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></Button></DialogTrigger><DialogContent><p className="eyebrow text-teal">Illustrative sample story</p><DialogTitle>{card.topic}</DialogTitle><DialogDescription>Only this sample excerpt is supplied. A full story is not available; this is not an authenticated submission.</DialogDescription><blockquote>{card.quote}</blockquote><p>{card.name}<br />{card.date}</p><DialogClose asChild><Button type="button">Close preview</Button></DialogClose></DialogContent></Dialog>; }
function CommunityStories() { const content = action.stories; return <section className="action-section action-stories" data-blueprint-section="A-06" aria-labelledby="community-stories-title"><Container>
  <div className="action-stories-heading"><div><p className="action-kicker"><MessageCircle aria-hidden="true" /><span>{content.label}</span></p><h2 id="community-stories-title">{content.title}</h2></div><p className="action-tagline">{content.tagline.map((line) => <span key={line}>{line}</span>)}</p></div>
  <p className="action-lead">{content.intro}</p><p className="action-sample-notice">Illustrative sample stories — quotations, names and dates are examples, not authenticated submissions.</p>
  <div className="action-card-grid">{content.cards.map((card, i) => <article key={card.topic} className="action-card action-story-card"><ActionImage id={card.image} alt="Preserved illustrative photograph from the selected sample story card; not documentary evidence or an authenticated resident submission." /><div className="action-card-content"><h3>{card.topic}</h3><blockquote>{card.quote}</blockquote><div className="action-story-person"><Users aria-hidden="true" /><p>{card.name}<span>{card.date}</span></p></div><SampleStory index={i} /></div></article>)}</div>
  <div className="action-all-stories"><DemoPreview title="Community Stories — only three illustrative sample excerpts are available">{content.allCta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></DemoPreview></div><ActionImage id="A06-landscape" visual alt="Preserved visible countryside illustration beneath the selected sample stories; no hidden scenery reconstructed." />
</Container></section>; }

function FinalCTA() { const content = action.final; return <section className="action-section action-final" data-blueprint-section="A-07" aria-labelledby="action-final-title"><Container><p className="eyebrow text-teal">{content.label}</p><h2 id="action-final-title">{content.title}</h2><p className="action-lead">{content.text}</p><p className="action-campaign">{content.campaign}</p><Button asChild><a href="#petition">{content.cta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></a></Button><p className="action-independence">{content.independence}</p></Container></section>; }

function Petition() { const content = action.petition; return <section id="petition" className="action-section action-petition" data-blueprint-section="A-08" aria-labelledby="petition-heading"><Container>
  <div className="action-petition-paper"><p className="action-draft">DRAFT — LAUNCH CHECKS REQUIRED</p><h2 id="petition-heading">{content.heading}</h2><DemoNotice id="petition-demo-notice" />
    <p className="action-image-note">The full independent petition background is not available. This preview preserves the approved text and form layout without reconstructing the obscured scenery.</p>
    <article className="action-petition-text" aria-labelledby="petition-title"><p className="eyebrow text-teal">{content.organization}</p><h3 id="petition-title">{content.title}</h3><p className="action-petition-subtitle">{content.subtitle}</p><h4>{content.recipient}</h4><p>{content.opening}</p><h4>{content.whyTitle}</h4><p>{content.why}</p><h4>{content.requestsTitle}</h4><ul>{content.requests.map((request) => <li key={request}>{request}</li>)}</ul><p>{content.declaration}</p><p className="action-petition-notice">{content.notice}</p></article>
    <div className="action-petition-fields"><h3>{content.detailsTitle}</h3><DemoNotice /><fieldset disabled aria-describedby="petition-demo-notice" className="action-fields"><legend className="sr-only">Petition fields — non-editable examples</legend>{content.fields.map((label, i) => <StaticField key={label} id={`petition-field-${i}`} label={label} />)}</fieldset><p className="action-public-records">{content.declaration}</p></div>
    <div className="action-updates-example"><h3>{content.updatesTitle}</h3><p className="action-preview-note">Static artwork example only. No subscription or consent is recorded.</p><fieldset disabled aria-describedby="petition-demo-notice"><legend className="sr-only">Optional updates — static example only</legend><StaticChoice id="petition-updates-choice" label={content.updatesChoice} /><StaticField id="petition-updates-email" label={content.updatesField} /></fieldset><p>{content.updatesNote}</p></div>
    <div className="action-petition-sign"><DemoPreview title="Petition signing — demo only" signature>{content.cta.replace(/ →$/, "")}<ArrowRight aria-hidden="true" /></DemoPreview><p>{content.independence}</p><a href="#supporter-application" className="action-supporter-return">{action.actions.supporterCta}<ArrowRight aria-hidden="true" /></a></div><p className="action-petition-notice">{content.notice}</p>
  </div>
</Container></section>; }

export function ActionPageContent() { return <div className="action-page"><Hero /><MainActions /><CommunityStories /><FinalCTA /><Petition /></div>; }
