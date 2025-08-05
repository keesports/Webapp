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
  Download,
  Filter,
  Eye,
  ArrowUpRight,
  ArrowDownLeft
} from 'lucide-react';

interface AdminTransactionsProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOnboardedPlayers: () => void;
  onNavigateToOnboardedScouts: () => void;
  onNavigateToMessages: () => void;
  onNavigateToStoreManagement: () => void;
  onNavigateToSubscriptions: () => void;
  onNavigateToSettings: () => void;
}

const AdminTransactions: React.FC<AdminTransactionsProps> = ({ 
  onBack, 
  onNavigateToDashboard,
  onNavigateToOnboardedPlayers,
  onNavigateToOnboardedScouts,
  onNavigateToMessages,
  onNavigateToStoreManagement,
  onNavigateToSubscriptions,
  onNavigateToSettings
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterType, setFilterType] = React.useState('All');
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = React.useState(false);
  const [withdrawalAmount, setWithdrawalAmount] = React.useState('');
  const [accountNumber, setAccountNumber] = React.useState('');
  const [bankName, setBankName] = React.useState('');
  const [selectedTransaction, setSelectedTransaction] = React.useState<any>(null);

  const transactions = [
    {
      id: "TXN-001",
      type: "Payment",
      description: "Store Order - K2S Training Jersey",
      customer: "Michael Johnson",
      amount: 91.98,
      status: "Completed",
      date: "Jan 15, 2025",
      time: "2:30 PM",
      paymentMethod: "Credit Card",
      reference: "ORD-001"
    },
    {
      id: "TXN-002",
      type: "Subscription",
      description: "Premium Plan Subscription",
      customer: "Sarah Williams",
      amount: 29.99,
      status: "Completed",
      date: "Jan 15, 2025",
      time: "1:15 PM",
      paymentMethod: "PayPal",
      reference: "SUB-045"
    },
    {
      id: "TXN-003",
      type: "Withdrawal",
      description: "Bank Transfer Withdrawal",
      customer: "KEE Admin",
      amount: -500.00,
      status: "Completed",
      date: "Jan 14, 2025",
      time: "10:00 AM",
      paymentMethod: "Bank Transfer",
      reference: "WTH-012"
    },
    {
      id: "TXN-004",
      type: "Payment",
      description: "Store Order - Professional Football Boots",
      customer: "David Okafor",
      amount: 159.98,
      status: "Pending",
      date: "Jan 14, 2025",
      time: "4:45 PM",
      paymentMethod: "Credit Card",
      reference: "ORD-002"
    },
    {
      id: "TXN-005",
      type: "Subscription",
      description: "Professional Scout Plan",
      customer: "John Scout",
      amount: 49.99,
      status: "Completed",
      date: "Jan 13, 2025",
      time: "9:20 AM",
      paymentMethod: "Credit Card",
      reference: "SUB-046"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-600 text-white';
      case 'Pending':
        return 'bg-yellow-600 text-white';
      case 'Failed':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Withdrawal':
        return <ArrowUpRight size={16} className="text-red-400" />;
      default:
        return <ArrowDownLeft size={16} className="text-green-400" />;
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || transaction.type === filterType;
    
    return matchesSearch && matchesType;
  });

  const handleWithdrawal = () => {
    if (!withdrawalAmount || !accountNumber || !bankName) {
      alert('Please fill in all fields');
      return;
    }
    
    // Process withdrawal logic here
    alert('Withdrawal request submitted successfully!');
    setIsWithdrawalModalOpen(false);
    setWithdrawalAmount('');
    setAccountNumber('');
    setBankName('');
  };

  const totalBalance = transactions
    .filter(t => t.status === 'Completed')
    .reduce((sum, t) => sum + t.amount, 0);

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
            <div className="bg-red-600 rounded-lg px-4 py-3 flex items-center space-x-3">
              <CreditCard size={20} />
              <span className="font-medium">Transactions History</span>
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
          <span className="text-gray-300">Transactions History</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Transactions History</h1>
              <p className="text-gray-400">Track all payments, withdrawals, and financial activities</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400">Total Balance</div>
                <div className="text-2xl font-bold text-green-400">${totalBalance.toFixed(2)}</div>
              </div>
              <button 
                onClick={() => setIsWithdrawalModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <ArrowUpRight size={16} />
                <span>Withdraw Funds</span>
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Transactions</label>
                <div className="relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by ID, customer, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Transaction Type</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                >
                  <option value="All">All Types</option>
                  <option value="Payment">Payments</option>
                  <option value="Subscription">Subscriptions</option>
                  <option value="Withdrawal">Withdrawals</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date Range</label>
                <input
                  type="date"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
                />
              </div>
              
              <div className="flex items-end">
                <button className="w-full bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Download size={16} />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Transaction</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-750 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-white">{transaction.id}</div>
                          <div className="text-sm text-gray-400">{transaction.description}</div>
                          <div className="text-xs text-gray-500">Ref: {transaction.reference}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(transaction.type)}
                          <span className="text-sm text-white">{transaction.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{transaction.customer}</div>
                        <div className="text-sm text-gray-400">{transaction.paymentMethod}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`text-sm font-medium ${
                          transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{transaction.date}</div>
                        <div className="text-sm text-gray-400">{transaction.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button 
                          onClick={() => setSelectedTransaction(transaction)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors flex items-center space-x-1"
                        >
                          <Eye size={14} />
                          <span>Receipt</span>
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

      {/* Withdrawal Modal */}
      {isWithdrawalModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Withdraw Funds</h2>
              <button
                onClick={() => setIsWithdrawalModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Withdrawal Amount</label>
                  <input
                    type="number"
                    step="0.01"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Account Number</label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                    placeholder="Enter account number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Bank Name</label>
                  <input
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                    placeholder="Enter bank name"
                  />
                </div>
                
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Available Balance:</span>
                    <span className="text-green-400 font-bold">${totalBalance.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-end space-x-4 mt-6">
                <button
                  onClick={() => setIsWithdrawalModalOpen(false)}
                  className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleWithdrawal}
                  className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-medium transition-colors"
                >
                  Submit Withdrawal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Receipt Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Transaction Receipt</h2>
              <button
                onClick={() => setSelectedTransaction(null)}
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
                <div className="text-sm text-gray-400">Transaction Receipt</div>
              </div>

              {/* Transaction Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Transaction ID</span>
                  <span className="text-white font-medium">{selectedTransaction.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date & Time</span>
                  <span className="text-white font-medium">{selectedTransaction.date} {selectedTransaction.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Customer</span>
                  <span className="text-white font-medium">{selectedTransaction.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Description</span>
                  <span className="text-white font-medium">{selectedTransaction.description}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Payment Method</span>
                  <span className="text-white font-medium">{selectedTransaction.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reference</span>
                  <span className="text-white font-medium">{selectedTransaction.reference}</span>
                </div>
              </div>

              {/* Amount */}
              <div className="border-t border-gray-700 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-white">Amount</span>
                  <span className={`text-xl font-bold ${
                    selectedTransaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {selectedTransaction.amount > 0 ? '+' : ''}${Math.abs(selectedTransaction.amount).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="text-center">
                <span className={`inline-flex px-4 py-2 text-sm font-semibold rounded-full ${getStatusColor(selectedTransaction.status)}`}>
                  {selectedTransaction.status}
                </span>
              </div>

              {/* Footer */}
              <div className="text-center mt-6 pt-4 border-t border-gray-700">
                <div className="text-xs text-gray-400">
                  Thank you for using KEE Sports Platform
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

export default AdminTransactions;