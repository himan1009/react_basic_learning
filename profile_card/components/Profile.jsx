function Profile() {
  return (
    <div>
      <h1>PROFILE CARD CHALLENGE</h1>
      <ProfileCard
        name="Alice"
        age={30}
        greeting={
          <div>
            <strong>Hi Alice, have a wonderful day !</strong>
          </div>
        }
      ></ProfileCard>
      <p>Hobbies: Reading, Hiking...</p>
      <button>Contact</button>
      <ProfileCard
        name="bob"
        age={25}
        greeting={
          <div>
            <strong>Heleo bob/.....</strong>
          </div>
        }
      ></ProfileCard>
      <p>Hobbies: Photography, Demon...</p>
      <button>Contact</button>
    </div>
  );
}

function ProfileCard({name, age, greeting, children}) {
    // const {name, age, greeting, children}=props;
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{greeting}</p>
      <div>{children}</div>
    </>
  );
}

export default Profile;
