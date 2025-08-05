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
  Calendar,
  Play,
  Pause,
  Volume2,
  Maximize,
  Filter
} from 'lucide-react';

interface ScoutMatchStreamsProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToFindPlayer: () => void;
  onNavigateToPlayersManagement: () => void;
  onNavigateToMessages: () => void;
  onNavigateToSettings: () => void;
}

const ScoutMatchStreams: React.FC<ScoutMatchStreamsProps> = ({ 
  onBack, 
  onNavigateToDashboard, 
  onNavigateToFindPlayer,
  onNavigateToPlayersManagement,
  onNavigateToMessages,
  onNavigateToSettings
}) => {
  const [activeTab, setActiveTab] = React.useState<'live' | 'previous'>('live');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedClub, setSelectedClub] = React.useState('All');
  const [isPlaying, setIsPlaying] = React.useState(true);

  const liveMatches = [
    {
      id: 1,
      title: "KEE Wolves vs KEE Lions",
      league: "Premier League",
      status: "LIVE",
      viewers: "2.3K",
      duration: "2:26 / 8:04",
      thumbnail: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      homeTeam: "KEE Wolves",
      awayTeam: "KEE Lions",
      sport: "Football"
    }
  ];

  const pastMatches = [
    {
      id: 1,
      title: "Manchester United vs Liverpool",
      league: "Premier League",
      date: "March 15, 2025",
      duration: "90 min",
      score: "2-1",
      sport: "Football",
      thumbnail: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400",
      homeTeam: "Manchester United",
      awayTeam: "Liverpool"
    },
    {
      id: 2,
      title: "Lakers vs Warriors",
      league: "NBA", 
      date: "March 12, 2025",
      duration: "48 min",
      score: "108-95",
      sport: "Basketball",
      thumbnail: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400",
      homeTeam: "Lakers",
      awayTeam: "Warriors"
    },
    {
      id: 3,
      title: "Chelsea vs Arsenal",
      league: "Premier League",
      date: "March 10, 2025", 
      duration: "90 min",
      score: "1-3",
      sport: "Football",
      thumbnail: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400",
      homeTeam: "Chelsea",
      awayTeam: "Arsenal"
    }
  ];

  const clubs = ['All', 'Manchester United', 'Liverpool', 'Chelsea', 'Arsenal', 'KEE Wolves', 'KEE Lions', 'Lakers', 'Warriors'];

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
              <div className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center justify-between cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <Users size={20} />
                  <span>Players Management</span>
                </div>
                <ChevronDown size={16} className="rotate-180" />
              </div>
              <div className="ml-8 space-y-1">
                <div 
                  onClick={onNavigateToPlayersManagement}
                  className="text-gray-400 hover:text-white hover:bg-gray-700 rounded px-3 py-2 cursor-pointer transition-colors"
                >
                  Saved Players
                </div>
                <div 
                  onClick={onNavigateToPlayersManagement}
                  className="text-gray-400 hover:text-white hover:bg-gray-700 rounded px-3 py-2 cursor-pointer transition-colors"
                >
                  Scouted Players
                </div>
              </div>
              <div 
                onClick={onNavigateToMessages}
                className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
              >
                <MessageSquare size={20} />
                <span>Messages</span>
              </div>
              <div className="bg-purple-600 rounded-lg px-4 py-3">
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Video size={20} />
                    <span className="font-medium">Match Streams</span>
                  </div>
                  <ChevronDown size={16} className="rotate-180" />
                </div>
                <div className="mt-2 ml-8 space-y-1">
                  <div 
                    onClick={() => setActiveTab('live')}
                    className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                      activeTab === 'live' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    Live Stream
                  </div>
                  <div 
                    onClick={() => setActiveTab('previous')}
                    className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                      activeTab === 'previous' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
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
          <span className="text-gray-300">Match Streams</span>
          <div className="bg-purple-600 px-3 py-1 rounded text-sm font-medium">
            {activeTab === 'live' ? 'Live Streams' : 'Previous Streams'}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {activeTab === 'live' ? (
            // Live Stream View
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Live Matches</h1>
                <p className="text-gray-400">Watch live matches and scout players in real-time</p>
              </div>

              {/* Live Stream Player */}
              <div className="bg-black rounded-lg overflow-hidden mb-6" style={{ height: '500px' }}>
                <div className="relative h-full">
                  <img 
                    src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Live Match"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Live Indicator */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-600 px-3 py-1 rounded">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-bold">LIVE</span>
                  </div>
                  
                  {/* Viewer Count */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-white text-sm">
                    2.3K viewers
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full bg-gray-600 rounded-full h-1">
                        <div className="bg-red-600 h-1 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    
                    {/* Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="text-white hover:text-gray-300 transition-colors"
                        >
                          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <Volume2 size={20} />
                        </button>
                        <span className="text-white text-sm">2:26 / 8:04</span>
                      </div>
                      
                      <button className="text-white hover:text-gray-300 transition-colors">
                        <Maximize size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Info */}
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">KEE Wolves vs KEE Lions</h2>
                    <p className="text-gray-400">Premier League • Football</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-400 font-medium">LIVE</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">KW</span>
                    </div>
                    <h3 className="font-semibold">KEE Wolves</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">KL</span>
                    </div>
                    <h3 className="font-semibold">KEE Lions</h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Previous Streams View
            <div>
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Previous Matches</h1>
                <p className="text-gray-400">Browse and watch recorded matches</p>
              </div>

              {/* Filters */}
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Search Matches</label>
                    <div className="relative">
                      <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search matches..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Club Name</label>
                    <select
                      value={selectedClub}
                      onChange={(e) => setSelectedClub(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                    >
                      {clubs.map(club => (
                        <option key={club} value={club}>{club}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Match Date</label>
                    <div className="relative">
                      <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastMatches.map((match) => (
                  <div key={match.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
                    <div className="relative">
                      <img 
                        src={match.thumbnail}
                        alt={match.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-purple-600 px-2 py-1 rounded text-xs font-medium">
                          {match.sport}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-sm">
                        {match.duration}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Play size={24} className="text-white ml-1" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-2">{match.title}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-400">{match.league}</span>
                        <span className="text-sm font-medium text-white">Score: {match.score}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{match.date}</span>
                        <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-xs transition-colors">
                          Watch
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScoutMatchStreams;