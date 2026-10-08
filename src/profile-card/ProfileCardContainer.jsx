import ProfileCard from "./ProfileCard";

const ProfileCardContainer = () => {
  const people = [
    {
      name: 'Kenny',
      age: 25
    },
    {
      name: 'Gemma',
      age: 20
    }
  ]
  return <>
    {
      people
        .map(person => <ProfileCard
          name={person.name}
          age={person.age}
        />)
    }
  </>
}

export default ProfileCardContainer;