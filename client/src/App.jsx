import Register from "./Register";
import axios from 'axios';
function App() {
  axios.defaults.baseUrl = 'local'
  return (
    <div>
      <Register />
    </div>
  );
}

export default App;
