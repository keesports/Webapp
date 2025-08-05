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
  Play,
  Calendar,
  Video,
  Award,
  TrendingUp,
  Mail
} from 'lucide-react';

interface AdminPlayerProfileProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOnboardedPlayers: () => void;
  onNavigateToOnboardedScouts: () => void;
  onNavigateToMessages: () => void;
  onNavigateToStoreManagement: () => void;
  onNavigateToTransactions: () => void;
  onNavigateToSubscriptions: () => void;
  onNavigateToSettings: () => void;
  playerId?: string;
}

const AdminPlayerProfile: React.FC<AdminPlayerProfileProps> = ({ 
  onBack, 
  onNavigateToDashboard,
  onNavigateToOnboardedPlayers,
  onNavigateToOnboardedScouts,
  onNavigateToMessages,
  onNavigateToStoreManagement,
  onNavigateToTransactions,
  onNavigateToSubscriptions,
  onNavigateToSettings,
  playerId = '1'
}) => {
  const [activeVideoTab, setActiveVideoTab] = React.useState<'highlights' | 'training' | 'matches'>('highlights');

  // Mock player data - in real app this would be fetched based on playerId
  const player = {
    id: playerId,
    name: "Michael Johnson",
    email: "michael.johnson@email.com",
    age: 22,
    nationality: "Nigeria",
    position: "Striker",
    sport: "Football",
    club: "Lagos United",
    rating: 8.5,
    height: "185 cm",
    weight: "78 kg",
    dominantFoot: "Right",
    avatar: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=300",
    coverImage: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bio: "Passionate striker with exceptional pace and finishing ability. Looking to take my career to the next level with a professional club.",
    subscriptionStatus: "Premium",
    subscriptionExpiry: "Mar 15, 2025",
    joinDate: "Jan 15, 2024",
    videosUploaded: 12,
    profileViews: 245,
    stats: {
      pace: 91,
      shooting: 88,
      passing: 75,
      defending: 45,
      dribbling: 85,
      physical: 82
    },
    achievements: [
      "Top Scorer 2024 - 25 goals",
      "Player of the Month (3x)",
      "Best Young Player 2023",
      "League Champion 2023"
    ],
    careerStats: {
      matchesPlayed: 45,
      goals: 32,
      assists: 12,
      yellowCards: 3,
      redCards: 0
    },
    videos: {
      highlights: [
        {
          id: 1,
          title: "Best Goals Compilation 2024",
          duration: "3:45",
          views: "2.1K",
          date: "2 days ago",
          thumbnail: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400"
        },
        {
          id: 2,
          title: "Hat-trick vs Kano Pillars",
          duration: "2:30",
          views: "1.8K",
          date: "1 week ago",
          thumbnail: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ],
      training: [
        {
          id: 3,
          title: "Speed Training Session",
          duration: "5:20",
          views: "890",
          date: "3 days ago",
          thumbnail: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ],
      matches: [
        {
          id: 4,
          title: "Full Match vs Rivers United",
          duration: "90:00",
          views: "5.4K",
          date: "1 week ago",
          thumbnail: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=400"
        }
      ]
    }
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return 'text-green-400';
    if (rating >= 8) return 'text-blue-400';
    if (rating >= 7) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const getStatColor = (value: number) => {
    if (value >= 85) return 'bg-green-500';
    if (value >= 70) return 'bg-blue-500';
    if (value >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

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

  const currentVideos = player.videos[activeVideoTab];

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
              className="bg-red-600 rounded-lg px-4 py-3 flex items-center space-x-3"
            >
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
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <Home size={20} className="text-gray-400" />
          <span className="text-gray-400">/</span>
          <span className="text-gray-300">Player Profile</span>
        </div>

        {/* Player Profile Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Cover Image & Basic Info */}
          <div className="relative h-64 bg-gradient-to-r from-red-600 to-orange-600">
            <img 
              src={player.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Player Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end space-x-6">
                <img
                  src={player.avatar}
                  alt={player.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h1 className="text-3xl font-bold text-white">{player.name}</h1>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {player.sport}
                    </span>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {player.position}
                    </span>
                  </div>
                  <div className="flex items-center space-x-6 text-white/90">
                    <span>{player.age} years old</span>
                    <span>{player.nationality}</span>
                    <span>{player.club}</span>
                    <div className={`text-2xl font-bold ${getRatingColor(player.rating)}`}>
                      {player.rating} ⭐
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => onNavigateToMessages()}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <Mail size={20} />
                    <span>Message Player</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Player Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Bio & Stats */}
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
                        <span className="text-white font-medium">{player.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Join Date</span>
                        <span className="text-white font-medium">{player.joinDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Videos Uploaded</span>
                        <span className="text-white font-medium">{player.videosUploaded}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Profile Views</span>
                        <span className="text-white font-medium">{player.profileViews}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Subscription</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getSubscriptionColor(player.subscriptionStatus)}`}>
                          {player.subscriptionStatus}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Expires</span>
                        <span className="text-white font-medium">{player.subscriptionExpiry}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">About Player</h3>
                  <p className="text-gray-300 leading-relaxed">{player.bio}</p>
                </div>

                {/* Player Stats */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <TrendingUp size={20} className="text-green-400" />
                    <span>Player Stats</span>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {Object.entries(player.stats).map(([stat, value]) => (
                      <div key={stat} className="text-center">
                        <div className={`w-16 h-16 rounded-full ${getStatColor(value)} flex items-center justify-center mx-auto mb-2`}>
                          <span className="text-lg font-bold text-white">{value}</span>
                        </div>
                        <div className="text-sm text-gray-400 capitalize">{stat}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Stats */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <Award size={20} className="text-yellow-400" />
                    <span>Career Statistics</span>
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{player.careerStats.matchesPlayed}</div>
                      <div className="text-sm text-gray-400">Matches</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{player.careerStats.goals}</div>
                      <div className="text-sm text-gray-400">Goals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{player.careerStats.assists}</div>
                      <div className="text-sm text-gray-400">Assists</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">{player.careerStats.yellowCards}</div>
                      <div className="text-sm text-gray-400">Yellow Cards</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">{player.careerStats.redCards}</div>
                      <div className="text-sm text-gray-400">Red Cards</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Physical Details */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Physical Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Height</span>
                      <span className="text-white font-medium">{player.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Weight</span>
                      <span className="text-white font-medium">{player.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Dominant Foot</span>
                      <span className="text-white font-medium">{player.dominantFoot}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Achievements</h3>
                  <div className="space-y-2">
                    {player.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award size={16} className="text-yellow-400" />
                        <span className="text-sm text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Videos Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold flex items-center space-x-2">
                  <Video size={20} className="text-red-400" />
                  <span>Player Videos</span>
                </h3>
                
                {/* Video Tabs */}
                <div className="flex space-x-1 bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setActiveVideoTab('highlights')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeVideoTab === 'highlights'
                        ? 'bg-red-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Highlights ({player.videos.highlights.length})
                  </button>
                  <button
                    onClick={() => setActiveVideoTab('training')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeVideoTab === 'training'
                        ? 'bg-red-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Training ({player.videos.training.length})
                  </button>
                  <button
                    onClick={() => setActiveVideoTab('matches')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeVideoTab === 'matches'
                        ? 'bg-red-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Matches ({player.videos.matches.length})
                  </button>
                </div>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentVideos.map((video) => (
                  <div key={video.id} className="bg-gray-700 rounded-lg overflow-hidden hover:bg-gray-650 transition-colors cursor-pointer">
                    <div className="relative">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play size={20} className="text-white ml-1" />
                        </button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-white mb-2 line-clamp-2">{video.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{video.views} views</span>
                        <span>{video.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {currentVideos.length === 0 && (
                <div className="text-center py-8">
                  <Video size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">No {activeVideoTab} videos available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPlayerProfile;