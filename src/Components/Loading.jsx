import logo from "../assets/logo.png";

function Loading(){
  
  return(
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="text-gray-600 font-bold text-2xl flex items-center space-x-1">
        <span>L</span>
        <img
          src={logo}
          alt="Logo"
          className="w-8 h-8 animate-spin"
        />
        <span>OADING</span>
      </div>
    </div>

  );
}

export default Loading;
