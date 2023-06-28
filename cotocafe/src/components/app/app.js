import './app.css';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import starList from '../../mocks/starList';


function App() {
  return (
    <PageWrapper stars={starList}/>
  );
}

export default App;
