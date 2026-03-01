import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import styles from "./styles.module.scss";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <img className={styles.logo} src={logo} alt="Логотип" />
        <h1 className={styles.title}>Бюджет</h1>
      </Header>
    </Layout>
  );
};

export default App;
