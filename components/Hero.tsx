
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative h-screen flex items-center overflow-hidden">
      {/* Background - Using Facility Exterior Concept (img7) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
          alt="Procam Laundry Factory Exterior" 
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl space-y-8 animate-fadeIn">
          <div className="flex items-center space-x-4">
            <div className="inline-block px-4 py-1.5 rounded-full border border-brand-emerald/30 bg-brand-green/10 text-brand-emerald text-sm font-semibold tracking-wide uppercase">
              Premium Industrial Laundry Service
            </div>
            <div className="hidden sm:flex items-center space-x-2 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/procam-logo-s.png" 
                alt="Procam Symbol" 
                className="h-5 w-5 filter brightness-0 invert"
                style={{ mixBlendMode: 'lighten' }}
              />
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Certified Factory</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight">
            전문성을 더한<br />
            <span className="text-brand-emerald">완벽한 세탁</span>, 프로캠
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed">
            인천 최대 규모의 산업용 세탁 시설과 명품 복원 전문 기술을 결합하여, 
            단순한 세탁 그 이상의 가치를 고객사의 비즈니스에 더해드립니다.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-brand-emerald hover:bg-brand-green text-white font-bold rounded-full transition-all flex items-center group shadow-lg shadow-brand-green/20"
            >
              무료 견적 상담받기
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-all backdrop-blur-sm border border-white/10"
            >
              서비스 둘러보기
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 right-12 hidden lg:flex space-x-12">
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-brand-emerald">2,000㎡</span>
          <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Total Facility Area</span>
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-brand-emerald">100k+</span>
          <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Monthly Capacity</span>
        </div>
        <div className="flex flex-col items-center">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/procam-logo-s.png" 
              alt="Quality Symbol" 
              className="h-10 w-10 filter brightness-0 invert opacity-50 mb-1"
            />
          <span className="text-xs text-gray-400 uppercase tracking-widest">Laundry Factory</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
