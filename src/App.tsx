/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wallet, 
  Users, 
  Receipt, 
  ArrowRight, 
  Plus, 
  Bell, 
  ChevronRight, 
  Plane, 
  Home as HomeIcon, 
  Utensils, 
  Fuel, 
  ShoppingBag, 
  CreditCard,
  Settings,
  ArrowLeft,
  Camera,
  Mail,
  Lock,
  User,
  Eye,
  X,
  History,
  UserCircle,
  ShieldCheck,
  HelpCircle,
  LogOut,
  CheckCircle2,
  Zap,
  LayoutGrid
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { GlassCard } from './components/ui/GlassCard';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';

// --- Types ---

type Screen = 'onboarding' | 'signup' | 'signin' | 'home' | 'project-details' | 'create-group' | 'add-expense' | 'settle-up' | 'profile';

// --- Mock Data ---

const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuBAEomdq_abv3ogU9EED1-lcqZD_MZa-fNdha-hO9-Rf_P9Ni1yQA-e9fJ1sbmLJw6Ug5qy2xq8rZJBLER4gNlLhaplqlfdRqPzWhiiB8eK3A_XvxfcAixG7aLqDvMX7iYhXTtvnXJq6ADTj9uLvAFw1WGRldehdjYZNF4BXtVvIajtEsODGJrfiNPOimUZlU07kZqQmPI7AUYUBEvoJjQz-hzgaSErjKp--5pTIrfX_j7wbxYjONu1MRxZqqDAMO3OoFfUA7mulA";

const PROJECTS = [
  {
    id: '1',
    name: "Summer Trip '24",
    participants: 6,
    icon: <Plane className="w-5 h-5 text-primary" />,
    iconBg: 'bg-primary/20',
    avatars: [
      "https://picsum.photos/seed/p1/100/100",
      "https://picsum.photos/seed/p2/100/100",
      "https://picsum.photos/seed/p3/100/100"
    ]
  },
  {
    id: '2',
    name: "Apartment Expenses",
    participants: 3,
    icon: <HomeIcon className="w-5 h-5 text-secondary" />,
    iconBg: 'bg-secondary/20',
    avatars: [
      "https://picsum.photos/seed/p4/100/100",
      "https://picsum.photos/seed/p5/100/100"
    ]
  }
];

const ACTIVITY = [
  {
    id: '1',
    title: 'Sushi Dinner',
    amount: -45.00,
    paidBy: 'Alex M.',
    time: '2h ago',
    icon: <Utensils className="w-5 h-5" />,
    iconBg: 'bg-orange-50 text-orange-600'
  },
  {
    id: '2',
    title: 'Gas for Trip',
    amount: 82.50,
    paidBy: 'You',
    time: 'Yesterday',
    icon: <Fuel className="w-5 h-5" />,
    iconBg: 'bg-blue-50 text-blue-600'
  },
  {
    id: '3',
    title: 'Grocery Run',
    amount: -24.00,
    paidBy: 'Sarah K.',
    time: '2 days ago',
    icon: <ShoppingBag className="w-5 h-5" />,
    iconBg: 'bg-purple-50 text-purple-600'
  }
];

// --- Components ---

const BottomNav = ({ current, setScreen }: { current: Screen, setScreen: (s: Screen) => void }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'project-details', label: 'Projects', icon: LayoutGrid },
    { id: 'profile', label: 'Profile', icon: UserCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-8 pb-8 pt-4 bg-white/80 backdrop-blur-2xl z-50 rounded-t-[32px] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = current === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setScreen(tab.id as Screen)}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-300",
              isActive ? "bg-primary/10 text-primary rounded-full px-5 py-1.5 scale-110" : "text-label-tertiary hover:text-primary"
            )}
          >
            <Icon className={cn("w-6 h-6", isActive && "fill-primary")} />
            <span className="text-[11px] font-medium mt-0.5">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

// --- Screens ---

