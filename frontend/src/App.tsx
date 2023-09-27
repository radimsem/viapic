// icons
import { Milestone } from 'lucide-react';
import { Footprints } from 'lucide-react';
import { Bike } from 'lucide-react';

// components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

function App() {
  return (
    <section className="relative w-full min-h-screen">
      <article>
        <iframe 
          src="https://frame.mapy.cz/s/nodelonumu"
          className='w-full h-screen border-none' 
        />
      </article>
      <article className="absolute w-full bottom-0">
        <Sheet>
          <SheetTrigger className='flex items-center justify-center text-2xl font-semibold tracking-wide gap-3 w-full py-4 text-white bg-blue-500'>
            <Milestone width={25} height={25} />
            Trasa
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className='mt-5'>
                <Menubar className='gap-2 border-none'>
                  <MenubarMenu>
                    <MenubarTrigger className='nav-transport-item'>
                      <Footprints />
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger className='nav-transport-item'>
                      <Bike />
                    </MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </article>
    </section>
  )
}

export default App
