function ProfileCardCfg(props) {
  /*
   * props: 
    {
      name: 'Kenny',
      age: 25
    },
  }
  */
  return <>
    <h2>{props.name}</h2>
    <p>{props.age}</p>
  </>
}

const ProfileCard = ({ name, age }) => {
  return <>
    <h2>{name}</h2>
    <p>{age}</p>
  </>
}

export default ProfileCard;