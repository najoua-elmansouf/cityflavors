import React, { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import '../style/gallery.css';

const Gallery = ({ ville }) => {
  const [recipeData, setRecipeData] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Charger les données depuis le fichier JSON en fonction de la ville
    fetch(`../../json/${ville}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Réponse réseau incorrecte : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRecipeData(data);

        // Charger les URLs des images
        const imagePromises = Object.values(data).map((recipe) =>
          fetch(recipe.image).then((response) =>
            response.ok ? response.blob() : null,
          ),
        );

        Promise.all(imagePromises)
          .then((responses) =>
            Promise.all(responses.map((response) => response && URL.createObjectURL(response))),
          )
          .then((imageUrls) => setImages(imageUrls.filter(Boolean)));
      })
      .catch((error) =>
        console.error('Erreur de chargement du fichier JSON :', error),
      );
  }, [ville]);

  return (
    <div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: '100%', display: 'block' }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
