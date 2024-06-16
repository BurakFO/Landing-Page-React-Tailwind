import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectBanner } from '../../redux/bannerSlice';

const Hero = ({ onClickBanner }) => {
  const { banner } = useSelector(selectBanner);
  const { bannerTextColor } = useSelector(selectBanner);
  const { bannerDetail } = useSelector(selectBanner);
  const { bannerBackgroundColor } = useSelector(selectBanner);

  return (
    <section id="hero" className="py-20" style={{
      backgroundColor: `${bannerBackgroundColor}`,
      color: `${bannerTextColor}`
    }}>
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4"
          onClick={onClickBanner}>
          {banner}
        </h1>
        <p className="text-xl mb-8">{bannerDetail}</p>
        <button className="bg-gray-800 py-2 px-4 rounded">Daha Fazla Bilgi</button>
      </div>
    </section>
  );
}

export default Hero;
