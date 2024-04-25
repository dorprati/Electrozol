import React from 'react';
import '../Styles/AboutPage.css';

const AboutPage = () => {
  const [readMore, setReadMore] = React.useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="about-page">
      <div className="container">
        <h2>About Electrozol</h2>
        <p>
          Welcome to Electrozol, your ultimate destination for all things related to mobile phones! Established in 2000,
          Electrozol has been catering to customers for over two decades with a commitment to offering top-quality mobile
          devices and exceptional customer service. We specialize in a wide range of smartphones.
        </p>
        <p>
          At Electrozol, we understand the significance of staying connected in today's fast-paced world. That's why we
          only provide products from renowned brands that deliver cutting-edge technology and reliable performance.
          Whether you're looking for the latest flagship device or budget-friendly options, Electrozol has something for
          everyone.
        </p>
        <p>
          Our team of experienced professionals is dedicated to assisting you with all your mobile phone needs. Whether
          you have inquiries about device features, require assistance in choosing the perfect accessory, or need
          technical support, our friendly staff is here to help. Customer satisfaction is paramount at Electrozol, and
          we strive to exceed your expectations every step of the way.
        </p>
        <p>
          We invite you to explore our extensive collection of mobile devices and accessories online or visit one of our
          conveniently located stores to experience the Electrozol difference firsthand. Thank you for choosing Electrozol
          for all your mobile phone needs!
        </p>
        {readMore ? (
          <>
            <p>
              Committed to innovation and continuous advancement, Electrozol is dedicated to staying ahead in the mobile
              technology industry. We continuously expand our product range and invest in the latest advancements to
              better serve our customers.
            </p>
            <p>
              In addition to our dedication to quality and customer service, Electrozol is also committed to giving back
              to the community. We actively support local initiatives and charities aimed at improving people's lives
              and making a positive impact in our society.
            </p>
          </>
        ) : null}
        <button onClick={toggleReadMore}>{readMore ? 'Read Less' : 'Read More'}</button>
      </div>
    </div>
  );
};

export default AboutPage;
