import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SimpleSlider from './Slider';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Save your data storage here.</h1>
        <SimpleSlider />
        {/* Thêm phần giới thiệu Data Warehouse ở đây */}
        <section>
          <h2>Data Warehouse Information</h2>
          <p>
            Data Warehouse is a data storage area that has been tested for security, 
            so you can store your data here safely but not be afraid of being stolen by others.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;

export {};
