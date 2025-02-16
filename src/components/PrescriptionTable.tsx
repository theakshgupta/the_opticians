"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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

const PrescriptionTable = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      distanceOD: { sph: "", cyl: "", axis: "" },
      distanceOS: { sph: "", cyl: "", axis: "" },
      nearOD: { sph: "", cyl: "", axis: "" },
      nearOS: { sph: "", cyl: "", axis: "" },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      {/* Large Screens */}
      <div className="hidden lg:flex flex-col items-center gap-5 my-10 pr-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div className="flex w-full">
              <div className="w-28">
                <Button
                  variant="outline"
                  className="cursor-default h-24 w-full"
                ></Button>
                <Button
                  variant="outline"
                  className="cursor-default h-12 w-full"
                >
                  Distance
                </Button>
                <Button
                  variant="outline"
                  className="cursor-default h-12 w-full"
                >
                  Near
                </Button>
              </div>
              <div className="w-[17.5vw]">
                <Button
                  variant="outline"
                  className="cursor-default h-12 w-full text-lg"
                >
                  OD (Right Eye)
                </Button>
                <div className="w-full flex">
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-12 w-full"
                    >
                      SPH
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOD.sph"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOD.sph"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-12 w-full"
                    >
                      CYL
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOD.cyl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOD.cyl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-12 w-full"
                    >
                      AXIS
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOD.axis"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="180"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOD.axis"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="90"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[17.5vw]">
                <Button
                  variant="outline"
                  className="cursor-default h-12 w-full text-lg"
                >
                  OS (Left Eye)
                </Button>
                <div className="w-full flex">
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-12 w-full"
                    >
                      SPH
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOS.sph"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOS.sph"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-12 w-full"
                    >
                      CYL
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOS.cyl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOS.cyl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-12 w-full"
                    >
                      AXIS
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOS.axis"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="180"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOS.axis"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="90"
                              {...field}
                              className="h-12 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full h-12">
              Submit
            </Button>
          </form>
        </Form>

        <Button variant="ghost" className="text-[#000065] text-lg w-max">
          I don't have a prescription.
        </Button>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center gap-4 lg:hidden pt-10 justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
          >
            <div className="flex">
              <div className="w-24">
                <Button
                  variant="outline"
                  className="cursor-default h-20 w-full"
                ></Button>
                <Button
                  variant="outline"
                  className="cursor-default h-10 w-full"
                >
                  Distance
                </Button>
                <Button
                  variant="outline"
                  className="cursor-default h-10 w-full"
                >
                  Near
                </Button>
              </div>
              <div className="w-full">
                <Button
                  variant="outline"
                  className="cursor-default h-10 w-full text-lg"
                >
                  OD (Right Eye)
                </Button>
                <div className="w-full flex">
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-10 w-full"
                    >
                      SPH
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOD.sph"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOD.sph"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-10 w-full"
                    >
                      CYL
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOD.cyl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOD.cyl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-10 w-full"
                    >
                      AXIS
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOD.axis"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="180"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOD.axis"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="90"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-24">
                <Button
                  variant="outline"
                  className="cursor-default h-20 w-full"
                ></Button>
                <Button
                  variant="outline"
                  className="cursor-default h-10 w-full"
                >
                  Distance
                </Button>
                <Button
                  variant="outline"
                  className="cursor-default h-10 w-full"
                >
                  Near
                </Button>
              </div>
              <div className="w-full">
                <Button
                  variant="outline"
                  className="cursor-default h-10 w-full text-lg"
                >
                  OS (Left Eye)
                </Button>
                <div className="w-full flex">
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-10 w-full"
                    >
                      SPH
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOS.sph"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOS.sph"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-10 w-full"
                    >
                      CYL
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOS.cyl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOS.cyl"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="+0.00"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <Button
                      variant="outline"
                      className="cursor-default h-10 w-full"
                    >
                      AXIS
                    </Button>
                    <FormField
                      control={form.control}
                      name="distanceOS.axis"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="180"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nearOS.axis"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="90"
                              {...field}
                              className="h-10 w-full text-center"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full h-10">
              Submit
            </Button>
          </form>
        </Form>

        
        <Button variant="ghost" className="text-[#000065] text-lg w-max">
          I don't have a prescription.
        </Button>
      </div>
    </div>
  );
};
export default PrescriptionTable;
