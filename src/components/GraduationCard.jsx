import React, { useState } from 'react';
import CoverScreen from './CoverScreen';
import OpenLetterScreen from './OpenLetterScreen';
import NameInputScreen from './NameInputScreen';
import IntroduceScreen from './IntroduceScreen';
import MainInvitation from './MainInvitation';

/**
 * GraduationCard - Bộ điều hướng chính giữa các màn hình:
 *
 *   1. CoverScreen       → Màn bì thư đóng (node 1116-162)
 *   2. OpenLetterScreen   → Lá thư mở ra (node 1129-196)
 *   3. NameInputScreen    → Nhập tên khách mời (node 1140-188)
 *   4. MainInvitation     → Màn chúc mừng chính (5 tabs)
 */
export default function GraduationCard() {
  const [step, setStep] = useState('cover');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const handleNameConfirm = ({ name, email }) => {
    setGuestName(name);
    setGuestEmail(email);
    setStep('introduce');
  };

  switch (step) {
    case 'cover':
      return <CoverScreen onNext={() => setStep('nameInput')} />;

    case 'openLetter':
      return (
        <OpenLetterScreen
          onNext={() => setStep('nameInput')}
          onBack={() => setStep('cover')}
        />
      );

    case 'nameInput':
      return (
        <NameInputScreen
          onConfirm={handleNameConfirm}
          onBack={() => setStep('openLetter')}
        />
      );

    case 'introduce':
      return (
        <IntroduceScreen
          onNext={() => setStep('main')}
          onBack={() => setStep('nameInput')}
        />
      );

    case 'main':
      return (
        <MainInvitation
          guestName={guestName}
          guestEmail={guestEmail}
          onBackToCover={() => setStep('cover')}
        />
      );

    default:
      return <CoverScreen onNext={() => setStep('openLetter')} />;
  }
}
