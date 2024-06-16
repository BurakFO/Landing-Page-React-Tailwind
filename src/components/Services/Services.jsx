import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectServices } from '../../redux/servicesSlice';

const Services = () => {

  const { servicesTitle, servicesCard } = useSelector(selectServices);

  // console.log(servicesCard.card1.title);

  Object.entries(servicesCard).forEach(([key, card]) => {
    console.log(`Key: ${key}`);
    console.log(`Title: ${card.title}`);
    console.log(`Description: ${card.description}`);
  });

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{servicesTitle}</h2>

        {/* Service 1  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(servicesCard).map(([key, card]) => (

            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-4">
                {card.title}
              </h3>
              <p>{card.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;
