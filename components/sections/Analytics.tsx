"use client";

import { ReactNode } from "react"; // Add this at the top
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Activity, BarChart2, Clock, Users, DollarSign , TrendingUpلهف  } from "lucide-react";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, label: "Total Sales", value: "$42,500.00", change: "+12.5%", icon: DollarSign, color: "text-blue-600" },
  { id: 2, label: "Revenue", value: "$32,400.00", change: "+8.2%", icon: BarChart2, color: "text-green-600" },
  { id: 3, label: "Profit", value: "$20,573.00", change: "+5.7%", icon: TrendingUp, color: "text-purple-600" }
];

const activities = [
  { id: 1, user: "Alex Johnson", action: "Completed purchase", time: "2m ago", amount: "$149.99" },
  { id: 2, user: "Maria Garcia", action: "Submitted review", time: "15m ago", amount: "" },
  { id: 3, user: "Sam Wilson", action: "Created account", time: "1h ago", amount: "" },
  { id: 4, user: "Taylor Smith", action: "Upgraded plan", time: "3h ago", amount: "$29.99" }
];

const AnimatedCard = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Analytics() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dashboard Overview
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get a quick overview of your sales, revenue, and other important metrics.
          </motion.p>
        </div>

        <AnimatedCard>
          <Card className="p-6 rounded-2xl shadow-xl border-0 bg-white overflow-hidden">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <motion.div className="p-2 bg-blue-100 rounded-lg" whileHover={{ rotate: 10 }}>
                    <Activity className="h-6 w-6 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl font-bold">Dashboard Overview</h3>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.id}
                      className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-100 transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${stat.color.replace(
                          "text",
                          "bg"
                        )} bg-opacity-10 mb-2`}
                      >
                        <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      </div>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <p className="text-xl font-bold mt-1">{stat.value}</p>
                      <p className={`text-xs mt-1 ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                        {stat.change}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <Button className="w-full mt-4" size="lg">
                  View Detailed Analytics <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Right Column - Recent Activity */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gray-600" />
                    <h4 className="font-semibold text-gray-800">Recent Activity</h4>
                  </div>
                </div>
                <div className="space-y-3">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 font-medium">
                          {activity.user.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <p className="font-medium text-gray-800 truncate">{activity.user}</p>
                        <p className="text-sm text-gray-500 truncate">{activity.action}</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        {activity.amount && <p className="text-sm font-medium text-green-600">{activity.amount}</p>}
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </AnimatedCard>
      </div>
    </section>
  );
}
