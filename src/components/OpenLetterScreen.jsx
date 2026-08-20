import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';

/**
 * MÀN HÌNH 2: LÁ THƯ ĐÃ MỞ (FIGMA NODE 1129-196)
 * Hiện ra sau khi bấm con dấu ở bì thư.
 * Hiển thị nội dung lá thư mời + bấm vào để sang màn nhập tên.
 */
export default function OpenLetterScreen({ onNext, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2b0c16] via-[#4c1220] to-[#701a2b] flex flex-col items-center justify-center p-4 relative overflow-hidden">

      {/* Ambient Glitter Particles */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-400/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-pink-300 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-amber-200 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

      {/* Letter Card */}
      <div
        className="relative w-full max-w-md my-auto cursor-pointer group"
        onClick={onNext}
      >
        {/* Opened envelope flap behind the letter */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-gradient-to-b from-[#e8a5b8]/60 to-transparent rounded-t-2xl pointer-events-none"
          style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
        ></div>

        {/* The Letter itself */}
        <div className="relative bg-gradient-to-b from-[#fff8f0] via-[#fff5eb] to-[#fef0e3] rounded-2xl p-8 md:p-10 border border-white/80 shadow-[0_20px_60px_rgba(112,26,43,0.3)] text-center space-y-6 transform transition-transform duration-300 group-hover:scale-[1.01]">

          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#701a2b]/40 to-transparent rounded-t-2xl"></div>

          {/* Graduation Cap Icon */}
          <div className="mx-auto w-16 h-16 rounded-full bg-[#701a2b]/10 border border-[#701a2b]/20 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-[#701a2b]" />
          </div>

          {/* Letter Heading */}
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#701a2b]/60 font-bold">THƯ MỜI</p>
            <h2 className="font-serif-heading text-2xl md:text-3xl font-bold text-[#701a2b]">
              Lễ Tốt Nghiệp
            </h2>
            <div className="flex items-center justify-center gap-2 py-1">
              <div className="h-px w-10 bg-[#701a2b]/30"></div>
              <span className="text-[#701a2b]/50 text-xs">✦</span>
              <div className="h-px w-10 bg-[#701a2b]/30"></div>
            </div>
          </div>

          {/* Letter Body */}
          <div className="space-y-4 text-[#4a2030] font-garamond text-base md:text-lg leading-relaxed">
            <p>Thân gửi bạn,</p>
            <p className="italic">
              "Mình rất vui và hạnh phúc khi được chia sẻ khoảnh khắc đặc biệt này cùng bạn.
              Sau bao năm nỗ lực, cuối cùng mình cũng chạm tay đến cột mốc này rồi 🎓"
            </p>
            <p>
              Mình xin trân trọng mời bạn đến tham dự buổi Lễ Tốt Nghiệp của mình.
              Sự có mặt của bạn sẽ là niềm vui lớn nhất đó!
            </p>
          </div>

          {/* Signature */}
          <div className="pt-2 border-t border-[#701a2b]/15">
            <p className="font-script text-2xl text-[#701a2b] font-bold">Trần Thu Hương</p>
            <p className="text-[10px] text-[#701a2b]/50 uppercase tracking-widest mt-1">
              Tân cử nhân • Đại học Thủy Lợi • 2026
            </p>
          </div>

          {/* CTA hint */}
          <div className="flex items-center justify-center gap-2 text-[#701a2b]/70 text-xs font-semibold pt-2 group-hover:text-[#701a2b] transition">
            <span>Bấm để tiếp tục</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
          </div>
        </div>

        {/* Decorative lace edge bottom */}
        <div className="mx-auto w-[80%] h-3 bg-gradient-to-b from-[#fef0e3] to-transparent rounded-b-xl opacity-80"></div>
      </div>

      {/* Back button */}
      <button
        onClick={(e) => { e.stopPropagation(); onBack(); }}
        className="absolute bottom-8 text-xs text-pink-200/70 hover:text-white flex items-center gap-1 cursor-pointer transition"
      >
        ← Quay lại bì thư
      </button>
    </div>
  );
}
