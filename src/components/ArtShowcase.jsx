import { useState } from 'react';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

const baseURL = process.env.NODE_ENV === 'production'
  ? process.env.PUBLIC_URL
  : '';

const images = [
  {
    src: `${baseURL}/art/k1-cool.png`,
    title: 'Cool K1',
    tag: 'Digital Painting',
  },
  {
    src: `${baseURL}/art/buffsona.jpg`,
    title: 'Nature’s Form',
    tag: 'Digital Painting',
  },
];





export default function ArtShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section id="art">
      <h2>Art Showcase</h2>
      <p>This is my little corner where I share Art/ music projects, fresh ideas, and creative vibes.</p>
      <div className="art-grid">
        {images.map((art, index) => (
          <div
            key={index}
            className="art-card"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
            style={{ cursor: 'pointer' }}
          >
            <img src={art.src} alt={art.title} />
            <p className="art-title">{art.title}</p>
            <span className="art-tag">{art.tag}</span>
          </div>
        ))}
      </div>

      {isOpen && (
  <Lightbox
    mainSrc={images[photoIndex].src}
    nextSrc={images[(photoIndex + 1) % images.length].src}
    prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
    onCloseRequest={() => setIsOpen(false)}
    onMovePrevRequest={() =>
      setPhotoIndex((photoIndex + images.length - 1) % images.length)
    }
    onMoveNextRequest={() =>
      setPhotoIndex((photoIndex + 1) % images.length)
    }
    imageCaption={`${images[photoIndex].title} – ${images[photoIndex].tag}`}
    enableZoom={true}
  />
)}

    </section>
  );
}
