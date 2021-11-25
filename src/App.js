import './App.css';
import  Name  from './component/profile/FullName';
import Address from './component/profile/Address';
import ProfilePhoto from './component/profile/ProfilePhoto';
import './style.css';
function App() {
  return (
    <div className="titre">
     <Name/>  <ProfilePhoto/> <Address/>
    </div>
  );
}

export default App;
