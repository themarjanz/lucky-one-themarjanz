// if you want change icon go to favicon public folder favicon file
// if you want change title go index.html file

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Question from './components/Question/Question';


function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
