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
  Eye,
  Edit,
  Download
} from 'lucide-react';

interface AdminSubscriptionsProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOnboardedPlayers: () => void;
  onNavigateToOnboardedScouts: () => void;
  onNavigateToMessages: () => void;
  onNavigateToStoreManagement: () => void;
  onNavigateToTransactions: () => void;
  onNavigateToSettings: () => void;
}

const AdminSubscriptions: React.FC<AdminSubscriptionsProps> = ({ 
  onBack, 
  onNavigateToDashboard,
  onNavigateToOnboardedPlayers,
  onNavigateToOnboardedScouts,
  onNavigateToMessages,
  onNavigateToStoreManagement,
  onNavigateToTransactions,
  onNavigateToSettings
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterPlan, setFilterPlan] = React.useState('All');
  const [isEditPricingModalOpen, setIsEditPricingModalOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState<any>(null);
  const [selectedSubscriptionReceipt, setSelectedSubscriptionReceipt] = React.useState<any>(null);

  const subscriptions = [
    {
      id: "SUB-001",
      customer: "Michael Johnson",
      email: "michael.johnson@email.com",
      userType: "Player",
      plan: "Premium Plan",
      amount: 29.99,
      status: "Active",
      startDate: "Jan 15, 2025",
      expiryDate: "Feb 15, 2025",
      paymentMethod: "Credit Card",
      autoRenew: true
    },
    {
      id: "SUB-002",
      customer: "John Scout",
      email: "john.scout@email.com",
      userType: "Scout",
      plan: "Professional Scout Plan",
      amount: 49.99,
      status: "Active",
      startDate: "Jan 10, 2025",
      expiryDate: "Feb 10, 2025",
      paymentMethod: "PayPal",
      autoRenew: true
    },
    {
      id: "SUB-003",
      customer: "Sarah Williams",
      email: "sarah.williams@email.com",
      userType: "Player",
      plan: "Basic Plan",
      amount: 9.99,
      status: "Expired",
      startDate: "Dec 15, 2024",
      expiryDate: "Jan 15, 2025",
      paymentMethod: "Credit Card",
      autoRenew: false
    },
    {
      id: "SUB-004",
      customer: "David Okafor",
      email: "david.okafor@email.com",
      userType: "Player",
      plan: "Free Plan",
      amount: 0.00,
      status: "Active",
      startDate: "Nov 5, 2024",
      expiryDate: "N/A",
      paymentMethod: "N/A",
      autoRenew: false
    }
  ];

  const pricingPlans = [
    {
      id: 1,
      name: "Free Plan",
      userType: "Player",
      price: 0.00,
      features: ["Basic profile", "Limited video uploads", "Basic analytics"]
    },
    {
      id: 2,
      name: "Basic Plan",
      userType: "Player",
      price: 9.99,
      features: ["Enhanced profile", "Unlimited video uploads", "Basic analytics", "Scout visibility"]
    },
    {
      id: 3,
      name: "Premium Plan",
      userType: "Player",
      price: 29.99,
      features: ["Premium profile", "Unlimited video uploads", "Advanced analytics", "Priority scout visibility", "Performance insights"]
    },
    {
      id: 4,
      name: "Basic Scout Plan",
      userType: "Scout",
      price: 19.99,
      features: ["Basic scouting tools", "Limited player searches", "Basic analytics"]
    },
    {
      id: 5,
      name: "Professional Scout Plan",
      userType: "Scout",
      price: 49.99,
      features: ["Advanced scouting tools", "Unlimited player searches", "Advanced analytics", "Priority support", "Export capabilities"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-600 text-white';
      case 'Expired':
        return 'bg-red-600 text-white';
      case 'Cancelled':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const getUserTypeColor = (userType: string) => {
    switch (userType) {
      case 'Player':
        return 'bg-blue-600 text-white';
      case 'Scout':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const filteredSubscriptions = subscriptions.filter(subscription => {
    const matchesSearch = subscription.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subscription.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subscription.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = filterPlan === 'All' || subscription.plan === filterPlan;
    
    return matchesSearch && matchesPlan;
  });

  const handleEditPricing = (plan: any) => {
    setSelectedPlan(plan);
    setIsEditPricingModalOpen(true);
  };

  const handleSavePricing = () => {
    // Save pricing logic here
    alert('Pricing updated successfully!');
    setIsEditPricingModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
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
            <div 
              onClick={onNavigateToMessages}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <MessageSquare size={20} />
              <span>Messages</span>
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
            <div className="bg-red-600 rounded-lg px-4 py-3 flex items-center space-x-3">
              <DollarSign size={20} />
              <span className="font-medium">Subscriptions</span>
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
          <span className="text-gray-300">Subscriptions</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Subscription Management</h1>
              <p className="text-gray-400">Manage subscription plans, pricing, and user subscriptions</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <Download size={16} />
                <span>Export Data</span>
              </button>
            </div>
          </div>

          {/* Pricing Plans Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getUserTypeColor(plan.userType)}`}>
                      {plan.userType}
                    </span>
                  </div>
                  
                  <div className="text-3xl font-bold text-white mb-4">
                    ${plan.price}
                    <span className="text-sm text-gray-400 font-normal">/month</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300">• {feature}</li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => handleEditPricing(plan)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition-colors flex items-center justify-center space-x-2"
                  >
                    <Edit size={16} />
                    <span>Edit Pricing</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Active Subscriptions Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Subscriptions</h2>
            
            {/* Filters */}
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search Subscriptions</label>
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by customer or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Plan Type</label>
                  <select
                    value={filterPlan}
                    onChange={(e) => setFilterPlan(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="All">All Plans</option>
                    <option value="Free Plan">Free Plan</option>
                    <option value="Basic Plan">Basic Plan</option>
                    <option value="Premium Plan">Premium Plan</option>
                    <option value="Professional Scout Plan">Professional Scout Plan</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Subscriptions Table */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Plan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Dates</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {filteredSubscriptions.map((subscription) => (
                      <tr key={subscription.id} className="hover:bg-gray-750 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <div>
                              <div className="text-sm font-medium text-white">{subscription.customer}</div>
                              <div className="text-sm text-gray-400">{subscription.email}</div>
                              <div className="text-xs text-gray-500">{subscription.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getUserTypeColor(subscription.userType)}`}>
                              {subscription.userType}
                            </span>
                            <span className="text-sm text-white">{subscription.plan}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-white">
                            ${subscription.amount.toFixed(2)}/month
                          </div>
                          <div className="text-sm text-gray-400">{subscription.paymentMethod}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(subscription.status)}`}>
                            {subscription.status}
                          </span>
                          {subscription.autoRenew && (
                            <div className="text-xs text-green-400 mt-1">Auto-renew</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-white">Start: {subscription.startDate}</div>
                          <div className="text-sm text-gray-400">
                            {subscription.expiryDate !== 'N/A' ? `Expires: ${subscription.expiryDate}` : 'No expiry'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button 
                            onClick={() => setSelectedSubscriptionReceipt(subscription)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors flex items-center space-x-1"
                          >
                            <Eye size={14} />
                            <span>View Receipt</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Pricing Modal */}
      {isEditPricingModalOpen && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Edit {selectedPlan.name} Pricing</h2>
              <button
                onClick={() => setIsEditPricingModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Plan Name</label>
                  <input
                    type="text"
                    defaultValue={selectedPlan.name}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue={selectedPlan.price}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">User Type</label>
                  <select
                    defaultValue={selectedPlan.userType}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="Player">Player</option>
                    <option value="Scout">Scout</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-end space-x-4 mt-6">
                <button
                  onClick={() => setIsEditPricingModalOpen(false)}
                  className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePricing}
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-medium transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Subscription Receipt Modal */}
      {selectedSubscriptionReceipt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Subscription Receipt</h2>
              <button
                onClick={() => setSelectedSubscriptionReceipt(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              {/* Receipt Header */}
              <div className="text-center mb-6">
                <img src="/keelogo.png" alt="KEE" className="h-8 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">KEE Sports Platform</div>
                <div className="text-sm text-gray-400">Subscription Receipt</div>
              </div>

              {/* Subscription Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subscription ID</span>
                  <span className="text-white font-medium">{selectedSubscriptionReceipt.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Customer</span>
                  <span className="text-white font-medium">{selectedSubscriptionReceipt.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email</span>
                  <span className="text-white font-medium">{selectedSubscriptionReceipt.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Plan</span>
                  <span className="text-white font-medium">{selectedSubscriptionReceipt.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">User Type</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getUserTypeColor(selectedSubscriptionReceipt.userType)}`}>
                    {selectedSubscriptionReceipt.userType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Billing Period</span>
                  <span className="text-white font-medium">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Start Date</span>
                  <span className="text-white font-medium">{selectedSubscriptionReceipt.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Expiry Date</span>
                  <span className="text-white font-medium">
                    {selectedSubscriptionReceipt.expiryDate !== 'N/A' ? selectedSubscriptionReceipt.expiryDate : 'No expiry'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Payment Method</span>
                  <span className="text-white font-medium">{selectedSubscriptionReceipt.paymentMethod}</span>
                </div>
              </div>

              {/* Amount */}
              <div className="border-t border-gray-700 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Amount Paid</span>
                  <span className="text-xl font-bold text-green-400">
                    ${selectedSubscriptionReceipt.amount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="text-center mb-6">
                <span className={`inline-flex px-4 py-2 text-sm font-semibold rounded-full ${getStatusColor(selectedSubscriptionReceipt.status)}`}>
                  {selectedSubscriptionReceipt.status}
                </span>
                {selectedSubscriptionReceipt.autoRenew && (
                  <div className="text-xs text-green-400 mt-2">Auto-renewal enabled</div>
                )}
              </div>

              {/* Footer */}
              <div className="text-center pt-4 border-t border-gray-700">
                <div className="text-xs text-gray-400">
                  Thank you for your subscription to KEE Sports Platform
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
    </>
  );
};

export default AdminSubscriptions;