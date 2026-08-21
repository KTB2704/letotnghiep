import React, { useState } from 'react';
import { Mail } from 'lucide-react';

/**
 * TAB LỜI NHẮN - Sổ lời chúc
 */
export default function WishesTab({ guestName, onGoToRsvp }) {
  const [wishes, setWishes] = useState([
    { id: 1, name: 'Hội Bạn Thân', text: 'Chúc mừng Hương nha! Thầy cô và tụi tui rất tự hào về câu. Vững bước trên chặng đường sắp tới nha ❤️' },
    { id: 2, name: 'Đại gia đình Thủy Lợi', text: 'Chúc em gái tốt nghiệp xuất sắc và gặt hái thật nhiều thành công mới trong sự nghiệp!' }
  ]);
  const [wishInput, setWishInput] = useState('');

  const handleSendWish = (e) => {
    e.preventDefault();
    if (wishInput.trim()) {
      setWishes([
        { id: Date.now(), name: guestName || 'Người bạn giấu tên', text: wishInput },
        ...wishes
      ]);
    }
    setWishInput('');
    onGoToRsvp(wishInput.trim());
  };

  return (
    <div className="wish-tab animate-fadeIn">
      <div className="wish-heading">
        <h3>LỜI CHÚC</h3>
        <p>Một lời chúc từ bạn sẽ là món quà ý nghĩa nhất của tui đó iu iu ~</p>
      </div>

      <form onSubmit={handleSendWish} className="wish-form">
        <label className="wish-label">
          LỜI NHẮN CỦA BẠN
        </label>
        <div className="wish-input-wrap">
          {!wishInput && <span className="wish-quote">“</span>}
          <textarea
            rows="3"
            value={wishInput}
            onChange={(e) => setWishInput(e.target.value)}
            placeholder="Nhắn nhủ gì tui hông..."
            className="wish-input"
          ></textarea>
        </div>
        <button
          type="submit"
          className="wish-submit btn-maroon"
        >
          <Mail className="w-4 h-4" /> GỬI LỜI CHÚC
        </button>
      </form>

      {/* List of wishes */}
      <div className="wish-list">
        {wishes.map((w) => (
          <div key={w.id} className="wish-item">
            <p>{w.name}</p>
            <p>"{w.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
