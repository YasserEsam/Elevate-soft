"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Analytics() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Join An Attractive & Personalized</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <Card className="p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold">Dashboard Overview</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span className="text-sm text-gray-500">Live</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Total Sales</p>
                  <p className="text-xl font-bold">$ 42,500.00</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="text-xl font-bold">$ 32,400.00</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Profit</p>
                  <p className="text-xl font-bold">20,573.00</p>
                </div>
              </div>
              <div className="h-64 bg-gray-100 rounded-lg">
                {/* Chart placeholder - you'll need to implement actual chart */}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold">Recent Activity</h4>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="font-medium">User Name</p>
                      <p className="text-sm text-gray-500">Action performed</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-500">2m ago</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}