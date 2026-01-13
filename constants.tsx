
import React from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  Sparkles, 
  Bed 
} from 'lucide-react';
import { ServiceItem, PortfolioItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'bulk',
    title: '단체/작업복 세탁',
    description: '대형 롤러 및 자동화 설비를 통해 건설 현장, 공장 등의 대량 작업복을 신속하고 깨끗하게 처리합니다.',
    icon: <Briefcase className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'special',
    title: '특수복/소방복 세탁',
    description: '기능성 소재를 보호하면서도 유해 물질을 완벽 제거하는 특수 세탁 시스템을 가동합니다.',
    icon: <ShieldCheck className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1582733775062-eb9217dfd541?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'luxury',
    title: '명품 복원 및 염색',
    description: '정밀 프레스 설비와 전문가의 손길로 고가 의류 및 가죽 제품의 컨디션을 최상으로 회복시킵니다.',
    icon: <Sparkles className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dormitory',
    title: '연수원/기숙사 침구류',
    description: '고온 살균 및 대용량 건조 시스템을 통해 수백 채의 침구류를 당일 세탁하여 쾌적하게 배송합니다.',
    icon: <Bed className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    category: '단체세탁',
    title: '대규모 산업단지 정기 세탁',
    description: '매월 10만 벌 이상의 물량을 오차 없이 관리하는 물류 시스템',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    category: '전문기술',
    title: '30년 경력 마스터의 복원',
    description: '정교한 수작업으로 되살리는 의류 본연의 가치',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973cf0f32e7?auto=format&fit=crop&q=80&w=800' // Asian professional business
  },
  {
    id: 'p3',
    category: '특수세탁',
    title: '소방 및 안전 의류 케어',
    description: '생명과 직결된 보호구의 기능성을 유지하는 정밀 공정',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    category: '인프라',
    title: '최첨단 스마트 세탁 팩토리',
    description: '친환경 세제와 고온 스팀 시스템이 결합된 위생적 환경',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  }
];

export const FACILITY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1541888941259-7724f80c445a', title: '대형 롤러 프레스' },
  { url: 'https://images.unsplash.com/photo-1521656693047-9ef81787f1d3', title: '자동화 세탁 라인' },
  { url: 'https://images.unsplash.com/photo-1599415423060-8224aa9cc2aa', title: '정밀 살균 시스템' },
  { url: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60', title: '패킹 및 검수' },
];

export const COMPANY_INFO = {
  name: '프로캠 (Procam)',
  owner: '이장균',
  phone: '0507-1324-2730',
  mobile: '010-8200-2730',
  email: 'dltnduslsy@naver.com',
  factories: [
    {
      name: '1공장',
      regNumber: '121-10-73129',
      address: '인천 미추홀구 경인북길357번길 13'
    },
    {
      name: '2공장',
      regNumber: '299-72-00247',
      address: '인천 동구 만석동 2-501'
    }
  ]
};
