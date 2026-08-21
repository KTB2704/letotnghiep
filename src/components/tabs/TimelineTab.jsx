import React from 'react';

/**
 * TAB THỜI GIAN - Lịch trình buổi lễ
 */
const events = [
  { time: '06:00', event: 'Tụi chụp pre trước nha' },
  { time: '08:00', event: 'Khai mạc buổi lễ' },
  { time: '08:30', event: 'Trao bằng tốt nghiệp' },
  { time: '09:30', event: 'Giao lưu cùng thầy cô, bạn bè' },
  { time: '10:00', event: 'Đón khách và chụp ảnh kỷ niệm' }
];

export default function TimelineTab() {
  return (
    <div className="timeline-tab flex-1 flex flex-col space-y-4 py-2 animate-fadeIn">
      <div className="ceremony-heading timeline-heading mb-8">
        <h3 className="ceremony-title mt-14">THỜI GIAN BUỔI LỄ</h3>
        <p className="ceremony-subtitle timeline-subtitle">ORDER OF EVENTS</p>
      </div>

      {/* Vertical Timeline */}
      <div className="timeline-track relative ml-4 pl-6 space-y-4 my-auto">
        {events.map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="timeline-node absolute -left-[30px] top-1/2"></div>
            <div className="p-2.5 rounded-xl bg-white/50 border border-white/70 shadow-sm flex items-center justify-between">
              <span className="font-bold text-rose-950 text-xs w-14 shrink-0">{item.time}</span>
              <span className="text-xs text-slate-800 font-medium flex-1 pl-2">{item.event}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
