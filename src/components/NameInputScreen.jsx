import React, { useState } from 'react';
import { Mail, User, Send } from 'lucide-react';
import bgInputName from '../assets/bg_input_name.jpg';

/**
 * MÀN HÌNH 2: NHẬP TÊN VÀ EMAIL KHÁCH MỜI (FIGMA NODE 1140-161)
 * Hiện ra tự động 2s sau khi chữ xuất hiện.
 * Full screen background với form overlay centered.
 */
export default function NameInputScreen({ onConfirm, onBack }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name.trim()) {
      setNameError('Vui lòng nhập tên của bạn!');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email.trim()) {
      setEmailError('Vui lòng nhập email!');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Email không hợp lệ!');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      onConfirm({ name: name.trim(), email: email.trim() });
    }
  };

  return (
    <div className="cover-screen fixed inset-0 w-screen h-screen overflow-hidden flex flex-col items-center justify-center">

      {/* Background Image */}
      <img
        src={bgInputName}
        alt="Background"
        className="cover-background1 absolute inset-0 w-full h-full object-contain object-center pointer-events-none z-0 bg-black"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col w-full h-full px-4 py-8 text-center">
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* YOUR NAME Title - Dynamic */}
          <h1
            className="mb-12 title-name"
            style={{
              fontFamily: 'Playfair Display',
              fontWeight: 400,
              fontStyle: 'normal',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#7C2B3A',
              marginBottom: 30,
            }}
          >
            {name || 'YOUR NAME'}
          </h1>

          {/* Form Card - iPhone optimized */}
          <div className="w-full max-w-md space-y-6">
            <style>{`
              .fancy-input::placeholder {
                color: #8B4A5C;
                opacity: 0.8;
              }
            `}</style>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div>
                <label
                  className="block text-left text-sm font-semibold mb-2"
                  style={{ color: '#6B5A37', letterSpacing: '0.05em' }}
                >
                  EMAIL <span style={{ color: '#FF383C' }}>*</span>
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-0 w-5 h-5" style={{ color: '#1C1B1F' }} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                    }}
                    placeholder="Nhập email"
                    className="fancy-input w-full pl-8 pr-0 py-1 bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#8B4A5C] transition"
                    style={{
                      color: '#6B5A37',
                      fontFamily: 'Newsreader, serif',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                    }}
                  />
                </div>
                {emailError && (
                  <p className="text-xs mt-1 font-medium" style={{ color: '#1C1B1F' }}>{emailError}</p>
                )}
              </div>

              {/* Name Input */}
              <div>
                <label
                  className="block text-left text-sm font-semibold mb-2"
                  style={{ color: '#6B5A37', letterSpacing: '0.05em' }}
                >
                  HỌ VÀ TÊN <span style={{ color: '#FF383C' }}>*</span>
                </label>
                <div className="relative flex items-center">
                  <User className="absolute left-0 w-5 h-5" style={{ color: '#7C2B3A' }} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError('');
                    }}
                    placeholder="Tên cậu là gì z?"
                    autoFocus
                    className="fancy-input w-full pl-8 pr-0 py-1 bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#8B4A5C] transition"
                    style={{
                      color: '#6B5A37',
                      fontFamily: 'Newsreader, serif',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                    }}
                  />
                </div>
                {nameError && (
                  <p className="text-xs mt-1 font-medium" style={{ color: '#1C1B1F' }}>{nameError}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="py-2.5 px-14 rounded-md flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: '#701a2b',
                    color: '#F5E9D8',
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '11px',
                    lineHeight: '100%',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  <Mail className="w-4 h-4" style={{ color: '#F5E9D8' }} />
                  GỬI XÁC NHẬN
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-center pt-6 pb-1 mt-auto mb-0">
          <div className="w-14 h-px bg-[#7C2B3A] opacity-60 mb-3" />
          <p
            className="text-center uppercase"
            style={{
              color: '#7C2B3A',
              fontFamily: 'Geist, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '10px',
              lineHeight: '100%',
              letterSpacing: '2px',
            }}
          >
            LỄ TỐT NGHIỆP 2026
          </p>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-gray-200 hover:text-white text-lg z-20 transition"
      >
        ←
      </button>
    </div>
  );
}
