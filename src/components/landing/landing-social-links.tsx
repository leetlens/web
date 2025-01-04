import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingSocialLinks() {
  return (
    <div className="fixed bottom-8 right-8 flex space-x-4">
      <Button variant="ghost" size="icon" className="rounded-full">
        <Github className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Twitter className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Linkedin className="h-5 w-5" />
      </Button>
    </div>
  );
}
