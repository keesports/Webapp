import React from 'react';
import { 
  Home, 
  Search, 
  Users, 
  MessageSquare, 
  Video, 
  Settings, 
  LogOut, 
  ChevronDown,
  ChevronRight,
  Eye,
  Heart,
  Calendar,
  Bell,
  TrendingUp,
  UserCheck,
  Bookmark
} from 'lucide-react';

interface ScoutDashboardProps {
  onBack: () => void;
  onNavigateToFindPlayer: () => void;
  onNavigateToPlayersManagement: () => void;
  onNavigateToMessages: () => void;
  onNavigateToMatchStreams: () => void;
  onNavigateToSettings: () => void;
}

const ScoutDashboard: React.FC<ScoutDashboardProps> = ({ 
  onBack, 
  onNavigateToFindPlayer, 
  onNavigateToPlayersManagement,
  onNavigateToMessages,
  onNavigateToMatchStreams,
  onNavigateToSettings
}) => {
  const [isPlayersManagementOpen, setIsPlayersManagementOpen] = React.useState(true);

  const stats = [
    {
      title: "Scouted Players",
      value: "247",
      change: "+12%",
      icon: <Eye size={24} className="text-blue-400" />,
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Saved Players",
      value: "89",
      change: "+8%",
      icon: <Heart size={24} className="text-red-400" />,
      color: "bg-red-500/10 border-red-500/20"
    },
    {
      title: "Active Searches",
      value: "15",
      change: "+3",
      icon: <Search size={24} className="text-green-400" />,
      color: "bg-green-500/10 border-green-500/20"
    },
    {
      title: "Matches Watched",
      value: "156",
      change: "+24%",
      icon: <Video size={24} className="text-purple-400" />,
      color: "bg-purple-500/10 border-purple-500/20"
    }
  ];

  const scoutedPlayers = [
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
      lastScouted: "2 days ago"
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
      lastScouted: "1 week ago"
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
      lastScouted: "3 days ago"
    },
    {
      id: 4,
      name: "Grace Adebayo",
      position: "Defender",
      age: 21,
      nationality: "Nigeria",
      club: "Rivers Angels",
      rating: 8.1,
      sport: "Football",
      avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100",
      lastScouted: "5 days ago"
    }
  ];

  const upcomingMatches = [
    {
      id: 1,
      homeTeam: "Lagos United",
      awayTeam: "Kano Pillars",
      date: "Feb 18, 2025",
      time: "3:00 PM",
      league: "Nigerian Premier League",
      sport: "Football"
    },
    {
      id: 2,
      homeTeam: "Accra Stars",
      awayTeam: "Kumasi Kings",
      date: "Feb 20, 2025",
      time: "7:00 PM",
      league: "Ghana Basketball League",
      sport: "Basketball"
    },
    {
      id: 3,
      homeTeam: "Rivers Angels",
      awayTeam: "Delta Queens",
      date: "Feb 22, 2025",
      time: "4:00 PM",
      league: "Women's Premier League",
      sport: "Football"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New message from Michael Johnson",
      message: "Thank you for showing interest in my profile...",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      type: "match",
      title: "Match starting soon",
      message: "Lagos United vs Kano Pillars starts in 30 minutes",
      time: "30 minutes ago",
      unread: true
    },
    {
      id: 3,
      type: "player",
      title: "Player profile updated",
      message: "Sarah Williams updated her performance stats",
      time: "1 day ago",
      unread: false
    },
    {
      id: 4,
      type: "system",
      title: "Weekly scouting report ready",
      message: "Your weekly scouting summary is now available",
      time: "2 days ago",
      unread: false
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <MessageSquare size={16} className="text-blue-400" />;
      case 'match':
        return <Video size={16} className="text-green-400" />;
      case 'player':
        return <Users size={16} className="text-purple-400" />;
      default:
        return <Bell size={16} className="text-gray-400" />;
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
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          {/* Main Section */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">MAIN</div>
            <div className="space-y-2">
              <div className="bg-purple-600 rounded-lg px-4 py-3 flex items-center space-x-3">
                <Home size={20} />
                <span className="font-medium">Dashboard</span>
              </div>
              <div 
                onClick={onNavigateToFindPlayer}
                className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
              >
                <Search size={20} />
                <span>Find Player</span>
              </div>
              <div className="bg-blue-600 rounded-lg px-4 py-3">
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Users size={20} />
                    <span className="font-medium">Players Management</span>
                  </div>
                  <ChevronDown size={16} className="rotate-180" />
                </div>
                <div className="mt-2 ml-8 space-y-1">
                  <div 
                    onClick={onNavigateToPlayersManagement}
                    className="text-gray-300 hover:text-white hover:bg-gray-700 rounded px-3 py-2 cursor-pointer transition-colors"
                  >
                    Saved Players
                  </div>
                  <div 
                    onClick={onNavigateToPlayersManagement}
                    className="text-gray-300 hover:text-white hover:bg-gray-700 rounded px-3 py-2 cursor-pointer transition-colors"
                  >
                    Scouted Players
                  </div>
                </div>
              </div>
              <div 
                onClick={onNavigateToMessages}
                className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
              >
                <MessageSquare size={20} />
                <span>Messages</span>
              </div>
              <div className="bg-blue-600 rounded-lg px-4 py-3">
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Video size={20} />
                    <span className="font-medium">Match Streams</span>
                  </div>
                  <ChevronDown size={16} className="rotate-180" />
                </div>
                <div className="mt-2 ml-8 space-y-1">
                  <div 
                    onClick={onNavigateToMatchStreams}
                    className="text-gray-300 hover:text-white hover:bg-gray-700 rounded px-3 py-2 cursor-pointer transition-colors"
                  >
                    Live Stream
                  </div>
                  <div 
                    onClick={onNavigateToMatchStreams}
                    className="text-gray-300 hover:text-white hover:bg-gray-700 rounded px-3 py-2 cursor-pointer transition-colors"
                  >
                    Previous Streams
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Others Section */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">OTHERS</div>
            <div className="space-y-2">
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
          </div>
        </nav>

        {/* User Profile at Bottom */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">JS</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">John Scout</div>
              <div className="text-xs text-gray-400">john@scout.com</div>
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
          <div className="bg-purple-600 px-3 py-1 rounded text-sm font-medium">Overview</div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, John</h1>
              <p className="text-gray-400">Here's what's happening with your scouting activities</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors">
                New Search
              </button>
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

          {/* First Row - Recently Scouted Players and Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Recently Scouted Players */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Recently Scouted Players</h2>
                  <button className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {scoutedPlayers.map((player) => (
                    <div key={player.id} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
                      <img
                        src={player.avatar}
                        alt={player.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-white">{player.name}</h3>
                          <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                            {player.sport}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400 mb-1">
                          {player.position} • {player.age} years • {player.nationality}
                        </div>
                        <div className="text-xs text-gray-500">{player.club} • {player.lastScouted}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getRatingColor(player.rating)}`}>
                          {player.rating}
                        </div>
                        <div className="text-xs text-gray-400">Rating</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Notifications */}
            <div>
              {/* Notifications */}
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Bell size={20} className="text-yellow-400" />
                  <h2 className="text-lg font-semibold">Notifications</h2>
                </div>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-3 rounded-lg ${notification.unread ? 'bg-gray-700' : 'bg-gray-750'}`}>
                      <div className="flex items-start space-x-3">
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                            {notification.unread && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
          </div>

          {/* Second Row - Upcoming Matches and Live Matches */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Matches */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Calendar size={20} className="text-blue-400" />
                <h2 className="text-lg font-semibold">Upcoming Matches</h2>
              </div>
              <div className="space-y-4">
                {upcomingMatches.map((match) => (
                  <div key={match.id} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded font-medium">
                        {match.sport}
                      </span>
                      <span className="text-xs text-gray-400">{match.date}</span>
                    </div>
                    
                    {/* Team vs Team Layout */}
                    <div className="flex items-center justify-center mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-blue-600 rounded-full mb-1 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {match.homeTeam.split(' ')[0].charAt(0)}
                            </span>
                          </div>
                          <div className="text-xs text-white font-medium">{match.homeTeam}</div>
                        </div>
                        
                        <div className="text-gray-400 font-bold text-lg px-3">vs</div>
                        
                        <div className="text-center">
                          <div className="w-8 h-8 bg-purple-600 rounded-full mb-1 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">
                              {match.awayTeam.split(' ')[0].charAt(0)}
                            </span>
                          </div>
                          <div className="text-xs text-white font-medium">{match.awayTeam}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{match.league}</span>
                      <span className="text-xs text-purple-400 font-medium">{match.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Matches */}
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <Video size={20} className="text-red-400" />
                </div>
                <h2 className="text-lg font-semibold">Live Matches</h2>
              </div>
              
              {/* Live Match Card */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                {/* Video Player Area */}
                <div className="relative h-48 bg-black">
                  <img 
                    src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Live Match"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Live Indicator */}
                  <div className="absolute top-3 left-3 flex items-center space-x-2 bg-red-600 px-2 py-1 rounded">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-xs font-bold">LIVE</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <div className="w-full bg-gray-600 rounded-full h-1 mb-2">
                      <div className="bg-red-600 h-1 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <div className="flex items-center justify-between text-white text-xs">
                      <span>2:26 / 8:04</span>
                      <span>1.2K viewers</span>
                    </div>
                  </div>
                </div>
                
                {/* Match Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded font-medium">
                      Football
                    </span>
                    <span className="text-xs text-gray-400">Premier League</span>
                  </div>
                  
                  {/* Teams Layout */}
                  <div className="flex items-center justify-center mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full mb-1 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">KW</span>
                        </div>
                        <div className="text-xs text-white font-medium">KEE Wolves</div>
                      </div>
                      
                      <div className="text-gray-400 font-bold text-lg px-3">vs</div>
                      
                      <div className="text-center">
                        <div className="w-8 h-8 bg-yellow-600 rounded-full mb-1 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">KL</span>
                        </div>
                        <div className="text-xs text-white font-medium">KEE Lions</div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors text-sm font-medium">
                    Watch Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutDashboard;