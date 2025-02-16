import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Button } from "./ui/button";
  import { ArrowUpRight, X } from "lucide-react";
  import Image from "next/image";
  
  const faceWidthSteps = [
    {
      title: "Step 1: Take a Credit/Debit Card",
      description: "",
      imageSrc: "/size-guide/face-width/step_1.avif",
      alt: "Credit or debit card used as a measurement tool",
    },
    {
      title: "Step 2: Stand in front of a mirror",
      description:
        "Hold the card steady and align one edge with the centre of your nose.",
      imageSrc: "/size-guide/face-width/step_2.avif",
      alt: "Person holding a card in front of a mirror",
    },
    {
      title: "Step 3: Check the card position",
      description:
        "Determine your frame size by noting where the opposite edge of the card aligns with your eye.",
      imageSrc: "/size-guide/face-width/step_3.avif",
      alt: "Card aligned with the eye for frame measurement",
    },
  ];
  
  const frameVariants = [
    {
      title: "A: Average",
      description: "If the card’s edge aligns with the outer corner of your eye.",
    },
    {
      title: "B: Wide",
      description:
        "If the card’s edge falls between the outer corner and the centre of your eye.",
    },
    {
      title: "C: Narrow",
      description:
        "If the card’s edge extends past the outer corner of your eye.",
    },
  ];
  
  const SizeGuide = () => {
    return (
      <Sheet>
        <SheetTrigger>
          <Button variant="outline" className="text-sm flex items-center gap-2">
            Size Guide <ArrowUpRight />
          </Button>
        </SheetTrigger>
        <SheetContent className="max-h-[100vh] overflow-y-auto p-4">
          <SheetHeader>
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-medium">Frame Size Guide</h1>
              <SheetClose>
                <Button variant="outline" className="w-11 h-11">
                  <X />
                </Button>
              </SheetClose>
            </div>
          </SheetHeader>
          <p className="my-5 font-light text-sm md:text-base">
            Find your perfect size easily with our guides. Measure your face width
            to choose the best fit, or use the numbers on your current glasses for
            a quick match.
          </p>
          <Accordion type="single" collapsible>
            {/* Face-Width Method Accordion */}
            <AccordionItem value="face-width">
              <AccordionTrigger className="text-base">
                Use the Face-Width Method
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-5">
                  {faceWidthSteps.map((step, index) => (
                    <div key={index} className="flex flex-col gap-2 my-5">
                      <h2 className="text-lg md:text-xl font-medium">{step.title}</h2>
                      {step.description && (
                        <p className="text-sm font-light">{step.description}</p>
                      )}
                      <div className="relative w-full h-80 rounded-xl overflow-hidden">
                        <Image
                          src={step.imageSrc}
                          alt={step.alt}
                          fill
                          quality={100}
                          className="object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col gap-2 md:gap-4">
                    {frameVariants.map((variant, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <h3 className="text-base font-medium">{variant.title}</h3>
                        <p className="text-sm font-light">{variant.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
  
            {/* Current Glasses Accordion */}
            <AccordionItem value="current-glasses">
              <AccordionTrigger className="text-base">
                Use Your Current Glasses
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-light">
                    If you wear glasses, you might notice numbers on the temple.
                    These numbers indicate the lens and bridge width which
                    determine the frame size.
                  </p>
                  <div className="relative w-full h-60 rounded-xl overflow-hidden">
                    <Image
                      src="/size-guide/current-glasses/frame.avif"
                      alt="Example frame measurements"
                      fill
                      quality={100}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-sm font-light">
                    Compare the measurements of this frame with your glasses to
                    find the best match:
                  </p>
                  <ul className="mt-2 mb-5">
                    <li className="text-base font-medium">Lens Width: 50mm</li>
                    <li className="text-base font-medium">Bridge Width: 22mm</li>
                    <li className="text-base font-medium">Frame Size: 50-22</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
    );
  };
  
  export default SizeGuide;
  