import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import NFT from "./components/NFT";




const Homepage = () => {
    
  const ConnectWallet = (e) => {
    alert(`was clicked`);
  };
  return (
    <HomepageRoot>  
      <FlexRow1>
        <Text12>
          <Text20 color={`#ffffff`}>Discover, find,</Text20>
          <Text20 color={`#fac710`}>Collect your favorite</Text20>
          <Text22>Nova Miningverse NFTs</Text22>
          <Paragraph>Marketplace for Nova Miningverse collections NFTs</Paragraph>
        </Text12>
        <Skin src={`https://file.rendit.io/n/ipes5qJPdRrwhd1ySzVv.png`} />
      </FlexRow1>    
      <EXPLORE>
        <FlexRow2>
          <Text23>Recently Listed</Text23>
          <ViewAll>
            <Link to="/marketplace">
              <Text24>Explore more</Text24>
              <Element28 />
            </Link>
          </ViewAll>
        </FlexRow2>
        <List2 margin={`0px 0px 25px 0px`}>
          <NFT />
          <NFT />
          <NFT />
          <NFT />
        </List2>
        <List2 margin={`0px 0px 80px 0px`}>
        <NFT />
          <NFT />
          <NFT />
          <NFT />
        </List2>
      </EXPLORE>
      <List>
        <SetUpYourWallet1 gap={`24px`}>
          <Background>
            <Wallet>
              <Path src={`https://file.rendit.io/n/iYmp6ldC9eTF8LbwrdBB.svg`} />
              <Pathpath>
                <Pathpath1 src={`https://file.rendit.io/n/jVD67XKy9vbOmM9CcBX2.svg`}/>
              </Pathpath>
            </Wallet>
          </Background>
          <SetUpYourWallet1 gap={`10px`}>
            <Text89>Set up your wallet</Text89>
            <Paragraph1>
              Wallet that is functional for NFT purchasing. You may have a
              Stacks wallet like Hero Wallet.
            </Paragraph1>
          </SetUpYourWallet1>
        </SetUpYourWallet1>
        <SetUpYourWallet1 gap={`24px`}>
          <Background1>
            <Fill>
              <Fill1 src={`https://file.rendit.io/n/EsrBegrPGC0lbLesfDDx.svg`}/>
            </Fill>
          </Background1>
          <SetUpYourWallet1 gap={`10px`}>
            <Text90>Buy your NFTs</Text90>
            <Paragraph1>
              Sed ut perspiciatis un de omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </Paragraph1>
          </SetUpYourWallet1>
        </SetUpYourWallet1>
        <SetUpYourWallet1 gap={`24px`}>
          <Background2>
            <Bookmark1>
              <WhiteRectangle />
              <Bookmark
                src={`https://file.rendit.io/n/UfwpH17t8HaTpDeGMHz5.svg`}
              />
            </Bookmark1>
          </Background2>
          <SetUpYourWallet1 gap={`10px`}>
            <Text89>List them for sale</Text89>
            <Paragraph1>
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs!
            </Paragraph1>
          </SetUpYourWallet1>
        </SetUpYourWallet1>
      </List>      
    </HomepageRoot>
  );
}

export default Homepage;

const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 220px;
  align-items: center;
  padding: 20px 0px;
`;
const Text12 = styled.div`
  height: 264px;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Text22 = styled.div`
  font-size: 56px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 68px;
  color: #ffffff;
  align-self: center;
  margin: 0px 0px 30px 0px;
`;
const Paragraph = styled.div`
  font-size: 20px;
  font-family: Urbanist;
  line-height: 30px;
  text-transform: capitalize;
  color: #ebebeb;
`;
const Skin = styled.img`
  width: 362px;
  height: 450px;
`;
const Text20 = styled.div`
  font-size: 56px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 68px;
  color: ${(props) => props.color};
`;
const List2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${(props) => props.margin};
`;
const SetUpYourWallet1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Text89 = styled.div`
  font-size: 24px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 30px;
  text-transform: capitalize;
  color: #ffffff;
`;
const Paragraph1 = styled.div`
  text-align: center;
  width: 321px;
  font-size: 14px;
  font-family: Urbanist;
  line-height: 22px;
  color: #ffffff;
`;
const HomepageRoot = styled.div`
  
  background-color: #3f2b46;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;


const EXPLORE = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 0px;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1040px;
  align-items: center;
  margin: 0px 0px 39px 0px;
`;
const Text23 = styled.div`
  font-size: 36px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 44px;
  text-transform: capitalize;
  color: #ffffff;
`;
const ViewAll = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 9px 0px;
`;
const Text24 = styled.div`
  font-size: 14px;
  font-family: Urbanist;
  font-weight: 700;
  letter-spacing: 1.4px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
`;
const Element28 = styled.div`
  width: 118px;
  height: 1px;
  background-image: linear-gradient(217deg, #e24fe5 0%, #4b50e6 100%);
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 219px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin: 0px 0px 50px 250px;
`;
const Background = styled.div`
  height: 56px;
  background-color: #5042fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 0px 16px;
`;
const Wallet = styled.div`
  width: 24px;
  height: 21px;
  position: relative;
`;
const Path = styled.img`
  width: 7.53px;
  height: 4.65px;
  position: absolute;
  top: 8.02px;
  left: 16.47px;
`;
const Pathpath = styled.div`
  height: 11.92px;
  background-image: url("https://file.rendit.io/n/AM9HjEBUG9uGcU0nnwYI.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4.54px 10.62px 4.54px 4.77px;
`;
const Pathpath1 = styled.img`
  width: 8.61px;
  height: 1.74px;
`;
const Background1 = styled.div`
  height: 56px;
  background-color: #9734fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 0px 18px;
`;
const Fill = styled.div`
  height: 12px;
  background-image: url("https://file.rendit.io/n/MDgc9555eK7Ubo1nNjdb.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 11px 4px 4px;
`;
const Fill1 = styled.img`
  width: 5px;
  height: 5px;
`;
const Text90 = styled.div`
  font-size: 24px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 30px;
  text-transform: capitalize;
  color: #ffffff;
  align-self: flex-start;
  margin: 0px 0px 0px 80px;
`;
const Background2 = styled.div`
  width: 56px;
  background-color: #df4848;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 16px 0px;
`;
const Bookmark1 = styled.div`
  width: 20px;
  height: 24px;
  position: relative;
`;
const WhiteRectangle = styled.div`
  width: 13px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 6px;
  left: 3px;
`;
const Bookmark = styled.img`
  width: 20px;
  height: 24px;
  position: absolute;
`;
