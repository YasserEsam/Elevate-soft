"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto  px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Stay Updated
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Subscribe to our newsletter for the latest updates, industry insights, and exclusive content.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1 bg-gray-800 text-white border-gray-700"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}