import Link from "next/link";
import { Button } from "@/components/ui/button";

// Not part of the blueprint: minimal technical fallback for unknown URLs.
export default function NotFound() {
  return <div className="mx-auto w-[min(100%-3rem,85.875rem)] py-20">
    <h1 className="text-4xl font-bold">Page not found</h1>
    <Button asChild variant="outline" className="mt-9"><Link href="/">Our Community</Link></Button>
  </div>;
}
