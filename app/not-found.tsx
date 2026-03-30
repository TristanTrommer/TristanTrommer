import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Not Found',
  openGraph: {
    title: 'Not Found',
    description: 'Not Found'
  }
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-medium sm:text-4xl">Not Found</h1>
    </div>
  );
}
