// icons
import { Footprints } from 'lucide-react';
import { Bike } from 'lucide-react';

// components
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

function TransportMenu() {
  return (
    <Menubar className='gap-2 !pl-0 border-none'>
      <MenubarMenu>
        <MenubarTrigger className='nav-transport-item'>
          <Footprints width={20} height={20} />
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className='nav-transport-item'>
          <Bike width={20} height={20} />
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}

export default TransportMenu;