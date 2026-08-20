import React from 'react';
import iconStar from '../../assets/icon_star1.svg';

/**
 * TAB TRANG CHỦ - Lời mời chính
 */
export default function HomeTab({ guestName }) {
  return (
    <div className="home-tab flex-1 flex flex-col justify-center text-center animate-fadeIn">
      <div className="space-y-6">
        <p className="invitation-kicker text-[#7c3b4a]">TRÂN TRỌNG KÍNH MỜI</p>
        <h2 className="invitation-name text-[#7c2b3a]">
          {guestName || 'TRẦN THU HƯƠNG'}
        </h2>
      </div>

      <p className="invitation-description mx-auto max-w-[600px] px-4 text-[#000000]">
        Trân trọng kính mời Bạn đến tham dự Lễ Tốt Nghiệp và chia sẻ niềm vui cùng tui. Sự hiện diện của cậu là niềm vinh hạnh lớn lao cho chặng đường học tập ý nghĩa của tui đó 🎓      </p>

      <div className="mx-auto mt-12 flex items-center gap-4 text-[#7c2b3a]">
        <span className="h-px w-14 bg-[#E3D5BE]" />
        <img src={iconStar} alt="" className="h-3 w-3 object-contain" />
        <span className="h-px w-14 bg-[#E3D5BE]" />
      </div>

      <div className="mt-10">
        <p className="invitation-date text-[#7c2b3a]">Ngày 25 tháng 9 năm 2026</p>
      </div>
    </div>
  );
}
