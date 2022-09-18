import {Link} from "react-router-dom";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

function authenticate() {
  
    showConnect({
      appDetails: {
        name: "Nova Mininverse",
        icon: window.location.origin + "/logo512.png",
      },
      redirectTo: "/",
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  }

  function disconnect() {
    userSession.signUserOut("/");
  }

const Navbar = () => {
    return (
        <nav className="navbar flex flex-col justify-between">
            <div className="links">
                    <div className="bg-purple">
                        <div className="h-[80px] relative">                          
                            <div className="pt-4 flex flex-col flex-shrink justify-start items-strength w-100">
                                <div className="flex flex-row flex-1 items-center align-middle px-60">
                                    <Link to="/">
                                        <img  className="w-[113px]  self-center" src={`https://file.rendit.io/n/QNURrWgjc4H79t1OroKb.png`} />
                                    </Link>
                                    <div className="flex flex-row grow gap-6 justify-center items-center text-center ">
                                        <Link to="/"><div className="font-urban text-white font-bold hidden md:block md:text-sm lg:text-lg hover:text-gold">Home</div></Link>
                                        <Link to="/marketplace"><div className="font-urban text-white font-bold hidden md:block md:text-sm lg:text-lg hover:text-gold">Marketplace</div></Link>
                                        <div className="font-urban text-white font-bold  hidden md:block md:text-sm lg:text-lg opacity-70">NFT Staking</div>
                                        <div className="font-urban text-white font-bold hidden md:block md:text-sm lg:text-lg opacity-70">NFT Burn</div>
                                        <div className="font-urban text-white font-bold hidden md:block  md:text-sm lg:text-lg text-lg opacity-70">PVP</div>
                                        <div className="font-urban text-white font-bold hidden md:block  md:text-sm lg:text-lg text-lg opacity-70">Guilds</div>
                                    </div>                                    
                                    <div className="font-urban text-white font-bold text-lg bg-stacks rounded-full px-5 mr-7 drop-shadow-lg">STX</div>
                                    <button className="w-[196px] border-gold border-solid flex flex-row rounded-full gap-[10px] ml-2 py-2 pl-10 border-2 content-center items-center box-content cursor-pointer hover:opacity-70" onClick={authenticate}>
                                          <img className="h-[15px]" src={`https://file.rendit.io/n/36uHbi2B2SnYP8jHgw6t.svg`}/>
                                          <div className="font-urban font-bold text-lg text-white">Wallet Connect</div>
                                        </button>
                                        
                                </div>
                            </div>
                        </div>                        
                    </div> 
            </div>
        </nav>
    );    
}

export default Navbar;


