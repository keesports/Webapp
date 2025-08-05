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
  Send,
  Smile,
  Paperclip
} from 'lucide-react';

interface AdminMessagesProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOnboardedPlayers: () => void;
  onNavigateToOnboardedScouts: () => void;
  onNavigateToStoreManagement: () => void;
  onNavigateToTransactions: () => void;
  onNavigateToSubscriptions: () => void;
  onNavigateToSettings: () => void;
}

const AdminMessages: React.FC<AdminMessagesProps> = ({ 
  onBack, 
  onNavigateToDashboard,
  onNavigateToOnboardedPlayers,
  onNavigateToOnboardedScouts,
  onNavigateToStoreManagement,
  onNavigateToTransactions,
  onNavigateToSubscriptions,
  onNavigateToSettings
}) => {
  const [selectedContact, setSelectedContact] = React.useState('michael-johnson');
  const [newMessage, setNewMessage] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeTab, setActiveTab] = React.useState<'players' | 'scouts'>('players');

  const playerContacts = [
    {
      id: 'michael-johnson',
      name: 'Michael Johnson',
      type: 'Player',
      sport: 'Football',
      position: 'Striker',
      avatar: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Thank you for the platform update notification.',
      time: '2 hours ago',
      isOnline: true,
      hasUnread: true
    },
    {
      id: 'sarah-williams',
      name: 'Sarah Williams',
      type: 'Player',
      sport: 'Basketball',
      position: 'Point Guard',
      avatar: 'https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'I have a question about my subscription billing.',
      time: '1 day ago',
      isOnline: false,
      hasUnread: false
    }
  ];

  const scoutContacts = [
    {
      id: 'john-scout',
      name: 'John Scout',
      type: 'Scout',
      organization: 'Premier Scouting Agency',
      specialization: 'Football & Basketball',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Could you help me with the new scouting features?',
      time: '3 hours ago',
      isOnline: true,
      hasUnread: true
    },
    {
      id: 'sarah-wilson',
      name: 'Sarah Wilson',
      type: 'Scout',
      organization: 'Elite Sports Scouts',
      specialization: 'Basketball',
      avatar: 'https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=100',
      lastMessage: 'Thanks for resolving the technical issue.',
      time: '2 days ago',
      isOnline: false,
      hasUnread: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'michael-johnson',
      content: 'Hello admin, I received the notification about the platform update. Thank you for keeping us informed.',
      time: 'Today 2:30pm',
      isOwn: false
    },
    {
      id: 2,
      sender: 'admin',
      content: 'You\'re welcome, Michael! We always strive to keep our users updated about new features and improvements. Is there anything specific you\'d like to know about the update?',
      time: 'Today 2:45pm',
      isOwn: true
    },
    {
      id: 3,
      sender: 'michael-johnson',
      content: 'Actually, yes. I noticed some new video upload features. Could you guide me on how to use them effectively?',
      time: 'Today 3:00pm',
      isOwn: false
    },
    {
      id: 4,
      sender: 'admin',
      content: 'Absolutely! The new video features allow you to categorize your uploads into Highlights, Training, and Match footage. You can also add detailed descriptions and tags to help scouts find your content more easily.',
      time: 'Today 3:15pm',
      isOwn: true
    }
  ];

  const currentContacts = activeTab === 'players' ? playerContacts : scoutContacts;
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
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <Users size={20} />
              <span>Onboarded Players</span>
            </div>
            <div 
              onClick={onNavigateToOnboardedScouts}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <Search size={20} />
              <span>Onboarded Scouts</span>
            </div>
            <div className="bg-red-600 rounded-lg px-4 py-3 flex items-center space-x-3">
              <MessageSquare size={20} />
              <span className="font-medium">Messages</span>
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
              <h1 className="text-xl font-bold mb-4">Admin Messages</h1>
              
              {/* Players/Scouts Toggle */}
              <div className="flex bg-gray-700 rounded-lg p-1 mb-4">
                <button
                  onClick={() => setActiveTab('players')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'players'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Players
                </button>
                <button
                  onClick={() => setActiveTab('scouts')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'scouts'
                      ? 'bg-red-600 text-white'
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
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
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
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-sm font-medium text-white truncate">{contact.name}</h3>
                        <span className="text-xs text-gray-400">{contact.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`text-xs px-2 py-1 rounded ${
                          contact.type === 'Player' ? 'bg-blue-600 text-white' : 'bg-purple-600 text-white'
                        }`}>
                          {contact.type}
                        </span>
                        <span className="text-xs text-gray-400">
                          {contact.type === 'Player' 
                            ? `${(contact as any).sport} • ${(contact as any).position}`
                            : (contact as any).specialization
                          }
                        </span>
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
                      <span className={`text-xs px-2 py-1 rounded ${
                        selectedContactData.type === 'Player' ? 'bg-blue-600 text-white' : 'bg-purple-600 text-white'
                      }`}>
                        {selectedContactData.type}
                      </span>
                      {selectedContactData.isOnline && (
                        <>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-400">Online</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
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
                        ? 'bg-red-600 text-white' 
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
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                    <Smile size={20} />
                  </button>
                </div>
                <button
                  onClick={handleSendMessage}
                  className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-colors"
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

export default AdminMessages;