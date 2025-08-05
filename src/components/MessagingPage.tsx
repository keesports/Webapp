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
  Smile,
  Send
} from 'lucide-react';

interface MessagingPageProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToProfile: () => void;
  onNavigateToMatchStreams: () => void;
  onNavigateToSettings: () => void;
}

const MessagingPage: React.FC<MessagingPageProps> = ({ 
  onBack, 
  onNavigateToDashboard, 
  onNavigateToProfile,
  onNavigateToMatchStreams,
  onNavigateToSettings
}) => {
  const [isMatchStreamsOpen, setIsMatchStreamsOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'admin' | 'scouts'>('scouts');
  const [selectedContact, setSelectedContact] = React.useState('andi-lane');
  const [newMessage, setNewMessage] = React.useState('');

  const contacts = [
    {
      id: 'phoenix-baker',
      name: 'Phoenix Baker',
      username: '@phoenix',
      avatar: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Hey Olivia, Katherine sent me over the latest doc. I just have a quick question about the...',
      time: '5min ago',
      isOnline: true,
      hasUnread: true
    },
    {
      id: 'andi-lane',
      name: 'Andi Lane',
      username: '@andi',
      avatar: 'https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Your: Sure thing, I\'ll have a look today. They\'re looking great!',
      time: '20min ago',
      isOnline: true,
      hasUnread: false
    },
    {
      id: 'mollie-hall',
      name: 'Mollie Hall',
      username: '@mollie',
      avatar: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'I\'ve just published the site again. Looks like it fixed it. How weird! I\'ll keep an eye on it...',
      time: '1hr ago',
      isOnline: false,
      hasUnread: true
    },
    {
      id: 'rosalee-melvin',
      name: 'Rosalee Melvin',
      username: '@rosalee',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Hey Liv — just wanted to say thanks for chasing up the release for me. Really...',
      time: '2hr ago',
      isOnline: false,
      hasUnread: false
    },
    {
      id: 'analah-whitten',
      name: 'Analah Whitten',
      username: '@analah',
      avatar: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Good news!! Jack accepted the offer. I\'ve sent over a contract for him to review but...',
      time: '2hr ago',
      isOnline: false,
      hasUnread: false
    },
    {
      id: 'koray-okumus',
      name: 'Koray Okumus',
      username: '@koray',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Thanks! Looks great!',
      time: '4hr ago',
      isOnline: true,
      hasUnread: true
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'andi-lane',
      content: 'some notes in the gdoc as well for Phoenix to look over.',
      time: 'Thursday 11:40am',
      isOwn: false
    },
    {
      id: 2,
      sender: 'andi-lane',
      content: 'Tech requirements.pdf',
      time: 'Thursday 11:40am',
      isOwn: false,
      isFile: true,
      fileSize: '1.2 MB'
    },
    {
      id: 3,
      sender: 'you',
      content: 'Awesome! Thanks. I\'ll look at this today.',
      time: 'Thursday 11:41am',
      isOwn: true
    },
    {
      id: 4,
      sender: 'andi-lane',
      content: 'No rush though — we still have to wait for Lana\'s designs.',
      time: 'Thursday 11:44am',
      isOwn: false
    },
    {
      id: 5,
      sender: 'andi-lane',
      content: 'Hey Olivia, can you please review the latest design when you can?',
      time: 'Today 2:20pm',
      isOwn: false
    },
    {
      id: 6,
      sender: 'you',
      content: 'Sure thing, I\'ll have a look today. They\'re looking great!',
      time: 'Just now',
      isOwn: true
    },
    {
      id: 7,
      sender: 'andi-lane',
      content: '...',
      time: '',
      isOwn: false,
      isTyping: true
    }
  ];

  const selectedContactData = contacts.find(c => c.id === selectedContact);

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
                onClick={onNavigateToProfile}
                className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
              >
                <User size={20} />
                <span>Profile</span>
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
          <span className="text-gray-300">Messages</span>
        </div>

        {/* Messages Content */}
        <div className="flex-1 flex">
          {/* Left Panel - Contacts */}
          <div className="w-96 bg-gray-800 border-r border-gray-700 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-700">
              <h1 className="text-xl font-bold mb-4">Messages</h1>
              
              {/* Admin/Scouts Toggle */}
              <div className="flex bg-gray-700 rounded-lg p-1 mb-4">
                <button
                  onClick={() => setActiveTab('admin')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'admin'
                      ? 'bg-gray-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Admin
                </button>
                <button
                  onClick={() => setActiveTab('scouts')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'scouts'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Scouts
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            {/* Contacts List */}
            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact) => (
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
                        className="w-10 h-10 rounded-full object-cover"
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
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-400">Online</span>
                    </div>
                  </div>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  View profile
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
                        {message.time && (
                          <span className="text-xs text-gray-400">{message.time}</span>
                        )}
                      </div>
                    )}
                    
                    {message.isFile ? (
                      <div className="bg-gray-700 rounded-lg p-3 flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                          <span className="text-xs font-bold text-white">PDF</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{message.content}</div>
                          <div className="text-xs text-gray-400">{message.fileSize}</div>
                        </div>
                      </div>
                    ) : message.isTyping ? (
                      <div className="bg-gray-700 rounded-lg px-4 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    ) : (
                      <div className={`rounded-lg px-4 py-2 ${
                        message.isOwn 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-white'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    )}
                    
                    {message.isOwn && message.time && (
                      <div className="text-right mt-1">
                        <span className="text-xs text-gray-400">{message.time}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Today Divider */}
              <div className="flex items-center justify-center my-6">
                <div className="bg-gray-700 px-3 py-1 rounded-full">
                  <span className="text-xs text-gray-400">Today</span>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="bg-gray-800 px-6 py-4 border-t border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Send a message"
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

export default MessagingPage;