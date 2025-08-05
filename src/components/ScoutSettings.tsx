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
  Share,
  Eye,
  EyeOff,
  CreditCard,
  Bell,
  Check,
  X,
  Edit
} from 'lucide-react';

interface ScoutSettingsProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToFindPlayer: () => void;
  onNavigateToPlayersManagement: () => void;
  onNavigateToMessages: () => void;
  onNavigateToMatchStreams: () => void;
}

const ScoutSettings: React.FC<ScoutSettingsProps> = ({ 
  onBack, 
  onNavigateToDashboard, 
  onNavigateToFindPlayer,
  onNavigateToPlayersManagement,
  onNavigateToMessages,
  onNavigateToMatchStreams
}) => {
  const [activeTab, setActiveTab] = React.useState<'profile' | 'password' | 'subscription' | 'notifications'>('profile');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false);
  
  // Password form states
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = React.useState(false);

  // Notification settings
  const [notifications, setNotifications] = React.useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    marketingEmails: false,
    securityAlerts: true,
    playerUpdates: true,
    matchAlerts: true,
    systemUpdates: false
  });

  // Profile data
  const profileData = {
    firstName: 'John',
    lastName: 'Scout',
    email: 'john@scout.com',
    phone: '+234 806 999 8588',
    organization: 'Premier Scouting Agency',
    experience: '8 years',
    specialization: 'Football & Basketball',
    location: 'Lagos, Nigeria'
  };

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }

    setIsUpdatingPassword(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
      alert('Password updated successfully');
    } catch (error) {
      alert('Failed to update password');
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const subscriptionData = {
    status: 'Active',
    plan: 'Professional Scout Plan',
    expiryDate: 'March 15, 2025',
    amount: '$49.99',
    nextBilling: 'February 15, 2025'
  };

  const transactionHistory = [
    { id: 1, date: 'Jan 15, 2025', amount: '$49.99', status: 'Completed', plan: 'Professional Scout Plan' },
    { id: 2, date: 'Dec 15, 2024', amount: '$49.99', status: 'Completed', plan: 'Professional Scout Plan' },
    { id: 3, date: 'Nov 15, 2024', amount: '$49.99', status: 'Completed', plan: 'Professional Scout Plan' },
    { id: 4, date: 'Oct 15, 2024', amount: '$49.99', status: 'Completed', plan: 'Professional Scout Plan' }
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
              <div className="bg-purple-600 rounded-lg px-4 py-3 flex items-center space-x-3">
                <Settings size={20} />
                <span className="font-medium">Settings</span>
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
          <span className="text-gray-300">Settings</span>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center border-4 border-white/20">
                    <span className="text-2xl font-bold text-white">JS</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">John Scout</h1>
                  <p className="text-white/80">john@scout.com</p>
                  <p className="text-white/60 text-sm">Professional Scout • 8 years experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-medium transition-colors flex items-center space-x-2">
                  <Share size={16} />
                  <span>Share</span>
                </button>
                <button className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-lg text-white font-medium transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>

          {/* Settings Tabs */}
          <div className="bg-gray-800 border-b border-gray-700">
            <div className="px-6">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'profile'
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab('password')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'password'
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  Password
                </button>
                <button
                  onClick={() => setActiveTab('subscription')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'subscription'
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  Subscription
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors flex items-center space-x-2 ${
                    activeTab === 'notifications'
                      ? 'border-purple-500 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <span>Notifications</span>
                  <span className="bg-gray-600 text-gray-300 text-xs px-2 py-1 rounded-full">3</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 bg-gray-900 text-white p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-bold mb-6 text-white">Scout Profile</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Profile Picture and Basic Info */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">JS</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">John Scout</h3>
                        <p className="text-gray-400">john@scout.com</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-green-400">Verified Scout</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2">
                      <Edit size={16} />
                      <span>Edit Profile</span>
                    </button>
                  </div>

                  {/* Personal Information */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Personal Details</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">First Name</span>
                        <span className="text-white font-medium">{profileData.firstName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Last Name</span>
                        <span className="text-white font-medium">{profileData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Email</span>
                        <span className="text-white font-medium">{profileData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Phone</span>
                        <span className="text-white font-medium">{profileData.phone}</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Professional Details</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Organization</span>
                        <span className="text-white font-medium">{profileData.organization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Experience</span>
                        <span className="text-white font-medium">{profileData.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Specialization</span>
                        <span className="text-white font-medium">{profileData.specialization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Location</span>
                        <span className="text-white font-medium">{profileData.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Account Information */}
                  <div className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Account Information</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Account Type</span>
                        <span className="text-white font-medium">Professional Scout</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Member Since</span>
                        <span className="text-white font-medium">January 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Players Scouted</span>
                        <span className="text-white font-medium">247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Verification Status</span>
                        <span className="text-green-400 font-medium">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'password' && (
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold mb-2 text-white">Password</h2>
                <p className="text-gray-400 mb-8">Please enter your current password to change your password.</p>

                <div className="space-y-6">
                  {/* Current Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Current password
                    </label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? 'text' : 'password'}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showCurrentPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      New password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Your new password must be more than 8 characters.</p>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm new password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end space-x-4 pt-4">
                    <button
                      type="button"
                      className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handlePasswordUpdate}
                      disabled={isUpdatingPassword || !currentPassword || !newPassword || !confirmPassword}
                      className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed px-6 py-2 rounded-lg text-white font-medium transition-colors"
                    >
                      {isUpdatingPassword ? 'Updating...' : 'Update password'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'subscription' && (
              <div className="max-w-4xl">
                <h2 className="text-xl font-bold mb-6 text-white">Subscription</h2>

                {/* Current Subscription */}
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-white">Current Subscription</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm text-gray-400">Status</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-green-600">{subscriptionData.status}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Plan</div>
                      <div className="font-medium text-white">{subscriptionData.plan}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Expires</div>
                      <div className="font-medium text-white">{subscriptionData.expiryDate}</div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button 
                      onClick={() => setIsPaymentModalOpen(true)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
                    >
                      <CreditCard size={16} />
                      <span>Make Payment</span>
                    </button>
                  </div>
                </div>

                {/* Transaction History */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Transaction History</h3>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-700">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plan</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          {transactionHistory.map((transaction) => (
                            <tr key={transaction.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{transaction.date}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{transaction.plan}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{transaction.amount}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                  {transaction.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="max-w-2xl">
                <h2 className="text-xl font-bold mb-2 text-white">Notifications</h2>
                <p className="text-gray-400 mb-8">Manage your notification preferences for scouting activities.</p>

                <div className="space-y-6">
                  {/* Email Notifications */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">Email Notifications</h3>
                      <p className="text-sm text-gray-400">Receive notifications via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.emailNotifications}
                        onChange={(e) => handleNotificationChange('emailNotifications', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  {/* Push Notifications */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">Push Notifications</h3>
                      <p className="text-sm text-gray-400">Receive push notifications on your device</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.pushNotifications}
                        onChange={(e) => handleNotificationChange('pushNotifications', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  {/* SMS Notifications */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">SMS Notifications</h3>
                      <p className="text-sm text-gray-400">Receive notifications via SMS</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.smsNotifications}
                        onChange={(e) => handleNotificationChange('smsNotifications', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  {/* Marketing Emails */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">Marketing Emails</h3>
                      <p className="text-sm text-gray-400">Receive promotional and marketing emails</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.marketingEmails}
                        onChange={(e) => handleNotificationChange('marketingEmails', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  {/* Security Alerts */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">Security Alerts</h3>
                      <p className="text-sm text-gray-400">Important security notifications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.securityAlerts}
                        onChange={(e) => handleNotificationChange('securityAlerts', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  {/* Player Updates */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">Player Updates</h3>
                      <p className="text-sm text-gray-400">Updates from players you're following</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.playerUpdates}
                        onChange={(e) => handleNotificationChange('playerUpdates', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  {/* Match Alerts */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">Match Alerts</h3>
                      <p className="text-sm text-gray-400">Live match notifications and updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.matchAlerts}
                        onChange={(e) => handleNotificationChange('matchAlerts', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  {/* System Updates */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">System Updates</h3>
                      <p className="text-sm text-gray-400">Platform updates and maintenance notifications</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.systemUpdates}
                        onChange={(e) => handleNotificationChange('systemUpdates', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Payment Details</h2>
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Plan</span>
                  <span className="font-medium text-white">{subscriptionData.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Billing Period</span>
                  <span className="font-medium text-white">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Next Billing Date</span>
                  <span className="font-medium text-white">{subscriptionData.nextBilling}</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-white">Total Amount</span>
                    <span className="text-lg font-bold text-purple-600">{subscriptionData.amount}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  // Handle payment logic
                  alert('Payment processed successfully!');
                  setIsPaymentModalOpen(false);
                }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoutSettings;