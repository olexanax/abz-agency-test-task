//components
import { Header } from "components/Header/Header";
import Banner from "components/Banner/Banner";
import UsersBlock from "components/UsersBlock/UsersBlock";
import FormBlock from "components/FormBlock/FormBlock";
import { ReduxProvider } from "lib/ReduxProvider";
import { Toaster } from 'sonner';
//styles
import styles from "./styles.module.sass"

function App() {
  return (
    <ReduxProvider>
      <Header />
      <main className={styles.main}>
        <Banner />
        <UsersBlock />
        <FormBlock />
      </main>
      <Toaster />
    </ReduxProvider>
  );
}

export default App;
