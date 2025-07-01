import { IconType } from 'react-icons';
import { FaTv, FaWifi } from 'react-icons/fa';
import { IoIosSnow } from 'react-icons/io';
import { LuBath } from 'react-icons/lu';
import { PiCoatHanger, PiDesk, PiFireExtinguisher, PiHairDryer, PiHandSoap, PiShower, PiToilet, PiWashingMachine } from 'react-icons/pi';
import { TbIroning1, TbToolsKitchen, TbToolsKitchen3, TbWashDry2 } from 'react-icons/tb';
import { LiaBedSolid, LiaBookSolid } from "react-icons/lia";
import { RiArchiveDrawerLine, RiAlarmWarningLine, RiFirstAidKitLine, RiDoorLockBoxLine } from "react-icons/ri";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { MdOutlineKitchen, MdOutlineMicrowave, MdOutlineCoffeeMaker } from "react-icons/md";
import { GrToast } from "react-icons/gr";
import { IoCarSportOutline, IoKeyOutline } from "react-icons/io5";

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const amenities: Amenity[] = [
  { name: 'bathtub', icon: LuBath, selected: false },
  { name: 'hair dryer', icon: PiHairDryer, selected: false },
  { name: 'shampoo', icon: PiHandSoap, selected: false },
  { name: 'conditioner', icon: PiHandSoap, selected: false },
  { name: 'bidet', icon: PiToilet, selected: false },
  { name: 'hot shower', icon: PiShower, selected: false },
  { name: 'washer', icon: PiWashingMachine, selected: false },
  { name: 'dryer', icon: TbWashDry2, selected: false },
  { name: 'hangers', icon: PiCoatHanger, selected: false },
  { name: 'bed linens', icon: LiaBedSolid, selected: false },
  { name: 'iron', icon: TbIroning1, selected: false },
  { name: 'clothing storage', icon: RiArchiveDrawerLine, selected: false },
  { name: 'books', icon: LiaBookSolid, selected: false },
  { name: 'tv', icon: FaTv, selected: false },
  { name: 'air conditioning', icon: IoIosSnow, selected: false },
  { name: 'heating', icon: FaTemperatureThreeQuarters, selected: false },
  { name: 'smoke alarm', icon: RiAlarmWarningLine, selected: false },
  { name: 'fire extinguisher', icon: PiFireExtinguisher, selected: false },
  { name: 'first aid kit', icon: RiFirstAidKitLine, selected: false },
  { name: 'wifi', icon: FaWifi, selected: false },
  { name: 'dedicated workspace', icon: PiDesk, selected: false },
  { name: 'kitchen', icon: TbToolsKitchen3, selected: false },
  { name: 'refrigerator', icon: MdOutlineKitchen, selected: false },
  { name: 'microwave', icon: MdOutlineMicrowave, selected: false },
  { name: 'cooking basics', icon: TbToolsKitchen, selected: false },
  { name: 'toaster', icon: GrToast, selected: false },
  { name: 'coffee marker', icon: MdOutlineCoffeeMaker, selected: false },
  { name: 'parking', icon: IoCarSportOutline, selected: false },
  { name: 'self check-in', icon: IoKeyOutline, selected: false },
  { name: 'lockbox', icon: RiDoorLockBoxLine, selected: false },
];
