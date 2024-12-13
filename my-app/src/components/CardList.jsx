import imageofdelon from '../assets/alain.webp';
import imageofbrad from '../assets/brad.jpeg';
import React from 'react';
import Card from '../components/card';


const data = [
    { 
      id: 1, 
      name: "Alain", 
      image: imageofdelon, 
      description: "A famous actor", 
      weapons: ["Sword", "Axe"]
    },
    { 
      id: 2, 
      name: "brad", 
      image: imageofbrad, 
      description: "A legendary actor", 
      weapons: ["Arrow"]
    }
  ];
  function CardList() {
    
    function action(name) {
      alert(`This is ${name}`);
    }
  
    return (
      <div>
        {data.map((card) => (
          <Card 
            key={card.id} 
            name={card.name} 
            image={card.image} 
            description={card.description} 
            action={action}  
          />
        ))}
      </div>
    );
  }

export default CardList