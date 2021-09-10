import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <a
      className={styles.container}
      href="https://github.com/GabrielDonas/bin2dec-typescript"
    >
      <FontAwesomeIcon className={styles.gitlogo} icon={faGithub} />
    </a>
  );
}

export default Footer;
