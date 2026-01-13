
import React from 'react';
import { FACILITY_IMAGES } from '../constants';
import { Settings2, Zap, ShieldCheck } from 'lucide-react';

const FacilitySection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-brand-emerald font-bold tracking-widest uppercase text-sm mb-4">Our Technology</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">최첨단 자동화 설비로<br />압도적인 품질을 구현합니다</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                프로캠은 단순한 세탁소를 넘어, 스마트 팩토리 기반의 자동화 세탁 시스템을 구축했습니다. 
                대규모 물량도 균일한 품질로 처리할 수 있는 최신형 'Laundry Mate' 라인과 
                강력한 스팀 보일러 시스템이 귀사의 의류를 최상의 상태로 관리합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <Settings2 className="text-brand-emerald mb-4" size={32} />
                <h4 className="font-bold text-white mb-2">자동화 프로세스</h4>
                <p className="text-xs text-gray-500">수거부터 세탁, 건조, 패킹까지 원스톱 자동 라인 구축</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <ShieldCheck className="text-brand-emerald mb-4" size={32} />
                <h4 className="font-bold text-white mb-2">살균 특화 시스템</h4>
                <p className="text-xs text-gray-500">99.9% 살균력을 자랑하는 고온 스팀 및 살균 전용 세제 사용</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {FACILITY_IMAGES.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative overflow-hidden rounded-2xl aspect-square ${idx % 2 !== 0 ? 'mt-8' : ''}`}
                >
                  <img 
                    src={img.url + `?q=80&w=600&auto=format&fit=crop`} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Background Accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-emerald/10 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
