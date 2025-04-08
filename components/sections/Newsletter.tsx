"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500 opacity-30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full blur-2xl z-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-xl bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl space-y-8">
        {/* Floating Mail Icon */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 border border-white/10 shadow-md text-white">
            <Mail className="h-8 w-8" />
          </div>
        </motion.div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Get the Latest Inside Scoop
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive updates, expert insights, and handpicked content delivered straight to your inbox.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row gap-4 sm:gap-2 w-full max-w-xl mx-auto">
          <Input
            className="flex-1 bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Your email address"
            required
          />
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
          >
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </form>

        <p className="text-sm text-gray-400">
          We care about your data in our <a href="#" className="underline hover:text-white">privacy policy</a>.
        </p>
      </div>
    </section>
  );
}
