
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    service: '단체세탁',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/xnjjqgvd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _subject: `[프로캠 홈페이지] 새로운 견적 문의: ${formData.company || formData.name}`
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          phone: '',
          service: '단체세탁',
          message: ''
        });
        // 5초 후 다시 입력 가능 상태로 변경
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-brand-emerald font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">성공적인 비즈니스를 위한<br />최고의 파트너십</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                정기 단체 세탁부터 고난도 특수 세탁까지, 
                귀사의 요구사항에 최적화된 견적을 제안해 드립니다. 
                전화 한 통이면 충분합니다.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-emerald flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">상담 전화</p>
                  <p className="text-2xl font-bold text-white hover:text-brand-emerald cursor-pointer transition-colors">
                    {COMPANY_INFO.phone}
                  </p>
                  <p className="text-lg text-gray-300">{COMPANY_INFO.mobile}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-emerald flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">이메일 문의</p>
                  <p className="text-xl font-medium text-white">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-emerald flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">본사/1공장 주소</p>
                  <p className="text-lg font-medium text-white">{COMPANY_INFO.factories[0].address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
            {/* Success Overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 bg-brand-black/90 z-10 flex flex-col items-center justify-center text-center p-8 animate-fadeIn">
                <CheckCircle size={64} className="text-brand-emerald mb-6" />
                <h4 className="text-2xl font-bold mb-2">문의가 성공적으로 접수되었습니다!</h4>
                <p className="text-gray-400">담당자가 내용을 확인한 후 신속하게 연락드리겠습니다.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-brand-emerald font-bold border-b border-brand-emerald"
                >
                  추가 문의하기
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">담당자 성함</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="홍길동"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-emerald outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">업체명</label>
                  <input 
                    name="company"
                    type="text" 
                    placeholder="프로캠 (주)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-emerald outline-none transition-all"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">연락처</label>
                <input 
                  name="phone"
                  type="tel" 
                  placeholder="010-0000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-emerald outline-none transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">관심 서비스</label>
                <select 
                  name="service"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-emerald outline-none transition-all appearance-none text-gray-300"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="단체세탁">단체/작업복 세탁</option>
                  <option value="특수세탁">특수복/소방복 세탁</option>
                  <option value="명품복원">명품 복원 및 염색</option>
                  <option value="침구류">연수원/기숙사 침구류</option>
                  <option value="기타">기타 문의</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">상세 문의내용</label>
                <textarea 
                  name="message"
                  rows={4} 
                  placeholder="세탁 규모나 특이사항을 적어주세요."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-emerald outline-none transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="flex items-center space-x-2 text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                  <AlertCircle size={20} />
                  <span className="text-sm">전송 중 오류가 발생했습니다. 다시 시도해 주세요.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className={`w-full py-4 bg-brand-emerald hover:bg-brand-green text-white font-bold rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-green/20 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <span>견적 요청하기</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
