import type {Metadata} from 'next';

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
    <div className='flex flex-col justify-center items-center min-h-screen min-w-full p-4'>
      <h1 className='font-medium text-2xl sm:text-4xl'>Not Found</h1>
    </div>
  );
}
