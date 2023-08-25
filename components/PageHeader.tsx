import { Logo } from "@/public/icons"
import { Menu, User } from "lucide-react"
import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import heroSectionImg from "@/public/heroSection.webp"
import Image from "next/image"

const navLinks = [
  {
    text: "NEWS",
    path: "#",
  },
  {
    text: "EVENTS",
    path: "#",
  },
  {
    text: "ACADEMICS",
    path: "#",
  },
  {
    text: "RESEARCH",
    path: "#",
  },
  {
    text: "ADMISSION",
    path: "#",
  },
  {
    text: "ABOUT",
    path: "#",
  },
]

export default function PageHeader() {
  return (
    <div className="bg-red pb-[120px] pt-5">
      <div className="container relative">
        <header className="left-0 right-0 mb-[100px] flex items-center justify-between md:container md:absolute md:mb-0 md:justify-end">
          <Logo className="md:hidden" />

          <Sheet>
            <SheetTrigger>
              <div className="rounded-xl bg-white p-3 md:hidden">
                <Menu />
              </div>
            </SheetTrigger>
            <SheetContent className="h-full" side={"top"}>
              <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <nav className="relative hidden items-center justify-end gap-4 md:flex">
            {navLinks.map((nLink, i) => (
              <Link
                className="text-sm text-white transition-all hover:text-black lg:text-base"
                key={i}
                href={nLink.path}
              >
                {nLink.text}
              </Link>
            ))}

            <div className="rounded-full bg-white p-2 transition-all hover:bg-green-800 lg:p-3 xl:p-4">
              <User className="h-[15px] w-[15px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]" />
            </div>
          </nav>
        </header>

        <Image
          className="welcom hidden md:block"
          src={heroSectionImg}
          alt="hero section"
        />

        {/* <div className="bottom-[-1px] bg-red py-2 text-white md:absolute md:max-w-[366px] md:rounded-tr-[30px] lg:max-w-[553px]">
          <h1 className="mb-4 text-5xl sm:text-[68px] md:text-[40px] lg:text-7xl">
            AMERICAN UNIVERSITY
          </h1>
          <p className="pr-1 leading-8 md:text-sm lg:text-lg">
            BROOKSIDE UNIVERSITY IS A LEADING RESEARCH UNIVERSITY PUSHING
            BOUNDARIES AND FRONTIERS EVER SINCE ITS INCEPTION
          </p>
        </div> */}
      </div>
    </div>
  )
}
