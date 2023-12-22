//components
import { Header } from "components/Header/Header";
import Banner from "components/Banner/Banner";
import UsersBlock from "components/UsersBlock/UsersBlock";
import FormBlock from "components/FormBlock/FormBlock";
//styles
import styles from "./styles.module.sass"

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Banner />
        <UsersBlock />
        <FormBlock />
      </main>
    </>

  );
}

export default App;
