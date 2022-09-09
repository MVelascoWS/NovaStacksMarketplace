import {Link} from "react-router-dom";
import styled from "styled-components";
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
        <nav className="navbar">
            <div className="links">
                    <HEADER>
                        <Element27>
                            <PurpleHeartText>STX</PurpleHeartText>
                            <Background35>
                                <FlexRow>
                                    <Link to="/">
                                        <NovaIcon src={`https://file.rendit.io/n/QNURrWgjc4H79t1OroKb.png`} />
                                    </Link>
                                    <Menu>
                                        <Link to="/"><Text13>Home</Text13></Link>
                                        <Link to="/marketplace"><Text13>Marketplace</Text13></Link>
                                        <Text14>NFT Staking</Text14>
                                        <Text14>NFT Burn</Text14>
                                        <Text14>PVP</Text14>
                                        <Text14>Guilds</Text14>
                                    </Menu>                                
                                    <Background36 onClick={authenticate}>
                                        <Wallet1 src={`https://file.rendit.io/n/36uHbi2B2SnYP8jHgw6t.svg`}/>
                                        <Text19>Wallet Connect</Text19>
                                    </Background36>
                                </FlexRow>
                                
                            </Background35>
                        </Element27>                        
                    </HEADER> 
            </div>
        </nav>
    );    
}

export default Navbar;

const HEADER = styled.div`
    background-color: #3f2b46;  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px 0px 0px 0px;
`;
const Element27 = styled.div`
  height: 80px;
  position: relative;
  min-width: 1920px;
`;
const Text13 = styled.div`
  font-size: 18px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 26px;
  text-transform: capitalize;
  color: #ffffff;
  &: hover{
    color: #fac710;
  }
`;
const Text14 = styled.div`
  font-size: 18px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 26px;
  text-transform: capitalize;
  color: #ffffff;
  opacity: 70%;
`;
const PurpleHeartText = styled.div`
  text-align: center;
  display: flex;
  font-size: 12px;
  font-family: Urbanist;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #5042fb;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 26px;
  left: 1350px;
  border-radius: 10px;
  padding: 4px 30px;
`;
const Background35 = styled.div`
  height: 80px;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 255px;
`;
const NovaIcon = styled.img`
  width: 113px;
  height: 64px;
  align-self: center;
  margin: 0px 259px 0px 0px;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 44px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 12px 199px 0px 0px;
`;
const Background36 = styled.button`
  border-color: #fac710;
  border-style: solid;
  width: 196px;
  display: flex;
  flex-direction: row;
  gap: 9.67px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  padding: 12px 0px;
  margin: 1px 0px 0px 0px;
  border-width: 1px;
  background: none;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  }
`;
const Wallet1 = styled.img`
  width: 16.67px;
  height: 15px;
`;
const Text19 = styled.div`
  font-size: 15px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 22px;
  color: #ffffff;
`;
