import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface StickySectionProps {
  children: React.ReactNode;
  imageUrl: string;
  direction?: 'left' | 'right';
}

export default function StickySection({ children, imageUrl, direction = 'right' }: StickySectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3],
    direction === 'right' ? [100, 0] : [-100, 0]
  );

  return (
    <div ref={containerRef} className="min-h-screen relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`${direction === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
            <motion.div
              style={{ opacity, x }}
              className="space-y-8"
            >
              {children}
            </motion.div>
          </div>
          <div className={`${direction === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
            <motion.div
              className="relative h-[600px] rounded-[40px] overflow-hidden"
              style={{ scale, opacity }}
            >
              <motion.img
                src={imageUrl}
                alt="Section Image"
                className="object-cover w-full h-full"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 