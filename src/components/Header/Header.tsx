import smileIcon from "@/assets/smile.svg";
import { HiMenu } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "../ui";
import { ExternalLinks } from "@/components";
import { Navigation } from "./Navigation";
import { Location } from "./HeaderTypes";

type HeaderProps = {
  location: Location;
};

export function Header({ location }: HeaderProps) {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 w-full sticky top-0 left-0 md:static bg-slate-100 shadow-md md:shadow-none md:bg-transparent z-20">
      <header className=" w-full h-[64px] md:h-[100px]">
        <div className="h-full items-center flex justify-between w-full">
          <a href="/" className="hover:scale-105 active:scale-[102%]">
            <img src={smileIcon} className="w-8 h-8" />
          </a>

          <span className="hidden md:flex">
            <Navigation location={location} />
          </span>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <HiMenu className="text-2xl hover:scale-105 text-brand-400" />
            </SheetTrigger>
            <SheetContent className="h-full flex flex-col justify-between">
              <SheetHeader>
                <SheetTitle>
                  <img src={smileIcon} className="w-8 h-8 mb-10" />
                </SheetTitle>
                <Navigation location={location} />
              </SheetHeader>
              <SheetFooter className=" bg-slate-50">
                <ExternalLinks />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
