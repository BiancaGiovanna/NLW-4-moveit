import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/61204626?s=400&u=e807eb2c9fd925a42ae738de4e1f30726584ef45&v=4" alt="Bianca Giovanna" />
            <div>
                <strong>Bianca Giovanna</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}