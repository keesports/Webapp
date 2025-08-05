import React from 'react';
import { 
  Home, 
  Users, 
  Search, 
  MessageSquare, 
  Store, 
  CreditCard, 
  DollarSign,
  Settings, 
  LogOut, 
  ChevronRight,
  TrendingUp,
  UserCheck,
  Eye,
  Calendar,
  BarChart3,
  PieChart
} from 'lucide-react';

interface AdminDashboardProps {
  onBack: () => void;
  onNavigateToOnboardedPlayers: () => void;
  onNavigateToOnboardedScouts: () => void;
  onNavigateToMessages: () => void;
  onNavigateToStoreManagement: () => void;
  onNavigateToTransactions: () => void;
  onNavigateToSubscriptions: () => void;
  onNavigateToSettings: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  onBack, 
  onNavigateToOnboardedPlayers,
  onNavigateToOnboardedScouts,
  onNavigateToMessages,
  onNavigateToStoreManagement,
  onNavigateToTransactions,
  onNavigateToSubscriptions,
  onNavigateToSettings
}) => {
  const [selectedPeriod, setSelectedPeriod] = React.useState<'month' | 'year'>('month');

  const stats = [
    {
      title: "Total Players",
      value: "2,847",
      change: "+12%",
      icon: <Users size={24} className="text-blue-400" />,
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Total Scouts",
      value: "156",
      change: "+8%",
      icon: <Search size={24} className="text-green-400" />,
      color: "bg-green-500/10 border-green-500/20"
    },
    {
      title: "Players Scouted",
      value: "1,234",
      change: "+24%",
      icon: <UserCheck size={24} className="text-purple-400" />,
      color: "bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Total Subscribers",
      value: "892",
      change: "+15%",
      icon: <DollarSign size={24} className="text-yellow-400" />,
      color: "bg-yellow-500/10 border-yellow-500/20"
    }
  ];

  const monthlyUserData = [
    { month: 'Jan', players: 120, scouts: 8 },
    { month: 'Feb', players: 180, scouts: 12 },
    { month: 'Mar', players: 240, scouts: 15 },
    { month: 'Apr', players: 320, scouts: 18 },
    { month: 'May', players: 280, scouts: 22 },
    { month: 'Jun', players: 380, scouts: 25 }
  ];

  const salesData = [
    { month: 'Jan', amount: 12500 },
    { month: 'Feb', amount: 18200 },
    { month: 'Mar', amount: 24800 },
    { month: 'Apr', amount: 32100 },
    { month: 'May', amount: 28900 },
    { month: 'Jun', amount: 38500 }
  ];

  const notifications = [
    {
      id: 1,
      type: "payment",
      title: "New subscription payment",
      message: "Michael Johnson upgraded to Premium Plan",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      type: "user",
      title: "New scout registration",
      message: "Sarah Williams registered as a professional scout",
      time: "4 hours ago",
      unread: true
    },
    {
      id: 3,
      type: "order",
      title: "New store order",
      message: "Order #1234 placed for K2S Training Jersey",
      time: "6 hours ago",
      unread: false
    },
    {
      id: 4,
      type: "system",
      title: "System maintenance completed",
      message: "Scheduled maintenance completed successfully",
      time: "1 day ago",
      unread: false
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return <DollarSign size={16} className="text-green-400" />;
      case 'user':
        return <Users size={16} className="text-blue-400" />;
      case 'order':
        return <Store size={16} className="text-purple-400" />;
      default:
        return <Settings size={16} className="text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <img src="/keelogo.png" alt="KEE" className="h-12" />
          <div className="text-xs text-gray-400 mt-2">Admin Panel</div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <div className="space-y-2">
            <div className="bg-purple-600 rounded-lg px-4 py-3 flex items-center space-x-3">
              <Home size={20} />
              <span className="font-medium">Dashboard</span>
            </div>
            <div 
              onClick={onNavigateToOnboardedPlayers}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <Users size={20} />
              <span>Onboarded Players</span>
            </div>
            <div 
              onClick={onNavigateToOnboardedScouts}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <Search size={20} />
              <span>Onboarded Scouts</span>
            </div>
            <div 
              onClick={onNavigateToMessages}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <MessageSquare size={20} />
              <span>Messages</span>
            </div>
            <div 
              onClick={onNavigateToStoreManagement}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <Store size={20} />
              <span>Store Management</span>
            </div>
            <div 
              onClick={onNavigateToTransactions}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <CreditCard size={20} />
              <span>Transactions History</span>
            </div>
            <div 
              onClick={onNavigateToSubscriptions}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <DollarSign size={20} />
              <span>Subscriptions</span>
            </div>
            <div 
              onClick={onNavigateToSettings}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <Settings size={20} />
              <span>Settings</span>
            </div>
            <div className="text-red-400 hover:text-red-300 hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors">
              <LogOut size={20} />
              <span>Logout</span>
            </div>
          </div>
        </nav>

        {/* Admin Profile at Bottom */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">KA</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">KEE Admin</div>
              <div className="text-xs text-gray-400">admin@kee.com</div>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="bg-gray-800 px-6 py-4 flex items-center space-x-4">
          <Home size={20} className="text-gray-400" />
          <span className="text-gray-400">/</span>
          <span className="text-gray-300">Dashboard</span>
          <div className="bg-red-600 px-3 py-1 rounded text-sm font-medium">Admin Overview</div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-400">Monitor and manage the KEE Sports platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value as 'month' | 'year')}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              >
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.color} border rounded-lg p-6`}>
                <div className="flex items-center justify-between mb-4">
                  {stat.icon}
                  <span className="text-sm text-green-400 font-medium">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.title}</div>
              </div>
            ))}
          </div>

          {/* Charts and Notifications Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* User Growth Chart */}
            <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center space-x-2">
                  <BarChart3 size={20} className="text-blue-400" />
                  <span>User Growth ({selectedPeriod})</span>
                </h2>
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {monthlyUserData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                    <div className="flex space-x-1 items-end">
                      <div 
                        className="bg-blue-500 rounded-t"
                        style={{ height: `${(data.players / 400) * 200}px`, width: '20px' }}
                      ></div>
                      <div 
                        className="bg-green-500 rounded-t"
                        style={{ height: `${(data.scouts / 30) * 200}px`, width: '20px' }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400">{data.month}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-400">Players</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-400">Scouts</span>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-6 flex items-center space-x-2">
                <MessageSquare size={20} className="text-yellow-400" />
                <span>Recent Notifications</span>
              </h2>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-3 rounded-lg ${notification.unread ? 'bg-gray-700' : 'bg-gray-750'}`}>
                    <div className="flex items-start space-x-3">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mb-1">{notification.message}</p>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sales Chart */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center space-x-2">
                <TrendingUp size={20} className="text-green-400" />
                <span>Sales Overview ({selectedPeriod})</span>
              </h2>
            </div>
            <div className="h-64 flex items-end justify-between space-x-4">
              {salesData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                  <div 
                    className="bg-gradient-to-t from-purple-600 to-purple-400 rounded-t w-full"
                    style={{ height: `${(data.amount / 40000) * 200}px` }}
                  ></div>
                  <div className="text-xs text-gray-400">{data.month}</div>
                  <div className="text-xs text-white font-medium">${(data.amount / 1000).toFixed(1)}k</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;