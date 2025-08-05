import React from 'react';
import { 
  Home, 
  User, 
  MessageSquare, 
  Video, 
  Settings, 
  LogOut, 
  ChevronDown,
  ChevronRight,
  Search,
  Calendar,
  Play,
  Pause,
  Volume2,
  Maximize,
  SkipBack,
  SkipForward
} from 'lucide-react';

interface MatchStreamsPageProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToProfile: () => void;
  onNavigateToMessages: () => void;
  onNavigateToSettings: () => void;
}

const MatchStreamsPage: React.FC<MatchStreamsPageProps> = ({ 
  onBack, 
  onNavigateToDashboard, 
  onNavigateToProfile,
  onNavigateToMessages,
  onNavigateToSettings
}) => {
  const [isMatchStreamsOpen, setIsMatchStreamsOpen] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState<'live' | 'previous'>('live');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedTeam, setSelectedTeam] = React.useState('All');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [isPlaying, setIsPlaying] = React.useState(true);

  const liveMatches = [
    {
      id: 1,
      title: "KEE Wolves vs KEE Lions",
      league: "Premier League",
      status: "LIVE",
      viewers: "2.3K",
      duration: "2:26 / 8:04",
      thumbnail: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      thumbnail: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Manchester United vs Liverpool",
      league: "Premier League", 
      date: "March 15, 2025",
      duration: "90 min",
      score: "2-1",
      sport: "Basketball",
      thumbnail: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Manchester United vs Liverpool",
      league: "Premier League",
      date: "March 15, 2025", 
      duration: "90 min",
      score: "2-1",
      sport: "Football",
      thumbnail: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

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
                onClick={onNavigateToProfile}
                className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
              >
                <User size={20} />
                <span>Profile</span>
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
                    onClick={() => setActiveTab('live')}
                    className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                      activeTab === 'live' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    Live Stream
                  </div>
                  <div 
                    onClick={() => setActiveTab('previous')}
                    className={`px-3 py-2 rounded cursor-pointer transition-colors ${
                      activeTab === 'previous' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
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
              <span className="text-sm font-bold">SO</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Seun Orofin</div>
              <div className="text-xs text-gray-400">seun@quecon.com</div>
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
            {activeTab === 'live' ? 'Livestreams' : 'Previous Streams'}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {activeTab === 'live' ? (
            // Live Stream View
            <div>
              {/* Live Stream Player */}
              <div className="bg-black rounded-lg overflow-hidden mb-6" style={{ height: '500px' }}>
                <div className="relative h-full">
                  <img 
                    src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Live Match"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  
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
                          <SkipBack size={20} />
                        </button>
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <Volume2 size={20} />
                        </button>
                        <span className="text-white text-sm">2:26 / 8:04</span>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-white text-sm">LIVE</span>
                        </div>
                        <button className="text-white hover:text-gray-300 transition-colors">
                          <Maximize size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Stream Info */}
              <div>
                <h1 className="text-2xl font-bold mb-2">Live Streaming - KEE Wolves vs KEE Lions</h1>
                <div className="flex items-center space-x-4 text-gray-400">
                  <span>Premier League</span>
                  <span>•</span>
                  <span>2.3K viewers</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Previous Streams View
            <div>
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Past Stream</h1>
                <p className="text-gray-400">
                  Join us for an immersive live stream trades session, where market insights come to life in real-time. 
                  Don't just watch the market - experience it with expert guidance.
                </p>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search for order</label>
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Team Name</label>
                  <select
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                  >
                    <option value="All">All</option>
                    <option value="Manchester United">Manchester United</option>
                    <option value="Liverpool">Liverpool</option>
                    <option value="KEE Wolves">KEE Wolves</option>
                    <option value="KEE Lions">KEE Lions</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                  <div className="relative">
                    <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-purple-500"
                      placeholder="Select dates"
                    />
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
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-sm flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{match.date}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-sm flex items-center space-x-1">
                        <span>{match.duration}</span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-2">{match.title}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-400">{match.league}</span>
                        <span className="text-sm font-medium text-white">Score: {match.score}</span>
                      </div>
                      
                      <button className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white font-medium transition-colors flex items-center justify-center space-x-2">
                        <Play size={16} />
                        <span>Watch Recording</span>
                      </button>
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

export default MatchStreamsPage;