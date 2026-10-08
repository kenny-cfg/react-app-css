import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
`

const Name = styled.h2`
  font-size: x-large;
  color: blue;
`

const Age = styled.p`
  font-size: xx-small;
  color: chocolate
`

const Banner = styled.p`
  font-size: small;
  color: aquamarine
`

const ProfileCard = ({ name, age }) => {
  return <Div>
    <Name>{name}</Name>
    <Age>{age}</Age>
    <Banner>THIS IS THE SECOND P</Banner>
  </Div>
}

export default ProfileCard;