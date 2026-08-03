import type { ComponentPropsWithoutRef, CSSProperties } from "react";

export const newIconPaths = {
  ac: "/icons/AC.svg",
  "arrow-down-right": "/icons/ArrowDownRight.svg",
  bathroom: "/icons/Bathroom.svg",
  bidet: "/icons/Bidet.svg",
  bike: "/icons/Bike.svg",
  boat: "/icons/Boat.svg",
  breakfast: "/icons/Breakfast.svg",
  car: "/icons/Car.svg",
  cave: "/icons/Cave.svg",
  check: "/icons/Check.svg",
  "chevron-down": "/icons/ChevronDown.svg",
  "chevron-up": "/icons/ChevronUp.svg",
  dinner: "/icons/Dinner.svg",
  "double-bed": "/icons/DoubleBed.svg",
  fan: "/icons/Fan.svg",
  "hot-water": "/icons/HotWater.svg",
  instagram: "/icons/Instagram.svg",
  lunch: "/icons/Lunch.svg",
  "mosquito-net": "/icons/MosquitoNet.svg",
  mountain: "/icons/Mountain.svg",
  "oto-colt": "/icons/OtoColt.svg",
  parking: "/icons/Parking.svg",
  rice: "/icons/Rice.svg",
  "sea-1": "/icons/Sea1.svg",
  "sea-2": "/icons/Sea2.svg",
  shower: "/icons/Shower.svg",
  soap: "/icons/Soap.svg",
  tiktok: "/icons/Tiktok.svg",
  tissue: "/icons/Tissue.svg",
  toilet: "/icons/Toilet.svg",
  toothbrush: "/icons/Toothbrush.svg",
  "twin-bed": "/icons/TwinBed.svg",
  village: "/icons/Village.svg",
  walk: "/icons/Walk.svg",
  waterfalls: "/icons/Waterfalls.svg",
} as const;

export type NewIconName = keyof typeof newIconPaths;

export type NewIconProps = Omit<
  ComponentPropsWithoutRef<"span">,
  "children" | "color"
> & {
  name: NewIconName;
  size?: CSSProperties["width"];
  color?: CSSProperties["color"];
  alt?: string;
};

export function NewIcon({
  name,
  size = 16,
  color,
  alt = "",
  className,
  style,
  "aria-label": ariaLabel,
  ...spanProps
}: NewIconProps) {
  const label = ariaLabel ?? (alt || undefined);
  const iconUrl = `url("${newIconPaths[name]}")`;

  return (
    <span
      {...spanProps}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
      style={{
        display: "inline-block",
        width: size,
        height: size,
        flex: "0 0 auto",
        verticalAlign: "middle",
        color,
        backgroundColor: "currentColor",
        maskImage: iconUrl,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskImage: iconUrl,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        ...style,
      }}
    />
  );
}

type NamedIconProps = Omit<NewIconProps, "name">;

function createNewIcon(name: NewIconName, displayName: string) {
  function NamedIcon(props: NamedIconProps) {
    return <NewIcon name={name} {...props} />;
  }

  NamedIcon.displayName = displayName;
  return NamedIcon;
}

export const ACIcon = createNewIcon("ac", "ACIcon");
export const ArrowDownRightIcon = createNewIcon(
  "arrow-down-right",
  "ArrowDownRightIcon"
);
export const BathroomIcon = createNewIcon("bathroom", "BathroomIcon");
export const BidetIcon = createNewIcon("bidet", "BidetIcon");
export const BikeIcon = createNewIcon("bike", "BikeIcon");
export const BoatIcon = createNewIcon("boat", "BoatIcon");
export const BreakfastIcon = createNewIcon("breakfast", "BreakfastIcon");
export const CarIcon = createNewIcon("car", "CarIcon");
export const CaveIcon = createNewIcon("cave", "CaveIcon");
export const CheckIcon = createNewIcon("check", "CheckIcon");
export const ChevronDownIcon = createNewIcon("chevron-down", "ChevronDownIcon");
export const ChevronUpIcon = createNewIcon("chevron-up", "ChevronUpIcon");
export const DinnerIcon = createNewIcon("dinner", "DinnerIcon");
export const DoubleBedIcon = createNewIcon("double-bed", "DoubleBedIcon");
export const FanIcon = createNewIcon("fan", "FanIcon");
export const HotWaterIcon = createNewIcon("hot-water", "HotWaterIcon");
export const InstagramIcon = createNewIcon("instagram", "InstagramIcon");
export const LunchIcon = createNewIcon("lunch", "LunchIcon");
export const MosquitoNetIcon = createNewIcon("mosquito-net", "MosquitoNetIcon");
export const MountainIcon = createNewIcon("mountain", "MountainIcon");
export const OtoColtIcon = createNewIcon("oto-colt", "OtoColtIcon");
export const ParkingIcon = createNewIcon("parking", "ParkingIcon");
export const RiceIcon = createNewIcon("rice", "RiceIcon");
export const Sea1Icon = createNewIcon("sea-1", "Sea1Icon");
export const Sea2Icon = createNewIcon("sea-2", "Sea2Icon");
export const ShowerIcon = createNewIcon("shower", "ShowerIcon");
export const SoapIcon = createNewIcon("soap", "SoapIcon");
export const TikTokIcon = createNewIcon("tiktok", "TikTokIcon");
export const TissueIcon = createNewIcon("tissue", "TissueIcon");
export const ToiletIcon = createNewIcon("toilet", "ToiletIcon");
export const ToothbrushIcon = createNewIcon("toothbrush", "ToothbrushIcon");
export const TwinBedIcon = createNewIcon("twin-bed", "TwinBedIcon");
export const VillageIcon = createNewIcon("village", "VillageIcon");
export const WalkIcon = createNewIcon("walk", "WalkIcon");
export const WaterfallsIcon = createNewIcon("waterfalls", "WaterfallsIcon");
