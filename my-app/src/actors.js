// src/Actors.js
import React from 'react';

const ActorCard = ({ name, image, description, onButtonClick }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      textAlign: 'center',
      margin: '20px auto'
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
      />
      <h2 style={{ color: '#333', margin: '16px 0' }}>{name}</h2>
      <p style={{ color: '#555' }}>{description}</p>
      <button 
        onClick={() => onButtonClick(name)} 
        style={{
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '16px',
        }}
      >
        Show Details
      </button>
    </div>
  );
};

const Actors = () => {
  const handleActorDetails = (name) => {
    console.log(`Details about ${name}:`);
    switch (name) {
      case 'Tom Cruise':
        console.log("Known for: Mission: Impossible series, Top Gun, Jerry Maguire");
        break;
      case 'Brad Pitt':
        console.log("Known for: Fight Club, Seven, Troy, Ocean's Eleven");
        break;
      case 'Alain Delon':
        console.log("Known for: Purple Noon, The Leopard, Le Samouraï");
        break;
      default:
        console.log("No details available.");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      <ActorCard
        name="Tom Cruise"
        image="C:\Users\khurt\OneDrive\სამუშაო დაფა\react3\my-app\public\Timothy-Everest-The-Suit-As-Armour-2.jpg"
        description="An American actor and producer known for his blockbuster action films."
        onButtonClick={handleActorDetails}
      />
      <ActorCard
        name="Brad Pitt"
        image="C:\Users\khurt\OneDrive\სამუშაო დაფა\react3\my-app\public\how-many-mm-long-do-you-guys-think-brad-pitts-buzz-cut-was-v0-odl8kqv6kgpd1.webp"
        description="An American actor and producer famous for his versatile roles in Hollywood."
        onButtonClick={handleActorDetails}
      />
      <ActorCard
        name="Alain Delon"
        image="C:\Users\khurt\OneDrive\სამუშაო დაფა\react3\my-app\public\alain-delon-french-actor-in-his-prime-v0-6m18wdizx6ab1.webp"
        description="A legendary French actor renowned for his roles in European cinema classics."
        onButtonClick={handleActorDetails}
      />
    </div>
  );
};

export default Actors;
