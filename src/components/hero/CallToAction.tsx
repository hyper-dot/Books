import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, CircleAlert, LayoutGrid } from "lucide-react";

const CallToAction = () => {
  const cookieJar = cookies();
  const token = cookieJar.get("token")?.value;

  return (
    <div className="flex items-center justify-center gap-4">
      {token ? (
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
        <Link href="#benefits">
          Learn more
          <CircleAlert size={16} />
        </Link>
      </Button>
    </div>
  );
};

export default CallToAction;
