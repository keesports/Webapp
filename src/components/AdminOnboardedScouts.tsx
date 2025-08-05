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
  Eye,
  Filter,
  Download,
  UserCheck
} from 'lucide-react';

interface AdminOnboardedScoutsProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOnboardedPlayers: () => void;
  onNavigateToMessages: () => void;
  onNavigateToStoreManagement: () => void;
  onNavigateToTransactions: () => void;
  onNavigateToSubscriptions: () => void;
  onNavigateToSettings: () => void;
  onNavigateToScoutProfile?: (scoutId: string) => void;
}

const AdminOnboardedScouts: React.FC<AdminOnboardedScoutsProps> = ({ 
  onBack, 
  onNavigateToDashboard,
  onNavigateToOnboardedPlayers,
  onNavigateToMessages,
  onNavigateToStoreManagement,
  onNavigateToTransactions,
  onNavigateToSubscriptions,
  onNavigateToSettings,
  onNavigateToScoutProfile
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSpecialization, setSelectedSpecialization] = React.useState('All');
  const [selectedSubscription, setSelectedSubscription] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('recent');

  const scouts = [
    {
      id: '1',
      name: "John Scout",
      email: "john.scout@email.com",
      organization: "Premier Scouting Agency",
      specialization: "Football & Basketball",
      experience: "8 years",
      location: "Lagos, Nigeria",
      subscriptionStatus: "Professional",
      subscriptionExpiry: "Mar 15, 2025",
      joinDate: "Jan 15, 2024",
      scoutedPlayers: 47,
      savedPlayers: 23,
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: '2',
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      organization: "Elite Sports Scouts",
      specialization: "Basketball",
      experience: "5 years",
      location: "Accra, Ghana",
      subscriptionStatus: "Basic",
      subscriptionExpiry: "Feb 28, 2025",
      joinDate: "Dec 10, 2023",
      scoutedPlayers: 32,
      savedPlayers: 18,
      avatar: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: '3',
      name: "Michael Thompson",
      email: "michael.thompson@email.com",
      organization: "African Talent Scouts",
      specialization: "Football",
      experience: "12 years",
      location: "Nairobi, Kenya",
      subscriptionStatus: "Professional",
      subscriptionExpiry: "Apr 20, 2025",
      joinDate: "Nov 5, 2023",
      scoutedPlayers: 89,
      savedPlayers: 45,
      avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: '4',
      name: "Emma Davis",
      email: "emma.davis@email.com",
      organization: "Continental Sports Network",
      specialization: "Multi-Sport",
      experience: "6 years",
      location: "Cape Town, South Africa",
      subscriptionStatus: "Free",
      subscriptionExpiry: "N/A",
      joinDate: "Oct 22, 2023",
      scoutedPlayers: 15,
      savedPlayers: 8,
      avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const getSubscriptionColor = (status: string) => {
    switch (status) {
      case 'Professional':
        return 'bg-purple-600 text-white';
      case 'Basic':
        return 'bg-blue-600 text-white';
      case 'Free':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const filteredScouts = scouts.filter(scout => {
    const matchesSearch = scout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scout.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === 'All' || scout.specialization.includes(selectedSpecialization);
    const matchesSubscription = selectedSubscription === 'All' || scout.subscriptionStatus === selectedSubscription;
    
    return matchesSearch && matchesSpecialization && matchesSubscription;
  });

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
            <div 
              onClick={onNavigateToDashboard}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <Home size={20} />
              <span>Dashboard</span>
            </div>
            <div 
              onClick={onNavigateToOnboardedPlayers}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <Users size={20} />
              <span>Onboarded Players</span>
            </div>
            <div className="bg-red-600 rounded-lg px-4 py-3 flex items-center space-x-3">
              <Search size={20} />
              <span className="font-medium">Onboarded Scouts</span>
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
          <span className="text-gray-300">Onboarded Scouts</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Onboarded Scouts</h1>
              <p className="text-gray-400">Manage all scouts registered on the platform ({filteredScouts.length} total)</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Download size={16} />
                <span>Export Data</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Scouts</label>
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Specialization</label>
                <select
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                >
                  <option value="All">All Specializations</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Multi-Sport">Multi-Sport</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subscription</label>
                <select
                  value={selectedSubscription}
                  onChange={(e) => setSelectedSubscription(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                >
                  <option value="All">All Plans</option>
                  <option value="Professional">Professional</option>
                  <option value="Basic">Basic</option>
                  <option value="Free">Free</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                >
                  <option value="recent">Recently Joined</option>
                  <option value="name">Name A-Z</option>
                  <option value="scouted">Most Scouted</option>
                  <option value="experience">Most Experience</option>
                </select>
              </div>
            </div>
          </div>

          {/* Scouts Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Scout</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Organization & Specialization</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subscription</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Activity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Join Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredScouts.map((scout) => (
                    <tr key={scout.id} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <img
                            src={scout.avatar}
                            alt={scout.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium text-white">{scout.name}</div>
                            <div className="text-sm text-gray-400">{scout.email}</div>
                            <div className="text-xs text-gray-500">{scout.experience} • {scout.location}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">{scout.organization}</div>
                          <div className="text-sm text-gray-400">{scout.specialization}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSubscriptionColor(scout.subscriptionStatus)}`}>
                            {scout.subscriptionStatus}
                          </span>
                          {scout.subscriptionExpiry !== 'N/A' && (
                            <div className="text-xs text-gray-400 mt-1">Expires: {scout.subscriptionExpiry}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{scout.scoutedPlayers} scouted</div>
                        <div className="text-xs text-gray-400">{scout.savedPlayers} saved players</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {scout.joinDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button 
                          onClick={() => onNavigateToScoutProfile?.(scout.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors flex items-center space-x-1"
                        >
                          <Eye size={14} />
                          <span>View Profile</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOnboardedScouts;