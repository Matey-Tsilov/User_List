import Footer from "./components/common/Footer.js";
import Header from "./components/common/Header.js";
import Search from "./components/search/Search.js";
import UserSection from "./components/user-list/UserList.js";
import { useEffect, useState } from "react";

const baseUrl = 'http://localhost:3005/api/users'

function App() {

const [users, setUsers] = useState([])

    useEffect(() => {
      fetch(baseUrl)
      .then(res => res.json())
      .then(result => setUsers(result.users))
    }, [])

    console.log(users);
  return (
    <div>
      <Header />
      <main className="main">
       <section className="card users-container">
         <Search />
         <UserSection />
       </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
