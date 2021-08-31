import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.gitlogo} icon={faGithub} />
    </div>
  );
}

export default Footer;
