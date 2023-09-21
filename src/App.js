import Navbar from './component/navhtml';
import './component/navbar.css';
import Course from './component/coursehtml';
import Navbar2 from './component/navbar2html';
import Display from './component/displayhtml';
import Blog from './component/bloghtml';
import Usage from './component/usagehtml';
import './App.css';
import PaginatedList from './component/pagination';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Course />
      <Navbar2 />
      <Display />
      <Blog />
      {/* <PaginatedList/> */}
      <Usage/>

     
      </header>
    </div>
  );
}

export default App;
