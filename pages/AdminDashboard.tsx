
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  Plus, 
  Edit2, 
  Trash2, 
  FileText,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTFOLIO } from '../constants';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <div className="min-h-screen bg-brand-black flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 flex flex-col fixed inset-y-0">
        <div className="p-6 border-b border-white/10 flex flex-col items-start space-y-4">
          <Link to="/" className="inline-block bg-white rounded p-1">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/procam-logo-h.png" 
              alt="Procam Admin" 
              className="h-6 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] bg-brand-emerald/20 text-brand-emerald px-2 py-0.5 rounded-full font-bold tracking-widest">SYSTEM ADMIN</span>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-2 mt-4">
          <SidebarLink 
            icon={<LayoutDashboard size={20} />} 
            label="통계 대시보드" 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
          />
          <SidebarLink 
            icon={<ImageIcon size={20} />} 
            label="포트폴리오 관리" 
            active={activeTab === 'portfolio'} 
            onClick={() => setActiveTab('portfolio')} 
          />
          <SidebarLink 
            icon={<MessageSquare size={20} />} 
            label="견적 문의 목록" 
            active={activeTab === 'inquiries'} 
            onClick={() => setActiveTab('inquiries')} 
          />
          <SidebarLink 
            icon={<FileText size={20} />} 
            label="공지사항 관리" 
            active={activeTab === 'news'} 
            onClick={() => setActiveTab('news')} 
          />
          <div className="pt-8 border-t border-white/5 mt-8">
            <SidebarLink 
              icon={<Settings size={20} />} 
              label="사이트 설정" 
              active={activeTab === 'settings'} 
              onClick={() => setActiveTab('settings')} 
            />
            <Link 
              to="/" 
              className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all mt-2"
            >
              <LogOut size={20} />
              <span className="text-sm font-medium">관리자 로그아웃</span>
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">
              {activeTab === 'portfolio' ? '포트폴리오 관리' : 
               activeTab === 'inquiries' ? '견적 문의 목록' : 
               activeTab === 'overview' ? '통계 대시보드' : '설정'}
            </h1>
            <p className="text-gray-400 text-sm mt-1">프로캠 웹사이트의 콘텐츠를 실시간으로 관리합니다.</p>
          </div>
          <button className="bg-brand-emerald hover:bg-brand-green text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center space-x-2 transition-all">
            <Plus size={18} />
            <span>새 항목 추가</span>
          </button>
        </header>

        {activeTab === 'portfolio' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PORTFOLIO.map(item => (
              <div key={item.id} className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden flex h-40 group">
                <div className="w-48 overflow-hidden">
                  <img src={item.imageUrl} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex-grow p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-brand-emerald font-bold uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-bold text-lg mt-1 truncate">{item.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white/5 hover:bg-brand-emerald/20 text-gray-400 hover:text-brand-emerald rounded-lg transition-all">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-500 rounded-lg transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab !== 'portfolio' && (
          <div className="bg-zinc-900/50 border border-white/10 border-dashed rounded-3xl p-20 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-gray-600 mb-6">
              <Settings size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">기능 구현 준비 중</h3>
            <p className="text-gray-500 max-w-sm">
              해당 기능은 다음 업데이트에서 제공될 예정입니다. <br />
              현재는 포트폴리오 관리 화면만 샘플로 제공됩니다.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-brand-emerald text-white shadow-lg shadow-brand-green/20' 
        : 'text-gray-400 hover:bg-white/5 hover:text-white'
    }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default AdminDashboard;
