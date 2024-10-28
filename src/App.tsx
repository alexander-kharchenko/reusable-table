import styles from "./App.module.scss";
import Table from "./components/Table/Table";
import { movies, movieHeaders } from "./mocks/mockData";

function App() {
  return (
    <div className={styles.app}>
      <Table headers={movieHeaders} data={movies} />
    </div>
  );
}

export default App;
