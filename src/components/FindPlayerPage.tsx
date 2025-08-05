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
  Filter,
  Heart,
  Eye,
  Star,
  MapPin,
  Calendar,
  User
} from 'lucide-react';

interface FindPlayerPageProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToPlayersManagement: () => void;
  onNavigateToMessages: () => void;
  onNavigateToMatchStreams: () => void;
  onNavigateToSettings: () => void;
  onNavigateToPlayerProfile?: (playerId: string) => void;
}

const FindPlayerPage: React.FC<FindPlayerPageProps> = ({ 
  onBack, 
  onNavigateToDashboard, 
  onNavigateToPlayersManagement,
  onNavigateToMessages,
  onNavigateToMatchStreams,
  onNavigateToSettings,
  onNavigateToPlayerProfile
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSport, setSelectedSport] = React.useState('All');
  const [selectedCountry, setSelectedCountry] = React.useState('All');
  const [ageRange, setAgeRange] = React.useState({ min: 16, max: 35 });
  const [selectedPosition, setSelectedPosition] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('rating');
  const [savedPlayers, setSavedPlayers] = React.useState<number[]>([]);

  const sports = ['All', 'Football', 'Basketball', 'Tennis', 'Volleyball', 'Athletics'];
  const countries = ['All', 'Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt', 'Morocco'];
  const positions = ['All', 'Forward', 'Midfielder', 'Defender', 'Goalkeeper', 'Point Guard', 'Center', 'Guard'];

  const players = [
    {
      id: 1,
      name: "Michael Johnson",
      age: 22,
      nationality: "Nigeria",
      position: "Striker",
      sport: "Football",
      club: "Lagos United",
      rating: 8.5,
      height: "185 cm",
      weight: "78 kg",
      avatar: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=200",
      stats: {
        pace: 91,
        shooting: 88,
        passing: 75,
        defending: 45,
        dribbling: 85,
        physical: 82
      },
      achievements: ["Top Scorer 2024", "Player of the Month"],
      videos: 12,
      lastActive: "2 days ago"
    },
    {
      id: 2,
      name: "Sarah Williams",
      age: 20,
      nationality: "Ghana",
      position: "Point Guard",
      sport: "Basketball",
      club: "Accra Stars",
      rating: 9.2,
      height: "175 cm",
      weight: "65 kg",
      avatar: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=200",
      stats: {
        pace: 88,
        shooting: 92,
        passing: 94,
        defending: 78,
        dribbling: 90,
        physical: 75
      },
      achievements: ["MVP 2024", "All-Star Team"],
      videos: 18,
      lastActive: "1 day ago"
    },
    {
      id: 3,
      name: "David Okafor",
      age: 24,
      nationality: "Nigeria",
      position: "Midfielder",
      sport: "Football",
      club: "Kano Pillars",
      rating: 7.8,
      height: "180 cm",
      weight: "75 kg",
      avatar: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200",
      stats: {
        pace: 78,
        shooting: 72,
        passing: 89,
        defending: 85,
        dribbling: 80,
        physical: 79
      },
      achievements: ["Best Midfielder 2023"],
      videos: 8,
      lastActive: "5 days ago"
    },
    {
      id: 4,
      name: "Grace Adebayo",
      age: 21,
      nationality: "Nigeria",
      position: "Defender",
      sport: "Football",
      club: "Rivers Angels",
      rating: 8.1,
      height: "172 cm",
      weight: "68 kg",
      avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=200",
      stats: {
        pace: 75,
        shooting: 45,
        passing: 82,
        defending: 92,
        dribbling: 70,
        physical: 88
      },
      achievements: ["Best Defender 2024", "Clean Sheet Record"],
      videos: 15,
      lastActive: "3 days ago"
    },
    {
      id: 5,
      name: "James Mensah",
      age: 19,
      nationality: "Ghana",
      position: "Forward",
      sport: "Football",
      club: "Kumasi Asante",
      rating: 8.7,
      height: "188 cm",
      weight: "82 kg",
      avatar: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=200",
      stats: {
        pace: 94,
        shooting: 90,
        passing: 78,
        defending: 35,
        dribbling: 88,
        physical: 85
      },
      achievements: ["Rising Star 2024", "Golden Boot Winner"],
      videos: 22,
      lastActive: "1 day ago"
    },
    {
      id: 6,
      name: "Amina Hassan",
      age: 23,
      nationality: "Kenya",
      position: "Center",
      sport: "Basketball",
      club: "Nairobi Hoops",
      rating: 8.3,
      height: "190 cm",
      weight: "78 kg",
      avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200",
      stats: {
        pace: 70,
        shooting: 85,
        passing: 80,
        defending: 90,
        dribbling: 65,
        physical: 95
      },
      achievements: ["Defensive Player of the Year"],
      videos: 10,
      lastActive: "4 days ago"
    }
  ];

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.club.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === 'All' || player.sport === selectedSport;
    const matchesCountry = selectedCountry === 'All' || player.nationality === selectedCountry;
    const matchesAge = player.age >= ageRange.min && player.age <= ageRange.max;
    const matchesPosition = selectedPosition === 'All' || player.position === selectedPosition;
    
    return matchesSearch && matchesSport && matchesCountry && matchesAge && matchesPosition;
  });

  const sortedPlayers = [...filteredPlayers].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'age':
        return a.age - b.age;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'recent':
        return new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime();
      default:
        return 0;
    }
  });

  const toggleSavePlayer = (playerId: number) => {
    setSavedPlayers(prev => 
      prev.includes(playerId) 
        ? prev.filter(id => id !== playerId)
        : [...prev, playerId]
    );
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
              <div className="bg-purple-600 rounded-lg px-4 py-3 flex items-center space-x-3">
                <Search size={20} />
                <span className="font-medium">Find Player</span>
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
          <span className="text-gray-300">Find Player</span>
        </div>

        {/* Find Player Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Find Players</h1>
            <p className="text-gray-400">Discover talented athletes across different sports and regions</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Players</label>
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name or club..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Sport Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sport</label>
                <select
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                >
                  {sports.map(sport => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>

              {/* Country Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                >
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              {/* Position Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Position</label>
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                >
                  {positions.map(position => (
                    <option key={position} value={position}>{position}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="rating">Highest Rating</option>
                  <option value="age">Youngest First</option>
                  <option value="name">Name A-Z</option>
                  <option value="recent">Recently Active</option>
                </select>
              </div>
            </div>

            {/* Age Range */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Age Range: {ageRange.min} - {ageRange.max} years
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="16"
                  max="35"
                  value={ageRange.min}
                  onChange={(e) => setAgeRange(prev => ({ ...prev, min: parseInt(e.target.value) }))}
                  className="flex-1"
                />
                <input
                  type="range"
                  min="16"
                  max="35"
                  value={ageRange.max}
                  onChange={(e) => setAgeRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">Search Results</h2>
              <p className="text-gray-400">{sortedPlayers.length} players found</p>
            </div>
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedPlayers.map((player) => (
              <div key={player.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
                {/* Player Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={player.avatar}
                        alt={player.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{player.name}</h3>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm text-gray-400">{player.age} years</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-sm text-gray-400">{player.nationality}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                            {player.sport}
                          </span>
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                            {player.position}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSavePlayer(player.id)}
                      className={`p-2 rounded-full transition-colors ${
                        savedPlayers.includes(player.id)
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-700 text-gray-400 hover:text-red-400'
                      }`}
                    >
                      <Heart size={16} className={savedPlayers.includes(player.id) ? 'fill-current' : ''} />
                    </button>
                  </div>

                  {/* Player Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
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
                    <div>
                      <div className="text-xs text-gray-400">Height</div>
                      <div className="text-sm font-medium text-white">{player.height}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Weight</div>
                      <div className="text-sm font-medium text-white">{player.weight}</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Key Stats</div>
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(player.stats).slice(0, 6).map(([stat, value]) => (
                        <div key={stat} className="text-center">
                          <div className={`w-8 h-8 rounded-full ${getStatColor(value)} flex items-center justify-center mx-auto mb-1`}>
                            <span className="text-xs font-bold text-white">{value}</span>
                          </div>
                          <div className="text-xs text-gray-400 capitalize">{stat}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <div className="text-xs text-gray-400 mb-2">Recent Achievements</div>
                    <div className="flex flex-wrap gap-1">
                      {player.achievements.map((achievement, index) => (
                        <span key={index} className="text-xs bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onNavigateToPlayerProfile?.(player.id.toString())}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <Eye size={16} />
                      <span>View Profile</span>
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <MessageSquare size={16} />
                      <span>Message</span>
                    </button>
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                    <span>{player.videos} videos</span>
                    <span>Active {player.lastActive}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {sortedPlayers.length === 0 && (
            <div className="text-center py-12">
              <Search size={48} className="mx-auto text-gray-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-400 mb-2">No players found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindPlayerPage;