'use client';

import { useActiveHash } from '@/hooks/useActiveHash';
import React from 'react';

const texts: string[] = [
  'System Migration',
  'Apache Airflow',
  'OpenTelemetry',
  'Code Refactoring',
  'Java Object Oriented Querying (jOOQ)',
  'Message Queue',
  'Cats Effect',
  'Unit Testing',
  'Integration Testing',
  'System Architecture',
  'Distributed Systems',
  'Kotlin',
  'Product Management',
  'Product Marketing',
  'Cloudflare D1',
  'Cloudflare R2',
  'Cloudflare Containers',
  'Cloudflare Queues',
  'Cloudflare Email Service',
  'Agile Methodologies',
  'Amazon Web Services (AWS)',
  'Cloudflare',
  'Cloudflare Workers',
  'Continuous Delivery (CD)',
  'Continuous Integration (CI)',
  'Docker',
  'Flask',
  'Functional Programming',
  'Git',
  'GitHub',
  'Gitlab',
  'Google Cloud Platform (GCP)',
  'Java',
  'JavaScript',
  'JSON',
  'Kubernetes',
  'MySQL',
  'Next.js',
  'PostgreSQL',
  'Python (Programming Language)',
  'React.js',
  'REST APIs',
  'Scala',
  'Serverless Computing',
  'Spring Framework',
  'Tailwind CSS',
  'TypeScript'
];

const RADIUS = 350;
const SPEED = 10;
const DIRECTION = 135;
const SIZE = 1.5 * RADIUS;
const DEPTH = 2 * RADIUS;
const FRAME_INTERVAL = 33; // ~30 fps

function createInitialItems() {
  const count = texts.length;
  return texts.map((_, idx) => {
    const phi = Math.acos(-1 + (2 * idx + 1) / count);
    const theta = Math.sqrt((count + 1) * Math.PI) * phi;
    return {
      x: (SIZE * Math.cos(theta) * Math.sin(phi)) / 2,
      y: (SIZE * Math.sin(theta) * Math.sin(phi)) / 2,
      z: (SIZE * Math.cos(phi)) / 2
    };
  });
}

export default function Skills() {
  const { ref } = useActiveHash('Skills');
  const tagCloudRef = React.useRef<HTMLDivElement | null>(null);
  const spanRefs = React.useRef<(HTMLSpanElement | null)[]>([]);
  const items = React.useRef(createInitialItems());
  const mouseX = React.useRef(SPEED * Math.sin(DIRECTION * (Math.PI / 180)));
  const mouseY = React.useRef(-SPEED * Math.cos(DIRECTION * (Math.PI / 180)));
  const isVisible = React.useRef(false);
  const dims = React.useRef<{ w: number; h: number }[]>([]);

  React.useEffect(() => {
    const container = tagCloudRef.current;
    if (!container) return;

    dims.current = spanRefs.current.map(el => ({
      w: el?.offsetWidth ?? 0,
      h: el?.offsetHeight ?? 0
    }));

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(container);

    let rafId: number;
    let lastTime = 0;

    const animate = (timestamp: number) => {
      rafId = requestAnimationFrame(animate);

      if (!isVisible.current || timestamp - lastTime < FRAME_INTERVAL) return;
      lastTime = timestamp;

      const a =
        -(Math.min(Math.max(-mouseY.current, -SIZE), SIZE) / RADIUS) * SPEED;
      const b =
        (Math.min(Math.max(-mouseX.current, -SIZE), SIZE) / RADIUS) * SPEED;

      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return;

      const l = Math.PI / 180;
      const sinA = Math.sin(a * l);
      const cosA = Math.cos(a * l);
      const sinB = Math.sin(b * l);
      const cosB = Math.cos(b * l);

      items.current.forEach((item, i) => {
        const ry1 = item.y * cosA + item.z * -sinA;
        const rz1 = item.y * sinA + item.z * cosA;
        const rx2 = item.x * cosB + rz1 * sinB;
        const rz2 = rz1 * cosB - item.x * sinB;
        const per = (2 * DEPTH) / (2 * DEPTH + rz2);

        let alpha = per * per - 0.25;
        if (alpha > 1) alpha = 1;
        if (alpha < 0) alpha = 0;

        item.x = rx2;
        item.y = ry1;
        item.z = rz2;

        const el = spanRefs.current[i];
        if (el) {
          const { w, h } = dims.current[i];
          el.style.opacity = alpha.toFixed(3);
          el.style.transform = `translate3d(${(rx2 - w / 2).toFixed(2)}px,${(ry1 - h / 2).toFixed(2)}px,0) scale(${per.toFixed(3)})`;
        }
      });
    };

    rafId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafId);
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="mb-24 flex w-[-webkit-fill-available] scroll-mt-28 flex-col items-center overflow-x-hidden sm:mb-40"
      id="skills"
    >
      <h2 className="mb-10 text-center text-3xl font-medium">Skills</h2>
      <div
        ref={tagCloudRef}
        className="tag-cloud relative"
        onMouseMove={ev => {
          if (tagCloudRef.current) {
            const rect = tagCloudRef.current.getBoundingClientRect();
            mouseX.current = (ev.clientX - (rect.left + rect.width / 2)) / 5;
            mouseY.current = (ev.clientY - (rect.top + rect.height / 2)) / 5;
          }
        }}
        style={{
          width: `${2 * RADIUS}px`,
          height: `${2 * RADIUS}px`
        }}
      >
        {texts.map((text, idx) => (
          <span
            key={idx}
            ref={el => {
              spanRefs.current[idx] = el;
            }}
            className="bg-opacity-80 dark:bg-opacity-75 absolute top-1/2 left-1/2 origin-[50%_50%] cursor-default rounded-lg bg-white px-4 py-2 text-xs shadow-lg shadow-black/3 dark:bg-gray-950"
            style={{ opacity: 0 }}
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
