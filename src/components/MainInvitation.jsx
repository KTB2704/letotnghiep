import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import HomeTab from './tabs/HomeTab';
import CeremonyTab from './tabs/CeremonyTab';
import TimelineTab from './tabs/TimelineTab';
import WishesTab from './tabs/WishesTab';
import RsvpTab from './tabs/RsvpTab';
import ThankYouTab from './tabs/ThankYouTab';
import bgInvitation from '../assets/bg_home.jpg';
import bgThankYou from '../assets/bg_intro.jpg';

/**
 * MÀN HÌNH CHÍNH - Layout Thiệp Mời với Tabs điều hướng
 */
const TABS = [
  { id: 'TRANG CHỦ', label: 'TRANG CHỦ' },
  { id: 'BUỔI LỄ', label: 'BUỔI LỄ' },
  { id: 'THỜI GIAN', label: 'THỜI GIAN' },
  { id: 'LỜI NHẮN', label: 'LỜI NHẮN' },
  { id: 'XÁC NHẬN', label: 'XÁC NHẬN' },
];

export default function MainInvitation({ guestName, onBackToCover }) {
  const [activeTab, setActiveTab] = useState('TRANG CHỦ');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'TRANG CHỦ':
        return <HomeTab guestName={guestName} />;
      case 'BUỔI LỄ':
        return <CeremonyTab />;
      case 'THỜI GIAN':
        return <TimelineTab />;
      case 'LỜI NHẮN':
        return (
          <WishesTab
            guestName={guestName}
            onGoToRsvp={() => setActiveTab('XÁC NHẬN')}
          />
        );
      case 'XÁC NHẬN':
        return rsvpSubmitted ? (
          <ThankYouTab onEdit={() => setRsvpSubmitted(false)} />
        ) : (
          <RsvpTab guestName={guestName} onSubmit={() => setRsvpSubmitted(true)} />
        );
      default:
        return <HomeTab guestName={guestName} />;
    }
  };

  return (
    <div className="invitation-stage text-[#4f202d]">
      <div
        className="invitation-paper"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 241, 239, 0.1), rgba(255, 241, 239, 0.1)), url(${rsvpSubmitted ? bgThankYou : bgInvitation})`,
        }}
      >
        <div className="invitation-inner">

          {/* Top Header */}
          <div className="invitation-header">
            <div className="text-center">
              <p className="invitation-title text-rose-900">Graduation Invitation</p>
            </div>
            <div className="w-4"></div>
          </div>

          {/* Navigation Bar Tabs */}
          {!rsvpSubmitted && (
            <nav className="invitation-nav flex justify-between items-center border-b border-rose-900/15 py-3 my-4">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`invitation-tab pb-1 transition-all relative cursor-pointer ${activeTab === tab.id
                    ? 'is-active'
                    : 'hover:text-[#6B5A37]'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          )}

          {/* Active Tab Content */}
          {renderActiveTab()}

          {/* Bottom Footer Text */}
          <div className="invitation-footer text-center">
            <p className="text-[10px] tracking-widest text-rose-900/70 font-bold uppercase">
              LỄ TỐT NGHIỆP 2026
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
