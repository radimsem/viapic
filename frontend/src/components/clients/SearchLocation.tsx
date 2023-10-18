"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";

// components
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";

// helpers
import { capitalize } from "@/helpers/capitalize";

interface Props {
  name: string
  placeholder: string
  Icon: LucideIcon
}

function SearchLocation({ name, placeholder, Icon }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const DATA = [
    { id: 1, destination: "Praha" },
    { id: 2, destination: "Brno" },
    { id: 3, destination: "Ostrava" }
  ]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          className={`flex w-[200px] justify-between pl-0 ${value ? 'text-zinc-800' : 'text-zinc-500'} border-x-0 border-t-0 rounded-none hover:bg-inherit`}
        >
          {value ? value : `Zvolte ${placeholder}`}
          <Icon width={18} height={18} className='text-blue-500' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2">
        <Command>
          <div className="flex items-center border-b pr-3 pl-1 transition-colors">
            <CommandInput
              name={name}
              placeholder={`Hledejte ${placeholder}`}
            />
          </div>
          <CommandList className={`${open ? 'block' : 'hidden'}`}>
            <CommandEmpty>Žádné výsledky.</CommandEmpty>
            <CommandGroup>
              {DATA.map(item => (
                <CommandItem
                  key={item.id}
                  onSelect={(currentValue) => {
                    setValue(capitalize(currentValue))
                    setOpen(false)
                  }}
                >
                  {item.destination}
                </CommandItem>  
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>  
  )
}

export default SearchLocation;