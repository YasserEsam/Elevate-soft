"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Briefcase, LineChart, Users, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Grow Your Business",
    description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    icon: Briefcase,
    link: "See Details",
    accentColor: "bg-blue-100"
  },
  {
    title: "Drive More Sales",
    description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    icon: LineChart,
    link: "See Details",
    accentColor: "bg-purple-100"
  },
  {
    title: "Handled By Expert",
    description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    icon: Users,
    link: "See Details",
    accentColor: "bg-amber-100"
  }
];

const FeatureCard = ({ feature, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-8 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-full">
        {/* Decorative elements */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${feature.accentColor} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
        <Sparkles className="absolute top-4 right-4 h-6 w-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className={`w-12 h-12 rounded-lg ${feature.accentColor} flex items-center justify-center mb-6 relative z-10`}>
          <feature.icon className="h-6 w-6 text-blue-600" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3 relative z-10">{feature.title}</h3>
        <p className="text-gray-500 mb-6 relative z-10">{feature.description}</p>
        
        <Button 
          variant="link" 
          className="p-0 text-blue-600 font-medium group-hover:text-blue-800 transition-colors relative z-10"
        >
          {feature.link} 
          <motion.span 
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center"
          >
            <ChevronRight className="ml-2 h-4 w-4" />
          </motion.span>
        </Button>
      </Card>
    </motion.div>
  );
};

export default function Solutions() {
  return (
    <section className="py-24 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Perfect Solution For Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Business</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-200 opacity-60 -z-0"></span>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
        
        {/* Optional CTA at bottom */}
        <motion.div 
          className="mt-16 text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Button className="px-8 py-6 text-lg font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
            Explore All Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}