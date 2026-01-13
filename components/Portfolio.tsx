
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('전체');
  const categories = ['전체', ...Array.from(new Set(PORTFOLIO.map(item => item.category)))];

  const filteredItems = filter === '전체' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-brand-emerald font-bold tracking-widest uppercase text-sm">Portfolio</h2>
          <h3 className="text-4xl font-bold">전문성이 입증된 실제 성공 사례</h3>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-brand-emerald text-white' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-3xl cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-brand-emerald text-xs font-bold uppercase tracking-widest">{item.category}</span>
                <h4 className="text-2xl font-bold">{item.title}</h4>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 border border-brand-emerald/30 text-brand-emerald hover:bg-brand-emerald hover:text-white transition-all rounded-full font-bold">
            더 많은 포트폴리오 보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
