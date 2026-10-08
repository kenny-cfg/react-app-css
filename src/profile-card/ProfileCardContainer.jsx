import ProfileCard from "./ProfileCard";

const ProfileCardContainer = () => {
  const people = [
    {
      id: 2,
      name: 'Kenny',
      age: 25
    },
    {
      id: 3,
      name: 'Gemma',
      age: 20
    }
  ]
  return <>
    {
      people
        .map((person) => <ProfileCard
          key={person.id}
          name={person.name}
          age={person.age}
        />)
    }
  </>
}

export default ProfileCardContainer;