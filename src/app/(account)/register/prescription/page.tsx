"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import FileUploader from "@/components/FileUploader";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import PrescriptionTable from "@/components/PrescriptionTable";

// **Form Schema**
const formSchema = z.object({
  distanceOD: z.object({
    sph: z.string().optional(),
    cyl: z.string().optional(),
    axis: z.string().optional(),
  }),
  distanceOS: z.object({
    sph: z.string().optional(),
    cyl: z.string().optional(),
    axis: z.string().optional(),
  }),
  nearOD: z.object({
    sph: z.string().optional(),
    cyl: z.string().optional(),
    axis: z.string().optional(),
  }),
  nearOS: z.object({
    sph: z.string().optional(),
    cyl: z.string().optional(),
    axis: z.string().optional(),
  }),
});

const PrescriptionPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distanceOD: { sph: "", cyl: "", axis: "" },
      distanceOS: { sph: "", cyl: "", axis: "" },
      nearOD: { sph: "", cyl: "", axis: "" },
      nearOS: { sph: "", cyl: "", axis: "" },
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    console.log("Form Submitted:", values);
  }, []);

  return (
    <div className="px-5 md:px-10 lg:px-16 py-5 md:py-10 w-full min-h-screen md:h-screen md:overflow-hidden">
      <div className="w-full h-full flex flex-col lg:flex-row gap-10">
        {/* Left Side */}
        <section className="h-full flex flex-col justify-between">
          <Link href="/" className="w-60">
            <Image
              src="/logo/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-full h-full mb-10"
            />
          </Link>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-medium md:text-6xl">
              Your Prescription
            </h1>
            <p className="text-base font-light md:text-base lg:w-[90%]">
              Please provide your prescription details so we can create lenses
              tailored to your vision needs.
            </p>
          </div>

          <PrescriptionTable />
        </section>

        {/* Separator */}
        {/* Mobile Separator */}
        <div className="flex lg:hidden items-center justify-center gap-2">
          <Separator className="flex-1" orientation="horizontal" />
          <span className="text-gray-600">Or</span>
          <Separator className="flex-1" orientation="horizontal" />
        </div>
        {/* Desktop Separator */}
        <div className="hidden lg:flex items-center justify-center">
          <Separator orientation="vertical" />
        </div>

        {/* Right Side */}
        <section className="flex-1 flex flex-col gap-8 justify-between">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base">
                What if I don’t have a prescription?
              </AccordionTrigger>
              <AccordionContent>
                No worries! You can visit us and get your prescription done.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base">
                How do I read my prescription?
              </AccordionTrigger>
              <AccordionContent>
                SPH, CYL, and AXIS determine your lens power. Tap{" "}
                <Link href="/" className="text-blue-600 underline">
                  here
                </Link>{" "}
                for a quick guide!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base">
                Can I update my prescription later?
              </AccordionTrigger>
              <AccordionContent>
                Yes! After placing your order, you can email us an updated
                prescription.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <FileUploader />
        </section>
      </div>
    </div>
  );
};

export default PrescriptionPage;
