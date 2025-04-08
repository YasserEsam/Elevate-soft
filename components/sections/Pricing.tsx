"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Base",
    description: "Best for your project or a company that's starting out",
    price: "$0",
    period: "Per User / Per Year",
    features: [
      "Access to editing all blocks",
      "Editing global swatches",
      "Access to documentation",
      "All free components",
      "Priority support"
    ],
    buttonText: "Try for Free"
  },
  {
    name: "Standard",
    description: "For a small company that wants to show what is means to be first",
    price: "$300",
    period: "Per User / Per Year",
    features: [
      "Access to editing all blocks",
      "Editing global swatches",
      "Access to documentation",
      "All free components",
      "Priority support"
    ],
    buttonText: "Start 14 Days Free Trial"
  },
  {
    name: "Unlimited",
    description: "For a large company that wants to achieve high scores in everything",
    price: "$600",
    period: "Per User / Per Year",
    features: [
      "Access to editing all blocks",
      "Editing global swatches",
      "Access to documentation",
      "All free components",
      "Priority support"
    ],
    buttonText: "Start 14 Days Free Trial"
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto  px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Expand your options with a subscription</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
          </p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="text-sm font-medium">Bill Monthly</span>
            <Switch />
            <span className="text-sm font-medium">Bill Annually</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className="p-8">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.name === "Base" ? "outline" : "destructive"}>
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}