import React, { useState, useEffect } from 'react';
import { bgSplash } from '../assets/bgSplashBase64';
import mailClosed from '../assets/mail_closed.jpg';
import mailOpen from '../assets/mail_open.png';
import mail1 from '../assets/mail1.png';

/**
 * MÀN HÌNH 1: GIAO DIỆN ĐẦU (FIGMA NODE 1116-162)
 * - Full toàn màn hình 100vw x 100vh
 * - Ảnh nền bg_splash.jpg tràn kín màn hình (object-cover)
 * - Phong thư và con dấu sáp thiên nga đặt ngay tâm nơ ở chính giữa màn hình
 * - Dòng chữ uốn lượn "Open the letter" nằm ngay dưới
 */
export default function CoverScreen({ onNext }) {
  const [mailState, setMailState] = useState('closed'); // 'closed' | 'opening' | 'opened'

  const handleMailClick = () => {
    if (mailState === 'closed') {
      setMailState('opening');
      // Chuyển sang trạng thái opened sau 1000ms (thời gian animation)
      setTimeout(() => {
        setMailState('opened');
      }, 1000);
    }
  };

  // Auto transition to NameInputScreen after 2s when text appears
  useEffect(() => {
    if (mailState === 'opened') {
      const timer = setTimeout(() => {
        onNext();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [mailState, onNext]);
  return (
    <div className="cover-screen fixed inset-0 w-screen h-screen overflow-hidden select-none">

      {/* 1. ẢNH NỀN PHỦ TOÀN BỘ MÀN HÌNH */}
      <img
        src={bgSplash}
        alt="Background"
        className="cover-background absolute inset-0 w-full h-full object-contain object-center pointer-events-none z-0 bg-black"
      />

      {/* Lớp phủ nhẹ tăng tương phản */}
      <div className="absolute inset-0 pointer-events-none z-[1]"></div>

      {/* 2. CỤM PHONG THƯ VÀ CHỮ CĂN CHÍNH GIỮA MÀN HÌNH (ABSOLUTE CENTER) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center text-center w-full max-w-[90vw] sm:max-w-[480px]">

        {/* PHONG THƯ CLOSED - LỀN DƯI KHI CHƯA MỞ */}
        {mailState === 'closed' && (
          <>
            {/* Mail Closed */}
            <img
              src={mailClosed}
              alt="Mail"
              onClick={handleMailClick}
              className="w-72 sm:w-80 md:w-96 h-auto object-contain cursor-pointer hover:scale-105 drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
            />
            {/* Text "Open the letter" */}
            <div className="mt-6 sm:mt-8 group transition-all duration-300">
              <h1
                className="text-[#ffd2dc] drop-shadow-[0_4px_14px_rgba(70,20,35,0.85)]"
                style={{
                  fontFamily: 'Freehand',
                  color: '#FFAEAE',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '48px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center'
                }}
              >
                Open the invitation
              </h1>
            </div>
          </>
        )}

        {/* PHONG THƯ BACKGROUND - LUÔN HIỂN THỊ KHI ĐANG MỞ */}
        {mailState !== 'closed' && (
          <img
            src={mailClosed}
            alt="Mail Background"
            className="absolute w-72 sm:w-80 md:w-96 h-auto object-contain pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] z-0"
          />
        )}

        {/* Mail Opened - Đè lên bức thư cũ */}
        {mailState !== 'closed' && (
          <div
            className={mailState === 'opened' ? 'absolute w-72 sm:w-80 md:w-96 h-auto z-20' : 'absolute w-72 sm:w-80 md:w-96 h-auto z-20 animate-mail-open'}
            style={{
              perspective: '1000px'
            }}
          >
            <img
              src={mail1}
              alt="Mail Open"
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              style={{
                transformStyle: 'preserve-3d',
                animation: mailState === 'opening'
                  ? 'mailSlideOpen 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                  : 'none'
              }}
            />
            {/* Text "graduation invitation" overlay - xuất hiện cùng mail */}
            {mailState !== 'closed' && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  pointerEvents: 'none',
                  animation: mailState === 'opening'
                    ? 'mailSlideOpen 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                    : 'none'
                }}
              >
                <h2
                  style={{
                    fontFamily: 'Freehand',
                    color: '#FFAEAE',
                    fontWeight: 200,
                    fontStyle: 'regular',
                    fontSize: '40px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    margin: 0
                  }}
                >
                  graduation
                  <br />
                  invitation
                </h2>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}