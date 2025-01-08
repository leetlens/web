import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  Icon: LucideIcon;
  onClick?: () => void;
}

export default function LcActionButton({ Icon, onClick }: ActionButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-zinc-400 hover:text-zinc-100"
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}
