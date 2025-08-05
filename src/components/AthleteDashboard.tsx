import React from 'react';
import EditProfileModal from './EditProfileModal';
import { 
  Home, 
  User, 
  MessageSquare, 
  Video, 
  Settings, 
  LogOut, 
  ChevronDown,
  Play,
  ChevronLeft,
  ChevronRight,
  Edit
} from 'lucide-react';

interface AthleteDashboardProps {
  onBack: () => void;
  onNavigateToProfile: () => void;
  onNavigateToMessages: () => void;
  onNavigateToMatchStreams: () => void;
  onNavigateToSettings: () => void;
}

const AthleteDashboard: React.FC<AthleteDashboardProps> = ({ onBack, onNavigateToProfile, onNavigateToMessages, onNavigateToMatchStreams, onNavigateToSettings }) => {
  const [currentMonth, setCurrentMonth] = React.useState('December');
  const [currentYear, setCurrentYear] = React.useState('2022');
  const [isMatchStreamsOpen, setIsMatchStreamsOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [profileData, setProfileData] = React.useState({
    firstName: 'Michael',
    lastName: 'Johnson',
    dateOfBirth: '15 Aug 1995 (28 years)',
    height: '6\'2" (188 cm)',
    weight: '185 lbs (84 kg)',
    dominantHand: 'Right'
  });

  const handleProfileSave = (newProfileData: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    height: string;
    weight: string;
    dominantHand: string;
    currentClub: string;
  }) => {
    // Calculate age from date of birth
    const birthDate = new Date(newProfileData.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const finalAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
    
    // Format the data for display
    const formattedDate = birthDate.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    }) + ` (${finalAge} years)`;
    
    setProfileData({
      firstName: newProfileData.firstName,
      lastName: newProfileData.lastName,
      dateOfBirth: formattedDate,
      height: `${Math.floor(parseInt(newProfileData.height) / 30.48)}'${Math.round((parseInt(newProfileData.height) % 30.48) / 2.54)}" (${newProfileData.height} cm)`,
      weight: `${Math.round(parseInt(newProfileData.weight) * 2.205)} lbs (${newProfileData.weight} kg)`,
      dominantHand: newProfileData.dominantHand
    });
  };

  const calendarDays = [
    { day: 30, isOtherMonth: true },
    { day: 1, isOtherMonth: false },
    { day: 2, isOtherMonth: false },
    { day: 3, isOtherMonth: false, isHighlighted: true },
    { day: 4, isOtherMonth: false },
    { day: 5, isOtherMonth: false },
    { day: 6, isOtherMonth: false },
    { day: 7, isOtherMonth: false },
    { day: 8, isOtherMonth: false },
    { day: 9, isOtherMonth: false, isHighlighted: true },
    { day: 10, isOtherMonth: false },
    { day: 11, isOtherMonth: false },
    { day: 12, isOtherMonth: false, isHighlighted: true },
    { day: 13, isOtherMonth: false, isHighlighted: true },
    { day: 14, isOtherMonth: false },
    { day: 15, isOtherMonth: false },
    { day: 16, isOtherMonth: false },
    { day: 17, isOtherMonth: false },
    { day: 18, isOtherMonth: false },
    { day: 19, isOtherMonth: false },
    { day: 20, isOtherMonth: false },
    { day: 21, isOtherMonth: false },
    { day: 22, isOtherMonth: false },
    { day: 23, isOtherMonth: false, isHighlighted: true },
    { day: 24, isOtherMonth: false },
    { day: 25, isOtherMonth: false },
    { day: 26, isOtherMonth: false },
    { day: 27, isOtherMonth: false },
    { day: 28, isOtherMonth: false, isHighlighted: true },
    { day: 29, isOtherMonth: false },
    { day: 30, isOtherMonth: false },
    { day: 31, isOtherMonth: false },
    { day: 1, isOtherMonth: true },
  ];

  const upcomingEvents = [
    {
      type: "Show off match",
      teams: "Kee Wolves vs Kee Lions",
      date: "FEB 14, 2025"
    },
    {
      type: "Show off match", 
      teams: "Kee Lizards vs Kee Donkeys",
      date: "FEB 21, 2025"
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
              <div className="bg-purple-600 rounded-lg px-4 py-3 flex items-center space-x-3">
                <Home size={20} />
                <span className="font-medium">Dashboard</span>
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
          <span className="text-gray-300">Dashboard</span>
          <div className="bg-purple-600 px-3 py-1 rounded text-sm font-medium">Overview</div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=100" 
                alt="Olivia"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold">Welcome back, Olivia</h1>
                <p className="text-gray-400">olivia@untitledui.com</p>
              </div>
            </div>
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Edit size={16} />
              <span>Edit Profile</span>
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Personal Info, Physical Attributes, and Live Stream */}
            <div className="lg:col-span-2 space-y-6">
              {/* Top Row - Personal Information and Physical Attributes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <User size={20} className="text-blue-400" />
                    <h2 className="text-lg font-semibold">Personal Information</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">First Name</span>
                      <span className="font-medium">{profileData.firstName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Name</span>
                      <span className="font-medium">{profileData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date of Birth</span>
                      <span className="font-medium">{profileData.dateOfBirth}</span>
                    </div>
                  </div>
                </div>

                {/* Physical Attributes */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-5 h-5 bg-purple-600 rounded"></div>
                    <h2 className="text-lg font-semibold">Physical Attributes</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Height</span>
                      <span className="font-medium">{profileData.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Weight</span>
                      <span className="font-medium">{profileData.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Dominant Hand</span>
                      <span className="font-medium">{profileData.dominantHand}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Stream Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Live Stream</h2>
                <div className="bg-gray-800 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                  <div className="relative h-full">
                    <img 
                      src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                      alt="Live Stream"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Play size={20} className="text-white ml-1" />
                      </button>
                      <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white text-sm">
                        1:23:45
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Event Calendar */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Event Calendar</h2>
              
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <select className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm">
                    <option>December</option>
                  </select>
                  <select className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm">
                    <option>2022</option>
                  </select>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-6">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                  <div key={day} className="text-center text-xs text-gray-400 py-2">
                    {day}
                  </div>
                ))}
                {calendarDays.map((date, index) => (
                  <div 
                    key={index}
                    className={`text-center text-sm py-2 rounded ${
                      date.isOtherMonth 
                        ? 'text-gray-600' 
                        : date.isHighlighted 
                          ? 'bg-purple-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {date.day}
                  </div>
                ))}
              </div>

              {/* Upcoming Events */}
              <div>
                <h3 className="font-medium mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">{event.type}</div>
                      <div className="text-sm font-medium mb-3">{event.teams}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-purple-400 font-medium">{event.date}</span>
                        <button className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-xs transition-colors">
                          View Event
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleProfileSave}
      />
    </div>
  );
};

export default AthleteDashboard;