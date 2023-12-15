// Gallery.js
import React, { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Link } from 'react-router-dom';
import '../style/gallery.css';

const Gallery = ({ ville }) => {
  const [recipeData, setRecipeData] = useState({});
  const [images, setImages] = useState([]);
  const [recipeNames, setRecipeNames] = useState([]);
  const [hoveredRecipe, setHoveredRecipe] = useState(null);

  useEffect(() => {
    fetch(`../../json/${ville}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Réponse réseau incorrecte : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setRecipeData(data);
        const names = Object.keys(data);
        setRecipeNames(names);

        const imagePromises = names.map((name) =>
          fetch(data[name].image).then((response) =>
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
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {images.map((image, i) => (
            <div
              key={i}
              className="image-container"
              onMouseEnter={() => setHoveredRecipe(recipeData[recipeNames[i]])}
              onMouseLeave={() => setHoveredRecipe(null)}
            >
              <img
                src={image}
                style={{ width: '100%', display: 'block' }}
                alt=""
              />
              {hoveredRecipe === recipeData[recipeNames[i]] && (
                <div className="image-overlay">
                  <Link to={`/recipe/${ville}/${recipeNames[i]}`}>
                    <h2>{recipeNames[i]}</h2>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
