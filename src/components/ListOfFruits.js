const ListOfFruits = () => {
  //Write an useState with an array of fruits. Add Banana, Apple, Pear into the list.
  return (
    <div>
      <ul>{/* Map out the list of fruits */}</ul>
      <input type="text" placeholder="Add a new fruit" />
      <button onClick="">Add fruits</button>
    </div>
  );
};

export default ListOfFruits;
