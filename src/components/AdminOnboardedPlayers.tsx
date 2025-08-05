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
  Download
} from 'lucide-react';

interface AdminOnboardedPlayersProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOnboardedScouts: () => void;
  onNavigateToMessages: () => void;
  onNavigateToStoreManagement: () => void;
  onNavigateToTransactions: () => void;
  onNavigateToSubscriptions: () => void;
  onNavigateToSettings: () => void;
  onNavigateToPlayerProfile?: (playerId: string) => void;
}

const AdminOnboardedPlayers: React.FC<AdminOnboardedPlayersProps> = ({ 
  onBack, 
  onNavigateToDashboard,
  onNavigateToOnboardedScouts,
  onNavigateToMessages,
  onNavigateToStoreManagement,
  onNavigateToTransactions,
  onNavigateToSubscriptions,
  onNavigateToSettings,
  onNavigateToPlayerProfile
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSport, setSelectedSport] = React.useState('All');
  const [selectedSubscription, setSelectedSubscription] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('recent');

  const players = [
    {
      id: '1',
      name: "Michael Johnson",
      email: "michael.johnson@email.com",
      sport: "Football",
      position: "Striker",
      age: 22,
      nationality: "Nigeria",
      subscriptionStatus: "Premium",
      subscriptionExpiry: "Mar 15, 2025",
      joinDate: "Jan 15, 2024",
      videosUploaded: 12,
      profileViews: 245,
      avatar: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: '2',
      name: "Sarah Williams",
      email: "sarah.williams@email.com",
      sport: "Basketball",
      position: "Point Guard",
      age: 20,
      nationality: "Ghana",
      subscriptionStatus: "Basic",
      subscriptionExpiry: "Feb 28, 2025",
      joinDate: "Dec 10, 2023",
      videosUploaded: 18,
      profileViews: 189,
      avatar: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: '3',
      name: "David Okafor",
      email: "david.okafor@email.com",
      sport: "Football",
      position: "Midfielder",
      age: 24,
      nationality: "Nigeria",
      subscriptionStatus: "Free",
      subscriptionExpiry: "N/A",
      joinDate: "Nov 5, 2023",
      videosUploaded: 8,
      profileViews: 156,
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: '4',
      name: "Grace Adebayo",
      email: "grace.adebayo@email.com",
      sport: "Football",
      position: "Defender",
      age: 21,
      nationality: "Nigeria",
      subscriptionStatus: "Premium",
      subscriptionExpiry: "Apr 20, 2025",
      joinDate: "Oct 22, 2023",
      videosUploaded: 15,
      profileViews: 203,
      avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: '5',
      name: "James Mensah",
      email: "james.mensah@email.com",
      sport: "Football",
      position: "Forward",
      age: 19,
      nationality: "Ghana",
      subscriptionStatus: "Basic",
      subscriptionExpiry: "Jan 30, 2025",
      joinDate: "Sep 15, 2023",
      videosUploaded: 22,
      profileViews: 312,
      avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const getSubscriptionColor = (status: string) => {
    switch (status) {
      case 'Premium':
        return 'bg-purple-600 text-white';
      case 'Basic':
        return 'bg-blue-600 text-white';
      case 'Free':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === 'All' || player.sport === selectedSport;
    const matchesSubscription = selectedSubscription === 'All' || player.subscriptionStatus === selectedSubscription;
    
    return matchesSearch && matchesSport && matchesSubscription;
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
            <div className="bg-purple-600 rounded-lg px-4 py-3 flex items-center space-x-3">
              <Users size={20} />
              <span className="font-medium">Onboarded Players</span>
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
          <span className="text-gray-300">Onboarded Players</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Onboarded Players</h1>
              <p className="text-gray-400">Manage all players registered on the platform ({filteredPlayers.length} total)</p>
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Players</label>
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sport</label>
                <select
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="All">All Sports</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Tennis">Tennis</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subscription</label>
                <select
                  value={selectedSubscription}
                  onChange={(e) => setSelectedSubscription(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="All">All Plans</option>
                  <option value="Premium">Premium</option>
                  <option value="Basic">Basic</option>
                  <option value="Free">Free</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="recent">Recently Joined</option>
                  <option value="name">Name A-Z</option>
                  <option value="views">Most Viewed</option>
                  <option value="videos">Most Videos</option>
                </select>
              </div>
            </div>
          </div>

          {/* Players Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Player</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Sport & Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Subscription</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Activity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Join Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredPlayers.map((player) => (
                    <tr key={player.id} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <img
                            src={player.avatar}
                            alt={player.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium text-white">{player.name}</div>
                            <div className="text-sm text-gray-400">{player.email}</div>
                            <div className="text-xs text-gray-500">{player.age} years • {player.nationality}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                            {player.sport}
                          </span>
                          <span className="text-sm text-gray-300">{player.position}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSubscriptionColor(player.subscriptionStatus)}`}>
                            {player.subscriptionStatus}
                          </span>
                          {player.subscriptionExpiry !== 'N/A' && (
                            <div className="text-xs text-gray-400 mt-1">Expires: {player.subscriptionExpiry}</div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{player.videosUploaded} videos</div>
                        <div className="text-xs text-gray-400">{player.profileViews} profile views</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {player.joinDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button 
                          onClick={() => onNavigateToPlayerProfile?.(player.id)}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-colors flex items-center space-x-1"
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

export default AdminOnboardedPlayers;