const Onboarding = ({ onNext, onSignIn }: { onNext: () => void, onSignIn: () => void }) => (
  <div className="flex flex-col min-h-screen">
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-secondary/15 blur-[100px]" />
    </div>
    
    <div className="relative z-10 flex-1 flex flex-col px-8 pt-20 pb-12">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-2xl shadow-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <Wallet className="w-8 h-8 text-white relative z-10" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary">Balance</h1>
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="text-6xl font-bold leading-[1.05] tracking-tight text-label-primary">
          Splitting <br/>made <span className="text-primary italic">seamless.</span>
        </h2>
        <p className="text-label-secondary text-xl leading-relaxed max-w-[90%]">
          Experience the future of shared finances with liquid-clear transparency.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-12">
        <GlassCard className="h-32 flex flex-col justify-end">
          <Users className="w-6 h-6 text-primary mb-2" />
          <p className="text-xs font-semibold uppercase tracking-widest text-label-secondary">Groups</p>
        </GlassCard>
        <GlassCard className="h-44 flex flex-col justify-end translate-y-[-2rem]">
          <Receipt className="w-6 h-6 text-secondary mb-2" />
          <p className="text-xs font-semibold uppercase tracking-widest text-label-secondary">Scanning</p>
        </GlassCard>
        <GlassCard className="col-span-2 h-24 flex items-center justify-between translate-y-[-2rem] bg-white/80">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="https://picsum.photos/seed/user1/100/100" alt="User" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold">Recent split</p>
              <p className="text-xs text-label-secondary">Dinner with Sarah</p>
            </div>
          </div>
          <p className="text-primary font-bold">+$42.50</p>
        </GlassCard>
      </div>

      <div className="mt-auto space-y-4">
        <Button size="xl" className="w-full" onClick={onNext}>Get Started</Button>
        <Button variant="secondary" size="xl" className="w-full" onClick={onSignIn}>Sign In</Button>
        <p className="text-center text-[10px] text-label-tertiary mt-2">
          By continuing, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  </div>
);

const SignUp = ({ onBack, onComplete }: { onBack: () => void, onComplete: () => void }) => (
  <div className="min-h-screen flex flex-col p-6">
    <header className="flex justify-between items-center py-4 mb-8">
      <div className="text-xl font-bold tracking-tight text-primary">Balance</div>
      <button onClick={onBack} className="p-2 hover:bg-surface-secondary rounded-full transition-colors">
        <X className="w-6 h-6 text-label-secondary" />
      </button>
    </header>

    <main className="flex-1 max-w-md mx-auto w-full">
      <GlassCard className="rounded-[40px] p-8">
        <div className="flex flex-col items-center mb-10">
          <div className="relative group cursor-pointer">
            <div className="w-28 h-28 rounded-full bg-surface-secondary flex items-center justify-center border-2 border-dashed border-label-tertiary overflow-hidden hover:border-primary transition-colors">
              <Camera className="w-10 h-10 text-label-tertiary" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <Plus className="w-4 h-4 text-white" />
            </div>
          </div>
          <h1 className="mt-6 text-[32px] font-bold tracking-tight text-label-primary leading-tight">Create Account</h1>
          <p className="text-label-secondary text-sm mt-2">Join Balance to sync your life.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onComplete(); }}>
          <Input label="Full Name" placeholder="John Doe" icon={<User className="w-5 h-5" />} />
          <Input label="Email Address" placeholder="john@example.com" icon={<Mail className="w-5 h-5" />} />
          <Input label="Password" type="password" placeholder="••••••••" icon={<Lock className="w-5 h-5" />} />
          
          <div className="flex items-start gap-3 py-2 px-1">
            <input type="checkbox" className="w-5 h-5 rounded-md border-label-tertiary text-primary focus:ring-primary/20 mt-0.5" />
            <p className="text-[12px] text-label-secondary leading-relaxed">
              I agree to the <span className="text-primary font-medium">Terms of Service</span> and <span className="text-primary font-medium">Privacy Policy</span>.
            </p>
          </div>

          <Button size="xl" className="w-full mt-4" type="submit">
            Sign Up <ArrowRight className="w-5 h-5" />
          </Button>
        </form>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 w-full">
            <div className="h-[1px] bg-label-tertiary/20 flex-grow" />
            <span className="text-[11px] font-medium text-label-tertiary uppercase tracking-widest">Or connect with</span>
            <div className="h-[1px] bg-label-tertiary/20 flex-grow" />
          </div>
          <div className="flex gap-4 w-full">
            <Button variant="secondary" className="flex-1 py-3">
              <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
            </Button>
            <Button variant="secondary" className="flex-1 py-3">
              <span className="font-bold">iOS</span>
            </Button>
          </div>
        </div>
      </GlassCard>
      
      <p className="text-center mt-8 text-label-secondary font-medium">
        Already have an account? <button onClick={onBack} className="text-primary font-bold hover:underline">Log In</button>
      </p>
    </main>
  </div>
);

