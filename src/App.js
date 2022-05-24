
import { useState, useEffect } from "react";
import AddCappsule from "./components/AddCappsule";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import LoginUI from "./components/LoginUI";
import CreateUser from "./components/CreateUser";
import Friends from "./components/Friends";
import FriendsUI from "./components/FriendsUI";
import AddFriend from "./components/AddFriend";
import { AuthStore } from './stores/authStore';
import { CappsuleStore } from './stores/cappsuleStore';
import { storesContext, useStores } from './stores/store';
import Test from "./components/test";

const App = () => {
    const [showCreateUser, setShowCreateUser] = useState(false)
    const [showAddFriend, setShowAddFriend] = useState(false)
    const [test, setTest] = useState({})

    const { authStore, cappsuleStore } = useStores();

    let tomorrow = new Date()
    let today = new Date()
    tomorrow.setDate(today.getDate() + 1)
    const [c, setCappsules] = useState([])
    const [friends, setFriends] = useState([
        {
            id: 1,
            UserIdRequesting: 'Birte',  //Er det muligt at hente dem er med navne fra backend?
            UserIdRequested: 'Benedikte', //Samt at få dem i en consistent orden? altså "UserIdRequesting" er altid den som man søger efter og UserIdRequested altid er vennen?
            Accepted: true,
        },
        {
            id: 2,
            UserIdRequesting: 'Bubber',
            UserIdRequested: 'BS',
            Accepted: false,
        },
        {
            id: 3,
            UserIdRequesting: 'Bodil',
            UserIdRequested: 'Berta',
            Accepted: true,
        },
    ])

    useEffect(() => {
    }, [])

    //Login user -- regner med at lave kald til database her
    const login = async (user) => {
        await authStore.attemptLogin(user)
        let t = authStore.user
        setTest(t)
        console.log(test)
        if (authStore.user !== undefined) {
            localStorage.setItem("token", authStore.user.token)
            await cappsuleStore.getCappsules(authStore.user.id)

        }
    }

    //Create user -- regner med at lave kald til database her
    const createUser = async (user) => {
        await authStore.attemptRegister(user)
        console.log(authStore.user)
    }

    //Add Cappsule -- regner med at lave kald til database her
    const addCappsule = (cappsule) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newCappsule = { id, ...cappsule }
        setCappsules([...c, newCappsule])
    }
    //Send friend request
    const sendFriendRequest = (friend) => {
        console.log(friend)
    }

    return (

        <Router>
            <div className='container'>
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <Login onShowCreate={() => setShowCreateUser(!showCreateUser)} showCreateUser={showCreateUser} />
                            {!showCreateUser && <LoginUI onLogin={login} />}
                            {showCreateUser && <CreateUser onCreateUser={createUser} />}
                        </Route>
                        <Route exact path="/messages">
                            <Test test={test} />
                        </Route>
                        <Route exact path="/createcappsule">
                            <AddCappsule onAdd={addCappsule} />
                        </Route>
                        <Route exact path="/friends">
                            <Friends friends={friends} onShowAddFriend={() => setShowAddFriend(!showAddFriend)} showAddFriend={showAddFriend} />
                            {!showAddFriend && <FriendsUI friends={friends} />}
                            {showAddFriend && <AddFriend onSendRequest={sendFriendRequest} />}
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
