import Header from "./components/Header";
import Cappsules from "./components/Cappsules";
import {useState} from "react";
import AddCappsule from "./components/AddCappsule";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import LoginUI from "./components/LoginUI";
import CreateUser from "./components/CreateUser";

const App = () => {
    const[showCreateUser, setShowCreateUser] = useState(false)
    let tomorrow = new Date()
    let today = new Date()
    tomorrow.setDate(today.getDate() + 1)
    const [cappsules, setCappsules] = useState([
        {
            id: 1,
            sender: 'Buster',
            reciever: 'Bernhardt',
            message: "Hejsa Bernhardt",
            lattitude: 55.471793424146234,
            longitute: 8.451112645531,
            openTime: today.toString(),
            showMessage: false,
        },
        {
            id: 2,
            sender: 'Balder',
            reciever: 'Brian',
            message: "Jeg hader dig Brian, fuck dig",
            lattitude: 55.4677613612147,
            longitute: 8.453494446915784,
            openTime: today.toString(),
            showMessage: false,
        },
        {
            id: 3,
            sender: 'Birgit',
            reciever: 'Bente',
            message: "Må jeg få din kanelkage opskrift? MVH Birgit",
            lattitude: 55.4677613612147,
            longitute: 8.453494446915784,
            openTime: tomorrow.toString(),
            showMessage: false,
        }
    ])

    //Login user
    function login(user) {
        console.log('LOGGED IN: ' + user.username + ' ' + user.password)
    }

    //Create user
    function createUser(user){
        console.log('CREATED: ' + user.username + ' ' + user.password)
    }

    //Add Cappsule
    const addCappsule = (cappsule) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newCappsule = {id, ...cappsule}
        setCappsules([... cappsules, newCappsule])
    }

    //Open message
    const openMessage = (id) => {
        setCappsules(cappsules.map((cappsule) =>
            cappsule.id === id ? { ...cappsule,
                showMessage: !cappsule.showMessage }
                : cappsule))
        console.log(id)
    }

    //Delete Cappsule
    const deleteCappule = (id) => {
        setCappsules(cappsules.filter((cappsule)=> cappsule.id !== id))
        console.log('delete', id)
    }

  return (
      <Router>
        <div className='container'>
            <Navbar/>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/login">
                        <Login onShowCreate={()=>setShowCreateUser(!showCreateUser) } showCreateUser={showCreateUser}/>
                        {!showCreateUser && <LoginUI onLogin={login}/>}
                        {showCreateUser && <CreateUser onCreateUser={createUser}/>}
                    </Route>
                    <Route exact path="/messages">
                        {cappsules.length > 0 ? (
                            <Cappsules cappsules={cappsules}
                                       onDelete={deleteCappule}
                                       onOpen={openMessage}
                            />
                        ) : (
                            'No Cappsules to show!'
                        )}
                    </Route>
                    <Route exact path="/createcappsule">
                        <AddCappsule onAdd={addCappsule}/>
                    </Route>
                </Switch>
            </div>
        </div>
      </Router>
  );
}

export default App;
