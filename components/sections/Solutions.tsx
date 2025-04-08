"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Briefcase, LineChart, Users } from "lucide-react";

const features = [
  {
    title: "Grow Your Business",
    description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    icon: Briefcase,
    link: "See Details"
  },
  {
    title: "Drive More Sales",
    description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    icon: LineChart,
    link: "See Details"
  },
  {
    title: "Handled By Expert",
    description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    icon: Users,
    link: "See Details"
  }
];

export default function Solutions() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Perfect Solution For Your Business</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-500 mb-6">{feature.description}</p>
              <Button variant="link" className="p-0 text-blue-600 font-medium">
                {feature.link} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}