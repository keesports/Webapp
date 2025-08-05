import React from 'react';
import VideoUploadModal from './VideoUploadModal';
import { 
  Home, 
  User, 
  MessageSquare, 
  Video, 
  Settings, 
  LogOut, 
  ChevronDown,
  ChevronRight,
  Edit,
  Plus
} from 'lucide-react';

interface AthleteProfileProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToMessages: () => void;
  onNavigateToMatchStreams: () => void;
  onNavigateToSettings: () => void;
}

const AthleteProfile: React.FC<AthleteProfileProps> = ({ onBack, onNavigateToDashboard, onNavigateToMessages, onNavigateToMatchStreams, onNavigateToSettings }) => {
  const [isMatchStreamsOpen, setIsMatchStreamsOpen] = React.useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = React.useState(false);
  const [videoUploads, setVideoUploads] = React.useState([

    {
      title: "Goal Highlights",
      duration: "2:35",
      date: "Jan 15, 2025",
      thumbnail: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Training Session",
      duration: "4:20",
      date: "Jan 10, 2025",
      thumbnail: "https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Match Highlights",
      duration: "3:15",
      date: "Jan 5, 2025",
      thumbnail: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]);

  const handleVideoUpload = (videoData: {
    title: string;
    description: string;
    file: File;
  }) => {
    // Create a new video entry
    const newVideo = {
      title: videoData.title,
      duration: "0:00", // Would be calculated from actual video
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      thumbnail: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400" // Placeholder
    };
    
    setVideoUploads(prev => [newVideo, ...prev]);
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
                <User size={20} />
                <span className="font-medium">Profile</span>
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
          <span className="text-gray-300">Profile</span>
        </div>

        {/* Profile Content */}
        <div className="flex-1 p-6">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-6">
              <img 
                src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="John Smith"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">John Smith</h1>
                <p className="text-gray-400 text-lg mb-4">Football | Age: 23</p>
                
                {/* Profile Stats */}
                <div className="flex space-x-12">
                  <div>
                    <div className="text-sm text-gray-400">Nationality</div>
                    <div className="text-white font-semibold">Nigerian</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Height</div>
                    <div className="text-white font-semibold">1.85m</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Weight</div>
                    <div className="text-white font-semibold">75kg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Uploads Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Video Uploads</h2>
              <button 
                onClick={() => setIsUploadModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus size={16} />
                <span>Upload New</span>
              </button>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoUploads.map((video, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors cursor-pointer">
                  <div className="relative">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-400">{video.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Upload Modal */}
      <VideoUploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUpload={handleVideoUpload}
      />
    </div>
  );
};

export default AthleteProfile;