const Home = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <div className="min-h-screen pb-32">
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
          <img src={USER_AVATAR} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <span className="text-xl font-bold text-primary tracking-tight">Balance</span>
      </div>
      <button className="text-label-tertiary hover:opacity-80 transition-opacity">
        <Bell className="w-6 h-6" />
      </button>
    </header>

    <main className="pt-24 px-6 max-w-lg mx-auto">
      <section className="mb-10">
        <GlassCard className="bg-gradient-to-br from-primary/5 to-transparent relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-label-secondary font-medium text-sm tracking-wide mb-2">Total Balance</span>
            <h1 className="text-5xl font-extrabold tracking-tighter text-label-primary mb-6">$1,248.50</h1>
            <div className="flex gap-4 w-full">
              <div className="flex-1 bg-white rounded-xl p-4 flex flex-col items-center shadow-sm">
                <span className="text-[10px] uppercase font-bold text-primary tracking-widest mb-1">YOU OWE</span>
                <span className="text-lg font-bold text-label-primary">$342.00</span>
              </div>
              <div className="flex-1 bg-white rounded-xl p-4 flex flex-col items-center shadow-sm">
                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-1">OWED TO YOU</span>
                <span className="text-lg font-bold text-label-primary">$1,590.50</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold tracking-tight">Active Projects</h2>
          <button className="text-primary font-semibold text-sm">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setScreen('project-details')}
              className="min-w-[200px] bg-surface-secondary rounded-lg p-5 flex flex-col justify-between h-48 border border-white/40 cursor-pointer hover:bg-surface-tertiary transition-colors"
            >
              <div>
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mb-4", project.iconBg)}>
                  {project.icon}
                </div>
                <h3 className="font-bold text-lg leading-tight">{project.name}</h3>
                <p className="text-xs text-label-secondary mt-1">{project.participants} participants</p>
              </div>
              <div className="flex -space-x-3">
                {project.avatars.map((avatar, i) => (
                  <img key={i} src={avatar} alt="member" className="w-8 h-8 rounded-full border-2 border-surface-secondary" />
                ))}
                <div className="w-8 h-8 rounded-full bg-surface-tertiary border-2 border-surface-secondary flex items-center justify-center text-[10px] font-bold">+{project.participants - 3}</div>
              </div>
            </div>
          ))}
          <div className="min-w-[140px] border-2 border-dashed border-label-tertiary/30 rounded-lg flex flex-col items-center justify-center text-label-secondary hover:bg-surface-secondary transition-colors cursor-pointer">
            <Plus className="w-8 h-8 mb-2" />
            <span className="text-xs font-bold">New Project</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {ACTIVITY.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 flex items-center gap-4 premium-shadow transition-transform active:scale-[0.98] cursor-pointer">
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0", item.iconBg)}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <h4 className="font-bold text-label-primary truncate">{item.title}</h4>
                  <span className={cn("text-sm font-bold", item.amount < 0 ? "text-error" : "text-primary")}>
                    {item.amount < 0 ? `-$${Math.abs(item.amount).toFixed(2)}` : `+$${item.amount.toFixed(2)}`}
                  </span>
                </div>
                <p className="text-xs text-label-secondary">
                  Paid by <span className="font-semibold text-label-primary">{item.paidBy}</span> • {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>

    <div className="fixed bottom-28 right-6 z-50">
      <button 
        onClick={() => setScreen('add-expense')}
        className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30 active:scale-90 transition-transform"
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  </div>
);

const ProjectDetails = ({ onBack, onSettle }: { onBack: () => void, onSettle: () => void }) => (
  <div className="min-h-screen pb-32">
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-6">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-surface-secondary rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
          <img src={USER_AVATAR} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
      <h1 className="font-semibold tracking-tight text-xl font-bold text-primary">Balance</h1>
      <button className="text-label-tertiary hover:opacity-80 transition-opacity">
        <Settings className="w-6 h-6" />
      </button>
    </header>

    <main className="pt-24 px-6 max-w-lg mx-auto">
      <section className="mb-10">
        <div className="flex flex-col gap-2 mb-6">
          <span className="text-secondary font-medium tracking-wide uppercase text-[10px]">Active Project</span>
          <div className="flex justify-between items-end">
            <h2 className="text-4xl font-extrabold text-label-primary tracking-tight leading-none">Summer Retreat 2024</h2>
            <div className="flex -space-x-3 mb-1">
              <img className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://picsum.photos/seed/u1/100/100" alt="u1" />
              <img className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://picsum.photos/seed/u2/100/100" alt="u2" />
              <div className="w-9 h-9 rounded-full border-2 border-white bg-surface-tertiary flex items-center justify-center text-[10px] font-bold">+4</div>
            </div>
          </div>
        </div>

        <GlassCard className="mt-8 p-8 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-label-secondary text-sm font-medium">Total Expenses</p>
              <p className="text-4xl font-bold text-primary mt-1 tracking-tight">$4,280.50</p>
            </div>
            <div className="bg-primary/10 px-3 py-1.5 rounded-full">
              <p className="text-primary text-[12px] font-bold">Live Split</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 bg-surface-secondary/50 p-4 rounded-lg">
              <p className="text-[11px] text-label-secondary font-semibold mb-1 uppercase">Your Share</p>
              <p className="text-xl font-bold text-label-primary">$1,120.00</p>
            </div>
            <div className="flex-1 bg-secondary/5 p-4 rounded-lg">
              <p className="text-[11px] text-secondary font-semibold mb-1 uppercase">You Owe</p>
              <p className="text-xl font-bold text-secondary">$340.25</p>
            </div>
          </div>
        </GlassCard>
      </section>

      <nav className="sticky top-20 z-40 mb-6 bg-surface-secondary/80 backdrop-blur-lg p-1.5 rounded-full flex gap-1">
        <button className="flex-1 py-2.5 rounded-full text-sm font-semibold bg-white text-primary shadow-sm transition-all">Expenses</button>
        <button className="flex-1 py-2.5 rounded-full text-sm font-medium text-label-secondary hover:text-label-primary transition-all">Balances</button>
        <button className="flex-1 py-2.5 rounded-full text-sm font-medium text-label-secondary hover:text-label-primary transition-all">Activity</button>
      </nav>

      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-bold text-label-tertiary tracking-widest uppercase ml-2 mt-4">Today</h3>
        <div className="group bg-white p-5 rounded-lg flex items-center gap-5 premium-shadow">
          <div className="w-14 h-14 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
            <Utensils className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="text-label-primary font-bold text-lg leading-tight">Artisan Lunch</p>
            <p className="text-label-secondary text-xs mt-0.5">Paid by Marcus • 4 people</p>
          </div>
          <div className="text-right">
            <p className="text-label-primary font-bold text-lg">$84.20</p>
            <p className="text-primary text-[10px] font-bold mt-0.5">YOURS: $21.05</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg premium-shadow group min-h-[180px] flex flex-col justify-end p-6">
          <img src="https://picsum.photos/seed/villa/800/400" alt="Villa" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative z-10 flex justify-between items-end">
            <div>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Luxury Stay</span>
              <p className="text-white font-bold text-2xl mt-2">Villa Serenity Deposit</p>
              <p className="text-white/70 text-sm">Paid by Sarah • 6 people</p>
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-2xl">$2,450.00</p>
              <p className="text-primary-light text-[11px] font-bold mt-1">YOURS: $408.33</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Button size="xl" className="w-full" onClick={onSettle}>
          Settle Up <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </main>
  </div>
);

const AddExpense = ({ onBack }: { onBack: () => void }) => (
  <div className="fixed inset-0 z-[60] flex items-end justify-center">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onBack}
      className="absolute inset-0 bg-label-primary/20 backdrop-blur-sm"
    />
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="relative w-full max-w-2xl bg-white rounded-t-[32px] shadow-2xl p-8 pb-12 max-h-[90vh] overflow-y-auto"
    >
      <div className="flex justify-center mb-6">
        <div className="w-12 h-1.5 bg-label-tertiary/20 rounded-full" />
      </div>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-label-primary">New Expense</h1>
        <button onClick={onBack} className="p-2 rounded-full hover:bg-surface-secondary transition-colors">
          <X className="w-6 h-6 text-label-secondary" />
        </button>
      </div>

      <div className="space-y-6 mb-10">
        <div className="relative group">
          <input className="w-full bg-transparent border-none text-2xl font-medium focus:ring-0 placeholder:text-label-tertiary p-0" placeholder="What was it for?" type="text" />
          <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-label-tertiary/20 group-focus-within:bg-primary transition-colors" />
        </div>
        <div className="flex items-center gap-4 bg-surface-secondary rounded-2xl p-6">
          <span className="text-4xl font-bold text-primary">$</span>
          <input className="w-full bg-transparent border-none text-5xl font-bold focus:ring-0 placeholder:text-label-tertiary/40 p-0" placeholder="0.00" type="number" />
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xs font-bold uppercase tracking-widest text-label-secondary mb-4 ml-1">Category</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-primary/20">
            <Utensils className="w-4 h-4" /> Dining
          </button>
          <button className="px-5 py-2.5 rounded-full bg-surface-secondary text-label-secondary text-sm font-medium flex items-center gap-2 hover:bg-surface-tertiary transition-colors">
            <Plane className="w-4 h-4" /> Transport
          </button>
          <button className="px-5 py-2.5 rounded-full bg-surface-secondary text-label-secondary text-sm font-medium flex items-center gap-2 hover:bg-surface-tertiary transition-colors">
            <ShoppingBag className="w-4 h-4" /> Groceries
          </button>
        </div>
      </div>

      <div className="mb-10 p-6 rounded-2xl bg-surface-secondary/50">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-label-secondary">Split by Percentage</h3>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Total: 100%</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img src={USER_AVATAR} alt="You" className="w-10 h-10 rounded-full object-cover" />
            <span className="flex-grow font-medium text-label-primary">You</span>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm">
              <input className="w-8 bg-transparent border-none p-0 text-right font-bold text-primary focus:ring-0" type="text" defaultValue="60" />
              <span className="text-sm font-medium text-label-tertiary">%</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="https://picsum.photos/seed/marcus/100/100" alt="Marcus" className="w-10 h-10 rounded-full object-cover" />
            <span className="flex-grow font-medium text-label-primary">Marcus</span>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm">
              <input className="w-8 bg-transparent border-none p-0 text-right font-bold text-label-secondary focus:ring-0" type="text" defaultValue="40" />
              <span className="text-sm font-medium text-label-tertiary">%</span>
            </div>
          </div>
        </div>
      </div>

      <Button size="xl" className="w-full" onClick={onBack}>
        Save Expense <ArrowRight className="w-5 h-5" />
      </Button>
    </motion.div>
  </div>
);

