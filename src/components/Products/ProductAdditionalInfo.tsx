import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
  
  const technicalInfo = [
    { label: "Brand", value: "Rayban" },
    { label: "Frame Type", value: "Rimmed" },
    { label: "Product Type", value: "Eyeglasses" },
    { label: "Model No.", value: "3273nm01" },
    { label: "Frame Size", value: "Medium" },
    { label: "Frame Width", value: "134mm" },
    { label: "Frame Dimensions", value: "56-16-142" },
    { label: "Frame Color", value: "Black" },
    { label: "Frame Material", value: "Acetate" },
    { label: "Collection", value: "The Gentleman's Edit" },
  ];
  
  const ProductAdditionalInfo: React.FC = () => {
    return (
      <section className="space-y-6">
        <Accordion type="single" collapsible>
          {/* Description Accordion Item */}
          <AccordionItem value="description">
            <AccordionTrigger className="text-lg font-semibold">
              Description
            </AccordionTrigger>
            <AccordionContent>
              <p className="font-light text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam eius voluptas aut amet dignissimos veritatis
                necessitatibus labore hic quis. Ipsum!
              </p>
            </AccordionContent>
          </AccordionItem>
  
          {/* Technical Information Accordion Item */}
          <AccordionItem value="technical">
            <AccordionTrigger className="text-lg font-semibold">
              Technical Information
            </AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  {technicalInfo.map(({ label, value }, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{label}</TableCell>
                      <TableCell className="text-right font-light text-gray-700 whitespace-nowrap">
                        {value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    );
  };
  
  export default ProductAdditionalInfo;
  