"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem
            onSelect={() => {
              router.push("/");
              // setOpen(false);
            }}
          >
            Home
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/about");
              // setOpen(false);
            }}
          >
            ِAbout
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/projects");
              // setOpen(false);
            }}
          >
            Projects
          </CommandItem>
          <CommandItem
            onSelect={() => {
              router.push("/contact");
              // setOpen(false);
            }}
          >
            Contact
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
