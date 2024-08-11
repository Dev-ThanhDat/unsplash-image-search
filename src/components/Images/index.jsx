/* eslint-disable react/prop-types */

const Images = ({ images }) => {
  return (
    <div className='images'>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          className='image'
        />
      ))}
    </div>
  );
};

export default Images;
