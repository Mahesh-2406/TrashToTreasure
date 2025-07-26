import React from 'react';
import { Database, BarChart3, TrendingUp, Recycle } from 'lucide-react';

const DatabasePage = () => {
  const stats = [
    { label: 'Waste Items Identified', value: '12,847', icon: Database },
    { label: 'Conversion Ideas', value: '2,156', icon: BarChart3 },
    { label: 'Active Users', value: '8,923', icon: TrendingUp },
    { label: 'Items Repurposed', value: '15,672', icon: Recycle },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Database Overview</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
              <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Waste Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Paper', 'Plastic', 'Glass', 'Metal', 'Textile', 'Cardboard', 'Organic', 'Electronic'].map((category) => (
              <div key={category} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors">
                <div className="font-semibold text-gray-900">{category}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {Math.floor(Math.random() * 500) + 100} items
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">New plastic bottle conversion idea added</span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Glass jar identified and categorized</span>
                <span className="text-sm text-gray-500">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">New community initiative created</span>
                <span className="text-sm text-gray-500">6 hours ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Textile waste conversion completed</span>
                <span className="text-sm text-gray-500">8 hours ago</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Insights</h2>
          <div className="bg-green-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Our database contains comprehensive information about waste materials, conversion techniques, 
              and community initiatives. All data is continuously updated to provide the most relevant 
              and effective solutions for waste repurposing.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Real-time waste identification accuracy: 94.2%</li>
              <li>Average conversion success rate: 87.5%</li>
              <li>Community engagement growth: +23% monthly</li>
              <li>Environmental impact: 2.3 tons of waste diverted from landfills</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DatabasePage;