"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, CircleAlert, LayoutGrid } from "lucide-react";
import { useSession } from "@/providers/SessionProvider";

const CallToAction = () => {
  const { session } = useSession();
  return (
    <div className="flex items-center justify-center gap-4">
      {session ? (
        <Button asChild>
          <Link className="flex gap-2" href="/dashboard">
            <LayoutGrid size={16} />
            Go to Dashboard
          </Link>
        </Button>
      ) : (
        <Button asChild>
          <Link className="flex gap-2" href="/login">
            Get Started
            <ArrowRight size={16} />
          </Link>
        </Button>
      )}
      <Button variant="outline" asChild className="flex gap-2 bg-muted">
        <Link href="#benifits">
          Learn more
          <CircleAlert size={16} />
        </Link>
      </Button>
    </div>
  );
};

export default CallToAction;
