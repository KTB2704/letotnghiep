import React from 'react';
import { Send } from 'lucide-react';

/**
 * TAB BUỔI LỄ - Thông tin buổi lễ tốt nghiệp
 */
export default function CeremonyTab() {
  return (
    <div className="ceremony-tab animate-fadeIn">
      <div className="ceremony-heading">
        <h3 className="ceremony-title mt-14">THÔNG TIN BUỔI LỄ</h3>
        <p className="ceremony-subtitle">GRADUATION CEREMONY INFORMATION</p>
      </div>

      <div className="ceremony-details">
        <div className="ceremony-detail">
          <span className="ceremony-label">NGÀY / DAY:</span>
          <span className="ceremony-value">Thứ H, xx/yy/2026</span>
        </div>

        <div className="ceremony-detail">
          <span className="ceremony-label">GIỜ / TIME:</span>
          <span className="ceremony-value">08:00 - 11:30</span>
        </div>

        <div className="ceremony-detail">
          <span className="ceremony-label">ĐỊA ĐIỂM / PLACE:</span>
          <span className="ceremony-value">Hội trường T45, Đại học Thủy Lợi - 175 Tây Sơn, Đống Đa, Hà Nội</span>
        </div>

        <div className="ceremony-detail ceremony-map-label">
          <span className="ceremony-label">Bản đồ/map</span>
        </div>
      </div>

      <div className="ceremony-map">
        <iframe
          title="Bản đồ Đại học Thủy Lợi"
          src="https://www.google.com/maps?q=Hội+trường+T45,+Trường+Đại+học+Thủy+lợi,+175+Tây+Sơn,+Đống+Đa,+Hà+Nội&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>

      <a
        href="https://maps.google.com/?q=Hội+trường+T45,+Trường+Đại+học+Thủy+lợi,+175+Tây+Sơn,+Đống+Đa,+Hà+Nội"
        target="_blank"
        rel="noreferrer"
        className="ceremony-directions btn-maroon"
      >
        <Send className="h-3 w-3" /> XEM CHỈ ĐƯỜNG
      </a>
    </div>
  );
}
