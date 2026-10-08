import styles from './ProfileCard.module.css';

const ProfileCard = ({ name, age }) => {
  return <div className={styles.card}>
    <h2 className={styles.header}>{name}</h2>
    <p className={styles.age}>{age}</p>
  </div>
}

export default ProfileCard;