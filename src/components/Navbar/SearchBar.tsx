"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const formSchema = z.object({
  searchbar: z
    .string()
});

const SearchBar = ({ placeholderText = "Search for products..." }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchbar: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { searchbar } = values;
    if (searchbar) {
      router.push(`/list?name=${encodeURIComponent(searchbar)}`);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-center w-full max-w-2xl px-1 sm:px-1 md:px-8"
        role="search"
        aria-label="Product Search Form"
      >
        <FormField
          control={form.control}
          name="searchbar"
          render={({ field, fieldState }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="search"
                  placeholder={placeholderText}
                  {...field}
                  className="w-full h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-theme"
                  spellCheck="false"
                  aria-invalid={!!fieldState.error}
                />
              </FormControl>
              {fieldState.error && (
                <p className="text-red-500 text-sm mt-1">
                  {fieldState.error.message}
                </p>
              )}
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-10 h-10 rounded-md bg-theme hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
          aria-label="Search"
        >
          <Search style={{ width: 20, height: 20 }} />
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
