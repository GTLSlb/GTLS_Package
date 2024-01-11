import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieComponentProps {
  animationData: any;
  height: number;
  width: number;
  loop: boolean;
  autoplay: boolean;
}

const LottieComponent: React.FC<LottieComponentProps> = ({ animationData, height, width, loop, autoplay }) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  let anim: AnimationItem | null = null;

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current!, // the dom element that will contain the animation
      renderer: 'svg',
      loop: loop,
      autoplay: autoplay,
      animationData: animationData // the animation data
    });

    return () => {
      if (anim) {
        anim.destroy(); // optional clean up for unmounting
        anim = null;
      }
    };
  }, [animationData, loop, autoplay]);

  return <div ref={animationContainer} style={{ height: height, width: width, background: 'transparent' }} />;
};

export default LottieComponent;