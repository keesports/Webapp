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
  Heart,
  Eye,
  Star,
  Calendar,
  Filter,
  Download,
  Trash2
} from 'lucide-react';

interface ScoutPlayersManagementProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToFindPlayer: () => void;
  onNavigateToMessages: () => void;
  onNavigateToMatchStreams: () => void;
  onNavigateToSettings: () => void;
  onNavigateToPlayerProfile?: (playerId: string) => void;
}

const ScoutPlayersManagement: React.FC<ScoutPlayersManagementProps> = ({ 
  onBack, 
  onNavigateToDashboard, 
  onNavigateToFindPlayer,
  onNavigateToMessages,
  onNavigateToMatchStreams,
  onNavigateToSettings,
  onNavigateToPlayerProfile
}) => {
  const [activeTab, setActiveTab] = React.useState<'saved' | 'scouted'>('saved');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSport, setSelectedSport] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('recent');

  const savedPlayers = [
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
      savedDate: "2 days ago",
      videos: 12
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
      savedDate: "1 week ago",
      videos: 18
    },
    {
      id: 3,
      name: "Grace Adebayo",
      position: "Defender",
      age: 21,
      nationality: "Nigeria",
      club: "Rivers Angels",
      rating: 8.1,
      sport: "Football",
      avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100",
      savedDate: "3 days ago",
      videos: 15
    }
  ];

  const scoutedPlayers = [
    {
      id: 1,
      name: "David Okafor",
      position: "Midfielder",
      age: 24,
      nationality: "Nigeria",
      club: "Kano Pillars",
      rating: 7.8,
      sport: "Football",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100",
      scoutedDate: "5 days ago",
      scoutRating: 8.2,
      notes: "Strong midfielder with excellent passing ability"
    },
    {
      id: 2,
      name: "James Mensah",
      position: "Forward",
      age: 19,
      nationality: "Ghana",
      club: "Kumasi Asante",
      rating: 8.7,
      sport: "Football",
      avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100",
      scoutedDate: "1 week ago",
      scoutRating: 9.0,
      notes: "Exceptional pace and finishing ability"
    },
    {
      id: 3,
      name: "Amina Hassan",
      position: "Center",
      age: 23,
      nationality: "Kenya",
      club: "Nairobi Hoops",
      rating: 8.3,
      sport: "Basketball",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100",
      scoutedDate: "2 weeks ago",
      scoutRating: 8.5,
      notes: "Dominant in the paint with great defensive skills"
    }
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 9) return 'text-green-400';
    if (rating >= 8) return 'text-blue-400';
    if (rating >= 7) return 'text-yellow-400';
    return 'text-orange-400';
  };

  const currentPlayers = activeTab === 'saved' ? savedPlayers : scoutedPlayers;

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
              <div 
                onClick={onNavigateToDashboard}
                className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
              >
                <Home size={20} />
                <span>Dashboard</span>
              </div>
              <div 
                onClick={onNavigateToFindPlayer}
                className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
              >
                <Search size={20} />
                <span>Find Player</span>
              </div>
              <div className="bg-purple-600 rounded-lg px-4 py-3">
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Users size={20} />
                    <span className="font-medium">Players Management</span>
                  </div>
                  <ChevronDown size={16} className="rotate-180" />
                </div>
                <div className="mt-2 ml-8 space-y-1">
                  <div 
                    onClick={() => setActiveTab('saved')}
                    className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                      activeTab === 'saved' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    Saved Players
                  </div>
                  <div 
                    onClick={() => setActiveTab('scouted')}
                    className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                      activeTab === 'scouted' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
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
              <div className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <Video size={20} />
                  <span>Match Streams</span>
                </div>
                <ChevronDown size={16} className="rotate-180" />
              </div>
              <div className="ml-8 space-y-1">
                <div 
                  onClick={onNavigateToMatchStreams}
                  className="text-gray-400 hover:text-white hover:bg-gray-700 rounded px-3 py-2 cursor-pointer transition-colors"
                >
                  Live Stream
                </div>
                <div 
                  onClick={onNavigateToMatchStreams}
                  className="text-gray-400 hover:text-white hover:bg-gray-700 rounded px-3 py-2 cursor-pointer transition-colors"
                >
                  Previous Streams
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
          <span className="text-gray-300">Players Management</span>
          <div className="bg-purple-600 px-3 py-1 rounded text-sm font-medium">
            {activeTab === 'saved' ? 'Saved Players' : 'Scouted Players'}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">
                {activeTab === 'saved' ? 'Saved Players' : 'Scouted Players'}
              </h1>
              <p className="text-gray-400">
                {activeTab === 'saved' 
                  ? 'Players you have saved for future reference'
                  : 'Players you have scouted and evaluated'
                }
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Download size={16} />
                <span>Export List</span>
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
                    placeholder="Search by name..."
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="recent">Recently Added</option>
                  <option value="rating">Highest Rating</option>
                  <option value="name">Name A-Z</option>
                  <option value="age">Age</option>
                </select>
              </div>
            </div>
          </div>

          {/* Players List */}
          <div className="space-y-4">
            {currentPlayers.map((player) => (
              <div key={player.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-center space-x-6">
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{player.name}</h3>
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
                        <div className="text-xs text-gray-400">Rating</div>
                        <div className={`text-lg font-bold ${getRatingColor(player.rating)}`}>
                          {player.rating}
                        </div>
                      </div>
                    </div>

                    {activeTab === 'scouted' && 'scoutRating' in player && (
                      <div className="mb-3">
                        <div className="text-xs text-gray-400 mb-1">Scout Rating & Notes</div>
                        <div className="flex items-center space-x-4">
                          <div className={`text-sm font-bold ${getRatingColor(player.scoutRating)}`}>
                            Scout Rating: {player.scoutRating}
                          </div>
                          <div className="text-sm text-gray-300">{player.notes}</div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400">
                        {activeTab === 'saved' 
                          ? `Saved ${player.savedDate}` 
                          : `Scouted ${(player as any).scoutedDate}`
                        }
                        {activeTab === 'saved' && ` • ${player.videos} videos`}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => onNavigateToPlayerProfile?.(player.id.toString())}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                        >
                          <Eye size={16} />
                          <span>View Profile</span>
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                          <MessageSquare size={16} />
                          <span>Message</span>
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutPlayersManagement;