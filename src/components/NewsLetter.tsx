import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { H2 } from "./ui/typography";

export default function NewsletterSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <H2>Stay Updated</H2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Subscribe to our newsletter for the latest news, updates, and
              exclusive offers.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                className="flex-1"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button
                type="submit"
                className="inline-flex items-center justify-center"
              >
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
