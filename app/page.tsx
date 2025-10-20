import Header from '@/components/header';
import About from '@/components/about';
import Blog from '@/components/blog';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';

export default function Page() {
  return (
    <div className='pt-28'>
      <Header/>
      <main className='flex flex-col items-center px-4'>
        <About/>
        <Blog/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}
