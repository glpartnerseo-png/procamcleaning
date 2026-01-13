
import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-white/5 rounded-lg p-2 border border-white/10 inline-block">
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/procam-logo-h.png" 
                  alt="Procam Footer Logo" 
                  className="h-10 w-auto filter brightness-0 invert"
                  style={{ mixBlendMode: 'lighten' }}
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              프로캠은 20년 이상의 세탁 노하우와 최첨단 산업용 설비를 바탕으로, 
              단체 세탁과 명품 복원 분야에서 최고의 만족을 드리고 있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-brand-emerald transition-colors">회사 소개</a></li>
              <li><a href="#services" className="hover:text-brand-emerald transition-colors">서비스 안내</a></li>
              <li><a href="#portfolio" className="hover:text-brand-emerald transition-colors">포트폴리오</a></li>
              <li><a href="#contact" className="hover:text-brand-emerald transition-colors">견적 문의</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Factories</h4>
            {COMPANY_INFO.factories.map((factory) => (
              <div key={factory.name} className="space-y-1 text-sm">
                <p className="text-brand-emerald font-semibold">{factory.name}</p>
                <p className="text-gray-400">사업자: {factory.regNumber}</p>
                <p className="text-gray-400 leading-tight">{factory.address}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-widest text-xs">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-emerald" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-emerald" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-brand-emerald mt-1" />
                <span>본사: {COMPANY_INFO.factories[0].address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6">
            <button className="hover:text-white transition-colors">개인정보처리방침</button>
            <button className="hover:text-white transition-colors">이용약관</button>
            <button className="hover:text-white transition-colors">이메일무단수집거부</button>
          </div>
          <p>대표자: {COMPANY_INFO.owner}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
