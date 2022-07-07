
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login';
import { COLORS, SIZES } from './constants/theme';

function App() {
  return (
    <div style={styles.mainDiv}>
      <Login />
    </div>
  );
}

export default App;

const styles = {
  mainDiv: {
    backgroundColor: COLORS.firstBackground,
    height: "100%",
    width: "100%",
    position: "fixed",
    overflowY: "scroll"
  }

}