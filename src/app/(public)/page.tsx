import Link from "next/link";
import { H1, P } from "@/components/ui/typography";
import HeroImage from "@/components/hero/HeroImage";
import CallToAction from "@/components/hero/CallToAction";
import Brands from "@/components/hero/Brands";

export default function page() {
  return (
    <div className="max-w-full">
      <div className="mx-auto max-w-4xl py-10 text-center">
        <P className="mx-auto my-5 w-fit rounded-full bg-muted px-4">
          <Link href="/pricing" className="text-blue-500">
            🎉 Get 50%
          </Link>{" "}
          off now <span className="text-green-500">3 days</span> left
        </P>
        <H1>
          The <span className="text-accent-2">Smart</span> Way to Manage Your
          Accounts!
        </H1>
        <P className="py-10 text-muted-foreground">
          An awesome and powerful tool to manage your accounts in which will
          boost your productivity
        </P>
        <CallToAction />
      </div>
      <HeroImage />
      {/* <Benefits /> */}
      <Brands />
    </div>
  );
}
