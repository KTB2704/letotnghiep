import React from 'react';
import { GraduationCap, ArrowRight, RotateCcw } from 'lucide-react';
import bgIntro from '../assets/bg_intro.jpg';

/**
 * MÀN HÌNH 2: GIỚI THIỆU TÂN CỬ NHÂN
 */
export default function IntroduceScreen({ onNext, onBack }) {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
      <img
        src={bgIntro}
        alt="Background"
        className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none z-0 bg-black"
      />

      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
        <div className="w-full max-w-[500px] flex flex-col items-center justify-center text-center">
          <button
            onClick={onBack}
            className="absolute left-5 top-5 flex items-center justify-center text-[#7C2B3A] transition hover:opacity-80"
            aria-label="Quay lại"
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              className="h-5 w-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.42578 2.21582L5.66309 5.97949L4.80957 6.83301H15.9912C18.4313 6.83301 20.5075 7.62142 22.2461 9.19727C23.9753 10.7648 24.833 12.7022 24.833 15.042C24.8329 17.3816 23.9752 19.3183 22.2461 20.8857C20.5075 22.4617 18.4314 23.25 15.9912 23.25H5.25V21.083H15.9912C17.7698 21.083 19.3319 20.5148 20.6523 19.3789C21.9868 18.2309 22.6669 16.7744 22.667 15.042C22.667 13.3093 21.987 11.8522 20.6523 10.7041C19.3319 9.56823 17.7698 9 15.9912 9H4.80957L5.66309 9.85352L9.4248 13.6162L7.91602 15.125L0.707031 7.91602L7.91602 0.707031L9.42578 2.21582Z"
                fill="currentColor"
                stroke="currentColor"
              />
            </svg>
          </button>

          <div className="relative mx-auto -mb-2 mt-[-18px] flex h-14 w-14 items-center justify-center">
            <svg
              width="86"
              height="61"
              viewBox="0 0 86 61"
              className="relative z-10 h-[72px] w-[72px] text-[#1F2535]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Graduation cap"
            >
              <path
                d="M84.3226 21.8357V46.8386M17.6613 32.2536V46.8386C17.6613 50.1542 20.295 53.334 24.983 55.6784C29.671 58.0229 36.0294 59.34 42.6593 59.34C49.2892 59.34 55.6475 58.0229 60.3355 55.6784C65.0236 53.334 67.6573 50.1542 67.6573 46.8386V32.2536M81.9053 25.6793C82.6511 25.3502 83.2841 24.8095 83.7257 24.1242C84.1673 23.4388 84.3982 22.6389 84.3898 21.8236C84.3814 21.0083 84.134 20.2134 83.6783 19.5373C83.2226 18.8612 82.5786 18.3337 81.8261 18.0201L46.1165 1.75157C45.0309 1.2563 43.8516 1 42.6584 1C41.4652 1 40.286 1.2563 39.2004 1.75157L3.49489 18.0034C2.75315 18.3284 2.12215 18.8624 1.67906 19.5403C1.23597 20.2183 1 21.0106 1 21.8205C1 22.6305 1.23597 23.4228 1.67906 24.1007C2.12215 24.7786 2.75315 25.3127 3.49489 25.6376L39.2004 41.9228C40.286 42.4181 41.4652 42.6744 42.6584 42.6744C43.8516 42.6744 45.0309 42.4181 46.1165 41.9228L81.9053 25.6793Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p
            className="mb-14 mt-4 w-full text-center uppercase text-[#7C2B3A]"
            style={{
              fontFamily: 'Playfair Display',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '4.8px',
            }}
          >
            CHÚC MỪNG
          </p>

          <h1
            className="text-center mb-8 text-[#7C2B3A]"
            style={{
              fontFamily: 'Lavishly Yours',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '75px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Trần Thu Hương
          </h1>

          <div className="mx-auto my-4 flex w-24 items-center justify-center gap-3 text-[#7C2B3A]">
            <div className="h-px w-10 bg-[#7C2B3A]/60" />
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="h-3 w-3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Star divider"
            >
              <path
                d="M5.8607 1.03949C5.81873 1.06555 5.78488 1.10281 5.76297 1.14708L4.60847 3.48658C4.53232 3.64072 4.41986 3.77404 4.28076 3.87507C4.14167 3.97611 3.9801 4.04183 3.80997 4.06658L1.22747 4.44408C1.17832 4.45103 1.13212 4.47164 1.09411 4.50357C1.05611 4.5355 1.02783 4.57746 1.01251 4.62468C0.997191 4.67189 0.995438 4.72246 1.00745 4.77062C1.01947 4.81878 1.04477 4.8626 1.08047 4.89708L2.94847 6.71558C3.07178 6.83566 3.16402 6.98393 3.21724 7.1476C3.27046 7.31128 3.28307 7.48545 3.25397 7.65508L2.81347 10.2246C2.8049 10.2734 2.81021 10.3237 2.8288 10.3697C2.84739 10.4157 2.87851 10.4555 2.91862 10.4847C2.95873 10.5139 3.00623 10.5312 3.0557 10.5347C3.10517 10.5382 3.15464 10.5278 3.19847 10.5046L5.50697 9.29058C5.65911 9.21069 5.82838 9.16896 6.00022 9.16896C6.17206 9.16896 6.34133 9.21069 6.49347 9.29058L8.80247 10.5046C8.84632 10.5279 8.89585 10.5385 8.94541 10.535C8.99496 10.5316 9.04255 10.5143 9.08274 10.4851C9.12294 10.4559 9.15412 10.416 9.17272 10.3699C9.19133 10.3239 9.19661 10.2735 9.18797 10.2246L8.74697 7.65458C8.718 7.48503 8.73067 7.31097 8.78389 7.1474C8.83711 6.98382 8.92928 6.83563 9.05247 6.71558L10.9205 4.89658C10.9559 4.86206 10.9809 4.81831 10.9928 4.7703C11.0046 4.72228 11.0028 4.67191 10.9875 4.62488C10.9722 4.57785 10.944 4.53604 10.9062 4.50418C10.8684 4.47232 10.8224 4.45167 10.7735 4.44458L8.19047 4.06658C8.02054 4.04164 7.85919 3.97583 7.72028 3.87481C7.58138 3.77378 7.46906 3.64056 7.39297 3.48658L6.23797 1.14708C6.21606 1.10281 6.18221 1.06555 6.14025 1.03949C6.09828 1.01344 6.04987 0.999634 6.00047 0.999634C5.95108 0.999634 5.90266 1.01344 5.8607 1.03949Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <div className="h-px w-10 bg-[#7C2B3A]/60" />
          </div>

          <p
            className="text-center text-[#000000]"
            style={{
              fontFamily: 'Newsreader',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: '17px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }}
          >
            Tân cử nhân Hệ thống thông tin - Đại học Thủy Lợi
          </p>

          <p
            className="mt-2 text-center text-[#000000]"
            style={{
              fontFamily: 'Newsreader',
              fontStyle: 'italic',
              fontWeight: 580,
              fontSize: '13px',
              lineHeight: '100%',
              letterSpacing: '1px',
            }}
          >
            Khóa 2022-2026
          </p>

          <p
            className="mx-auto mt-10 max-w-[440px] text-[15px] leading-[1.8] text-[#000000] md:text-[17px]"
            style={{
              fontFamily: 'Newsreader',
              fontStyle: 'regular',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '170%',
              letterSpacing: '0%',
              align: 'center',
            }}
          >
            Một lời mời đặc biệt đang chờ cậu mở ra. Rất mong được  <br /> đón các bạn iu trong ngày quan trọng này
            <span className="inline-block align-middle"> ◕⩊◕</span>
          </p>

          <button
            onClick={onNext}
            className="group mt-9 inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#701a2b] px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5E9D8] shadow-[0_12px_30px_rgba(112,26,43,0.22)] transition-all duration-300 hover:scale-[1.01]"
            style={{
              fontFamily: 'Geist, sans-serif',
              size: '13px',
            }}
          >
            XEM THIỆP MỜI
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
