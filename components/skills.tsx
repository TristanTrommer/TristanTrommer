'use client';

import {useActiveHash} from '@/hooks/useActiveHash';
import React from 'react';

interface TagItem {
  idx: number;
  text: string;
  opacity: number;
  filter: string;
  transform: string;
  tagRef?: React.RefObject<HTMLSpanElement | null>;
  x: number;
  y: number;
  z: number;
  scale?: number;
}

export default function Skills() {
  const {ref} = useActiveHash('Skills');

  const texts: string[] = [
    'Agile Methodologies',
    'Amazon Web Services (AWS)',
    'Cloudflare',
    'Cloudflare Pages',
    'Cloudflare Workers',
    'Continuous Delivery (CD)',
    'Continuous Integration (CI)',
    'Docker',
    'Flask',
    'Framer Motion',
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
    'Python',
    'React.js',
    'REST APIs',
    'Scala',
    'Serverless Computing',
    'Spring Framework',
    'Tailwind CSS',
    'TypeScript'
  ];

  const CreateTag = (idx: number, text: string, size: number) => {
    const tagRef = React.useRef<HTMLSpanElement | null>(null);
    const phi = Math.acos(-1 + (2 * idx + 1) / texts.length);
    const theta = Math.sqrt((texts.length + 1) * Math.PI) * phi;

    return {
      idx: idx,
      text: text,
      opacity: 0,
      filter: 'alpha(opacity=0)',
      transform: 'translate3d(-50%, -50%, 0) scale(1)',
      tagRef: tagRef,
      x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
      y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
      z: (size * Math.cos(phi)) / 2
    };
  };

  const createInitialState = (size: number) => {
    return texts.map((text, i) => {
      return CreateTag(i, text, size);
    });
  };

  const {radius, maxSpeed, initSpeed, direction} = {
    radius: 350 as number,
    maxSpeed: 20 as number,
    initSpeed: 40 as number,
    direction: 135 as number
  };

  const size = 1.5 * radius;
  const depth = 2 * radius;

  const tagCloudRef = React.useRef<HTMLDivElement | null>(null);
  const [items, setItems] = React.useState<TagItem[]>(createInitialState(size));

  const mouseX0 = React.useRef<number>(initSpeed * Math.sin(direction * (Math.PI / 180)));
  const mouseY0 = React.useRef<number>(-initSpeed * Math.cos(direction * (Math.PI / 180)));
  const mouseX = React.useRef<number>(mouseX0.current);
  const mouseY = React.useRef<number>(mouseY0.current);

  const next = React.useCallback(() => {
    const a = -(Math.min(Math.max(-mouseY.current, -size), size) / radius) * maxSpeed;
    const b = (Math.min(Math.max(-mouseX.current, -size), size) / radius) * maxSpeed;

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return; // pause

    const l = Math.PI / 180;
    const sc = [
      Math.sin(a * l),
      Math.cos(a * l),
      Math.sin(b * l),
      Math.cos(b * l)
    ];

    setItems((prev: TagItem[]) => {
      return prev.map(item => {
        const rx1 = item.x;
        const ry1 = item.y * sc[1] + item.z * -sc[0];
        const rz1 = item.y * sc[0] + item.z * sc[1];
        const rx2 = rx1 * sc[3] + rz1 * sc[2];
        const ry2 = ry1;
        const rz2 = rz1 * sc[3] - rx1 * sc[2];
        const per = (2 * depth) / (2 * depth + rz2);

        item.scale = Number(per.toFixed(3));
        let alpha = per * per - 0.25;
        alpha = Number((alpha > 1 ? 1 : alpha).toFixed(3));

        if (item?.tagRef?.current) {
          const left = (item.x - item.tagRef.current.offsetWidth / 2).toFixed(2);
          const top = (item.y - item.tagRef.current.offsetHeight / 2).toFixed(2);

          return {
            ...item,
            x: rx2,
            y: ry2,
            z: rz2,
            opacity: alpha,
            transform: `translate3d(${left}px, ${top}px, 0) scale(${item.scale})`,
            filter: `alpha(opacity=${100 * alpha})`
          };
        }
        return item;
      });
    });
  }, [depth, maxSpeed, radius, size]);

  React.useEffect(() => {
    if (tagCloudRef?.current) {
      const interval = setInterval(next, 100);
      return () => clearInterval(interval);
    }
  }, [next, tagCloudRef]);

  return (
    <section
      ref={ref}
      className='mb-24 sm:mb-40 scroll-mt-28 flex flex-col items-center w-[-webkit-fill-available] overflow-x-hidden'
      id='skills'
    >
      <h2 className='text-3xl font-medium mb-8 text-center'>Skills</h2>
      <div
        ref={tagCloudRef}
        className='tag-cloud relative'
        onMouseMove={ev => {
          if (tagCloudRef?.current) {
            const rect = tagCloudRef.current.getBoundingClientRect();
            mouseX.current = (ev.clientX - (rect.left + rect.width / 2)) / 5;
            mouseY.current = (ev.clientY - (rect.top + rect.height / 2)) / 5;
          }
        }}
        style={{
          width: `${2 * radius}px`,
          height: `${2 * radius}px`
        }}
      >
        {items.map(item => {
          return (
            <span
              key={item.idx}
              className='will-change-[transform,opacity,filter] absolute top-1/2 left-1/2 origin-[50%_50%] transition-all px-4 py-2 shadow-lg shadow-black/[0.03] rounded-lg bg-white bg-opacity-80 dark:bg-gray-950 dark:bg-opacity-75 text-xs'
              ref={item.tagRef}
              style={{
                filter: item.filter,
                opacity: item.opacity,
                transform: item.transform
              }}
            >
            {item.text}
          </span>
          );
        })}
      </div>
    </section>
  );
}
