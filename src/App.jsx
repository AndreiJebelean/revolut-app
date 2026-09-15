import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  ArrowLeftRight, 
  Building2, 
  MoreHorizontal, 
  CreditCard, 
  Home, 
  TrendingUp, 
  Bitcoin, 
  Award, 
  BarChart3, 
  ChevronRight,
  ArrowLeft,
  SlidersHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
  X,
  Download,
  Calendar,
  AlertTriangle,
  Zap,
  Percent,
  Lightbulb,
  PieChart,
  FileText,
  Layers,
  Camera,
  Sparkles,
  Plane,
  Palmtree,
  Smartphone,
  ShoppingBag
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentScreen, setCurrentScreen] = useState('dashboard'); // 'dashboard', 'all-transactions', 'transaction-detail', 'crypto', 'invest', 'revpoints'
  const [selectedTx, setSelectedTx] = useState(null);
  const [investSubTab, setInvestSubTab] = useState('stocks');

  const transactions = [
    { 
      id: 7, 
      name: 'EDĒKA', 
      category: 'Groceries', 
      date: '27. August', 
      time: '14:46', 
      amount: '-9,96 €', 
      iconBg: 'bg-yellow-400 text-blue-900', 
      text: 'E',
      type: 'expense',
      location: 'Bischofswiese, Germany',
      card: 'Revolut ··7402',
      pointsEarned: '0,13',
      spentAt: '9,96 €'
    },
    { 
      id: 6, 
      name: 'Ana-Maria Cîrstov', 
      category: 'Transfer', 
      date: '17. August', 
      time: '18:46', 
      amount: '-25,00 €', 
      iconBg: 'bg-blue-600 text-white', 
      text: 'AC',
      type: 'expense',
      note: 'Transfer'
    },
    { 
      id: 1, 
      name: 'Steam', 
      category: 'Gaming', 
      date: '15. August', 
      time: '14:20', 
      amount: '-36,00 €', 
      iconBg: 'bg-slate-800 text-sky-400', 
      text: 'S',
      type: 'expense',
      note: 'Game purchase'
    },
    { 
      id: 2, 
      name: 'Andrei Jebelean', 
      category: 'Transfer', 
      date: '2. August', 
      time: '11:05', 
      amount: '+1.000,00 €', 
      iconBg: 'bg-indigo-600 text-white', 
      text: 'AJ',
      subtitle: 'Received via Revolut',
      type: 'income',
      note: 'Monthly allowance'
    },
    { 
      id: 3, 
      name: 'Angela Simona Curilă', 
      category: 'Transfers', 
      date: '5. July', 
      time: '19:20', 
      amount: '-98,00 €', 
      iconBg: 'bg-pink-600 text-white', 
      text: 'AS',
      subtitle: 'Restul',
      note: 'Restul',
      phone: '+40720392116',
      totalSent: '100 €',
      totalTransactions: '2 transactions',
      type: 'expense'
    },
    { 
      id: 4, 
      name: 'Angela Simona Curilă', 
      category: 'Transfers', 
      date: '5. July', 
      time: '19:05', 
      amount: '-2,00 €', 
      iconBg: 'bg-pink-600 text-white', 
      text: 'AS',
      subtitle: 'Ceau! Andrei Jebelean sunt...',
      note: 'Ceau! Andrei Jebelean sunt. Vreau doar sa ma asigur ca asta e numarul corect de telefon. Sa ii dai un mesaj lu mama daca e corect aici!',
      phone: '+40720392116',
      totalSent: '100 €',
      totalTransactions: '2 transactions',
      type: 'expense'
    },
    { 
      id: 5, 
      name: 'Andrei Jebelean', 
      category: 'Transfer', 
      date: '5. July', 
      time: '18:56', 
      amount: '+100,00 €', 
      iconBg: 'bg-indigo-600 text-white', 
      text: 'AJ',
      subtitle: 'Received via Revolut',
      type: 'income',
      note: 'Transfer'
    }
  ];

  const handleOpenDetail = (tx) => {
    if (tx) {
      setSelectedTx(tx);
      setCurrentScreen('transaction-detail');
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'crypto') {
      setCurrentScreen('crypto');
    } else if (tabName === 'home') {
      setCurrentScreen('dashboard');
    } else if (tabName === 'invest') {
      setCurrentScreen('invest');
    } else if (tabName === 'revpoints') {
      setCurrentScreen('revpoints');
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center font-sans antialiased text-white selection:bg-indigo-500">
      
      {/* Mobile Device Frame */}
      <div className="w-full sm:w-[393px] h-screen sm:h-[852px] bg-gradient-to-b from-[#6b33eb] via-[#5123cc] to-[#120638] sm:rounded-[48px] sm:ring-8 sm:ring-slate-900 flex flex-col relative overflow-hidden shadow-2xl">
        
        {/* SCREEN 1: DASHBOARD */}
        {currentScreen === 'dashboard' && (
          <>
            <div className="px-5 pt-4 pb-3 flex items-center justify-between z-40 shrink-0 gap-3">
              <div className="relative">
                <button className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-slate-950 font-bold shadow-md">
                  AJ
                </button>
                <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-[#6b33eb] rounded-full"></span>
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/70">
                  <Search className="w-4 h-4" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full bg-white/15 backdrop-blur-md rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-white/70 border border-white/10 focus:outline-none"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                  <BarChart3 className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                  <CreditCard className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-28 pt-2 px-4 scrollbar-none space-y-6">
              <div className="text-center space-y-1 pt-2">
                <p className="text-xs font-medium text-white/85 tracking-wide">Personal · EUR</p>
                <h1 className="text-4xl font-black tracking-tight">
                  8.557<span className="text-3xl font-bold">,82 €</span>
                </h1>
                <div className="flex items-center justify-center space-x-1.5 text-xs text-white/80 pt-0.5">
                  <Building2 className="w-3.5 h-3.5 opacity-80" />
                  <span className="tracking-wider text-[11px]">LT51 3250 0750 9642 3719</span>
                </div>
              </div>

              <div className="flex justify-center">
                <button className="px-6 py-2 bg-white/20 hover:bg-white/25 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide border border-white/15 transition-colors shadow-sm">
                  Accounts
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center pt-1">
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/15 shadow-md">
                    <Plus className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-white">Add money</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/15 shadow-md">
                    <ArrowLeftRight className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-medium text-white">Move</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/15 shadow-md">
                    <Building2 className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-medium text-white">Details</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/15 shadow-md">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-medium text-white">More</span>
                </div>
              </div>

              <div 
                onClick={() => { setActiveTab('payments'); setCurrentScreen('all-transactions'); }}
                className="bg-slate-900/40 backdrop-blur-xl rounded-3xl p-4 border border-white/15 space-y-4 shadow-lg cursor-pointer hover:bg-slate-900/60 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider">Transactions</h3>
                  <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>

                {transactions.slice(0, 2).map((tx) => (
                  <div key={tx.id} onClick={(e) => { e.stopPropagation(); handleOpenDetail(tx); }} className="flex items-center justify-between hover:bg-white/5 p-1 rounded-xl transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-sm shrink-0 ${tx.iconBg}`}>
                        {tx.text}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{tx.name}</h4>
                        <p className="text-[10px] text-white/60">{tx.date}, {tx.time}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold ${tx.type === 'income' ? 'text-emerald-400' : 'text-white'}`}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* SCREEN: REVPOINTS TAB */}
        {currentScreen === 'revpoints' && (
          <div className="flex-1 flex flex-col bg-gradient-to-b from-[#6b33eb] via-[#5123cc] to-[#120638] text-white z-40 overflow-hidden">
            
            {/* Top Bar */}
            <div className="px-5 pt-4 pb-3 flex items-center justify-between z-40 shrink-0 gap-3">
              <div className="relative">
                <button className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-slate-950 font-bold shadow-md">
                  AJ
                </button>
                <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-[#6b33eb] rounded-full"></span>
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/70">
                  <Search className="w-4 h-4" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full bg-white/20 backdrop-blur-md rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-white/70 border border-white/10 focus:outline-none"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                  <CreditCard className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable RevPoints Content */}
            <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 scrollbar-none space-y-6">
              
              {/* Header Balance View */}
              <div className="text-center space-y-1.5 pt-2">
                <p className="text-xs font-semibold text-white/85 tracking-wide">Standard plan</p>
                <h1 className="text-5xl font-black tracking-tight flex items-center justify-center space-x-1.5">
                  <span>💎</span>
                  <span>457</span>
                </h1>
                
                {/* Upgrade Button */}
                <div className="pt-2">
                  <button className="px-6 py-2 bg-white/20 hover:bg-white/25 backdrop-blur-md rounded-full text-xs font-bold tracking-wide border border-white/15 transition-colors shadow-sm">
                    Upgrade
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-4 gap-2 text-center pt-1">
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/15 shadow-md">
                    <Plus className="w-6 h-6" />
                  </button>
                  <span className="text-[11px] font-medium text-white">Earn</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/15 shadow-md">
                    <Award className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-medium text-white">Redeem</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/15 shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-medium text-white">Plan perks</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/15 shadow-md">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-medium text-white">More</span>
                </div>
              </div>

              {/* Promo Banner Carousel Card */}
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-4 border border-white/15 space-y-3 shadow-lg relative">
                <div className="flex justify-between items-start">
                  <div className="space-y-1 max-w-[210px]">
                    <h3 className="text-sm font-bold text-white">Your wallet, race-ready</h3>
                    <p className="text-[11px] text-white/70 leading-relaxed">Get the Audi Revolut F1® Team virtual cards for 500 points</p>
                  </div>
                  <div className="relative shrink-0 w-20 h-14">
                    <div className="w-14 h-10 bg-gradient-to-r from-red-600 to-black rounded-lg absolute right-0 top-2 border border-white/20 shadow-md transform rotate-6"></div>
                    <div className="w-14 h-10 bg-gradient-to-r from-slate-800 to-black rounded-lg absolute right-4 top-0 border border-white/20 shadow-md"></div>
                  </div>
                </div>
                <div className="flex justify-center space-x-1.5 pt-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                </div>
              </div>

              {/* Products Section */}
              <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-4 space-y-4 shadow-lg">
                <h3 className="text-xs font-bold text-white tracking-wider">Products</h3>

                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="flex flex-col items-center space-y-1.5">
                    <button className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-md">
                      <Plane className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-white/90">Miles</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1.5">
                    <button className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-md">
                      <Palmtree className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-white/90">Stays</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1.5">
                    <button className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-md">
                      <Smartphone className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-white/90">eSIM</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1.5">
                    <button className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shadow-md">
                      <ShoppingBag className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-white/90">Shops</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SCREEN: INVEST TAB */}
        {currentScreen === 'invest' && (
          <div className="flex-1 flex flex-col bg-[#0b0e14] text-white z-40 overflow-hidden">
            
            {/* Top Bar */}
            <div className="px-5 pt-4 pb-3 flex items-center justify-between z-40 shrink-0 gap-3 bg-[#0b0e14]">
              <div className="relative">
                <button className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-slate-950 font-bold shadow-md">
                  AJ
                </button>
                <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-[#0b0e14] rounded-full"></span>
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/70">
                  <Search className="w-4 h-4" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full bg-white/10 backdrop-blur-md rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-white/70 border border-white/5 focus:outline-none"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/5">
                  <BarChart3 className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/5">
                  <span className="text-xs font-bold">🌐</span>
                </button>
              </div>
            </div>

            {/* Scrollable Invest Content */}
            <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 scrollbar-none space-y-6">
              
              {/* Header */}
              <div className="text-center space-y-1.5 pt-2">
                <h1 className="text-3xl font-extrabold tracking-tight">Grow your wealth</h1>
                <p className="text-xs text-white/60 font-medium">Invest today, from €1</p>
              </div>

              {/* Start Investing Button */}
              <div className="pt-1">
                <button className="w-full bg-[#1b2233] hover:bg-[#252e42] text-white border border-white/10 rounded-full py-3.5 text-xs font-bold tracking-wide shadow-md transition-colors">
                  Start investing
                </button>
              </div>

              {/* Info Features Box */}
              <div className="bg-[#141824] border border-white/5 rounded-3xl p-5 space-y-4 shadow-lg">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Invest in the brands you love</h3>
                    <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">Choose from 4,000+ stocks</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Percent className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Save on trading fees</h3>
                    <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">0% commission trading i.e. no order execution fees within your plan limits. <span className="text-indigo-400 font-medium cursor-pointer">Other fees</span> e.g. FX fees may apply</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Investing made simple</h3>
                    <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">From automated strategies to recurring buys, we’ll help you invest at your own pace</p>
                  </div>
                </div>
              </div>

              {/* Popular First Time Buys */}
              <div className="bg-[#141824] border border-white/5 rounded-3xl p-4 space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-white tracking-wider flex items-center space-x-1">
                    <span>Popular first-time buys</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/50" />
                  </h3>
                </div>

                {/* Stocks / ETFs Tab Toggle */}
                <div className="bg-[#0b0e14] p-1 rounded-full flex text-xs font-semibold">
                  <button 
                    onClick={() => setInvestSubTab('stocks')}
                    className={`flex-1 py-1.5 rounded-full text-center transition-colors ${investSubTab === 'stocks' ? 'bg-[#1f2430] text-white shadow-sm' : 'text-white/50'}`}
                  >
                    Stocks
                  </button>
                  <button 
                    onClick={() => setInvestSubTab('etfs')}
                    className={`flex-1 py-1.5 rounded-full text-center transition-colors ${investSubTab === 'etfs' ? 'bg-[#1f2430] text-white shadow-sm' : 'text-white/50'}`}
                  >
                    ETFs
                  </button>
                </div>

                {/* Stock Grid Cards */}
                <div className="grid grid-cols-4 gap-3 pt-1">
                  <div className="flex flex-col items-center space-y-1.5 p-2 bg-[#0b0e14]/60 rounded-2xl border border-white/5">
                    <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center font-bold shadow-md border border-white/10">
                      <div className="w-6 h-6 bg-emerald-500 rounded-xs transform rotate-45 flex items-center justify-center text-[10px] text-black font-black">N</div>
                    </div>
                    <span className="text-[11px] font-bold text-white">NVDA</span>
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center space-x-0.5">
                      <span>▲</span> <span>0,75 %</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-1.5 p-2 bg-[#0b0e14]/60 rounded-2xl border border-white/5">
                    <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center font-bold shadow-md border border-white/10 text-[9px] text-white tracking-tighter">
                      SPCX
                    </div>
                    <span className="text-[11px] font-bold text-white">SPCX</span>
                    <span className="text-[10px] text-rose-500 font-semibold flex items-center space-x-0.5">
                      <span>▼</span> <span>1,25 %</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-1.5 p-2 bg-[#0b0e14]/60 rounded-2xl border border-white/5">
                    <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center font-bold shadow-md border border-white/10 text-white text-base">
                      
                    </div>
                    <span className="text-[11px] font-bold text-white">AAPL</span>
                    <span className="text-[10px] text-rose-500 font-semibold flex items-center space-x-0.5">
                      <span>▼</span> <span>1,09 %</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-1.5 p-2 bg-[#0b0e14]/60 rounded-2xl border border-white/5">
                    <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center font-bold shadow-md border border-white/10 text-amber-400 text-[10px]">
                      amazon
                    </div>
                    <span className="text-[11px] font-bold text-white">AMZN</span>
                    <span className="text-[10px] text-rose-500 font-semibold flex items-center space-x-0.5">
                      <span>▼</span> <span>1,33 %</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-1.5 p-2 bg-[#0b0e14]/60 rounded-2xl border border-white/5">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center font-bold shadow-md text-blue-900 text-xs tracking-tighter">
                      T2
                    </div>
                    <span className="text-[11px] font-bold text-white">TTWO</span>
                    <span className="text-[10px] text-rose-500 font-semibold flex items-center space-x-0.5">
                      <span>▼</span> <span>2,77 %</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-1.5 p-2 bg-[#0b0e14]/60 rounded-2xl border border-white/5">
                    <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center font-bold shadow-md text-white text-base">
                      T
                    </div>
                    <span className="text-[11px] font-bold text-white">TSLA</span>
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center space-x-0.5">
                      <span>▲</span> <span>0,14 %</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-1.5 p-2 bg-[#0b0e14]/60 rounded-2xl border border-white/5">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center font-bold shadow-md overflow-hidden p-2">
                      <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                        <div className="bg-red-500"></div>
                        <div className="bg-green-500"></div>
                        <div className="bg-blue-500"></div>
                        <div className="bg-yellow-500"></div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-white">MSFT</span>
                    <span className="text-[10px] text-rose-500 font-semibold flex items-center space-x-0.5">
                      <span>▼</span> <span>1,29 %</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-1.5 p-2 bg-[#0b0e14]/60 rounded-2xl border border-white/5">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center font-bold shadow-md text-blue-600">
                      <div className="w-5 h-5 bg-blue-600 transform rotate-45 rounded-xs"></div>
                    </div>
                    <span className="text-[11px] font-bold text-white">RHM</span>
                    <span className="text-[10px] text-emerald-400 font-semibold flex items-center space-x-0.5">
                      <span>▲</span> <span>2,48 %</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Watchlist Section */}
              <div className="bg-[#141824] border border-white/5 rounded-3xl p-4 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-white tracking-wider flex items-center space-x-1">
                    <span>Watchlist</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/50" />
                  </h3>
                </div>

                <div className="flex items-center space-x-3 py-2 cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                    <Plus className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-white">Add to watchlist</span>
                </div>
              </div>

              {/* Products Section */}
              <div className="bg-[#141824] border border-white/5 rounded-3xl p-4 space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-white tracking-wider flex items-center space-x-1">
                    <span>Products</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/50" />
                  </h3>
                </div>

                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="flex flex-col items-center space-y-1.5">
                    <button className="w-14 h-14 rounded-2xl bg-[#1f2430] border border-white/5 flex items-center justify-center text-white shadow-md">
                      <TrendingUp className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-white/90">Stocks</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1.5">
                    <button className="w-14 h-14 rounded-2xl bg-[#1f2430] border border-white/5 flex items-center justify-center text-white shadow-md">
                      <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </button>
                    <span className="text-[11px] font-medium text-white/90">Robo-Advisor</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1.5">
                    <button className="w-14 h-14 rounded-2xl bg-[#1f2430] border border-white/5 flex items-center justify-center text-white shadow-md">
                      <PieChart className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-white/90">ETFs</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1.5">
                    <button className="w-14 h-14 rounded-2xl bg-[#1f2430] border border-white/5 flex items-center justify-center text-white shadow-md">
                      <Building2 className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-white/90">Bonds</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1.5 pt-1">
                    <button className="w-14 h-14 rounded-2xl bg-[#1f2430] border border-white/5 flex items-center justify-center text-white shadow-md">
                      <FileText className="w-6 h-6" />
                    </button>
                    <span className="text-[11px] font-medium text-white/90">CFDs</span>
                  </div>
                  <div className="flex flex-col items-center space-y-1.5 pt-1">
                    <button className="w-14 h-14 rounded-2xl bg-[#1f2430] border border-white/5 flex items-center justify-center text-white shadow-md">
                      <div className="grid grid-cols-2 gap-1 w-4 h-4">
                        <div className="bg-white rounded-2xs"></div>
                        <div className="bg-white rounded-2xs"></div>
                        <div className="bg-white rounded-2xs"></div>
                        <div className="bg-white rounded-2xs"></div>
                      </div>
                    </button>
                    <span className="text-[11px] font-medium text-white/90">Private markets</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SCREEN: CRYPTO TAB */}
        {currentScreen === 'crypto' && (
          <div className="flex-1 flex flex-col bg-[#0b0e14] text-white z-40 overflow-hidden">
            
            {/* Top Bar */}
            <div className="px-5 pt-4 pb-3 flex items-center justify-between z-40 shrink-0 gap-3 bg-[#0b0e14]">
              <div className="relative">
                <button className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center text-slate-950 font-bold shadow-md">
                  AJ
                </button>
                <span className="absolute top-0 right-0 w-3 h-3 bg-rose-500 border-2 border-[#0b0e14] rounded-full"></span>
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/70">
                  <Search className="w-4 h-4" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full bg-white/10 backdrop-blur-md rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-white/70 border border-white/5 focus:outline-none"
                />
              </div>

              <div className="flex items-center space-x-2">
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/5">
                  <BarChart3 className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/5">
                  <CreditCard className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Crypto Content */}
            <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 scrollbar-none space-y-6">
              
              <div className="text-center space-y-1 pt-2">
                <h1 className="text-4xl font-black tracking-tight">
                  0<span className="text-3xl font-bold">, €</span>
                </h1>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center pt-1">
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/5 shadow-md">
                    <TrendingUp className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-medium text-white/90">Trade</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/5 shadow-md">
                    <ArrowLeft className="w-5 h-5 transform rotate-45" />
                  </button>
                  <span className="text-[11px] font-medium text-white/90">Receive</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/5 shadow-md">
                    <ArrowRight className="w-5 h-5 transform rotate-[-45deg]" />
                  </button>
                  <span className="text-[11px] font-medium text-white/90">Send</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5">
                  <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/5 shadow-md">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                  <span className="text-[11px] font-medium text-white/90">More</span>
                </div>
              </div>

              <div className="bg-[#141824] border border-white/5 rounded-3xl p-4 space-y-3 shadow-lg">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">Action required</h3>
                    <p className="text-[11px] text-white/60 leading-relaxed mt-0.5">We will ask you a few questions before you can continue trading</p>
                  </div>
                </div>
                <button className="w-full bg-white text-slate-950 rounded-full py-3 text-xs font-bold tracking-wide shadow-md hover:bg-white/90 transition-colors">
                  Get started
                </button>
              </div>

            </div>
          </div>
        )}

        {/* SCREEN 2: ALL TRANSACTIONS */}
        {currentScreen === 'all-transactions' && (
          <div className="flex-1 flex flex-col bg-black text-white z-40 overflow-hidden">
            <div className="px-5 pt-4 pb-2 space-y-3 bg-black">
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => { setCurrentScreen('dashboard'); setActiveTab('home'); }}
                  className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors">
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-tight">8.557<span className="text-xl">,82 €</span></h1>
                <p className="text-xs text-neutral-400 mt-0.5">Current balance</p>
              </div>

              <div className="relative pt-1">
                <Search className="absolute left-3.5 top-4 w-4 h-4 text-neutral-400" />
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="w-full bg-neutral-900 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 border border-neutral-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pt-2 pb-32 space-y-6 scrollbar-none">
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs text-neutral-400 font-medium">
                  <span>27. August</span>
                  <span>-9,96 €</span>
                </div>
                <div onClick={() => handleOpenDetail(transactions[0])} className="bg-neutral-900/80 border border-neutral-800/80 rounded-3xl p-4 flex items-center justify-between cursor-pointer hover:bg-neutral-800/80 transition-colors">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-black text-sm shadow-sm shrink-0">E</div>
                    <div>
                      <h4 className="text-xs font-bold text-white">EDĒKA</h4>
                      <p className="text-[11px] text-neutral-400">14:46</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white">-9,96 €</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs text-neutral-400 font-medium">
                  <span>17. August</span>
                  <span>-25 €</span>
                </div>
                <div onClick={() => handleOpenDetail(transactions[1])} className="bg-neutral-900/80 border border-neutral-800/80 rounded-3xl p-4 flex items-center justify-between cursor-pointer hover:bg-neutral-800/80 transition-colors">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm shrink-0 relative">
                      AC
                      <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5 border border-neutral-900">
                        <ArrowDownRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Ana-Maria Cîrstov</h4>
                      <p className="text-[11px] text-neutral-400">18:46</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white">-25,00 €</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SCREEN 3: TRANSACTION DETAIL VIEW */}
        {currentScreen === 'transaction-detail' && selectedTx && (
          <div className="flex-1 flex flex-col bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white z-50 overflow-y-auto px-5 pt-4 pb-28 scrollbar-none space-y-4">
            
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setCurrentScreen('all-transactions')}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center space-y-2 pt-2">
              <div className="relative inline-block">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg mx-auto ${selectedTx.iconBg}`}>
                  {selectedTx.text}
                </div>
              </div>
              <h2 className="text-sm font-semibold text-white/90">{selectedTx.name}</h2>
              <h1 className="text-4xl font-extrabold tracking-tight">{selectedTx.amount}</h1>
              <p className="text-xs text-neutral-400">{selectedTx.date}, {selectedTx.time}</p>
            </div>

          </div>
        )}

        {/* Bottom Floating Navigation Bar */}
        <div className="absolute bottom-3 left-3 right-3 h-16 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-full flex justify-around items-center px-4 z-50 shadow-2xl">
          <button 
            onClick={() => handleTabClick('home')}
            className={`flex flex-col items-center space-y-0.5 ${activeTab === 'home' ? 'text-white font-bold' : 'text-white/50 hover:text-white/80'}`}
          >
            <div className={`px-4 py-1.5 rounded-full ${activeTab === 'home' ? 'bg-white/15 border border-white/10 shadow-sm flex items-center space-x-1.5' : ''}`}>
              <Home className="w-4 h-4" />
              {activeTab === 'home' && <span className="text-[10px] tracking-tight">Home</span>}
            </div>
            {activeTab !== 'home' && <span className="text-[9px] tracking-tight">Home</span>}
          </button>
          
          <button 
            onClick={() => handleTabClick('invest')}
            className={`flex flex-col items-center space-y-0.5 ${activeTab === 'invest' ? 'text-white font-bold' : 'text-white/50 hover:text-white/80'}`}
          >
            <div className={`px-3 py-1.5 rounded-full ${activeTab === 'invest' ? 'bg-white/15 border border-white/10 shadow-sm flex items-center space-x-1' : ''}`}>
              <TrendingUp className="w-4 h-4" />
              {activeTab === 'invest' && <span className="text-[10px] tracking-tight">Invest</span>}
            </div>
            {activeTab !== 'invest' && <span className="text-[9px] tracking-tight">Invest</span>}
          </button>

          <button 
            onClick={() => { setActiveTab('payments'); setCurrentScreen('all-transactions'); }}
            className={`flex flex-col items-center space-y-0.5 ${activeTab === 'payments' ? 'text-white font-bold' : 'text-white/50 hover:text-white/80'}`}
          >
            <div className={`px-3 py-1 rounded-full ${activeTab === 'payments' ? 'bg-white/15 border border-white/10 shadow-sm' : ''}`}>
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <span className="text-[9px] tracking-tight">Payments</span>
          </button>

          <button 
            onClick={() => handleTabClick('crypto')}
            className={`flex flex-col items-center space-y-0.5 ${activeTab === 'crypto' ? 'text-white font-bold' : 'text-white/50 hover:text-white/80'}`}
          >
            <div className={`px-3 py-1.5 rounded-full ${activeTab === 'crypto' ? 'bg-white/15 border border-white/10 shadow-sm flex items-center space-x-1' : ''}`}>
              <Bitcoin className="w-4 h-4" />
              {activeTab === 'crypto' && <span className="text-[10px] tracking-tight">Crypto</span>}
            </div>
            {activeTab !== 'crypto' && <span className="text-[9px] tracking-tight">Crypto</span>}
          </button>

          <button 
            onClick={() => handleTabClick('revpoints')}
            className={`flex flex-col items-center space-y-0.5 ${activeTab === 'revpoints' ? 'text-white font-bold' : 'text-white/50 hover:text-white/80'}`}
          >
            <div className={`px-3 py-1.5 rounded-full ${activeTab === 'revpoints' ? 'bg-white/15 border border-white/10 shadow-sm flex items-center space-x-1' : ''}`}>
              <Award className="w-4 h-4" />
              {activeTab === 'revpoints' && <span className="text-[10px] tracking-tight">RevPoints</span>}
            </div>
            {activeTab !== 'revpoints' && <span className="text-[9px] tracking-tight">RevPoints</span>}
          </button>
        </div>

      </div>
    </div>
  );
}