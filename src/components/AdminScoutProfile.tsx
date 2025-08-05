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
  ArrowLeft,
  User,
  Eye,
  Mail,
  Building,
  MapPin,
  Calendar,
  Award,
  Star
} from 'lucide-react';

interface AdminScoutProfileProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOnboardedPlayers: () => void;
  onNavigateToOnboardedScouts: () => void;
  onNavigateToMessages: () => void;
  onNavigateToStoreManagement: () => void;
  onNavigateToTransactions: () => void;
  onNavigateToSubscriptions: () => void;
  onNavigateToSettings: () => void;
  scoutId?: string;
}

const AdminScoutProfile: React.FC<AdminScoutProfileProps> = ({ 
  onBack, 
  onNavigateToDashboard,
  onNavigateToOnboardedPlayers,
  onNavigateToOnboardedScouts,
  onNavigateToMessages,
  onNavigateToStoreManagement,
  onNavigateToTransactions,
  onNavigateToSubscriptions,
  onNavigateToSettings,
  scoutId = '1'
}) => {
  // Mock scout data - in real app this would be fetched based on scoutId
  const scout = {
    id: scoutId,
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
    avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
    coverImage: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bio: "Professional scout with 8 years of experience in talent identification across football and basketball. Specialized in discovering young talent in West Africa.",
    phone: "+234 806 999 8588",
    certifications: [
      "FIFA Licensed Scout",
      "CAF Scouting Certificate",
      "Basketball Talent Identification"
    ]
  };

  const scoutedPlayersList = [
    {
      id: 1,
      name: "Michael Johnson",
      position: "Striker",
      age: 22,
      nationality: "Nigeria",
      club: "Lagos United",
      rating: 8.5,
      sport: "Football",
      avatar: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=100",
      scoutedDate: "2 days ago",
      scoutRating: 8.2,
      notes: "Exceptional pace and finishing ability"
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "Point Guard",
      age: 20,
      nationality: "Ghana",
      club: "Accra Stars",
      rating: 9.2,
      sport: "Basketball",
      avatar: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=100",
      scoutedDate: "1 week ago",
      scoutRating: 9.0,
      notes: "Outstanding court vision and leadership"
    },
    {
      id: 3,
      name: "David Okafor",
      position: "Midfielder",
      age: 24,
      nationality: "Nigeria",
      club: "Kano Pillars",
      rating: 7.8,
      sport: "Football",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100",
      scoutedDate: "5 days ago",
      scoutRating: 8.0,
      notes: "Strong midfielder with excellent passing"
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

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return 'text-green-400';
    if (rating >= 8) return 'text-blue-400';
    if (rating >= 7) return 'text-yellow-400';
    return 'text-orange-400';
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
            <div 
              onClick={onNavigateToOnboardedScouts}
              className="bg-red-600 rounded-lg px-4 py-3 flex items-center space-x-3"
            >
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
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <Home size={20} className="text-gray-400" />
          <span className="text-gray-400">/</span>
          <span className="text-gray-300">Scout Profile</span>
        </div>

        {/* Scout Profile Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Cover Image & Basic Info */}
          <div className="relative h-64 bg-gradient-to-r from-red-600 to-orange-600">
            <img 
              src={scout.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Scout Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end space-x-6">
                <img
                  src={scout.avatar}
                  alt={scout.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h1 className="text-3xl font-bold text-white">{scout.name}</h1>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Scout
                    </span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {scout.experience}
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-white/90">
                    <span>{scout.organization}</span>
                    <span>{scout.specialization}</span>
                    <span>{scout.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => onNavigateToMessages()}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <Mail size={20} />
                    <span>Message Scout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Scout Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Professional Info & Bio */}
              <div className="lg:col-span-2 space-y-6">
                {/* Account Information */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <User size={20} className="text-red-400" />
                    <span>Account Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Email</span>
                        <span className="text-white font-medium">{scout.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Phone</span>
                        <span className="text-white font-medium">{scout.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Join Date</span>
                        <span className="text-white font-medium">{scout.joinDate}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Subscription</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getSubscriptionColor(scout.subscriptionStatus)}`}>
                          {scout.subscriptionStatus}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Expires</span>
                        <span className="text-white font-medium">{scout.subscriptionExpiry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Location</span>
                        <span className="text-white font-medium">{scout.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <Building size={20} className="text-blue-400" />
                    <span>Professional Details</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Organization</span>
                        <span className="text-white font-medium">{scout.organization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Experience</span>
                        <span className="text-white font-medium">{scout.experience}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Specialization</span>
                        <span className="text-white font-medium">{scout.specialization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Players Scouted</span>
                        <span className="text-white font-medium">{scout.scoutedPlayers}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">About Scout</h3>
                  <p className="text-gray-300 leading-relaxed">{scout.bio}</p>
                </div>

                {/* Scouting Activity */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Scouting Activity</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{scout.scoutedPlayers}</div>
                      <div className="text-sm text-gray-400">Players Scouted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{scout.savedPlayers}</div>
                      <div className="text-sm text-gray-400">Saved Players</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">156</div>
                      <div className="text-sm text-gray-400">Matches Watched</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">89%</div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Certifications */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Certifications</h3>
                  <div className="space-y-2">
                    {scout.certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award size={16} className="text-yellow-400" />
                        <span className="text-sm text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scouted Players Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
                <Users size={20} className="text-red-400" />
                <span>Scouted Players ({scoutedPlayersList.length})</span>
              </h3>

              {/* Scouted Players List */}
              <div className="space-y-4">
                {scoutedPlayersList.map((player) => (
                  <div key={player.id} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors">
                    <div className="flex items-center space-x-4">
                      <img
                        src={player.avatar}
                        alt={player.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-white">{player.name}</h4>
                          <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                            {player.sport}
                          </span>
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                            {player.position}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                          <div>
                            <div className="text-xs text-gray-400">Age</div>
                            <div className="text-sm font-medium text-white">{player.age} years</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Nationality</div>
                            <div className="text-sm font-medium text-white">{player.nationality}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Club</div>
                            <div className="text-sm font-medium text-white">{player.club}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Player Rating</div>
                            <div className={`text-lg font-bold ${getRatingColor(player.rating)}`}>
                              {player.rating}
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <div className="text-xs text-gray-400 mb-1">Scout Rating & Notes</div>
                          <div className="flex items-center space-x-4">
                            <div className={`text-sm font-bold ${getRatingColor(player.scoutRating)}`}>
                              Scout Rating: {player.scoutRating}
                            </div>
                            <div className="text-sm text-gray-300">{player.notes}</div>
                          </div>
                        </div>

                        <div className="text-xs text-gray-400">
                          Scouted {player.scoutedDate}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                          <Eye size={16} />
                          <span>View Player</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScoutProfile;