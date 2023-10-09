// icons
import { CornerRightUp } from 'lucide-react';

// components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import TransportMenu from '../assets/TransportMenu';
import TrackForm from '../clients/TrackForm';

function TrackMenu() {
  return (
    <Sheet>
      <SheetTrigger className='flex items-center justify-center text-2xl font-semibold tracking-wide gap-2 w-full py-4 text-white bg-blue-500'>
        <CornerRightUp />
        Trasa
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col gap-5 mt-5'>
          <TransportMenu />
          <TrackForm />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default TrackMenu;