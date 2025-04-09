"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Briefcase,
  LineChart,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Custom Web Development",
    description:
      "Build scalable, responsive, and user-friendly websites that capture your audience's attention and drive engagement. Our team ensures that your website reflects your brand and business goals.",
    icon: Briefcase, // Business-related icon
    link: "See Details",
    accentColor: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverColor: "hover:shadow-blue-100/30",
    highlightColor: "bg-blue-200/20",
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Boost your website’s visibility and search engine ranking with our expert SEO strategies. We help you reach the right audience with tailored SEO services, driving organic traffic and improving conversions.",
    icon: LineChart, // Symbolizing growth and analysis
    link: "See Details",
    accentColor: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverColor: "hover:shadow-purple-100/30",
    highlightColor: "bg-purple-200/20",
  },
  {
    title: "UI/UX Design & Branding",
    description:
      "Create visually stunning websites with a seamless user experience. Our design process focuses on user-centric solutions that enhance usability while reflecting your brand's identity.",
    icon: Sparkles, // Symbolizing creativity and innovation
    link: "See Details",
    accentColor: "bg-teal-100",
    iconColor: "text-teal-600",
    hoverColor: "hover:shadow-teal-100/30",
    highlightColor: "bg-teal-200/20",
  },
];


const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
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
      <Card
        className={`p-8 hover:shadow-lg transition-all duration-300 group relative overflow-hidden h-full border-0 shadow-sm ${feature.hoverColor}`}
      >
        {/* Colorful background elements */}
        <div
          className={`absolute inset-0 ${feature.highlightColor} opacity-30 rounded-xl`}
        ></div>
        <div
          className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${feature.accentColor} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}
        ></div>

        <Sparkles
          className={`absolute top-4 right-4 h-6 w-6 ${feature.iconColor} opacity-30 group-hover:opacity-100 transition-opacity duration-300`}
        />

        <div
          className={`w-12 h-12 rounded-lg ${feature.accentColor} flex items-center justify-center mb-6 relative z-10 shadow-inner`}
        >
          <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
        </div>

        <h3 className="text-xl font-semibold mb-3 relative z-10 text-gray-800">
          {feature.title}
        </h3>
        <p className="text-gray-600 mb-6 relative z-10">
          {feature.description}
        </p>

        <Button
          variant="link"
          className={`p-0 ${feature.iconColor} font-medium group-hover:opacity-80 transition-all relative z-10`}
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
    <section className="py-16 relative bg-white">
      
      {/* Colorful background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-amber-300 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Perfect Solution For Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Business</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-200 to-purple-200 opacity-70 -z-0 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            At Elevate Soft, we provide cutting-edge solutions that help your
            business thrive in the digital age. Whether you are looking to build
            a robust online presence or enhance your visibility, we have the
            expertise to take your business to the next level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Vibrant CTA at bottom */}
        <motion.div
          className="mt-16 text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Button className="px-8 py-6 text-lg font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-blue-500/20 transition-all">
            Explore All Solutions
            <ArrowRight className="ml-2 h-5 w-5 animate-pulse-hover" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
