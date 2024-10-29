export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey , ${user}`);
  };

  const handleHover = () => {
    alert(`hey, thanks for hovering me !!!`);
  };
  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("vinod")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log(`hey user, welcome`);
    props.onClick();
  };
  return (
    <>
      <button onClick={props.onClick}>CLick</button>
      <button onMouseEnter={props.onMouseEnter}>Hover me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};
