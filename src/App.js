import './assets/style/App.css'
import Header from './component/Header'
import Search from './component/Search'
import Slider from './component/Slider'
import Text from './component/Text'
import Properties from './component/Properties'
import Mortgage from './component/Mortgage'
import Abroad from './component/Abroad'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Header></Header>
        <Search/>
        <Slider/>
        <Text/>
        <Properties/>
        <Mortgage/>
        <Abroad/>
      </header>
    </div>
  );
}

export default App;
