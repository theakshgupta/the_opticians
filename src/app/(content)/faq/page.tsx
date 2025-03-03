import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --------------------------------------------------
// TypeScript types for FAQ data
// --------------------------------------------------
interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  description: string;
  questions: FAQQuestion[];
}

// --------------------------------------------------
// FAQ data organized by category
// --------------------------------------------------
const faqData: FAQCategory[] = [
  {
    title: "General FAQs",
    description:
      "Find quick answers to common questions about our eyewear, orders, and services.",
    questions: [
      {
        question: "What types of eyewear do you offer?",
        answer:
          "We offer a variety of eyewear including prescription glasses, sunglasses, and non-prescription frames to suit every style and need.",
      },
      {
        question:
          "Do you provide both prescription and non-prescription options?",
        answer:
          "Yes, whether you need corrective lenses or just a fashion accessory, we have options available.",
      },
      {
        question: "Can I try on frames before buying?",
        answer:
          "Absolutely! You can use our virtual try-on tool online to see how the frames look on you.",
      },
      {
        question: "What brands do you carry?",
        answer:
          "We carry a curated selection of trusted and popular eyewear brands to ensure quality and style.",
      },
      {
        question: "Is your store available online?",
        answer:
          "Yes, our entire collection is available online for your convenience.",
      },
    ],
  },
  {
    title: "Prescription FAQs",
    description:
      "Get answers about your prescription details, submission process, and more.",
    questions: [
      {
        question: "How do I submit my prescription?",
        answer:
          "You can easily upload your prescription file or enter the details manually during checkout.",
      },
      {
        question: "What if I don’t know my PD (pupillary distance)?",
        answer:
          "Don’t worry—you can measure it at home using our guide or ask your optometrist to help.",
      },
      {
        question: "Can I update my prescription after placing an order?",
        answer:
          "Unfortunately, changes cannot be made once an order is confirmed, so please review your details carefully before submitting.",
      },
      {
        question: "Do you verify my prescription details?",
        answer:
          "Yes, we may contact your eye care professional to confirm your prescription if needed.",
      },
      {
        question: "Is there support if I have questions about my prescription?",
        answer:
          "Yes, our customer service team is available to help answer any questions or concerns about your prescription.",
      },
    ],
  },
  {
    title: "Frame FAQs",
    description:
      "Learn how to choose and care for the perfect frame for your style.",
    questions: [
      {
        question: "How do I choose the right frame size?",
        answer:
          "Use our size guide or check your current glasses for measurements to find a perfect fit.",
      },
      {
        question: "What materials are your frames made from?",
        answer:
          "Our frames are made from high-quality materials such as acetate and metal to ensure durability and comfort.",
      },
      {
        question: "Are the frames adjustable?",
        answer:
          "Most of our frames can be adjusted slightly for a better fit, and our opticians are here to help if you need advice.",
      },
      {
        question: "Do you offer different frame styles?",
        answer:
          "Yes, we have a wide range of styles—from classic to modern—to match your personal taste.",
      },
      {
        question: "Can I customize the frame color or design?",
        answer:
          "Some of our frames come with customization options; check the product details for available choices.",
      },
    ],
  },
  {
    title: "Lens FAQs",
    description:
      "Find out everything about lens options, coatings, and maintenance.",
    questions: [
      {
        question: "What types of lenses do you offer?",
        answer:
          "We provide single vision, bifocal, and progressive lenses to meet different vision requirements.",
      },
      {
        question: "Do you offer additional lens coatings?",
        answer:
          "Yes, we offer coatings such as anti-reflective, scratch-resistant, and blue light filtering options.",
      },
      {
        question: "How do I choose the right lens option?",
        answer:
          "Our guide and customer support can help you decide which lens type best suits your vision and lifestyle.",
      },
      {
        question: "Are your lenses durable?",
        answer:
          "Yes, our lenses are made to be long-lasting and many come with extra protection features.",
      },
      {
        question:
          "Can I order lenses for specific uses like reading or computer work?",
        answer:
          "Absolutely, we offer specialized lenses for reading, computer work, and other tasks to reduce eye strain.",
      },
    ],
  },
  {
    title: "Order & Payment FAQs",
    description:
      "Learn about our secure ordering process and various payment options.",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit cards, debit cards, and popular digital wallets for your convenience.",
      },
      {
        question: "Is it safe to use my payment information on your website?",
        answer:
          "Yes, our website is secure and uses encryption to protect your personal and payment details.",
      },
      {
        question: "Can I modify or cancel my order after placing it?",
        answer:
          "You can request modifications or cancellations within a short time after placing your order. Please check our policy or contact support immediately.",
      },
      {
        question: "How do I receive order confirmation?",
        answer:
          "Once your order is placed, you’ll receive a confirmation email with all the details.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No, all costs are clearly stated at checkout so you know exactly what you’re paying for.",
      },
    ],
  },
  {
    title: "Shipping FAQs",
    description:
      "Get details on our shipping process, tracking, and delivery options.",
    questions: [
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping typically takes 5-7 business days, while expedited options are available.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, once your order ships, you will receive a tracking number to monitor its progress.",
      },
      {
        question: "Do you offer expedited shipping?",
        answer:
          "Yes, if you need your order sooner, you can select an expedited shipping option at checkout.",
      },
      {
        question: "Is shipping free?",
        answer:
          "We offer free shipping on orders over a certain amount—please refer to our shipping policy for details.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to many countries. Check our shipping page for specific international delivery details.",
      },
    ],
  },
  {
    title: "Return & Refund FAQs",
    description:
      "Find out about our hassle-free return process and refund policies.",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "You can return your glasses within 7-30 days if they are in their original condition. Please review our full return policy for details.",
      },
      {
        question: "How do I initiate a return or exchange?",
        answer:
          "Simply contact our customer support team, and they will guide you through the return or exchange process.",
      },
      {
        question: "Will I receive a full refund?",
        answer:
          "Yes, if your return meets our policy conditions, you will receive a full refund of the purchase price.",
      },
      {
        question: "How long does it take to process a refund?",
        answer:
          "Refunds are usually processed within 5-10 business days after we receive your returned item.",
      },
      {
        question: "What should I do if my item is defective?",
        answer:
          "If your item is defective, please contact us immediately. We will offer a replacement or a full refund based on your preference.",
      },
    ],
  },
  {
    title: "Care & Maintenance FAQs",
    description: "Learn how to properly care for and maintain your eyewear.",
    questions: [
      {
        question: "How should I clean my glasses?",
        answer:
          "Clean your glasses with a microfiber cloth and lens cleaner, avoiding harsh chemicals that may damage the lenses.",
      },
      {
        question: "Can I use regular cleaning products on my lenses?",
        answer:
          "It’s best to use products specifically designed for eyewear to protect your lenses and coatings.",
      },
      {
        question: "How often should I get my eyes examined?",
        answer:
          "We recommend an eye exam every one to two years to keep your prescription up to date.",
      },
      {
        question: "Do you offer repair services?",
        answer:
          "Yes, we provide repair services for minor adjustments and fixes. Contact us if you need assistance.",
      },
      {
        question: "How should I store my glasses?",
        answer:
          "Always store your glasses in a hard case when not in use to prevent scratches and damage.",
      },
    ],
  },
];

