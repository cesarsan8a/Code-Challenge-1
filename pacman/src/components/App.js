import '../styles/App.css';
import Board from '../components/Board';

function App() {
  return (
    <div>
      <Board pacmanPosition={[2, 3]} />
    </div>
  );
}

export default App;
