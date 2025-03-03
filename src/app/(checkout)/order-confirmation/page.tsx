"use client";

import React from "react";
import HorizontalProductCard from "@/components/Products/HorizontalProductCard";
import { Check } from "lucide-react";

const OrderConfirmation: React.FC = () => {
  // Order data that could be fetched from an API or passed as props
  const orderDetails = {
    customerName: "Aksh Gupta",
    orderNumber: "12345",
    products: [
      {
        imageSrc: "/sampleProduct.png",
        altText: "Sample Product Image",
        brand: "Rayban",
        productName: "Clubmaster Optics",
        size: "Medium",
        price: "₹2590/-",
      },
      {
        imageSrc: "/sampleProduct.png",
        altText: "Sample Product Image",
        brand: "Rayban",
        productName: "Clubmaster Optics",
        size: "Medium",
        price: "₹2590/-",
      },
    ],
    totals: {
      subtotal: "₹5890/-",
      discount: "-₹311/-",
      total: "₹5579/-",
    },
    paymentMethod: "Google Pay",
    shippingAddress: [
      "Aksh Gupta",
      "+91 7009403491",
      "Chandigarh University",
      "NH-05 Chandigarh-Ludhiana Highway",
      "Gharuan, Mohali",
      "140413",
      "Punjab",
    ],
    estimatedDelivery: "Estimated delivery between [Date] & [Date].",
  };

  return (
    <main className="container mx-auto px-5 py-10 md:px-10 lg:px-16">
      {/* Header Section */}
      <header className="flex flex-col items-center justify-center gap-4 text-center">
        <div
          className="w-24 h-24 rounded-full bg-green-500 text-white flex items-center justify-center"
          aria-hidden="true"
        >
          <Check className="w-12 h-12" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium md:text-5xl">
            Thank You, {orderDetails.customerName}
          </h1>
          <p className="text-base font-light">
            Your order has been placed successfully. We’re getting it ready for
            shipment!
          </p>
        </div>
        <span className="text-2xl font-medium text-[#000065]">
          Order #{orderDetails.orderNumber}
        </span>
      </header>

      {/* Main Content */}
      <section className="mt-10 flex flex-col md:flex-row gap-6">
        {/* Order Summary */}
        <article className="flex-1">
          <div className="p-4 md:p-6 border rounded-2xl flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-2">
              <h2 className="text-3xl font-medium md:text-4xl">Order Summary</h2>
              <p className="text-base text-gray-600">
                ({orderDetails.products.length} Products)
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {orderDetails.products.map((product, index) => (
                <HorizontalProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar Details */}
        <aside className="w-full md:w-1/3">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 md:sticky md:top-16">
            {/* Total Cost Card */}
            <div className="border rounded-2xl p-4 md:p-6 flex flex-col gap-4">
              <h2 className="text-2xl font-medium">Total Cost</h2>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-base text-gray-700">
                  <span>Subtotal</span>
                  <span>{orderDetails.totals.subtotal}</span>
                </div>
                <div className="flex justify-between text-base text-gray-700">
                  <span>Discount</span>
                  <span>{orderDetails.totals.discount}</span>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-2xl font-semibold text-gray-700">Total</h3>
                  <h3 className="text-2xl font-semibold text-gray-700">
                    {orderDetails.totals.total}
                  </h3>
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="border rounded-2xl p-4 md:p-6 flex flex-col gap-2">
              <h2 className="text-2xl font-medium">Payment Method</h2>
              <p className="text-base font-light">{orderDetails.paymentMethod}</p>
            </div>

            {/* Shipping Details Card */}
            <div className="border rounded-2xl p-4 md:p-6 flex flex-col gap-2">
              <h2 className="text-2xl font-medium">Shipping Details</h2>
              <ul className="text-base font-light list-inside">
                {orderDetails.shippingAddress.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>

            {/* Estimated Delivery Card */}
            <div className="border rounded-2xl p-4 md:p-6 flex flex-col gap-2">
              <h2 className="text-2xl font-medium">Estimated Delivery Date</h2>
              <p className="text-base font-light">
                {orderDetails.estimatedDelivery}
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default OrderConfirmation;
