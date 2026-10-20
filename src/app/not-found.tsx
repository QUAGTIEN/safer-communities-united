import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <Container className="py-20">
    <p className="eyebrow mb-5 text-teal">404</p>
    <h1 className="page-title">Page not found</h1>
    <Button asChild variant="outline" className="mt-9"><Link href="/">Our Community</Link></Button>
  </Container>;
}
