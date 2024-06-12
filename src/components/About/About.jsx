import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Hakkımızda</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/400" alt="Hakkımızda" className="rounded shadow-md"/>
          </div>
          <div className="md:w-1/2 md:ml-10 mt-6 md:mt-0">
            <p className="text-lg">
              Biz, teknoloji çözümleri sunan bir IT hizmetleri sağlayıcısıyız. Misyonumuz, müşterilerimize en iyi hizmeti sağlamak ve işlerini büyütmelerine yardımcı olmaktır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
