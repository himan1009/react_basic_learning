export const EventHandling = () => {
  // Traditional Way
  //   function handleButtonClick() {
  //     alert("I AM EVENT HANDLING...!!!!");
  //   }

  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    alert("My name is Himanshu...!!!!");
  };

  return (
    <>
      <button onClick={handleButtonClick}>CLick Me</button>
    </>
  );
};
