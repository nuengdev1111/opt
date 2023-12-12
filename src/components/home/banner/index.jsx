// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, {EffectFade, Navigation} from 'swiper';

// SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

    // const [tab, setTab] = useState("skills");
//   const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="page-intro">  
         <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge a    nd skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
    </section>
  )
};

export default PageIntro