const SettleUp = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen pb-32">
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-6">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-surface-secondary rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>
        <span className="text-xl font-bold text-primary tracking-tight">Balance</span>
      </div>
      <button className="text-label-tertiary hover:opacity-80 transition-opacity">
        <Bell className="w-6 h-6" />
      </button>
    </header>

    <main className="pt-24 px-6 max-w-lg mx-auto space-y-8">
      <header className="space-y-2">
        <p className="text-sm font-medium text-label-secondary tracking-wider uppercase">Current Pool</p>
        <div className="flex justify-between items-end">
          <h1 className="text-4xl font-extrabold text-label-primary tracking-tighter">Settle Up</h1>
          <div className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">Active</div>
        </div>
      </header>

      <section className="relative h-64 bg-white rounded-2xl overflow-hidden premium-shadow flex items-center justify-center p-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#006565_0%,transparent_70%)]" />
        <div className="relative w-full flex items-center justify-between">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-surface-secondary border-2 border-primary/20 flex items-center justify-center relative">
              <img src="https://picsum.photos/seed/alex/100/100" alt="Alex" className="w-full h-full rounded-full object-cover" />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                <CheckCircle2 className="w-3 h-3 text-primary" />
              </div>
            </div>
            <span className="text-xs font-bold text-label-primary">Alex</span>
          </div>
          <div className="flex-1 px-4 flex flex-col items-center gap-2">
            <div className="w-full h-[2px] bg-gradient-to-r from-primary/5 via-primary to-primary/5 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 rounded-full border border-label-tertiary/20 shadow-sm">
                <span className="text-lg font-black text-primary">$428.50</span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1">
                <ChevronRight className="w-4 h-4 text-primary" />
              </div>
            </div>
            <span className="text-[10px] text-label-secondary font-medium tracking-widest uppercase mt-4">Debt Flow</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-surface-secondary border-2 border-secondary/20 flex items-center justify-center">
              <img src={USER_AVATAR} alt="You" className="w-full h-full rounded-full object-cover" />
            </div>
            <span className="text-xs font-bold text-label-primary">You</span>
          </div>
        </div>
      </section>

      <section className="bg-primary p-8 rounded-2xl relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
        <div className="relative z-10 space-y-4">
          <div className="flex justify-between items-start">
            <Zap className="w-8 h-8 text-white fill-white" />
            <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Smart Settle™</span>
          </div>
          <h2 className="text-2xl font-bold text-white leading-tight">Clear all debts with one simple tap.</h2>
          <Button variant="secondary" size="xl" className="w-full bg-white text-primary hover:bg-white/90">
            Confirm & Settle $316.50
          </Button>
        </div>
      </section>

      <div className="bg-surface-secondary rounded-2xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-label-secondary uppercase tracking-widest">Balance Details</span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-label-secondary">Total Owed to Alex</span>
            <span className="font-medium text-label-primary">$428.50</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-label-secondary">Pending Credits</span>
            <span className="font-medium text-secondary">-$112.00</span>
          </div>
          <div className="h-[1px] bg-label-tertiary/20 w-full" />
          <div className="flex justify-between text-lg font-black">
            <span className="text-label-primary">Final Total</span>
            <span className="text-primary">$316.50</span>
          </div>
        </div>
      </div>
    </main>
  </div>
);

