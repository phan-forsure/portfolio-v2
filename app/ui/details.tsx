import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";

export default function Details({ detail }: { detail: string | undefined }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full flex justify-end items-center cursor-pointer">
        <ChevronsUpDown
          className="hover:bg-accent h-4 w-4 transition-all"
          size={18}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <br />
        {detail}
      </CollapsibleContent>
    </Collapsible>
  );
}
