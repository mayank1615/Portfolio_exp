import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col">
        {/* Top Section: Text on Left, Photo on Right */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Hi, I am
            </h1>
            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Mayank Singh
            </h2>
            {/* Skills Heading with Typing Effect */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
              <span className="text-white">I am a </span>
              <ReactTypingEffect
                text={[
                  'MERN Stack Developer',
                  'Frontend Developer',
                  'Coder',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </h3>
          </div>
          
          {/* Right Side - Photo */}
          <div className="md:w-1/2 flex justify-center md:justify-end items-start">
            <Tilt
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Mayank Singh"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </div>
        </div>
        
        <div className="w-full">
          <div className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed text-left">
            <p className="mb-4">👋 Hi, I'm Mayank Singh, a passionate Frontend Developer dedicated to crafting exceptional digital experiences.</p>
            <p className="mb-4">🚀 I specialize in creating outstanding user interfaces using cutting-edge technologies such as React, Next.js, TypeScript, and Tailwind CSS. With a strong foundation in UI libraries like MUI and Ant Design, I transform ideas into responsive and visually appealing web applications.</p>
            <p className="mb-4">🛠️ I'm adept at using robust version control systems like Git, GitHub, and GitLab, ensuring seamless collaboration and efficient project development.</p>
            <p className="mb-4">📝 Exceptional communication skills drive my ability to work effectively within teams and with clients, facilitating transparent and productive project development.</p>
            <p className="mb-4">🧩 I thrive on developing reusable components, optimizing project workflows, and maintaining design consistency to deliver top-notch solutions.</p>
            <p className="mb-4">🧠 With a solid grasp of data structures and algorithms, I champion modular application development and adhere to coding best practices to create scalable and efficient software.</p>
            <p className="mb-4">📬 Let's connect to explore opportunities and share insights in the dynamic world of web development. I'm always eager to collaborate and contribute to exciting projects.</p>
          </div>
          {/* Resume Button */}
          <div className="text-center md:text-left">
            <a
              href="https://drive.google.com/file/d/1FVT_g23xgrB9Fl5GoTf3dUqStlmsAgMl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
