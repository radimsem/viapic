"use client";

import { useForm } from 'react-hook-form';

// icons
import { ArrowDownCircle, MapPin } from 'lucide-react';

// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import SearchLocation from './SearchLocation';

function TrackForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <form className='space-y-3'>
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
      </form>
    </Form>  
  )
}

export default TrackForm;