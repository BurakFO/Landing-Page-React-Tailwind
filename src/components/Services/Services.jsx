import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Yazılım Geliştirme</h3>
            <p>Kapsamlı yazılım çözümleri sunuyoruz.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Siber Güvenlik</h3>
            <p>İşinizi güvence altına alıyoruz.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Bulut Hizmetleri</h3>
            <p>Bulut çözümlerimizle işinizi büyütün.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
