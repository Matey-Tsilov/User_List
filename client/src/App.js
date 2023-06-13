import { useEffect, useState } from "react";

import * as userService from "./service/UserService.js";

import Footer from "./components/common/Footer.js";
import Header from "./components/common/Header.js";
import Search from "./components/search/Search.js";
import UserSection from "./components/user-list/UserList.js";

function App() {

const [users, setUsers] = useState([])
const [query, setQuery] = useState(null)

    useEffect(() => {
      userService.getAll()
         .then(res => setUsers(res))
    }, [])

  return (
    <div>
      <Header />
      <main className="main">
       <section className="card users-container">
         <Search setQuery={setQuery}/>
         <UserSection query={query} users={users} setUsers={setUsers}/>
       </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
