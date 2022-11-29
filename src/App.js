import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServerSettings from "./pages/ServerSettings";
import AccountSetting from "./pages/AccountSetting";
import ServerMember from "./pages/ServerMember";
import Blacklist from "./pages/Blacklist";
import Upgrade from "./pages/Upgrade";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/server">
          <Route path="settings" element={<ServerSettings />} />
          <Route path="members" element={<ServerMember />} />
          <Route path="blacklist" element={<Blacklist />} />
        </Route>
        <Route path="/account">
          <Route path="settings" element={<AccountSetting />} />
          <Route path="upgrade" element={<Upgrade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
