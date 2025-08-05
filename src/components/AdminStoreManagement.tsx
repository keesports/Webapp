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
  Plus,
  Edit,
  Trash2,
  Package,
  ShoppingCart,
  Eye
} from 'lucide-react';

interface AdminStoreManagementProps {
  onBack: () => void;
  onNavigateToDashboard: () => void;
  onNavigateToOnboardedPlayers: () => void;
  onNavigateToOnboardedScouts: () => void;
  onNavigateToMessages: () => void;
  onNavigateToTransactions: () => void;
  onNavigateToSubscriptions: () => void;
  onNavigateToSettings: () => void;
}

const AdminStoreManagement: React.FC<AdminStoreManagementProps> = ({ 
  onBack, 
  onNavigateToDashboard,
  onNavigateToOnboardedPlayers,
  onNavigateToOnboardedScouts,
  onNavigateToMessages,
  onNavigateToTransactions,
  onNavigateToSubscriptions,
  onNavigateToSettings
}) => {
  const [activeTab, setActiveTab] = React.useState<'inventory' | 'orders'>('inventory');
  const [isAddProductModalOpen, setIsAddProductModalOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedOrder, setSelectedOrder] = React.useState<any>(null);

  const products = [
    {
      id: 1,
      name: "K2S Training Jersey",
      category: "Jerseys",
      price: 45.99,
      originalPrice: 59.99,
      stock: 150,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Blue', 'Red', 'Black', 'White'],
      image: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=200",
      status: "Active",
      sales: 89
    },
    {
      id: 2,
      name: "Professional Football Boots",
      category: "Footwear",
      price: 129.99,
      stock: 75,
      sizes: ['6', '7', '8', '9', '10', '11', '12'],
      colors: ['Black', 'White', 'Blue'],
      image: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=200",
      status: "Active",
      sales: 45
    },
    {
      id: 3,
      name: "K2S Training Shorts",
      category: "Apparel",
      price: 29.99,
      stock: 200,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Gray'],
      image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=200",
      status: "Active",
      sales: 123
    }
  ];

  const orders = [
    {
      id: "ORD-001",
      customer: "Michael Johnson",
      email: "michael.johnson@email.com",
      items: [
        { name: "K2S Training Jersey", size: "L", color: "Blue", quantity: 2, price: 45.99 }
      ],
      total: 91.98,
      status: "Completed",
      date: "Jan 15, 2025",
      paymentMethod: "Credit Card"
    },
    {
      id: "ORD-002",
      customer: "Sarah Williams",
      email: "sarah.williams@email.com",
      items: [
        { name: "Professional Football Boots", size: "8", color: "Black", quantity: 1, price: 129.99 },
        { name: "K2S Training Shorts", size: "M", color: "Black", quantity: 1, price: 29.99 }
      ],
      total: 159.98,
      status: "Processing",
      date: "Jan 14, 2025",
      paymentMethod: "PayPal"
    },
    {
      id: "ORD-003",
      customer: "David Okafor",
      email: "david.okafor@email.com",
      items: [
        { name: "K2S Training Jersey", size: "XL", color: "Red", quantity: 1, price: 45.99 }
      ],
      total: 45.99,
      status: "Shipped",
      date: "Jan 13, 2025",
      paymentMethod: "Credit Card"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-600 text-white';
      case 'Completed':
        return 'bg-green-600 text-white';
      case 'Processing':
        return 'bg-yellow-600 text-white';
      case 'Shipped':
        return 'bg-blue-600 text-white';
      case 'Inactive':
        return 'bg-gray-600 text-white';
      default:
        return 'bg-gray-600 text-white';
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
            <div 
              onClick={onNavigateToMessages}
              className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors"
            >
              <MessageSquare size={20} />
              <span>Messages</span>
            </div>
            <div className="bg-red-600 rounded-lg px-4 py-3 flex items-center space-x-3">
              <Store size={20} />
              <span className="font-medium">Store Management</span>
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
          <span className="text-gray-300">Store Management</span>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">Store Management</h1>
              <p className="text-gray-400">Manage your e-commerce store inventory and orders</p>
            </div>
            
            {/* Tabs */}
            <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('inventory')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 ${
                  activeTab === 'inventory'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Package size={16} />
                <span>Store Inventory</span>
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 ${
                  activeTab === 'orders'
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <ShoppingCart size={16} />
                <span>Orders</span>
              </button>
            </div>
          </div>

          {activeTab === 'inventory' ? (
            // Store Inventory
            <div>
              {/* Inventory Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 w-64"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => setIsAddProductModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Plus size={16} />
                  <span>Add Product</span>
                </button>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">{product.name}</h3>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </div>
                      
                      <div className="text-sm text-gray-400 mb-2">{product.category}</div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-lg font-bold text-white">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      
                      <div className="text-sm text-gray-400 mb-3">
                        Stock: {product.stock} • Sales: {product.sales}
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors flex items-center justify-center space-x-1">
                          <Edit size={14} />
                          <span>Edit</span>
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded text-sm transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Orders
            <div>
              {/* Orders Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search orders..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 w-64"
                    />
                  </div>
                </div>
              </div>

              {/* Orders Table */}
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Order</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Items</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-750 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-white">{order.id}</div>
                              <div className="text-sm text-gray-400">{order.date}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-white">{order.customer}</div>
                              <div className="text-sm text-gray-400">{order.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-white">
                              {order.items.map((item, index) => (
                                <div key={index} className="mb-1">
                                  {item.name} ({item.size}, {item.color}) x{item.quantity}
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">${order.total}</div>
                            <div className="text-sm text-gray-400">{order.paymentMethod}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button 
                              onClick={() => setSelectedOrder(order)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors flex items-center space-x-1"
                            >
                              <Eye size={14} />
                              <span>View</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Order Details - {selectedOrder.id}</h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              {/* Customer Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Customer Information</h3>
                <div className="bg-gray-700 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-400">Customer Name</div>
                      <div className="text-white font-medium">{selectedOrder.customer}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-medium">{selectedOrder.email}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Order Date</div>
                      <div className="text-white font-medium">{selectedOrder.date}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Payment Method</div>
                      <div className="text-white font-medium">{selectedOrder.paymentMethod}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Order Items</h3>
                <div className="space-y-3">
                  {selectedOrder.items.map((item, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-white">{item.name}</h4>
                          <div className="text-sm text-gray-400">
                            Size: {item.size} • Color: {item.color} • Quantity: {item.quantity}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-medium">${item.price.toFixed(2)} each</div>
                          <div className="text-sm text-gray-400">
                            Total: ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Subtotal:</span>
                  <span className="text-white">${selectedOrder.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Shipping:</span>
                  <span className="text-white">$9.99</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Tax:</span>
                  <span className="text-white">${(selectedOrder.total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-600 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">Total:</span>
                    <span className="text-lg font-bold text-red-400">
                      ${(selectedOrder.total + 9.99 + (selectedOrder.total * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Status */}
              <div className="mt-6 text-center">
                <span className={`inline-flex px-4 py-2 text-sm font-semibold rounded-full ${getStatusColor(selectedOrder.status)}`}>
                  Order Status: {selectedOrder.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {isAddProductModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Add New Product</h2>
              <button
                onClick={() => setIsAddProductModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Product Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                      placeholder="Enter product name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500">
                      <option>Jerseys</option>
                      <option>Footwear</option>
                      <option>Apparel</option>
                      <option>Accessories</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
                    <input
                      type="number"
                      step="0.01"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Stock Quantity</label>
                    <input
                      type="number"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                      placeholder="0"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Available Sizes</label>
                  <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                      <label key={size} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm text-gray-300">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Available Colors</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                    placeholder="e.g., Red, Blue, Black (comma separated)"
                  />
                </div>
                
                <div className="flex items-center justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsAddProductModalOpen(false)}
                    className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-medium transition-colors"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminStoreManagement;