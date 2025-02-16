"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import PrescriptionTable from "@/components/PrescriptionTable";

interface Order {
  id: string;
  date: string;
  product: string;
  amount: string;
  payment: string;
  status: string;
  actions: React.ReactNode;
}

const ProfileTab: React.FC = () => (
  <div className="flex flex-col gap-4">
    <h2 className="text-3xl font-medium">My Profile</h2>
    {/* Profile Card */}
    <div className="w-full rounded-2xl bg-gray-50 border p-4 md:p-6 flex flex-col sm:flex-row gap-4">
      <div className="w-20 h-20 border rounded-md bg-gray-200" />
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-medium">Customer Name</h2>
        <p className="text-lg font-light text-gray-800">
          example@email.com
        </p>
      </div>
    </div>
    {/* Personal Information */}
    <div className="w-full rounded-2xl bg-gray-50 border p-4 md:p-6">
      <h2 className="text-2xl font-medium">Personal Information</h2>
      <div className="mt-5 flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <p className="text-base font-light text-gray-800">First Name</p>
            <h2 className="text-lg font-medium">Customer's First Name</h2>
          </div>
          <div className="flex flex-col">
            <p className="text-base font-light text-gray-800">Email Address</p>
            <h2 className="text-lg font-medium">
              example@email.com
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <p className="text-base font-light text-gray-800">Last Name</p>
            <h2 className="text-lg font-medium">Customer's Last Name</h2>
          </div>
          <div className="flex flex-col">
            <p className="text-base font-light text-gray-800">Phone Number</p>
            <h2 className="text-lg font-medium">+91 1234567890</h2>
          </div>
        </div>
      </div>
    </div>
    {/* Addresses */}
    <div className="w-full rounded-2xl bg-gray-50 border p-4 md:p-6">
      <h2 className="text-2xl font-medium">Saved Addresses</h2>
      <div className="mt-5 flex flex-col sm:flex-row gap-4">
        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="border p-6 rounded-2xl flex flex-col gap-2 bg-white"
          >
            <h2 className="text-lg font-medium">Aksh Gupta</h2>
            <ul className="space-y-1">
              <li>+91 1234567890</li>
              <li>Chandigarh University</li>
              <li>Nh-5 Chandigarh-Ludhiana Highway</li>
              <li>Gharuan, Mohali</li>
              <li>140413</li>
              <li>Punjab</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const OrdersTab: React.FC = () => {
  const orders: Order[] = [
    {
      id: "#ORD12345",
      date: "12 Feb 2025",
      product: "Ray-Ban Aviator",
      amount: "₹4,999",
      payment: "UPI",
      status: "Shipped",
      actions: (
        <>
          <Button variant="outline">View Details</Button>
          <Button variant="outline">Track</Button>
        </>
      ),
    },
    {
      id: "#ORD12346",
      date: "08 Feb 2025",
      product: "Oakley Sports Frame",
      amount: "₹6,499",
      payment: "Credit Card",
      status: "Delivered",
      actions: (
        <>
          <Button variant="outline">View Details</Button>
          <Button variant="outline">Download Invoice</Button>
          <Button variant="outline">Return</Button>
        </>
      ),
    },
    {
      id: "#ORD12347",
      date: "05 Feb 2025",
      product: "Blue Light Glasses",
      amount: "₹2,199",
      payment: "COD",
      status: "Processing",
      actions: <Button variant="outline">View Details</Button>,
    },
    {
      id: "#ORD12348",
      date: "02 Feb 2025",
      product: "Prada Sunglasses",
      amount: "₹9,999",
      payment: "Wallet",
      status: "Canceled",
      actions: <Button variant="outline">View Details</Button>,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Product(s)</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.payment}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="flex gap-2">{order.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const PrescriptionTab: React.FC = () => (
  <div className="w-full">
    <PrescriptionTable />
  </div>
);

const AccountPage: React.FC = () => {
  return (
    <main className="px-5 py-10 md:px-10 lg:px-16">
      <section className="flex flex-col gap-5">
        <header>
          <h1 className="text-4xl font-medium md:text-5xl">
            Account Settings
          </h1>
        </header>
        <div className="w-full border rounded-2xl p-2 md:p-4 flex flex-col md:flex-row gap-4">
          <Tabs
            defaultValue="profile"
            className="w-full flex flex-col md:flex-row gap-4 md:gap-10"
          >
            {/* Tab Navigation */}
            <TabsList className="flex flex-row md:flex-col justify-start items-start gap-2 min-h-max bg-white">
              <TabsTrigger
                value="profile"
                className="whitespace-nowrap px-4 py-2 text-base border"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="orders"
                className="whitespace-nowrap px-4 py-2 text-base border"
              >
                Orders
              </TabsTrigger>
              <TabsTrigger
                value="prescription"
                className="whitespace-nowrap px-4 py-2 text-base border"
              >
                Prescription
              </TabsTrigger>
            </TabsList>
            {/* Tab Content */}
            <div className="flex-1">
              <TabsContent value="profile" className="p-8">
                <ProfileTab />
              </TabsContent>
              <TabsContent value="orders" className="p-4">
                <OrdersTab />
              </TabsContent>
              <TabsContent value="prescription" className="p-4">
                <PrescriptionTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default AccountPage;
