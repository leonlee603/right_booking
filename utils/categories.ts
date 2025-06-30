// import { IconType } from 'react-icons';
// import { MdCabin } from 'react-icons/md';

// import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';

// import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
// import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';

// import { GoContainer } from 'react-icons/go';

// type Category = {
//   label: CategoryLabel;
//   icon: IconType;
// };

// export type CategoryLabel =
//   | 'cabin'
//   | 'tent'
//   | 'airstream'
//   | 'cottage'
//   | 'container'
//   | 'caravan'
//   | 'tiny'
//   | 'magic'
//   | 'warehouse'
//   | 'lodge';

// export const categories: Category[] = [
//   {
//     label: 'cabin',
//     icon: MdCabin,
//   },
//   {
//     label: 'airstream',
//     icon: PiVan,
//   },
//   {
//     label: 'tent',
//     icon: TbTent,
//   },
//   {
//     label: 'warehouse',
//     icon: PiWarehouse,
//   },
//   {
//     label: 'cottage',
//     icon: TbBuildingCottage,
//   },
//   {
//     label: 'magic',
//     icon: GiMushroomHouse,
//   },
//   {
//     label: 'container',
//     icon: GoContainer,
//   },
//   {
//     label: 'caravan',
//     icon: TbCaravan,
//   },

//   {
//     label: 'tiny',
//     icon: PiLighthouse,
//   },
//   {
//     label: 'lodge',
//     icon: GiWoodCabin,
//   },
// ];

import { IconType } from 'react-icons';
import { FaSwimmingPool } from "react-icons/fa";
import { IoIosSnow } from "react-icons/io";
import { GiGoblinCamp, GiMushroomHouse, GiGrandPiano } from "react-icons/gi";
import { LuCaravan, LuGrape, LuTowerControl } from "react-icons/lu";
import { PiCastleTurret, PiFarm, PiLighthouseFill, PiMountains, PiWarehouse, PiWindmill } from "react-icons/pi";
import { GoContainer } from "react-icons/go";
import { TbUfo, TbBuildingWarehouse } from "react-icons/tb";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'amazing pool'
  | 'arctic'
  | 'camping'
  | 'camper van'
  | 'castle'
  | 'container'
  | 'countryside'
  | 'design'
  | 'earth home'
  | 'farm'
  | 'national park'
  | 'vineyard'
  | 'omg'
  | 'tiny home'
  | 'tower'
  | 'windmill'
  | 'luxe';

export const categories: Category[] = [
  {
    label: 'amazing pool',
    icon: FaSwimmingPool,
  },
  {
    label: 'arctic',
    icon: IoIosSnow,
  },
  {
    label: 'camping',
    icon: GiGoblinCamp,
  },
  {
    label: 'camper van',
    icon: LuCaravan,
  },
  {
    label: 'castle',
    icon: PiCastleTurret,
  },
  {
    label: 'container',
    icon: GoContainer,
  },
  {
    label: 'countryside',
    icon: PiLighthouseFill,
  },
  {
    label: 'design',
    icon: PiWarehouse,
  },

  {
    label: 'earth home',
    icon: GiMushroomHouse,
  },
  {
    label: 'farm',
    icon: PiFarm,
  },
  {
    label: 'national park',
    icon: PiMountains,
  },
  {
    label: 'vineyard',
    icon: LuGrape,
  },
  {
    label: 'omg',
    icon: TbUfo,
  },
  {
    label: 'tiny home',
    icon: TbBuildingWarehouse,
  },
  {
    label: 'tower',
    icon: LuTowerControl,
  },
  {
    label: 'windmill',
    icon: PiWindmill,
  },
  {
    label: 'luxe',
    icon: GiGrandPiano,
  },
];