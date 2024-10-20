const RandomPicture = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img 
        src="https://picsum.photos/200" 
        alt="Random" 
        style={{ borderRadius: '10px', marginBottom: '10px' }}
      />
      <p>This is a random picture fetched from Picsum!</p>
    </div>
  );
};

export default RandomPicture;
