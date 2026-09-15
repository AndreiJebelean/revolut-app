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
      spentAt: '9,96 €',
      from: 'Personal · EUR',
      note: 'Groceries shopping',
      totalSent: '9,96 €'
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
      from: 'Personal · EUR',
      note: 'Transfer',
      phone: '+40 712 345 678',
      totalSent: '25,00 €'
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
      from: 'Personal · EUR',
      note: 'Game purchase',
      card: 'Revolut ··7402',
      totalSent: '36,00 €'
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
      from: 'External Bank Account',
      note: 'Monthly allowance',
      totalSent: '1.000,00 €'
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
      type: 'expense',
      from: 'Personal · EUR'
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
      type: 'expense',
      from: 'Personal · EUR'
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
      from: 'External Bank Account',
      note: 'Transfer',
      totalSent: '100,00 €'
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

            <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 scrollbar-none space-y-6">
              <div className="text-center space-y-1.5 pt-2">
                <p className="text-xs font-semibold text-white/85 tracking-wide">Standard plan</p>
                <h1 className="text-5xl font-black tracking-tight flex items-center justify-center space-x-1.5">
                  <span>💎</span>
                  <span>457</span>
                </h1>
                <div className="pt-2">
                  <button className="px-6 py-2 bg-white/20 hover:bg-white/25 backdrop-blur-md rounded-full text-xs font-bold tracking-wide border border-white/15 transition-colors shadow-sm">
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN: INVEST TAB */}
        {currentScreen === 'invest' && (
          <div className="flex-1 flex flex-col bg-[#0b0e14] text-white z-40 overflow-hidden">
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

            <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 scrollbar-none space-y-6">
              <div className="text-center space-y-1.5 pt-2">
                <h1 className="text-3xl font-extrabold tracking-tight">Grow your wealth</h1>
                <p className="text-xs text-white/60 font-medium">Invest today, from €1</p>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN: CRYPTO TAB */}
        {currentScreen === 'crypto' && (
          <div className="flex-1 flex flex-col bg-[#0b0e14] text-white z-40 overflow-hidden">
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

            <div className="flex-1 overflow-y-auto px-4 pb-28 pt-2 scrollbar-none space-y-6">
              <div className="text-center space-y-1 pt-2">
                <h1 className="text-4xl font-black tracking-tight">
                  0<span className="text-3xl font-bold">, €</span>
                </h1>
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
              {Array.from(new Set(transactions.map(t => t.date))).map((date) => {
                const dayTxs = transactions.filter(t => t.date === date);
                const dayTotal = dayTxs.reduce((acc, t) => {
                  const val = parseFloat(t.amount.replace(' €', '').replace('.', '').replace(',', '.').replace('+', ''));
                  return acc + (t.amount.startsWith('+') ? val : -val);
                }, 0);

                return (
                  <div key={date} className="space-y-3">
                    <div className="flex justify-between items-center text-xs text-neutral-400 font-medium px-1">
                      <span>{date}</span>
                      <span>{dayTotal > 0 ? `+${dayTotal.toFixed(2).replace('.', ',')} €` : `${dayTotal.toFixed(2).replace('.', ',')} €`}</span>
                    </div>

                    {dayTxs.map((tx) => (
                      <div 
                        key={tx.id} 
                        onClick={() => handleOpenDetail(tx)} 
                        className="bg-neutral-900/80 border border-neutral-800/80 rounded-3xl p-4 flex items-center justify-between cursor-pointer hover:bg-neutral-800/80 transition-colors"
                      >
                        <div className="flex items-center space-x-3.5">
                          <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs shadow-sm shrink-0 ${tx.iconBg}`}>
                            {tx.text}
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-white">{tx.name}</h4>
                            <p className="text-[11px] text-neutral-400">{tx.time}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-bold ${tx.type === 'income' ? 'text-emerald-400' : 'text-white'}`}>
                          {tx.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SCREEN 3: TRANSACTION DETAIL VIEW (Exact match to provided screenshot) */}
        {currentScreen === 'transaction-detail' && selectedTx && (
          <div className="flex-1 flex flex-col bg-gradient-to-b from-[#441a3d] via-[#1c1326] to-[#0c0914] text-white z-50 overflow-y-auto px-5 pt-3 pb-28 scrollbar-none space-y-4">
            
            {/* Top Close & Options */}
            <div className="flex items-center justify-between pt-1">
              <button 
                onClick={() => setCurrentScreen('all-transactions')}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Avatar & Main Amount Header */}
            <div className="text-center space-y-1.5 pt-1">
              <div className="relative inline-block">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-xl mx-auto ${selectedTx.iconBg}`}>
                  {selectedTx.text}
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-full flex items-center justify-center border-2 border-[#2b1429] text-white text-[10px]">
                  <span>➔</span>
                </div>
              </div>
              <h2 className="text-sm font-medium text-white/90 pt-1">{selectedTx.name}</h2>
              <h1 className="text-4xl font-extrabold tracking-tight">{selectedTx.amount}</h1>
              <p className="text-xs text-white/50">{selectedTx.date}, {selectedTx.time}</p>
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              <button className="bg-white text-black hover:bg-white/90 rounded-2xl py-3 px-2 flex flex-col items-center justify-center space-y-1 font-bold shadow-lg transition-colors">
                <ArrowRight className="w-4 h-4 transform rotate-[-45deg]" />
                <span className="text-[11px] tracking-tight">Send again</span>
              </button>
              <button className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 rounded-2xl py-3 px-2 flex flex-col items-center justify-center space-y-1 font-bold transition-colors">
                <ArrowLeft className="w-4 h-4 transform rotate-[45deg]" />
                <span className="text-[11px] tracking-tight">Request</span>
              </button>
              <button className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/10 rounded-2xl py-3 px-2 flex flex-col items-center justify-center space-y-1 font-bold transition-colors">
                <Calendar className="w-4 h-4" />
                <span className="text-[11px] tracking-tight">Schedule</span>
              </button>
            </div>

            {/* Note Section (Only if note exists) */}
            {selectedTx.note && (
              <div className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl p-4 space-y-1.5 shadow-xl">
                <span className="text-xs font-medium text-white/60">Note</span>
                <p className="text-xs text-white leading-relaxed">{selectedTx.note}</p>
              </div>
            )}

            {/* Main Info Card */}
            <div className="bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-3xl p-4 space-y-4 shadow-xl text-xs">
              {selectedTx.from && (
                <div className="flex justify-between items-center">
                  <span className="text-white/60">From</span>
                  <span className="font-semibold text-blue-400 flex items-center space-x-1">
                    <span className="font-bold text-white bg-blue-600 w-4 h-4 rounded-xs inline-flex items-center justify-center text-[9px]">R</span> 
                    <span className="text-white">{selectedTx.from}</span>
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-white/60">Confirmation</span>
                <span className="font-semibold text-blue-400 flex items-center space-x-1 cursor-pointer hover:underline">
                  <Download className="w-3.5 h-3.5" /> <span>Download</span>
                </span>
              </div>

              {selectedTx.phone && (
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Phone</span>
                  <span className="font-medium text-white">{selectedTx.phone}</span>
                </div>
              )}

              {selectedTx.location && (
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Location</span>
                  <span className="font-medium text-white">{selectedTx.location}</span>
                </div>
              )}

              {selectedTx.card && (
                <div className="flex justify-between items-center">
                  <span className="text-white/60">Card</span>
                  <span className="font-medium text-white">{selectedTx.card}</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-2 border-t border-white/10">
                <span className="text-white/60">Exclude from analytics</span>
                <div className="w-11 h-6 bg-white/20 rounded-full relative p-0.5 cursor-pointer flex items-center">
                  <div className="w-5 h-5 bg-white rounded-full shadow-md transform translate-x-0"></div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-white/10">
                <span className="text-white/60">Category</span>
                <span className="font-semibold text-blue-400 flex items-center space-x-1.5">
                  <span className="text-white/80">⇄</span> <span className="text-white">{selectedTx.category}</span>
                </span>
              </div>

              {selectedTx.totalSent && (
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-white/60">Total sent</span>
                  <span className="font-bold text-white">{selectedTx.totalSent}</span>
                </div>
              )}
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