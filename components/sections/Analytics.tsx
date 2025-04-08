"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Activity,
  BarChart2,
  Clock,
  TrendingUp,
  DollarSign
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { id: 1, label: "Total Sales", value: "$42,500", change: "+12.5%", icon: DollarSign, color: "text-blue-600" },
  { id: 2, label: "Revenue", value: "$32,400", change: "+8.2%", icon: BarChart2, color: "text-green-600" },
  { id: 3, label: "Profit", value: "$20,573", change: "+5.7%", icon: TrendingUp, color: "text-purple-600" }
];

const activities = [
  { id: 1, user: "Alex Johnson", action: "Completed purchase", time: "2m ago", amount: "$149.99" },
  { id: 2, user: "Maria Garcia", action: "Submitted review", time: "15m ago" },
  { id: 3, user: "Sam Wilson", action: "Created account", time: "1h ago" },
  { id: 4, user: "Taylor Smith", action: "Upgraded plan", time: "3h ago", amount: "$29.99" }
];

export default function Analytics() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto lg:px-24 px-4 ">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Dashboard Overview
          </motion.h2>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Key metrics and recent activity at a glance
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-6 shadow-md bg-white rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Stats Section */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Activity className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Performance Metrics</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    className="p-4 bg-gray-50 rounded-xl border hover:shadow transition duration-200"
                    whileHover={{ y: -2 }}
                  >
                    <div className={`p-2 w-10 h-10 rounded-full ${stat.color.replace("text", "bg")} bg-opacity-10 mb-3 flex items-center justify-center`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                    <p className="text-lg font-bold text-gray-800">{stat.value}</p>
                    <p className={`text-xs mt-1 ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                      {stat.change}
                    </p>
                  </motion.div>
                ))}
              </div>

              <Button className="w-full" size="sm">
                View Analytics <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Activity Section */}
            <div className="flex-1 border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-6">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              </div>

              <div className="space-y-3">
                {activities.map((activity) => (
                  <motion.div
                    key={activity.id}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border hover:shadow transition duration-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-semibold uppercase">
                      {activity.user.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{activity.user}</p>
                      <p className="text-xs text-gray-500 truncate">{activity.action}</p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      {activity.amount && (
                        <p className="text-xs font-medium text-green-600">{activity.amount}</p>
                      )}
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
