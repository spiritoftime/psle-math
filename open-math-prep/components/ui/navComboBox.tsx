"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface NavItem {
  value: string;
  label: string;
  navigateTo: string;
}

const navItems: NavItem[] = [
  {
    value: "PSLE Math",
    label: "PSLE Math",
    navigateTo: "/topic/psle/math/lectures",
  },
  {
    value: "Introduction To Finance",
    label: "Introduction To Finance",
    navigateTo: "/topic/finance",
  },
];

export function NavComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  const handleSelect = (currentValue: string) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);
    const selectedNavItem = navItems.find(
      (item) => item.value === currentValue
    );
    if (selectedNavItem) {
      router.push(selectedNavItem.navigateTo);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? navItems.find((navItem) => navItem.value === value)?.label
            : "Navigate Topic"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search topic..." />
          <CommandList>
            <CommandEmpty>No topic found.</CommandEmpty>
            <CommandGroup>
              {navItems.map((navItem) => (
                <CommandItem
                  key={navItem.value}
                  value={navItem.value}
                  onSelect={handleSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === navItem.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {navItem.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
