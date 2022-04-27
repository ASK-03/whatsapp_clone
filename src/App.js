import './App.css';
import LeftSide from './components/LeftSideStructure/LeftSide';
import RightSide from './components/RightSideStructure/RightSide';
function App() {
  return (
    <div className="container">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
