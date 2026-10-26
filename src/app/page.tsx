import { HomeOpening } from "@/components/home/opening";
import { HomeIssueCards } from "@/components/home/issue-cards";
import "./home.css";

// Home pilot (S3): Header → Opening → Issue cards → Footer. No map group on Home (TXT:115, TXT:234).
export default function HomePage() {
  return <>
    <HomeOpening />
    <HomeIssueCards />
  </>;
}