const Profile = () => (
  <div className="min-h-screen pb-32">
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-label-tertiary/20">
          <img src={USER_AVATAR} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-xl font-bold text-primary tracking-tight">Balance</h1>
      </div>
      <button className="text-primary hover:opacity-80 transition-opacity">
        <Bell className="w-6 h-6" />
      </button>
    </header>

    <main className="pt-24 px-6 max-w-lg mx-auto space-y-8">
      <section className="flex flex-col items-center justify-center space-y-4">
        <div className="relative group">
          <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
            <img src={USER_AVATAR} alt="User" className="w-full h-full object-cover" />
          </div>
          <button className="absolute -bottom-2 -right-2 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all">
            <Camera className="w-5 h-5" />
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-label-primary">Alex Harrison</h2>
          <p className="text-label-secondary font-medium opacity-70">alex.harrison@studio.com</p>
        </div>
      </section>

      <section className="space-y-4">
        <GlassCard className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-label-primary">Notifications</p>
              <p className="text-sm text-label-secondary">Stay updated on progress</p>
            </div>
          </div>
          <div className="w-12 h-6 bg-primary rounded-full relative">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
          </div>
        </GlassCard>

        <GlassCard className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-label-primary">Currency</p>
              <p className="text-sm text-label-secondary">Balance reporting</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-surface-secondary px-4 py-2 rounded-full font-bold text-primary">
            <span>AUD</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </div>
        </GlassCard>

        <div className="grid grid-cols-2 gap-4">
          <GlassCard className="flex flex-col gap-4 justify-between">
            <ShieldCheck className="w-6 h-6 text-secondary" />
            <p className="font-bold leading-tight">Privacy &<br/>Security</p>
          </GlassCard>
          <GlassCard className="flex flex-col gap-4 justify-between">
            <HelpCircle className="w-6 h-6 text-primary" />
            <p className="font-bold leading-tight">Help &<br/>Support</p>
          </GlassCard>
        </div>

        <Button variant="error" size="xl" className="w-full py-5">
          <LogOut className="w-5 h-5" /> Sign out
        </Button>
      </section>

      <section className="relative h-48 rounded-2xl overflow-hidden group">
        <img src="https://picsum.photos/seed/abstract/800/400" alt="Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent p-6 flex flex-col justify-end">
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Exclusive</p>
          <h3 className="text-white text-xl font-bold leading-tight">Upgrade to Balance Pro<br/>for deep analytics</h3>
        </div>
      </section>
    </main>
  </div>
);

