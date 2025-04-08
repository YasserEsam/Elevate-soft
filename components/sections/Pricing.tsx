"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, Rocket, Sparkles, BadgeCheck, ArrowRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  mostPopular?: boolean;
  highlight?: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams getting started",
    price: "$0",
    period: "forever free",
    features: [
      "Access to core blocks",
      "Basic documentation",
      "Community support",
      "Up to 3 projects",
      "Standard components"
    ],
    buttonText: "Get Started",
    highlight: "No credit card required"
  },
  {
    name: "Professional",
    description: "For growing businesses that need more power",
    price: "$29",
    period: "Per User / Per Month",
    features: [
      "All Starter features",
      "Advanced blocks & templates",
      "Priority support",
      "Unlimited projects",
      "Team collaboration",
      "Custom components",
      "Analytics dashboard"
    ],
    buttonText: "Start 14-Day Free Trial",
    mostPopular: true,
    highlight: "Most popular choice"
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs",
    price: "$99",
    period: "Per User / Per Month",
    features: [
      "All Professional features",
      "Dedicated account manager",
      "Single sign-on (SSO)",
      "Custom integrations",
      "Advanced security",
      "24/7 premium support",
      "API access"
    ],
    buttonText: "Contact Sales",
    highlight: "Custom pricing available"
  }
];

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  
  const calculateAnnualSavings = (price: string) => {
    const amount = parseFloat(price.replace('$', ''));
    return Math.round(amount * 12 * 0.2); // 20% savings
  };

  const getAnnualPrice = (price: string) => {
    const amount = parseFloat(price.replace('$', ''));
    return `$${Math.round(amount * 12 * 0.8)}`; // 20% discount
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Choose the perfect plan for your needs. Scale up or down as your business grows.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-8 bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm inline-flex border border-gray-200 dark:border-gray-700"
          >
            <span className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${!annualBilling ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}>
              Monthly
            </span>
            <Switch 
              checked={annualBilling}
              onCheckedChange={setAnnualBilling}
              className="data-[state=checked]:bg-blue-600"
              aria-label="Toggle billing period"
            />
            <span className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${annualBilling ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300'}`}>
              Yearly <span className="ml-1">(Save 20%)</span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: plan.mostPopular ? -10 : -5 }}
              className="relative"
            >
              {plan.mostPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg z-10 flex items-center">
                  <BadgeCheck className="h-4 w-4 mr-1" />
                  {plan.highlight}
                </div>
              )}
              
              <Card className={`h-full flex flex-col transition-all duration-300 ${
                plan.mostPopular 
                  ? 'border-2 border-blue-400 dark:border-blue-600 shadow-xl' 
                  : 'border border-gray-200 dark:border-gray-700 shadow-md'
              }`}>
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    {index === 0 && <Zap className="h-6 w-6 text-blue-600" />}
                    {index === 1 && <Rocket className="h-6 w-6 text-purple-600" />}
                    {index === 2 && <Sparkles className="h-6 w-6 text-pink-500" />}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {annualBilling && plan.price !== "$0" ? getAnnualPrice(plan.price) : plan.price}
                      </span>
                      {plan.price !== "$0" && annualBilling && (
                        <span className="ml-2 line-through text-gray-500 text-lg">
                          ${parseFloat(plan.price.replace('$', '')) * 12}
                        </span>
                      )}
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 block">
                      {plan.price === "$0" 
                        ? plan.period 
                        : annualBilling 
                          ? "Per User / Per Year" 
                          : plan.period}
                    </span>
                    {plan.price !== "$0" && annualBilling && (
                      <span className="text-sm text-blue-600 dark:text-blue-400 mt-1 block">
                        Save ${calculateAnnualSavings(plan.price)} per user annually
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          index === 0 ? 'text-blue-600' : 
                          index === 1 ? 'text-purple-600' : 'text-pink-500'
                        }`} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  {plan.highlight && !plan.mostPopular && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                      {plan.highlight}
                    </p>
                  )}
                  <Button 
                    className={`w-full py-6 text-base font-medium rounded-lg transition-all ${
                      plan.mostPopular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/20'
                        : plan.name === "Starter"
                          ? 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white'
                          : 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white'
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                    {plan.mostPopular && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400"
        >
          Need help choosing?{' '}
          <a 
            href="#" 
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Contact our sales team
          </a>
          <p className="mt-2 text-xs">
            All plans come with a 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}