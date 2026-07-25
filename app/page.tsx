import Header from '@/components/header';
import About from '@/components/about';
import Blog from '@/components/blog';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';

export const revalidate = false;

export default function Page() {
  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tristan Trommer',
    url: process.env.NEXT_PUBLIC_URL
  };

  return (
    <div className="pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData)
        }}
      />
      <Header />
      <main className="flex flex-col items-center px-4">
        <About />
        <Blog />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