// --- Main App ---

export default function App() {
  const [screen, setScreen] = React.useState<Screen>('onboarding');

  const renderScreen = () => {
    switch (screen) {
      case 'onboarding':
        return <Onboarding onNext={() => setScreen('signup')} onSignIn={() => setScreen('signin')} />;
      case 'signup':
        return <SignUp onBack={() => setScreen('onboarding')} onComplete={() => setScreen('home')} />;
      case 'signin':
        return <SignUp onBack={() => setScreen('onboarding')} onComplete={() => setScreen('home')} />;
      case 'home':
        return <Home setScreen={setScreen} />;
      case 'project-details':
        return <ProjectDetails onBack={() => setScreen('home')} onSettle={() => setScreen('settle-up')} />;
      case 'add-expense':
        return <AddExpense onBack={() => setScreen('home')} />;
      case 'settle-up':
        return <SettleUp onBack={() => setScreen('project-details')} />;
      case 'profile':
        return <Profile />;
      default:
        return <Onboarding onNext={() => setScreen('signup')} onSignIn={() => setScreen('signin')} />;
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-surface min-h-screen relative shadow-2xl overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="min-h-screen"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
      
      {['home', 'project-details', 'profile', 'settle-up'].includes(screen) && (
        <BottomNav current={screen} setScreen={setScreen} />
      )}
    </div>
  );
}
