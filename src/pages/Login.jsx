import CopyrightFooter from "../components/CopyrightFooter";
import LoginContainer from "../components/LoginContainer";
import LoginNavbar from "../components/LoginNavbar";
import Triangle from "../assets/Triangle.png";
import Rounded from "../assets/rounded.png";
import Circle from "../assets/circle.png";

const Login = () => {
  return (
    <div>
      <div className="min-h-screen bg-LoginContainer relative overflow-x-hidden">
        <LoginNavbar />
        <LoginContainer />
        <CopyrightFooter />
        {/* Shapes */}
        <div className="absolute right-[-6%] bottom-0">
          <img src={Triangle} alt="" className="w-[80%]" />
        </div>
        <div className="absolute left-0 top-[30%]">
          <img src={Rounded} alt="" className="w-[80%]" />
        </div>
        <div className="absolute right-[-5%] top-0">
          <img src={Circle} alt="" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
