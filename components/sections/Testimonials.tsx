"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content: "Really love the First Delivery Photos File Service. Just 48 Hours, It's Crazy!",
    name: "Jenny Wilson",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 2,
    content: "Great Services with Good Quality Photographers PhotoScape.",
    name: "Emily Thompson",
    role: "UI Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 3,
    content: "Professional team and timely delivery. I highly recommend their services!",
    name: "Michael Lee",
    role: "Marketing Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: 4,
    content: "The platform is intuitive and the results exceeded expectations.",
    name: "Sara Tan",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative bg-white">
      {/* Floating blurred background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Customers Are <span className="text-blue-600">Saying</span>
          </h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" id="prevBtn">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" id="nextBtn">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: "#prevBtn",
            nextEl: "#nextBtn",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card className="relative p-10 shadow-lg hover:shadow-xl transition duration-500 bg-white border border-gray-200 rounded-2xl h-full group overflow-hidden">
                {/* Decorative bubble on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-100 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <Quote className="h-8 w-8 text-blue-600 mb-6" />
                <p className="text-lg text-gray-700 mb-6 italic">“{testimonial.content}”</p>
                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border border-blue-200"
                    width={56}
                    height={56}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
