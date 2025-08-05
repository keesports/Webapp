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
  Send,
  Smile,
  Paperclip
} from 'lucide-react';

interface ScoutMessagesProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToFindPlayer: () => void;
  onNavigateToPlayersManagement: () => void;
  onNavigateToMatchStreams: () => void;
  onNavigateToSettings: () => void;
  onNavigateToPlayerProfile?: (playerId: string) => void;
}

const ScoutMessages: React.FC<ScoutMessagesProps> = ({ 
  onBack, 
  onNavigateToDashboard, 
  onNavigateToFindPlayer,
  onNavigateToPlayersManagement,
  onNavigateToMatchStreams,
  onNavigateToSettings,
  onNavigateToPlayerProfile
}) => {
  const [selectedContact, setSelectedContact] = React.useState('michael-johnson');
  const [newMessage, setNewMessage] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeTab, setActiveTab] = React.useState<'admin' | 'players'>('players');

  const playerContacts = [
    {
      id: 'michael-johnson',
      name: 'Michael Johnson',
      position: 'Striker',
      sport: 'Football',
      avatar: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Thank you for showing interest in my profile. I would love to discuss opportunities.',
      time: '2 hours ago',
      isOnline: true,
      hasUnread: true
    },
    {
      id: 'sarah-williams',
      name: 'Sarah Williams',
      position: 'Point Guard',
      sport: 'Basketball',
      avatar: 'https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'I have uploaded new highlight videos. Please take a look when you have time.',
      time: '1 day ago',
      isOnline: false,
      hasUnread: false
    },
    {
      id: 'david-okafor',
      name: 'David Okafor',
      position: 'Midfielder',
      sport: 'Football',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'When would be a good time for a video call to discuss my career prospects?',
      time: '2 days ago',
      isOnline: true,
      hasUnread: true
    },
    {
      id: 'grace-adebayo',
      name: 'Grace Adebayo',
      position: 'Defender',
      sport: 'Football',
      avatar: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'I appreciate your feedback on my performance. Working on the areas you mentioned.',
      time: '3 days ago',
      isOnline: false,
      hasUnread: false
    }
  ];

  const adminContacts = [
    {
      id: 'kee-admin',
      name: 'KEE Admin',
      position: 'Platform Administrator',
      sport: 'Admin',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'New platform features have been released. Check out the updated scouting tools.',
      time: '1 hour ago',
      isOnline: true,
      hasUnread: true
    },
    {
      id: 'support-team',
      name: 'Support Team',
      position: 'Technical Support',
      sport: 'Support',
      avatar: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Your technical issue has been resolved. Please let us know if you need further assistance.',
      time: '2 days ago',
      isOnline: false,
      hasUnread: false
    }
  ];
  const messages = [
    {
      id: 1,
      sender: 'michael-johnson',
      content: 'Hello! I saw that you viewed my profile. I\'m very interested in discussing potential opportunities.',
      time: 'Yesterday 2:30pm',
      isOwn: false
    },
    {
      id: 2,
      sender: 'scout',
      content: 'Hi Michael! I was impressed by your highlight reel. Your pace and finishing ability caught my attention. I\'d like to learn more about your career goals.',
      time: 'Yesterday 3:15pm',
      isOwn: true
    },
    {
      id: 3,
      sender: 'michael-johnson',
      content: 'That\'s great to hear! My main goal is to play at the professional level. I\'ve been working hard to improve my game and I believe I\'m ready for the next step.',
      time: 'Yesterday 3:45pm',
      isOwn: false
    },
    {
      id: 4,
      sender: 'scout',
      content: 'Excellent mindset. I have connections with several clubs that might be interested. Can you tell me about your current training routine and any recent achievements?',
      time: 'Yesterday 4:20pm',
      isOwn: true
    },
    {
      id: 5,
      sender: 'michael-johnson',
      content: 'I train 6 days a week - 4 days with my club and 2 days individual training. This season I\'ve scored 15 goals in 12 matches and was named player of the month twice.',
      time: 'Today 10:30am',
      isOwn: false
    },
    {
      id: 6,
      sender: 'michael-johnson',
      content: 'Thank you for showing interest in my profile. I would love to discuss opportunities.',
      time: 'Today 2:00pm',
      isOwn: false
    }
  ];

  const currentContacts = activeTab === 'players' ? playerContacts : adminContacts;
  const selectedContactData = currentContacts.find(c => c.id === selectedContact);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
              <div className="bg-purple-600 rounded-lg px-4 py-3 flex items-center space-x-3">
                <MessageSquare size={20} />
                <span className="font-medium">Messages</span>
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
          <span className="text-gray-300">Messages</span>
        </div>

        {/* Messages Content */}
        <div className="flex-1 flex">
          {/* Left Panel - Contacts */}
          <div className="w-96 bg-gray-800 border-r border-gray-700 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-700">
              <h1 className="text-xl font-bold mb-4">Messages</h1>
              
              {/* Admin/Players Toggle */}
              <div className="flex bg-gray-700 rounded-lg p-1 mb-4">
                <button
                  onClick={() => setActiveTab('admin')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'admin'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Admin
                </button>
                <button
                  onClick={() => setActiveTab('players')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'players'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Players
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search players..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Contacts List */}
            <div className="flex-1 overflow-y-auto">
              {currentContacts.map((contact) => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedContact(contact.id)}
                  className={`p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors ${
                    selectedContact === contact.id ? 'bg-gray-700' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {contact.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full"></div>
                      )}
                      {contact.hasUnread && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-medium text-white truncate">{contact.name}</h3>
                        <span className="text-xs text-gray-400">{contact.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        {activeTab === 'players' ? (
                          <>
                            <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                              {contact.sport}
                            </span>
                            <span className="text-xs text-gray-400">{contact.position}</span>
                          </>
                        ) : (
                          <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
                            {contact.sport}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 truncate">{contact.lastMessage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Chat */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            {selectedContactData && (
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={selectedContactData.avatar}
                      alt={selectedContactData.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {selectedContactData.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-800 rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-medium text-white">{selectedContactData.name}</h2>
                    <div className="flex items-center space-x-2">
                      {activeTab === 'players' ? (
                        <>
                          <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded">
                            {selectedContactData.sport}
                          </span>
                          <span className="text-xs text-gray-400">{selectedContactData.position}</span>
                        </>
                      ) : (
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
                          {selectedContactData.sport}
                        </span>
                      )}
                      {selectedContactData.isOnline && (
                        <>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-400">Online</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  <span onClick={() => onNavigateToPlayerProfile?.(selectedContactData.id)}>View Profile</span>
                </button>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md ${message.isOwn ? 'order-2' : 'order-1'}`}>
                    {!message.isOwn && (
                      <div className="flex items-center space-x-2 mb-1">
                        <img
                          src={selectedContactData?.avatar}
                          alt={selectedContactData?.name}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium text-white">{selectedContactData?.name}</span>
                        <span className="text-xs text-gray-400">{message.time}</span>
                      </div>
                    )}
                    
                    <div className={`rounded-lg px-4 py-2 ${
                      message.isOwn 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-700 text-white'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                    
                    {message.isOwn && (
                      <div className="text-right mt-1">
                        <span className="text-xs text-gray-400">{message.time}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Paperclip size={20} />
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                    <Smile size={20} />
                  </button>
                </div>
                <button
                  onClick={handleSendMessage}
                  className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutMessages;