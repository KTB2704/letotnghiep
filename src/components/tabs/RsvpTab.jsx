import React, { useState } from 'react';
import { Mail } from 'lucide-react';

/**
 * TAB XÁC NHẬN - RSVP & Thank You
 */
export default function RsvpTab({ guestName, onSubmit }) {
  const [rsvpAttending, setRsvpAttending] = useState('yes');

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    onSubmit(rsvpAttending);
  }

  return (
    <div className="rsvp-tab animate-fadeIn">
      <div className="rsvp-heading">
        <h3 className="rsvp-title">XÁC NHẬN THAM DỰ</h3>
        <p className="rsvp-subtitle">VUI LÒNG PHẢN HỒI TRƯỚC NGÀY XX/YY/2026</p>
      </div>

      <form onSubmit={handleRsvpSubmit} className="rsvp-form">
        <label className="rsvp-label">THAM DỰ</label>
        <div className="rsvp-options">
          <button
            type="button"
            onClick={() => setRsvpAttending('yes')}
            className={`rsvp-choice ${rsvpAttending === 'yes' ? 'is-selected' : ''}`}
          >
            Yasssss 💅🏻
          </button>

          <button
            type="button"
            onClick={() => setRsvpAttending('no')}
            className={`rsvp-choice ${rsvpAttending === 'no' ? 'is-selected' : ''}`}
          >
            Tui bận rùi 🥹
          </button>
        </div>

        <button
          type="submit"
          className="rsvp-submit btn-maroon"
        >
          <Mail className="h-3 w-3" /> GỬI XÁC NHẬN
        </button>
      </form>
    </div>
  );
}
