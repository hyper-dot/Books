import React from "react";
import { H1, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, CircleAlert } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div style={{}}>
      <div className="max-w-3xl mx-auto text-center py-10">
        <P className="bg-muted rounded-full w-fit px-4 mx-auto my-5">
          <Link href="/pricing" className="text-blue-500">
            🎉 Get 50%
          </Link>{" "}
          off now <span className="text-green-500">3 days</span> left
        </P>
        <H1>Next Gen Account Management Software</H1>
        <P className="py-10 text-muted-foreground">
          An awesome and powerful tool to manage your accounts in which will
          boost your page performance
        </P>
        <div className="flex items-center gap-4 justify-center">
          <Button className="flex gap-2">
            Get Started
            <ArrowRight size={16} />
          </Button>
          <Button variant="outline" className="flex gap-2 bg-muted">
            Learn more
            <CircleAlert size={16} />
          </Button>
        </div>
      </div>
      <img
        src="/mockup.png"
        className="mx-auto lg:w-[90%] border rounded-3xl shadow-xl"
        alt=""
      />
    </div>
  );
};

export default page;
