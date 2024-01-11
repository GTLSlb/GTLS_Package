import React from 'react';
interface LottieComponentProps {
    animationData: any;
    height: number;
    width: number;
    loop: boolean;
    autoplay: boolean;
}
declare const LottieComponent: React.FC<LottieComponentProps>;
export default LottieComponent;
