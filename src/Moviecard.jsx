import React, { useState } from 'react';
import Filter from './Filter';
import profil from "./assets/spedrman.jpeg";
import image from "./assets/avatar.jpeg";
import image1 from "./assets/megan.jpeg";
import image2 from "./assets/aquaman.jpeg";
import image3 from "./assets/amulance.jpeg";
import image4 from "./assets/tiger.jpeg";

const Moviecard = ({ titre, description, note, lien, image }) => (
  <div className="bg-[#9ca3af] w-[450px] shadow-2xl rounded-xl p-[10px] m-[20px]	 ">
    <img
      src={image}
      alt="photo film"
      className="mx-auto h-[200px] float-right"
    />

    <span className="text-2xl	font-bold m-[20px] p-[50px] ">{titre} </span>
    <p className="text-2xl p-[20px]	 m-[10px] ">{description} </p>
    <p className="text-xl font-semibold">Note: {note}</p>
    <a href="https://www.netflix.com/ma-fr/" className="text-red-700 ">
      {lien}
    </a>
  </div>
);

const Movielist = () => {
  const [data] = useState([
    {
      titre: "Spedrman",
      description:
        "The movie won Oscars for best costumes and best screenplay in this year's awards.",
      lien: "Click to watch",
      image: profil,
      note: 5,
    },
    {
      titre: "Avatar",
      description:
        "The movie won Oscars for best costumes and best screenplay in this year's awards.",
      lien: "Click to watch",
      image: image,
      note: 4.5,
    },
    {
      titre: "Megan",
      description:
        "The movie won Oscars for best costumes and best screenplay in this year's awards.",
      lien: "Click to watch",
      image: image1,
      note: 4,
    },
    {
      titre: "Aquaman",
      description:
        "The movie won Oscars for best costumes and best screenplay in this year's awards.",
      lien: "Click to watch",
      image: image2,
      note: 3,
    },
    {
      titre: "Ambulance",
      description:
        "The movie won Oscars for best costumes and best screenplay in this year's awards.",
      lien: "Click to watch",
      image: image3,
      note: 5,
    },
    {
      titre: "Tiguer3",
      description:
        "The movie won Oscars for best costumes and best screenplay in this year's awards.",
      lien: "Click to watch",
      image: image4,
      note: 5,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(data);

  const handleSearch = (query) => {
    const filtered = data.filter(movie =>
      movie.titre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <Filter onSearch={handleSearch} />
      <section className="grid grid-cols-3 gap-[20]">
        {filteredMovies.map((item) => (
          <Moviecard
            key={item.titre} 
            titre={item.titre}
            description={item.description}
            lien={item.lien}
            image={item.image}
            note={item.note}
          />
        ))}
      </section>
    </div>
  );
};

export default Movielist;
