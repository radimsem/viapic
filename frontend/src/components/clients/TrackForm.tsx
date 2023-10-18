"use client";

import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';

// icons
import { ArrowDownCircle, MapPin, Settings, Castle, Plus } from 'lucide-react';

// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import SearchLocation from './SearchLocation';
import { useState } from 'react';

// models
import MoreSites from '@/models/MoreSites';

function TrackForm() {
  const form = useForm();
  const [open, setOpen] = useState(false);
  const [moreSites, setMoreSites] = useState<MoreSites>([]);

  function handleOpenChange() { setOpen(!open); }

  return (
    <Form {...form}>
      <form className='space-y-4'>
        <FormField
          name="start"
          render={({ field }) => (
            <FormItem className='flex flex-col space-y-0'>
              <FormLabel className='text-xs text-zinc-800'>
                Start
              </FormLabel>
              <FormControl>
                <SearchLocation 
                  name={field.name} 
                  placeholder="začátek trasy"
                  Icon={ArrowDownCircle}
                />
              </FormControl>
            </FormItem>  
          )}
        />
        <FormField
          name="target"
          render={({ field }) => (
            <FormItem className='flex flex-col space-y-0'>
              <FormLabel className='text-xs text-zinc-800'>
                Cíl
              </FormLabel>
              <FormControl>
                <SearchLocation 
                  name={field.name} 
                  placeholder="cíl"
                  Icon={MapPin}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Popover open={open}>
          <PopoverTrigger 
            onClick={handleOpenChange}
            className='flex items-center gap-2 text-sm text-zinc-600'
          >
            <Settings width={18} height={18} />
            Rozšířené možnosti
          </PopoverTrigger>
          <PopoverContent className='p-0 border-none rounded-xl shadow-none'>
            <Card className="w-[250px]">
              <CardHeader>
                <CardTitle className='text-md font-medium'>Rozšířené možnosti trasy</CardTitle>
              </CardHeader>
              <form>
                <CardContent>
                  <div className="grid w-full items-center gap-4">
                    <div className="extended-options-group">
                      <Label>Čas trvání</Label>
                      <Slider
                        defaultValue={[50]}
                        max={100}
                        step={1}
                      />
                    </div>
                    <div className="extended-options-group">
                      <Label>Obtížnost trasy</Label>
                      <Slider
                        defaultValue={[50]}
                        max={100}
                        step={1}
                      />
                    </div>
                    <div className="extended-options-group space-y-1 mt-2">
                      <Label>Místa součástí trasy</Label>
                    </div>
                    {moreSites.map((site) => {
                      return (
                        <div className='extended-options-group -mt-2'>
                          <SearchLocation 
                            name={`site-${site.id}`}
                            placeholder="místo"
                            Icon={Castle}
                          />
                        </div>
                      )
                    })}
                    <div className="extended-options-group">
                      <Button 
                        variant='ghost'
                        onClick={(e) => {
                          e.preventDefault();
                          setMoreSites((prevSites) => [...prevSites, { id: uuid(), value: "" }]);
                        }}
                        className='flex items-center justify-start gap-1 h-auto p-0 hover:bg-inherit'
                      >
                        <Plus width={18} height={18} className='text-blue-500' />
                        <Label className='cursor-pointer'>Přidat místo</Label>
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenChange();
                    }} 
                  >Zrušit</Button>
                  <Button type='submit' className='bg-blue-500 hover:bg-blue-600'>Uložit</Button>
                </CardFooter>
              </form>
            </Card>
          </PopoverContent>
        </Popover>
        <Button 
          type='submit'
          className='tracking-wide h-auto bg-blue-500 hover:bg-blue-600'
        >
          Vytvořit trasu
        </Button>
      </form>
    </Form>
  )
}

export default TrackForm;