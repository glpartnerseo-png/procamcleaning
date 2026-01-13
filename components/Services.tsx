
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-brand-emerald font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-bold">비즈니스의 성격을 이해하는<br />맞춤형 세탁 솔루션</h3>
          </div>
          <p className="text-gray-400 max-w-sm">
            단순한 세탁이 아닙니다. 최첨단 설비와 전문 인력이 각 산업군의 특성에 맞춘 최적화된 프로세스를 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-white/5 hover:border-brand-emerald/50 transition-all duration-500"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="w-14 h-14 bg-brand-green/20 rounded-xl flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold">{service.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="text-brand-emerald text-sm font-semibold flex items-center group-hover:underline">
                  자세히 보기 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
