"use client"
import React, { useState } from 'react';
import { 
  Users, 
  MessageCircle, 
  Settings, 
  BarChart3, 
  Target, 
  Activity,
  ChevronDown,
  Search,
  Filter,
  MoreHorizontal,
  Check,
  Clock,
  XCircle,
  User,
  Calendar,
  TrendingUp,
  Send,
  UserCheck
} from 'lucide-react';

const Dashboard = () => {
  const [selectedCampaign, setSelectedCampaign] = useState('All Campaigns');
  const [selectedActivity, setSelectedActivity] = useState('Most Recent');

  const campaigns = [
    { name: 'Just Herbs', status: 'Active' },
    { name: 'Juicy chemistry', status: 'Active' },
    { name: 'Hyugalife 2', status: 'Active' },
    { name: 'Honeyveda', status: 'Active' },
    { name: 'HempStreet', status: 'Active' },
    { name: 'HealthyHey 2', status: 'Active' }
  ];

  const linkedinAccounts = [
    { 
      name: 'Pulkit Garg', 
      email: 'pr@pulkitgarg@gmail.com', 
      status: 'Connected', 
      requests: '17/30',
      progress: 57
    },
    { 
      name: 'Jivesh Lakhani', 
      email: 'jivesh@gmail.com', 
      status: 'Connected', 
      requests: '19/30',
      progress: 63
    },
    { 
      name: 'Indrajit Sahani', 
      email: 'indrajit.sahani@gmail.com', 
      status: 'Connected', 
      requests: '18/30',
      progress: 60
    },
    { 
      name: 'Bhavya Arora', 
      email: 'bhavya.arora199.bsa@gmail.c...', 
      status: 'Connected', 
      requests: '18/100',
      progress: 18
    }
  ];

  const activities = [
    {
      name: 'Om Satyarthy',
      role: 'Regional Head',
      campaign: 'Gynoveda',
      status: 'Pending Approval',
      time: '',
      avatar: 'OS'
    },
    {
      name: 'Dr. Bhuvaneshwari',
      role: 'Fertility & Women\'s Health + A...',
      campaign: 'Gynoveda',
      status: 'Sent 7 mins ago',
      time: '7 mins ago',
      avatar: 'DB'
    },
    {
      name: 'Surdeep Singh',
      role: 'Building Product-led SEO Growt...',
      campaign: 'Gynoveda',
      status: 'Sent 7 mins ago',
      time: '7 mins ago',
      avatar: 'SS'
    },
    {
      name: 'Dilbag Singh',
      role: 'Manager Marketing & Communicat...',
      campaign: 'Gynoveda',
      status: 'Sent 7 mins ago',
      time: '7 mins ago',
      avatar: 'DS'
    },
    {
      name: 'Vanshy Jain',
      role: 'Ayurveda|Primary infertility|',
      campaign: 'Gynoveda',
      status: 'Sent 7 mins ago',
      time: '7 mins ago',
      avatar: 'VJ'
    },
    {
      name: 'Sunil Pal',
      role: 'Helping Fashion & Lifestyle Br...',
      campaign: 'Digi Sidekick',
      status: 'Pending Approval',
      time: '',
      avatar: 'SP'
    },
    {
      name: 'Utkarsh K.',
      role: 'Airbnb Host | Ex-The Skin Stor...',
      campaign: 'The skin story',
      status: 'Do Not Contact',
      time: '',
      avatar: 'UK'
    },
    {
      name: 'Shreya Ramakrishna',
      role: 'Deputy Manager - Founder\'s Off...',
      campaign: 'Pokondl',
      status: 'Followup 10 mins ago',
      time: '10 mins ago',
      avatar: 'SR'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">LinkBird</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium text-sm">PE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
              <User className="w-4 h-4" />
              <span>Kandid</span>
              <span className="text-gray-400">Personal</span>
            </div>

            <nav className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Overview
              </div>
              
              <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg flex items-center space-x-3">
                <BarChart3 className="w-4 h-4" />
                <span className="font-medium">Dashboard</span>
              </div>
              
              <div className="text-gray-700 px-3 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 cursor-pointer">
                <Users className="w-4 h-4" />
                <span>Leads</span>
              </div>
              
              <div className="text-gray-700 px-3 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 cursor-pointer">
                <Target className="w-4 h-4" />
                <span>Campaign</span>
              </div>
              
              <div className="text-gray-700 px-3 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 cursor-pointer">
                <MessageCircle className="w-4 h-4" />
                <span>Messages</span>
                <span className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">24</span>
              </div>
              
              <div className="text-gray-700 px-3 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 cursor-pointer">
                <UserCheck className="w-4 h-4" />
                <span>LinkedIn Accounts</span>
              </div>

              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-3">
                Settings
              </div>
              
              <div className="text-gray-700 px-3 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 cursor-pointer">
                <Settings className="w-4 h-4" />
                <span>Setting & Billing</span>
              </div>

              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-3">
                Admin Panel
              </div>
              
              <div className="text-gray-700 px-3 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 cursor-pointer">
                <Activity className="w-4 h-4" />
                <span>Activity logs</span>
              </div>
              
              <div className="text-gray-700 px-3 py-2 rounded-lg flex items-center space-x-3 hover:bg-gray-100 cursor-pointer">
                <Users className="w-4 h-4" />
                <span>User logs</span>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Campaigns Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Campaigns</h2>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                        <span>{selectedCampaign}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {campaigns.map((campaign, index) => (
                    <div key={index} className="p-4 flex items-center justify-between hover:bg-gray-50">
                      <span className="font-medium text-gray-900">{campaign.name}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                        {campaign.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LinkedIn Accounts Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">LinkedIn Accounts</h2>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-500 mb-4">
                    <span>Account</span>
                    <span>Status</span>
                    <span>Requests</span>
                  </div>
                  
                  <div className="space-y-4">
                    {linkedinAccounts.map((account, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4 items-center">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium text-xs">
                              {account.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{account.name}</div>
                            <div className="text-gray-500 text-xs">{account.email}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-blue-600 font-medium">{account.status}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${account.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 font-medium">{account.requests}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                    <button className="flex items-center space-x-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                      <span>{selectedActivity}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-2 text-xs font-medium text-gray-500 mb-4">
                    <span>Lead</span>
                    <span>Campaign</span>
                    <span>Status</span>
                  </div>
                  
                  <div className="space-y-3">
                    {activities.map((activity, index) => (
                      <div key={index} className="grid grid-cols-3 gap-2 text-xs">
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-gray-600 font-medium text-xs">{activity.avatar}</span>
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium text-gray-900 truncate">{activity.name}</div>
                            <div className="text-gray-500 text-xs truncate">{activity.role}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-gray-900 font-medium truncate">{activity.campaign}</span>
                        </div>
                        
                        <div className="flex flex-col items-start">
                          {activity.status === 'Pending Approval' && (
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3 text-purple-500" />
                              <span className="text-purple-600 font-medium">Pending Approval</span>
                            </div>
                          )}
                          {activity.status.includes('Sent') && (
                            <div className="flex items-center space-x-1">
                              <Send className="w-3 h-3 text-orange-500" />
                              <span className="text-orange-600 font-medium">{activity.status}</span>
                            </div>
                          )}
                          {activity.status === 'Do Not Contact' && (
                            <div className="flex items-center space-x-1">
                              <XCircle className="w-3 h-3 text-gray-500" />
                              <span className="text-gray-600 font-medium">Do Not Contact</span>
                            </div>
                          )}
                          {activity.status.includes('Followup') && (
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-3 h-3 text-blue-500" />
                              <span className="text-blue-600 font-medium">{activity.status}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;