import type { Metadata } from "next";
import { IssueTabs } from "@/components/issues/issue-tabs";
import { IssuesConnected, IssuesGrowth, IssuesOpening, IssuesPlan, IssuesRoads, IssuesWater } from "@/components/issues/sections";
import "./issues.css";

export const metadata: Metadata = { title: "Issues" };

// Issues (S4): Opening → tabs → Roads & Safety → Water & Septic → Growth & Daily Life →
// Community Plan → Connected issues (docs/sections/issues.md).
export default function IssuesPage() {
  return <>
    <IssuesOpening />
    <IssueTabs />
    <IssuesRoads />
    <IssuesWater />
    <IssuesGrowth />
    <IssuesPlan />
    <IssuesConnected />
  </>;
}
