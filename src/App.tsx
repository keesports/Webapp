import React from 'react';
import { Menu, X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import LoginPage from './components/LoginPage';
import AthleteDashboard from './components/AthleteDashboard';
import AthleteProfile from './components/AthleteProfile';
import MessagingPage from './components/MessagingPage';
import MatchStreamsPage from './components/MatchStreamsPage';
import SettingsPage from './components/SettingsPage';
import StorePage from './components/StorePage';
import ScoutDashboard from './components/ScoutDashboard';
import FindPlayerPage from './components/FindPlayerPage';
import ScoutPlayersManagement from './components/ScoutPlayersManagement';
import ScoutMatchStreams from './components/ScoutMatchStreams';
import ScoutMessages from './components/ScoutMessages';
import ScoutSettings from './components/ScoutSettings';
import PlayerProfilePage from './components/PlayerProfilePage';
import AdminDashboard from './components/AdminDashboard';
import AdminOnboardedPlayers from './components/AdminOnboardedPlayers';
import AdminOnboardedScouts from './components/AdminOnboardedScouts';
import AdminMessages from './components/AdminMessages';
import AdminStoreManagement from './components/AdminStoreManagement';
import AdminTransactions from './components/AdminTransactions';
import AdminSubscriptions from './components/AdminSubscriptions';
import AdminSettings from './components/AdminSettings';
import AdminPlayerProfile from './components/AdminPlayerProfile';
import AdminScoutProfile from './components/AdminScoutProfile';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = React.useState(false);
  const [isSignUpDropdownOpen, setIsSignUpDropdownOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState<'home' | 'login' | 'dashboard' | 'profile' | 'messages' | 'match-streams' | 'settings' | 'store' | 'scout-dashboard' | 'find-player' | 'scout-players-management' | 'scout-match-streams' | 'scout-messages' | 'scout-settings' | 'player-profile' | 'admin-dashboard' | 'admin-onboarded-players' | 'admin-onboarded-scouts' | 'admin-messages' | 'admin-store-management' | 'admin-transactions' | 'admin-subscriptions' | 'admin-settings'>('home');
  const [loginUserType, setLoginUserType] = React.useState<'athlete' | 'scout' | 'admin'>('athlete');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = React.useState<string>('1');
  const [selectedScoutId, setSelectedScoutId] = React.useState<string>('1');

  const players = [
    {
      name: "JANE SULEIMAN",
      nationality: "NIGERIA",
      age: 21,
      position: "POINT-GUARD",
      weight: "75 KG",
      height: "180 CM",
      dominantHand: "RIGHT",
      currentTeam: "NONE",
      overallRating: 89,
      stats: {
        pace: 91,
        positioning: 70,
        shooting: 88,
        passing: 85,
        dribbling: 93,
        defending: 70
      },
      image: "https://images.pexels.com/photos/8007401/pexels-photo-8007401.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "SINCLAIR THOMPSON",
      nationality: "NIGERIA", 
      age: 23,
      position: "LEFT - MIDFIELDER",
      weight: "80 KG",
      height: "183 CM",
      dominantFoot: "LEFT",
      currentTeam: "NONE",
      overallRating: 89,
      stats: {
        pace: 91,
        positioning: 70,
        shooting: 88,
        passing: 85,
        dribbling: 93,
        defending: 40
      },
      image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % players.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + players.length) % players.length);
  };

  const getStatColor = (value: number) => {
    if (value >= 85) return 'text-green-400 border-green-400';
    if (value >= 70) return 'text-yellow-400 border-yellow-400';
    if (value >= 50) return 'text-orange-400 border-orange-400';
    return 'text-red-400 border-red-400';
  };

  const currentPlayer = players[currentSlide];

  const handleLoginClick = (userType: 'athlete' | 'scout' | 'admin') => {
    setLoginUserType(userType);
    setCurrentPage('login');
    setIsLoginDropdownOpen(false);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setIsLoggedIn(false);
  };

  const handleNavigateToProfile = () => {
    setCurrentPage('profile');
  };

  const handleNavigateToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleNavigateToMessages = () => {
    setCurrentPage('messages');
  };

  const handleNavigateToMatchStreams = () => {
    setCurrentPage('match-streams');
  };

  const handleNavigateToSettings = () => {
    setCurrentPage('settings');
  };

  const handleNavigateToStore = () => {
    setCurrentPage('store');
  };

  const handleNavigateToFindPlayer = () => {
    setCurrentPage('find-player');
  };

  const handleNavigateToScoutPlayersManagement = () => {
    setCurrentPage('scout-players-management');
  };

  const handleNavigateToScoutMatchStreams = () => {
    setCurrentPage('scout-match-streams');
  };

  const handleNavigateToScoutMessages = () => {
    setCurrentPage('scout-messages');
  };

  const handleNavigateToScoutSettings = () => {
    setCurrentPage('scout-settings');
  };

  const handleNavigateToPlayerProfile = (playerId?: string) => {
    if (playerId) {
      setSelectedPlayerId(playerId);
    }
    setCurrentPage('player-profile');
  };

  const handleNavigateToAdminDashboard = () => {
    setCurrentPage('admin-dashboard');
  };

  const handleNavigateToAdminOnboardedPlayers = () => {
    setCurrentPage('admin-onboarded-players');
  };

  const handleNavigateToAdminOnboardedScouts = () => {
    setCurrentPage('admin-onboarded-scouts');
  };

  const handleNavigateToAdminMessages = () => {
    setCurrentPage('admin-messages');
  };

  const handleNavigateToAdminStoreManagement = () => {
    setCurrentPage('admin-store-management');
  };

  const handleNavigateToAdminTransactions = () => {
    setCurrentPage('admin-transactions');
  };

  const handleNavigateToAdminSubscriptions = () => {
    setCurrentPage('admin-subscriptions');
  };

  const handleNavigateToAdminSettings = () => {
    setCurrentPage('admin-settings');
  };

  const handleNavigateToAdminPlayerProfile = (playerId?: string) => {
    if (playerId) {
      setSelectedPlayerId(playerId);
    }
    setCurrentPage('admin-player-profile');
  };

  const handleNavigateToAdminScoutProfile = (scoutId?: string) => {
    if (scoutId) {
      setSelectedScoutId(scoutId);
    }
    setCurrentPage('admin-scout-profile');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    if (loginUserType === 'athlete') {
      setCurrentPage('dashboard');
    } else if (loginUserType === 'scout') {
      setCurrentPage('scout-dashboard');
    } else if (loginUserType === 'admin') {
      setCurrentPage('admin-dashboard');
    }
  };

  if (currentPage === 'login') {
    return <LoginPage userType={loginUserType} onBack={handleBackToHome} onLogin={handleLogin} />;
  }

  if (currentPage === 'dashboard' && loginUserType === 'athlete') {
    return <AthleteDashboard onBack={handleBackToHome} onNavigateToProfile={handleNavigateToProfile} onNavigateToMessages={handleNavigateToMessages} onNavigateToMatchStreams={handleNavigateToMatchStreams} onNavigateToSettings={handleNavigateToSettings} />;
  }

  if (currentPage === 'profile' && loginUserType === 'athlete') {
    return <AthleteProfile onBack={handleBackToHome} onNavigateToDashboard={handleNavigateToDashboard} onNavigateToMessages={handleNavigateToMessages} onNavigateToMatchStreams={handleNavigateToMatchStreams} onNavigateToSettings={handleNavigateToSettings} />;
  }

  if (currentPage === 'messages' && loginUserType === 'athlete') {
    return <MessagingPage onBack={handleBackToHome} onNavigateToDashboard={handleNavigateToDashboard} onNavigateToProfile={handleNavigateToProfile} onNavigateToMatchStreams={handleNavigateToMatchStreams} onNavigateToSettings={handleNavigateToSettings} />;
  }

  if (currentPage === 'match-streams' && loginUserType === 'athlete') {
    return <MatchStreamsPage onBack={handleBackToHome} onNavigateToDashboard={handleNavigateToDashboard} onNavigateToProfile={handleNavigateToProfile} onNavigateToMessages={handleNavigateToMessages} onNavigateToSettings={handleNavigateToSettings} />;
  }

  if (currentPage === 'settings' && loginUserType === 'athlete') {
    return <SettingsPage onBack={handleBackToHome} onNavigateToDashboard={handleNavigateToDashboard} onNavigateToProfile={handleNavigateToProfile} onNavigateToMessages={handleNavigateToMessages} onNavigateToMatchStreams={handleNavigateToMatchStreams} />;
  }

  if (currentPage === 'store') {
    return <StorePage onBack={handleBackToHome} />;
  }

  if (currentPage === 'scout-dashboard' && loginUserType === 'scout') {
    return <ScoutDashboard 
      onBack={handleBackToHome} 
      onNavigateToFindPlayer={handleNavigateToFindPlayer} 
      onNavigateToPlayersManagement={handleNavigateToScoutPlayersManagement}
      onNavigateToMessages={handleNavigateToScoutMessages}
      onNavigateToMatchStreams={handleNavigateToScoutMatchStreams}
      onNavigateToSettings={handleNavigateToScoutSettings}
    />;
  }

  if (currentPage === 'find-player' && loginUserType === 'scout') {
    return <FindPlayerPage 
      onBack={handleBackToHome} 
      onNavigateToDashboard={() => setCurrentPage('scout-dashboard')}
      onNavigateToPlayersManagement={handleNavigateToScoutPlayersManagement}
      onNavigateToMessages={handleNavigateToScoutMessages}
      onNavigateToMatchStreams={handleNavigateToScoutMatchStreams}
      onNavigateToSettings={handleNavigateToScoutSettings}
      onNavigateToPlayerProfile={handleNavigateToPlayerProfile}
    />;
  }

  if (currentPage === 'scout-players-management' && loginUserType === 'scout') {
    return <ScoutPlayersManagement 
      onBack={handleBackToHome} 
      onNavigateToDashboard={() => setCurrentPage('scout-dashboard')}
      onNavigateToFindPlayer={handleNavigateToFindPlayer}
      onNavigateToMessages={handleNavigateToScoutMessages}
      onNavigateToMatchStreams={handleNavigateToScoutMatchStreams}
      onNavigateToSettings={handleNavigateToScoutSettings}
      onNavigateToPlayerProfile={handleNavigateToPlayerProfile}
    />;
  }

  if (currentPage === 'scout-match-streams' && loginUserType === 'scout') {
    return <ScoutMatchStreams 
      onBack={handleBackToHome} 
      onNavigateToDashboard={() => setCurrentPage('scout-dashboard')}
      onNavigateToFindPlayer={handleNavigateToFindPlayer}
      onNavigateToPlayersManagement={handleNavigateToScoutPlayersManagement}
      onNavigateToMessages={handleNavigateToScoutMessages}
      onNavigateToSettings={handleNavigateToScoutSettings}
    />;
  }

  if (currentPage === 'scout-messages' && loginUserType === 'scout') {
    return <ScoutMessages 
      onBack={handleBackToHome} 
      onNavigateToDashboard={() => setCurrentPage('scout-dashboard')}
      onNavigateToFindPlayer={handleNavigateToFindPlayer}
      onNavigateToPlayersManagement={handleNavigateToScoutPlayersManagement}
      onNavigateToMatchStreams={handleNavigateToScoutMatchStreams}
      onNavigateToSettings={handleNavigateToScoutSettings}
      onNavigateToPlayerProfile={handleNavigateToPlayerProfile}
    />;
  }

  if (currentPage === 'scout-settings' && loginUserType === 'scout') {
    return <ScoutSettings 
      onBack={handleBackToHome} 
      onNavigateToDashboard={() => setCurrentPage('scout-dashboard')}
      onNavigateToFindPlayer={handleNavigateToFindPlayer}
      onNavigateToPlayersManagement={handleNavigateToScoutPlayersManagement}
      onNavigateToMessages={handleNavigateToScoutMessages}
      onNavigateToMatchStreams={handleNavigateToScoutMatchStreams}
    />;
  }

  if (currentPage === 'player-profile' && loginUserType === 'scout') {
    return <PlayerProfilePage 
      onBack={() => setCurrentPage('scout-dashboard')}
      onNavigateToDashboard={() => setCurrentPage('scout-dashboard')}
      onNavigateToFindPlayer={handleNavigateToFindPlayer}
      onNavigateToPlayersManagement={handleNavigateToScoutPlayersManagement}
      onNavigateToMessages={handleNavigateToScoutMessages}
      onNavigateToMatchStreams={handleNavigateToScoutMatchStreams}
      onNavigateToSettings={handleNavigateToScoutSettings}
      playerId={selectedPlayerId}
    />;
  }

  if (currentPage === 'admin-dashboard' && loginUserType === 'admin') {
    return <AdminDashboard 
      onBack={handleBackToHome}
      onNavigateToOnboardedPlayers={handleNavigateToAdminOnboardedPlayers}
      onNavigateToOnboardedScouts={handleNavigateToAdminOnboardedScouts}
      onNavigateToMessages={handleNavigateToAdminMessages}
      onNavigateToStoreManagement={handleNavigateToAdminStoreManagement}
      onNavigateToTransactions={handleNavigateToAdminTransactions}
      onNavigateToSubscriptions={handleNavigateToAdminSubscriptions}
      onNavigateToSettings={handleNavigateToAdminSettings}
    />;
  }

  if (currentPage === 'admin-onboarded-players' && loginUserType === 'admin') {
    return <AdminOnboardedPlayers 
      onBack={handleBackToHome}
      onNavigateToDashboard={handleNavigateToAdminDashboard}
      onNavigateToOnboardedScouts={handleNavigateToAdminOnboardedScouts}
      onNavigateToMessages={handleNavigateToAdminMessages}
      onNavigateToStoreManagement={handleNavigateToAdminStoreManagement}
      onNavigateToTransactions={handleNavigateToAdminTransactions}
      onNavigateToSubscriptions={handleNavigateToAdminSubscriptions}
      onNavigateToSettings={handleNavigateToAdminSettings}
      onNavigateToPlayerProfile={handleNavigateToAdminPlayerProfile}
    />;
  }

  if (currentPage === 'admin-onboarded-scouts' && loginUserType === 'admin') {
    return <AdminOnboardedScouts 
      onBack={handleBackToHome}
      onNavigateToDashboard={handleNavigateToAdminDashboard}
      onNavigateToOnboardedPlayers={handleNavigateToAdminOnboardedPlayers}
      onNavigateToMessages={handleNavigateToAdminMessages}
      onNavigateToStoreManagement={handleNavigateToAdminStoreManagement}
      onNavigateToTransactions={handleNavigateToAdminTransactions}
      onNavigateToSubscriptions={handleNavigateToAdminSubscriptions}
      onNavigateToSettings={handleNavigateToAdminSettings}
      onNavigateToScoutProfile={handleNavigateToAdminScoutProfile}
    />;
  }

  if (currentPage === 'admin-messages' && loginUserType === 'admin') {
    return <AdminMessages 
      onBack={handleBackToHome}
      onNavigateToDashboard={handleNavigateToAdminDashboard}
      onNavigateToOnboardedPlayers={handleNavigateToAdminOnboardedPlayers}
      onNavigateToOnboardedScouts={handleNavigateToAdminOnboardedScouts}
      onNavigateToStoreManagement={handleNavigateToAdminStoreManagement}
      onNavigateToTransactions={handleNavigateToAdminTransactions}
      onNavigateToSubscriptions={handleNavigateToAdminSubscriptions}
      onNavigateToSettings={handleNavigateToAdminSettings}
    />;
  }

  if (currentPage === 'admin-store-management' && loginUserType === 'admin') {
    return <AdminStoreManagement 
      onBack={handleBackToHome}
      onNavigateToDashboard={handleNavigateToAdminDashboard}
      onNavigateToOnboardedPlayers={handleNavigateToAdminOnboardedPlayers}
      onNavigateToOnboardedScouts={handleNavigateToAdminOnboardedScouts}
      onNavigateToMessages={handleNavigateToAdminMessages}
      onNavigateToTransactions={handleNavigateToAdminTransactions}
      onNavigateToSubscriptions={handleNavigateToAdminSubscriptions}
      onNavigateToSettings={handleNavigateToAdminSettings}
    />;
  }

  if (currentPage === 'admin-transactions' && loginUserType === 'admin') {
    return <AdminTransactions 
      onBack={handleBackToHome}
      onNavigateToDashboard={handleNavigateToAdminDashboard}
      onNavigateToOnboardedPlayers={handleNavigateToAdminOnboardedPlayers}
      onNavigateToOnboardedScouts={handleNavigateToAdminOnboardedScouts}
      onNavigateToMessages={handleNavigateToAdminMessages}
      onNavigateToStoreManagement={handleNavigateToAdminStoreManagement}
      onNavigateToSubscriptions={handleNavigateToAdminSubscriptions}
      onNavigateToSettings={handleNavigateToAdminSettings}
    />;
  }

  if (currentPage === 'admin-subscriptions' && loginUserType === 'admin') {
    return <AdminSubscriptions 
      onBack={handleBackToHome}
      onNavigateToDashboard={handleNavigateToAdminDashboard}
      onNavigateToOnboardedPlayers={handleNavigateToAdminOnboardedPlayers}
      onNavigateToOnboardedScouts={handleNavigateToAdminOnboardedScouts}
      onNavigateToMessages={handleNavigateToAdminMessages}
      onNavigateToStoreManagement={handleNavigateToAdminStoreManagement}
      onNavigateToTransactions={handleNavigateToAdminTransactions}
      onNavigateToSettings={handleNavigateToAdminSettings}
    />;
  }

  if (currentPage === 'admin-settings' && loginUserType === 'admin') {
    return <AdminSettings 
      onBack={handleBackToHome}
      onNavigateToDashboard={handleNavigateToAdminDashboard}
      onNavigateToOnboardedPlayers={handleNavigateToAdminOnboardedPlayers}
      onNavigateToOnboardedScouts={handleNavigateToAdminOnboardedScouts}
      onNavigateToMessages={handleNavigateToAdminMessages}
      onNavigateToStoreManagement={handleNavigateToAdminStoreManagement}
      onNavigateToTransactions={handleNavigateToAdminTransactions}
      onNavigateToSubscriptions={handleNavigateToAdminSubscriptions}
    />;
  }

  if (currentPage === 'admin-player-profile' && loginUserType === 'admin') {
    return <AdminPlayerProfile 
      onBack={() => setCurrentPage('admin-onboarded-players')}
      onNavigateToDashboard={handleNavigateToAdminDashboard}
      onNavigateToOnboardedPlayers={handleNavigateToAdminOnboardedPlayers}
      onNavigateToOnboardedScouts={handleNavigateToAdminOnboardedScouts}
      onNavigateToMessages={handleNavigateToAdminMessages}
      onNavigateToStoreManagement={handleNavigateToAdminStoreManagement}
      onNavigateToTransactions={handleNavigateToAdminTransactions}
      onNavigateToSubscriptions={handleNavigateToAdminSubscriptions}
      onNavigateToSettings={handleNavigateToAdminSettings}
      playerId={selectedPlayerId}
    />;
  }

  if (currentPage === 'admin-scout-profile' && loginUserType === 'admin') {
    return <AdminScoutProfile 
      onBack={() => setCurrentPage('admin-onboarded-scouts')}
      onNavigateToDashboard={handleNavigateToAdminDashboard}
      onNavigateToOnboardedPlayers={handleNavigateToAdminOnboardedPlayers}
      onNavigateToOnboardedScouts={handleNavigateToAdminOnboardedScouts}
      onNavigateToMessages={handleNavigateToAdminMessages}
      onNavigateToStoreManagement={handleNavigateToAdminStoreManagement}
      onNavigateToTransactions={handleNavigateToAdminTransactions}
      onNavigateToSubscriptions={handleNavigateToAdminSubscriptions}
      onNavigateToSettings={handleNavigateToAdminSettings}
      scoutId={selectedScoutId}
    />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-900 px-6 py-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src="/keelogo.png" alt="KEE" className="h-12" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors border-b-2 border-blue-500 pb-1">HOME</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">ABOUT US</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">SCOUTING PROGRAM</a>
            <button 
              onClick={handleNavigateToStore}
              className="text-gray-300 hover:text-white transition-colors"
            >
              STORE
            </button>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">CONTACT US</a>
            
            {/* Login Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsLoginDropdownOpen(!isLoginDropdownOpen);
                  setIsSignUpDropdownOpen(false);
                }}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <span>LOGIN</span>
                <ChevronDown size={16} className={`transition-transform ${isLoginDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLoginDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg min-w-[180px] z-50">
                  <button 
                    onClick={() => handleLoginClick('athlete')}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors border-b border-gray-700"
                  >
                    Login as Athlete
                  </button>
                  <button 
                    onClick={() => handleLoginClick('scout')}
                    className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    Login as Scout
                  </button>
                </div>
              )}
            </div>

            {/* Sign Up Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setIsSignUpDropdownOpen(!isSignUpDropdownOpen);
                  setIsLoginDropdownOpen(false);
                }}
                className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <span>SIGN UP</span>
                <ChevronDown size={16} className={`transition-transform ${isSignUpDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSignUpDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-gray-800 border border-gray-700 rounded-lg shadow-lg min-w-[180px] z-50">
                  <a href="#" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors border-b border-gray-700">
                    Sign Up as Athlete
                  </a>
                  <a href="#" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                    Sign Up as Scout
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">HOME</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">ABOUT US</a>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">SCOUTING PROGRAM</a>
            <button 
              onClick={handleNavigateToStore}
              className="block text-left text-gray-300 hover:text-white transition-colors"
            >
              STORE
            </button>
            <a href="#" className="block text-gray-300 hover:text-white transition-colors">CONTACT US</a>
            
            {/* Mobile Login Options */}
            <div className="space-y-2">
              <div className="text-gray-400 text-sm font-semibold">LOGIN</div>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors pl-4">Login as Athlete</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors pl-4">Login as Scout</a>
            </div>
            
            {/* Mobile Sign Up Options */}
            <div className="space-y-2">
              <div className="text-gray-400 text-sm font-semibold">SIGN UP</div>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors pl-4">Sign Up as Athlete</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors pl-4">Sign Up as Scout</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-blue-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                YOUR JOURNEY<br />
                TO THE PROS<br />
                STARTS HERE
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg">
              Showcase your talent, get scouted, and take
              your career to the next level.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors border border-purple-500 w-full sm:w-auto">
              FIND OUT HOW
            </button>
          </div>
          
          {/* Right Content - Player and Stats */}
          <div className="relative flex items-center justify-center order-first lg:order-last">
            {/* Player Image */}
            <div className="relative z-10 w-full max-w-sm lg:max-w-none">
              <img 
                src={currentPlayer.image} 
                alt={currentPlayer.name}
                className="w-full h-[400px] sm:h-[500px] lg:w-96 lg:h-[600px] object-cover object-center rounded-lg lg:rounded-none"
              />
            </div>

            {/* Player Stats Card */}
            <div className="absolute top-4 sm:top-8 right-2 sm:right-0 bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-6 w-64 sm:w-80 z-20 border border-gray-700">
              <div className="text-sm text-gray-400 mb-2">Players Name</div>
              <div className="text-lg sm:text-xl font-bold mb-4 text-white">{currentPlayer.name}</div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Nationality</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-3 bg-green-500 rounded-sm"></div>
                    <span className="text-white font-semibold">{currentPlayer.nationality}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <div className="text-gray-400 text-sm">Age</div>
                    <div className="text-white font-semibold">{currentPlayer.age}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Position</div>
                    <div className="text-white font-semibold">{currentPlayer.position}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <div className="text-gray-400 text-sm">Weight</div>
                    <div className="text-white font-semibold">{currentPlayer.weight}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Height</div>
                    <div className="text-white font-semibold">{currentPlayer.height}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <div className="text-gray-400 text-sm">
                      {currentPlayer.dominantHand ? 'Dominant Hand' : 'Dominant Foot'}
                    </div>
                    <div className="text-white font-semibold">
                      {currentPlayer.dominantHand || currentPlayer.dominantFoot}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Current Team</div>
                    <div className="text-white font-semibold">{currentPlayer.currentTeam}</div>
                  </div>
                </div>
              </div>

              {/* Overall Rating */}
              <div className="text-center mb-6">
                <div className="text-2xl sm:text-4xl font-bold text-blue-400 mb-2">{currentPlayer.overallRating}</div>
                <div className="text-sm text-gray-400">Overall Rating</div>
              </div>

              {/* Stats Circles */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="text-center">
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 flex items-center justify-center mx-auto mb-1 sm:mb-2 ${getStatColor(currentPlayer.stats.pace)}`}>
                    <span className="text-xs sm:text-sm font-bold">{currentPlayer.stats.pace}</span>
                  </div>
                  <div className="text-xs text-gray-400">Pace</div>
                </div>
                <div className="text-center">
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 flex items-center justify-center mx-auto mb-1 sm:mb-2 ${getStatColor(currentPlayer.stats.positioning)}`}>
                    <span className="text-xs sm:text-sm font-bold">{currentPlayer.stats.positioning}</span>
                  </div>
                  <div className="text-xs text-gray-400">Positioning</div>
                </div>
                <div className="text-center">
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 flex items-center justify-center mx-auto mb-1 sm:mb-2 ${getStatColor(currentPlayer.stats.shooting)}`}>
                    <span className="text-xs sm:text-sm font-bold">{currentPlayer.stats.shooting}</span>
                  </div>
                  <div className="text-xs text-gray-400">Shooting</div>
                </div>
                <div className="text-center">
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 flex items-center justify-center mx-auto mb-1 sm:mb-2 ${getStatColor(currentPlayer.stats.passing)}`}>
                    <span className="text-xs sm:text-sm font-bold">{currentPlayer.stats.passing}</span>
                  </div>
                  <div className="text-xs text-gray-400">Passing</div>
                </div>
                <div className="text-center">
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 flex items-center justify-center mx-auto mb-1 sm:mb-2 ${getStatColor(currentPlayer.stats.dribbling)}`}>
                    <span className="text-xs sm:text-sm font-bold">{currentPlayer.stats.dribbling}</span>
                  </div>
                  <div className="text-xs text-gray-400">Dribbling</div>
                </div>
                <div className="text-center">
                  <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 flex items-center justify-center mx-auto mb-1 sm:mb-2 ${getStatColor(currentPlayer.stats.defending)}`}>
                    <span className="text-xs sm:text-sm font-bold">{currentPlayer.stats.defending}</span>
                  </div>
                  <div className="text-xs text-gray-400">Defending</div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-colors z-30"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-colors z-30"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {players.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900/20 to-transparent pointer-events-none"></div>
      </section>

      {/* About Us Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">ABOUT US</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex space-x-3 sm:space-x-6 justify-center lg:justify-start order-last lg:order-first">
              {/* Three athlete placeholders */}
              <div className="w-20 h-32 sm:w-32 sm:h-48 bg-purple-600 rounded-lg"></div>
              <div className="w-20 h-32 sm:w-32 sm:h-48 bg-gray-700 rounded-lg"></div>
              <div className="w-20 h-32 sm:w-32 sm:h-48 bg-teal-500 rounded-lg"></div>
            </div>
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">DISCOVER. EVALUATE. ELEVATE.</h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-center lg:text-left">
                We bridge the gap between raw talent and professional clubs with professional scouts. Our mission is to bridge the gap between raw talent and professional opportunities, providing a comprehensive platform for scouts, athletes, and clubs to connect and thrive.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 text-center lg:text-left">
                Whether you're an athlete looking to be discovered or a scout seeking the next big talent, K2S makes it possible.
              </p>

              {/* Feature boxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">DISCOVER</h4>
                    <p className="text-xs sm:text-sm text-gray-400">Access talent from all levels, connecting upcoming stars with opportunities at professional scouting teams globally.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">EVALUATE</h4>
                    <p className="text-xs sm:text-sm text-gray-400">Comprehensive assessment tools that measure technical skills, marking, and assessing professional development.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700 rounded-lg flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">ELEVATE</h4>
                    <p className="text-xs sm:text-sm text-gray-400">Promote athletes at all levels, connecting them to professional opportunities and bridging gaps across sports.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">HOW IT WORKS</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-full h-24 sm:h-32 bg-gray-800 rounded-lg mb-3 sm:mb-4"></div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">CREATE YOUR PROFILE</h3>
              <p className="text-xs sm:text-sm text-gray-400">Upload your name, age, contact info, position, and club you're playing for.</p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-24 sm:h-32 bg-gray-800 rounded-lg mb-3 sm:mb-4"></div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">SHOWCASE YOUR TALENT</h3>
              <p className="text-xs sm:text-sm text-gray-400">Share videos of your best performances and achievements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-24 sm:h-32 bg-gray-800 rounded-lg mb-3 sm:mb-4"></div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">GET RATED BY EXPERTS</h3>
              <p className="text-xs sm:text-sm text-gray-400">Scout evaluates your ability, speed, physicality, and more.</p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-24 sm:h-32 bg-gray-800 rounded-lg mb-3 sm:mb-4"></div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">GO PRO</h3>
              <p className="text-xs sm:text-sm text-gray-400">Get scouted, build your network, and take the next step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose K2S Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">WHY CHOOSE K2S?</h2>
          
          <div className="space-y-8 sm:space-y-12">
            {/* For Athletes */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-center sm:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-purple-600 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">FOR ATHLETES</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>• Unmatched visibility to professional scouts</li>
                  <li>• Performance-based evaluation system</li>
                  <li>• Direct access to professional clubs</li>
                  <li>• Build a profile that highlights your journey and talent</li>
                </ul>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto flex-shrink-0">
                JOIN NOW
              </button>
            </div>
            
            {/* For Scouts */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-center sm:text-left">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-700 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">FOR SCOUTS</h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                  <li>• Access a diverse pool of talent across sports</li>
                  <li>• Data-driven insights for better evaluations</li>
                  <li>• Simplify talent discovery with detailed player profiles</li>
                </ul>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto flex-shrink-0">
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Take Next Step */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">READY TO TAKE THE NEXT STEP?</h2>
          
          <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
            {/* Five athlete silhouettes */}
            <div className="w-10 h-12 sm:w-16 sm:h-20 bg-yellow-500 rounded-lg"></div>
            <div className="w-10 h-12 sm:w-16 sm:h-20 bg-orange-500 rounded-lg"></div>
            <div className="w-10 h-12 sm:w-16 sm:h-20 bg-orange-400 rounded-lg"></div>
            <div className="w-10 h-12 sm:w-16 sm:h-20 bg-teal-500 rounded-lg"></div>
            <div className="w-10 h-12 sm:w-16 sm:h-20 bg-red-500 rounded-lg"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-8 text-sm sm:text-base">
            <span>• Join free as an Athlete</span>
            <span>• Join free as a Scout</span>
          </div>
          
          <button className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold transition-colors w-full sm:w-auto">
            JOIN NOW
          </button>
        </div>
      </section>

      {/* Stories Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center sm:text-left">STORIES FROM OUR USERS</h2>
            <div className="flex space-x-2">
              <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 sm:p-8">
            <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="w-full lg:w-64 h-32 sm:h-48 bg-gray-700 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <blockquote className="text-lg sm:text-xl mb-4 text-center lg:text-left">
                  "THIS PLATFORM SIMPLIFIED TALENT SCOUTING AND HELPED US FIND EXCEPTIONAL PLAYERS."
                </blockquote>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-sm sm:text-base">MARK REYNOLDS</div>
                    <div className="text-sm text-gray-400">Professional Scout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center lg:text-left">K2S</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center lg:text-left">GET THE LATEST SCOUTING UPDATES!</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-center lg:text-left text-sm sm:text-base">
              Join the free community and stay ahead of the game! Get exclusive scouting insights, athlete spotlights, and industry news delivered directly to your inbox. Don't miss out on the latest trends shaping the future of sports talent discovery.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:border-purple-500 text-sm sm:text-base"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="text-center lg:text-right order-first lg:order-last">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-purple-600 rounded-full mx-auto lg:ml-auto mb-6 sm:mb-8"></div>
            <div className="space-y-3 sm:space-y-4 text-sm">
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-400">info@k2ssports.com</div>
              </div>
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-gray-400">+234 806 999 8588</div>
              </div>
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-gray-400">Lagos, Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm sm:text-base">&copy; Copyright 2024 K2s Sports.</p>
            <button 
              onClick={() => handleLoginClick('admin' as any)}
              className="flex items-center space-x-2 text-gray-500 hover:text-gray-300 transition-colors text-sm"
              title="Admin Login"
            >
              <div className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-xs font-bold">A</span>
              </div>
              <span>Admin</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;