// --------------------------------------------------
// Mobile version: Each category is an accordion
// --------------------------------------------------
const MobileFAQCategorySection: React.FC<{ category: FAQCategory }> = ({
  category,
}) => {
  return (
    // Only show on mobile (below md)
    <div className="block md:hidden">
      <Accordion type="single" collapsible>
        <AccordionItem value={category.title}>
          <AccordionTrigger className="flex">
            <h1 className="text-xl font-medium">{category.title}</h1>
          </AccordionTrigger>
          <AccordionContent>
            {/* Nested accordion for the questions */}
            <Accordion
              type="single"
              collapsible
              className="px-2 mb-10 bg-gray-50 rounded-xl"
            >
              {category.questions.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`${category.title}-question-${index}`}
                >
                  <AccordionTrigger className="text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-light text-gray-800">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

// --------------------------------------------------
// Desktop version: Two-column layout (Title/description on left, questions accordion on right)
// --------------------------------------------------
const DesktopFAQCategorySection: React.FC<{ category: FAQCategory }> = ({
  category,
}) => {
  return (
    // Only show on medium and larger screens
    <section className="hidden md:flex py-14">
      <div className="flex flex-row gap-10 w-full">
        {/* Left side: Category title and description */}
        <div className="w-1/2 flex flex-col gap-1">
          <h2 className="text-3xl font-medium">{category.title}</h2>
          <p className="text-sm md:text-base font-light">
            {category.description}
          </p>
        </div>
        {/* Right side: Accordion for FAQ items */}
        <div className="w-1/2">
          <Accordion type="single" collapsible>
            {category.questions.map((faq, index) => (
              <AccordionItem key={index} value={`${category.title}-${index}`}>
                <AccordionTrigger className="text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base font-light text-gray-800">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------
// Main FAQ Page
// --------------------------------------------------
const FAQPage: NextPage = () => {
  return (
    <div className="px-5 md:px-10 lg:px-16 flex flex-col gap-10">
      <header className="mt-10 flex flex-col gap-2">
        {/* Banner image
        <div className="relative w-full h-52 lg:h-[60vh] mb-10 border rounded-2xl">
          <Image
            src="/faq.png"
            alt="Frequently Asked Questions Banner"
            fill
            className="object-cover rounded-2xl"
          />
        </div> */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl my-10 font-medium">
          Frequently Asked Questions
        </h1>
        {/* <p className="w-full md:w-[90%] xl:w-[60%] text-sm md:text-base font-light">
          Got questions? We’ve got answers! Explore our frequently asked
          questions to find everything you need to know about our eyewear,
          lenses, prescriptions, and more.
        </p> */}
      </header>

      {/* Main content: Render mobile and desktop components */}
      <main className="flex flex-col md:divide-y divide-gray-200">
        {faqData.map((category, index) => (
          <React.Fragment key={index}>
            <MobileFAQCategorySection category={category} />
            <DesktopFAQCategorySection category={category} />
          </React.Fragment>
        ))}
      </main>
    </div>
  );
};

export default FAQPage;
