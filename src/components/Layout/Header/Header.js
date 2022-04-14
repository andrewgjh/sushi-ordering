import styles from "./Header.module.css";
import sushiImg from "../../../assets/sushi_img.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = ({ onOpen }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>SUSHI TO GO</h1>
        <HeaderCartButton onClick={onOpen} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImg} alt="sushi-meal" />
      </div>
    </>
  );
};

export default Header;
