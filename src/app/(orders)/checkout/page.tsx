"use client";

import React from "react";
import AddressForm from "@/components/AddressForm";
import CouponCodeInput from "@/components/CouponCodeInput";
import HorizontalProductCard from "@/components/Products/HorizontalProductCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck } from "lucide-react";

const CheckoutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-5 py-10 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section: Product List & Address Form */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Bag/Products Section */}
          <div className="p-4 md:p-6 border rounded-2xl flex flex-col gap-6">
            <div className="flex items-end gap-2">
              <h1 className="text-3xl font-medium md:text-4xl">Bag</h1>
              <p className="text-base text-gray-600">(3 Products)</p>
            </div>
            <div className="flex flex-col gap-4">
              <HorizontalProductCard
                imageSrc="/sampleProduct.png"
                altText="Sample Product Image"
                brand="Rayban"
                productName="Clubmaster Optics"
                size="Medium"
                price="₹2590/-"
              />
              <HorizontalProductCard
                imageSrc="/sampleProduct.png"
                altText="Sample Product Image"
                brand="Rayban"
                productName="Clubmaster Optics"
                size="Medium"
                price="₹2590/-"
              />
            </div>
          </div>
          {/* Address Form Section */}
          <AddressForm />
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full md:w-1/3">
          <div className="md:sticky md:top-44">
            <div className="border rounded-2xl p-4 md:p-6 flex flex-col gap-4 ">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-medium">Coupon Code</h2>
                <CouponCodeInput />
              </div>
              <Separator className="my-5" />
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-base text-gray-700">
                  <span>Subtotal</span>
                  <span>₹5890/-</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                  <span>Discount</span>
                  <span>-₹311/-</span>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold text-gray-700">
                    Total
                  </h3>
                  <h3 className="text-2xl font-semibold text-gray-700">
                    ₹5579/-
                  </h3>
                </div>
              </div>
              <Button className="h-10 text-base hover:bg-[#000065]">
                Continue to Payment
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <ShieldCheck className="text-green-500" />
              <p className="text-base">Secure Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
