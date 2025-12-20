import CourseHero from '@/components/CourseHero';

const courses = {
  'ui-ux': {
    badge: 'Latest Course',
    title: <>UI/UX Design <br /> with AI</>,
    description:
      'Learn modern UI/UX design combined with AI tools. Interactive projects and real-world workflows.',
    tools: ['Figma', 'Photoshop', 'ChatGPT', 'Gemini'],
    images: ['/uiux.jpg', '/photoshop.jpg', '/videoediting.jpg']
  },

  photoshop: {
    badge: 'Creative Course',
    title: <>Photoshop <br /> Mastery</>,
    description:
      'Master Photoshop from basics to advanced concepts with real projects and AI-powered workflows.',
    tools: ['Photoshop', 'Retouching', 'Generative Fill', 'AI Tools'],
    images: ['/photoshop.jpg', '/uiux.jpg', '/videoediting.jpg']
  },

  'video-editing': {
    badge: 'Professional Course',
    title: <>Video Editing <br /> with AI</>,
    description:
      'Learn professional video editing using Premiere Pro, After Effects, and AI-based editing tools.',
    tools: ['Premiere Pro', 'After Effects', 'CapCut', 'AI Tools'],
    images: ['/videoediting.jpg', '/photoshop.jpg', '/uiux.jpg']
  }
};

export default function CoursePage({ params }) {
  const course = courses[params.slug];

  if (!course) return null;

  return <CourseHero {...course} />;
}
