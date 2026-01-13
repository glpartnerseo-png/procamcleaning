
import React from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  Sparkles, 
  Bed, 
  Factory, 
  Settings2 
} from 'lucide-react';
import { ServiceItem, PortfolioItem } from './types';

// Note: Actual image paths should be replaced with hosted URLs of the provided images
export const SERVICES: ServiceItem[] = [
  {
    id: 'bulk',
    title: '단체/작업복 세탁',
    description: '대형 롤러 및 자동화 설비를 통해 건설 현장, 공장 등의 대량 작업복을 신속하고 깨끗하게 처리합니다.',
    icon: <Briefcase className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=800' // img1 관련
  },
  {
    id: 'special',
    title: '특수복/소방복 세탁',
    description: '기능성 소재를 보호하면서도 유해 물질을 완벽 제거하는 특수 세탁 시스템(Laundry Mate)을 가동합니다.',
    icon: <ShieldCheck className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=800' // img8 관련
  },
  {
    id: 'luxury',
    title: '명품 복원 및 염색',
    description: '정밀 프레스 설비와 전문가의 손길로 고가 의류 및 가죽 제품의 컨디션을 최상으로 회복시킵니다.',
    icon: <Sparkles className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800' // img6 관련
  },
  {
    id: 'dormitory',
    title: '연수원/기숙사 침구류',
    description: '고온 살균 및 대용량 건조 시스템을 통해 수백 채의 침구류를 당일 세탁하여 쾌적하게 배송합니다.',
    icon: <Bed className="w-8 h-8" />,
    imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800' // img14 관련
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    category: '단체세탁',
    title: '대규모 건설현장 원단/작업복 관리',
    description: '체계적인 적재 및 분류 시스템으로 오차 없는 납품 관리',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800' // img2 관련
  },
  {
    id: 'p2',
    category: '특수세탁',
    title: 'Laundry Mate 자동화 세탁 라인',
    description: '특수 방화복 및 실험복 전용 세탁 공정 운용',
    imageUrl: 'https://images.unsplash.com/photo-1582733775062-eb9217dfd541?q=80&w=800' // img10 관련
  },
  {
    id: 'p3',
    category: '침구류',
    title: '대형 연수원 침구류 정기 살균',
    description: '진드기 방지 및 살균 처리가 완료된 청결한 침구류 적재',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800' // img15 관련
  },
  {
    id: 'p4',
    category: '설비',
    title: 'ART STEAM BOILER 시스템',
    description: '안정적인 고온 스팀 공급을 통한 완벽한 살균 세탁 기반 구축',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800' // img22 관련
  }
];

export const FACILITY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f', title: '자동화 접지 시스템' }, // img5
  { url: 'https://images.unsplash.com/photo-1582733775062-eb9217dfd541', title: '대형 세탁 라인' }, // img11
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158', title: '스팀 공급 시스템' }, // img22
  { url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837', title: '패킹 및 출고 라인' }, // img20
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
