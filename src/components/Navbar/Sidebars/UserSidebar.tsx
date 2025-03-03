"use client";

import React, { FC } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Eye, MapPin, Package, UserRound, X } from "lucide-react";

const UserSidebar: FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="w-8 h-8 md:w-11 md:h-11 hover:bg-blue-100 shadow-none"
          aria-label="Open account sidebar"
        >
          <UserRound style={{width:20, height:20}} />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <div className="flex items-center justify-between w-full">
            <SheetTitle>
              <h1 className="text-3xl font-medium">Account</h1>
            </SheetTitle>
            <SheetClose asChild>
              <Button
                variant="outline"
                className="w-11 h-11"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="w-full">
          {/* Login/Signup Section */}
          <Link href="/login" className="block">
            <div className="flex items-start gap-4 p-4 my-5 bg-gray-50 border rounded-xl h-28">
              <div className="flex items-center justify-center w-12 h-12 flex-shrink-0 bg-white border rounded-xl">
                <UserRound className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl font-medium">Hi There! 👋</h2>
                <p className="text-sm font-light">
                  Login/Signup for the best experience.
                </p>
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 w-1/2">
                <Button
                  variant="outline"
                  className="flex flex-col items-center justify-center gap-1 h-24 bg-gray-50 border shadow-none"
                  aria-label="Profile"
                >
                  <UserRound style={{ width: 25, height: 25 }} />
                  <p className="mt-2 text-base">Profile</p>
                </Button>
                <Button
                  variant="outline"
                  className="flex flex-col items-center justify-center gap-1 h-24 bg-gray-50 border shadow-none"
                  aria-label="Address"
                >
                  <MapPin style={{ width: 25, height: 25 }} />
                  <p className="mt-2 text-base">Address</p>
                </Button>
              </div>
              <div className="w-1/2">
                <Button
                  variant="outline"
                  className="flex flex-col items-center justify-center gap-1 w-full h-52 bg-gray-50 border shadow-none"
                  aria-label="Orders"
                >
                  <Package style={{ width: 25, height: 25 }} />
                  <p className="mt-2 text-base">Orders</p>
                </Button>
              </div>
            </div>

            <Button
              variant="outline"
              className="flex flex-col items-center justify-center gap-1 w-full h-24 bg-gray-50 border shadow-none"
              aria-label="Prescription"
            >
              <Eye style={{ width: 25, height: 25 }} />
              <p className="mt-2 text-base">Prescription</p>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UserSidebar;
