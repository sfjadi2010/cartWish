import React from 'react'
import HeroSection from './HeroSection'

import iPhone from "@assets/iphone-14-pro.webp";

const HomePage = () => {
  return (
    <div>
        <HeroSection title="Buy iPhone 16 Pro Max" subtitle="Lorem ipsum dolor sit amet." link="#" image={iPhone} />
        {/* Featured Products */}
    </div>
  );
}

export default HomePage