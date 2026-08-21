import React from 'react';
import { Check } from 'lucide-react';

/**
 * MÀN HÌNH CẢM ƠN SAU KHI XÁC NHẬN
 */
export default function ThankYouTab({ response, onEdit }) {
    const message = response === 'no'
        ? 'Trhg đã nhận được thông tin rùi. Cảm ơn bạn đã bỏ ra chút thời gian để điền thông tin nha.'
        : 'Trhg đã nhận được thông tin rùi. Cảm ơn các bạn đã bỏ ra chút thời gian tới dự lễ tốt nghiệp của Trhg nhaaaa.';

    return (
        <div className="thank-you-tab animate-fadeIn">
            <div className="thank-you-content">
                <div className="thank-you-icon">
                    <Check className="h-8 w-8" />
                </div>

                <h3 className="thank-you-title">
                    THANK YOU (˶&gt;⩊&lt;˶)
                </h3>

                <p className="thank-you-message">
                    {message}
                </p>

                <p className="thank-you-signoff">
                    See yaaaaaa !
                </p>
            </div>
        </div>
    );
}
