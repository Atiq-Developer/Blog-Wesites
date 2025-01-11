import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/University.png"
                  alt="Profile"
                  fill
                  objectFit="cover"
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I'm Atiq, a passionate software developer and tech
                enthusiast. I created this blog to share my experiences, tips,
                and tutorials on various programming languages and technologies.
                I believe that learning should be a continuous journey, and I'm
                here to help others on their path to mastering the art of
                coding.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you're just starting out or looking to sharpen your
                skills, you'll find a variety of resources and insights here.
                Let's explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Atiq's Journey as a Coder
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From a curious learner to an aspiring developer, join Atiq’s
              journey through the ever-evolving world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/3.jpeg"
                  alt="Atiq as a beginner"
                  className="w-full rounded-lg shadow-lg"
                  width={400}
                  height={300}
                  priority
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  The Spark of Curiosity
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Atiq’s coding journey began in his first semester of
                  university when he decided to enhance his skills alongside
                  academics. Starting with web development, he dived into
                  learning HTML, CSS, and JavaScript. What began as an interest
                  soon grew into a passion, as he dedicated countless hours to
                  building projects and mastering the fundamentals of software
                  and web development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/1.png"
                  alt="Atiq learning new skills"
                  className="w-full rounded-lg shadow-lg"
                  width={400}
                  height={300}
                  priority
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Diving Deeper
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  After mastering the basics, Atiq’s thirst for knowledge grew.
                  He began exploring more complex topics such as data
                  structures, algorithms, and enhanced web development
                  frameworks like Next.js. Enrolling in online courses and
                  attending coding bootcamps, Atiq quickly expanded his skill
                  set, taking on freelance projects to apply his knowledge in
                  real-world scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <Image
                  src="/2.png"
                  alt="Atiq working on a big project"
                  className="w-full rounded-lg shadow-lg"
                  width={400}
                  height={300}
                  priority
                />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Taking on Challenges
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  With extensive language knowledge, Atiq began tackling more
                  significant challenges. Atiq continued to push his limits,
                  always looking for opportunities to learn and grow. His
                  journey wasn’t without its setbacks, but each obstacle was a
                  stepping stone to becoming the skilled developer he is today.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <Image
                  src="/4.jpeg"
                  alt="Atiq mentoring others"
                  className="w-full rounded-lg shadow-lg"
                  width={400}
                  height={300}
                  priority
                />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Giving Back
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Today, Atiq is not only a skilled developer but also an active
                  mentor to others. He regularly supports the programming
                  community by sharing tutorials on LinkedIn, contributing
                  projects on GitHub, and helping his colleagues overcome
                  challenges in their coding journey. For Atiq, coding is more
                  than just a career—it’s a passion fueled by continuous
                  learning and the joy of sharing knowledge with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
