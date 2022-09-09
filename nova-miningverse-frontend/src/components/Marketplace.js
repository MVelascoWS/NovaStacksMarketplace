import styled from "styled-components";
import NFT from "./NFT";

const Marketplace = () => {
    return(
        <div className="marketplace">
            <MarketplaceRootRoot>
                <LIST>
                    <FlexRow1>
                        <FilterCollection1>
                            <Background44>
                            <Text21>All Types</Text21>
                            </Background44>
                            <Background45>
                            <Text22>Mystery box</Text22>
                            </Background45>
                            <Background45>
                            <Text23>Hero box</Text23>
                            </Background45>
                            <Background45>
                            <Text24>Weapon</Text24>
                            </Background45>
                            <Background45>
                            <Text25>Skin</Text25>
                            </Background45>
                        </FilterCollection1>
                        <Background49>
                            <EnterNFTName>Enter NFT name, </EnterNFTName>
                            <Button1>
                            <FilledSearch
                                src={`https://file.rendit.io/n/Fu39WGEUX7bbKuJEHVz0.svg`}
                            />
                            </Button1>
                        </Background49>
                    </FlexRow1>
                    <Element44>
                        <List>
                           <NFT/>
                           <NFT/>
                           <NFT/>
                           <NFT/>
                        </List>
                        <SortBy2>
                            <Background35>
                                <FlexRow2>
                                    <Text54>Sort by</Text54>
                                    <Image1 src={`https://file.rendit.io/n/6qKjq58atBUpyWrWLDiV.svg`}/>
                                </FlexRow2>
                                <Line3 src={`https://file.rendit.io/n/JHVChlAdHtaf59wkjhmj.svg`} />
                            </Background35>
                        </SortBy2>
                        <FilterCollection>
                            <Background36>
                            <Text55>All Heroes</Text55>
                            </Background36>
                            <Background45>
                            <Text56>Vincent Loyal</Text56>
                            </Background45>
                            <Background45>
                            <Text57>Ratman XC-09</Text57>
                            </Background45>
                            <Background45>
                            <Text58>Ignar Brannson</Text58>
                            </Background45>
                            <Background45>
                            <Text59>Belvarr Black Bear</Text59>
                            </Background45>
                            <Background45>
                            <Text58>Sabrina Waltz</Text58>
                            </Background45>
                            <Background45>
                            <Text22>Steven White</Text22>
                            </Background45>
                            <Background45>
                            <Text62>Might Joe Young</Text62>
                            </Background45>
                        </FilterCollection>
                        <Filter1>
                            <AllRanges1>
                                <Text11>
                                    <Text54>All Rarities</Text54>
                                    <Image1 src={`https://file.rendit.io/n/6qKjq58atBUpyWrWLDiV.svg`}/>
                                </Text11>
                            </AllRanges1>
                            <AllRanges1>
                                <Text11>
                                    <Text54>All Ranges</Text54>
                                    <Image1 src={`https://file.rendit.io/n/6qKjq58atBUpyWrWLDiV.svg`}/>
                                </Text11>
                            </AllRanges1>
                            <AllRanges1>
                                <Text13>
                                    <Text65>All Upgrade Lvl.</Text65>
                                    <Image4 src={`https://file.rendit.io/n/CSSx4JP1hIplDglJpnWQ.svg`}/>
                                </Text13>
                            </AllRanges1>
                        </Filter1>
                    </Element44>
                    <List1>
                        <NFT/>
                        <NFT/>
                        <NFT/>
                        <NFT/>
                    </List1>
                    <FlexRow3>
                        <Pagination1>
                            <OuterSpaceText>&lt;</OuterSpaceText>
                            <Bg1>
                                <Text94>1</Text94>
                            </Bg1>
                            <Bg2>
                                <Text95>2</Text95>
                            </Bg2>
                            <Bg2>
                                <Text95>3</Text95>
                            </Bg2>
                            <Bg2>
                                <Text97>4</Text97>
                            </Bg2>
                            <Bg2>
                                <Text97>5</Text97>
                            </Bg2>
                            <OuterSpaceText>&gt;</OuterSpaceText>
                        </Pagination1>
                        <SortBy>
                            <Background>
                                <Background2>
                                    <FlexRow4>
                                        <Text54>20</Text54>
                                        <Image1 src={`https://file.rendit.io/n/6qKjq58atBUpyWrWLDiV.svg`}/>
                                    </FlexRow4>
                                    <Line3 src={`https://file.rendit.io/n/JHVChlAdHtaf59wkjhmj.svg`}/>
                                </Background2>                                                   
                            </Background>
                        </SortBy>
                    </FlexRow3>
                </LIST>
            </MarketplaceRootRoot>
        </div>
    );
}

export default Marketplace;


const Background45 = styled.div`
  height: 46px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #343444;
  border-radius: 6px;
  &: hover{
    background-color: #5042fb;
  }
`;
const Text22 = styled.div`
  width: 100px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const Text54 = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  white-space: nowrap;
`;
const Image1 = styled.img`
  width: 10px;
  height: 10px;
`;
const Line3 = styled.img`
  width: 100px;
  height: 1px;
`;
const Text58 = styled.div`
  width: 110px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const AllRanges1 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #343444;
  border-radius: 6px;
  padding: 10px 12px;
  &: hover{
    background-color: #5042fb;
  }
`;
const Bg2 = styled.div`
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #343444;
  border-radius: 30px;
  padding: 0px 13px 0px 14px;
  &: hover{
    background-color: #5042fb;
  }
`;
const Text95 = styled.div`
  width: 28px;
  height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const Text97 = styled.div`
  width: 29px;
  height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const MarketplaceRootRoot = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #3f2b46;
  overflow: hidden;
`;
const LIST = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0px 20px 0px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 7px 0px;
`;
const FilterCollection1 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Background44 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-style: solid;
  border-color: #5042fb;
  background-color: #5042fb;
  border-radius: 6px;
  padding: 8.5px 7.51px 10.5px 7.39px;
  border-width: 1.5px;  
`;
const Text21 = styled.div`
  width: 62.11px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const Text23 = styled.div`
  width: 80px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 20px;
  text-align: center;
`;
const Text24 = styled.div`
  width: 70px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const Text25 = styled.div`
  width: 50px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const Background49 = styled.div`
  width: 401px;
  gap: 226px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #343444;
  border-radius: 10px;
  &: hover{
    background-color: #5042fb;
  }
`;
const EnterNFTName = styled.div`
  color: #ffffff;
  font-size: 13px;
  font-family: Urbanist;
  line-height: 20px;
  white-space: pre-wrap;
`;
const Button1 = styled.button`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #5042fb;
  border-radius: 0px 10px 10px 0px;
  padding: 14px 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const FilledSearch = styled.img`
  width: 20px;
  height: 20px;
`;
const Element44 = styled.div`
  width: 1410px;
  height: 569px;
  position: relative;
  margin: 0px 0px 33px 0px;
`;
const List = styled.div`
  top: 119px;
  position: absolute;
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const SortBy2 = styled.div`
  height: 46px;
  left: 1310px;
  top: 33px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Background35 = styled.div`
  height: 46px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #343444;
  border-radius: 6px;
  &: hover{
    background-color: #5042fb;
  }
`;
const FlexRow2 = styled.div`
  gap: 9px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;
const FilterCollection = styled.div`
  position: absolute;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Background36 = styled.div`
  height: 43px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #5042fb;
  background-color: #5042fb;
  border-radius: 6px;
  padding: 0px 8.07px 0px 7.94px;
  border-width: 1.5px;
`;
const Text55 = styled.div`
  width: 65.99px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const Text56 = styled.div`
  width: 105px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const Text57 = styled.div`
  width: 115px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 20px;
  text-align: center;
`;
const Text59 = styled.div`
  width: 130px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const Text62 = styled.div`
  width: 125px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const Filter1 = styled.div`
  height: 198px;
  top: 54px;
  position: absolute;
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text11 = styled.div`
  gap: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text13 = styled.div`
  gap: 2.12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Text65 = styled.div`
  width: 107.26px;
  color: #ffffff;
  font-size: 15px;
  font-family: Urbanist;
  line-height: 24px;
`;
const Image4 = styled.img`
  width: 10.62px;
  height: 10px;
`;
const List1 = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  margin: 0px 0px 10px 0px;
`;
const FlexRow3 = styled.div`
  gap: 318px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const Pagination1 = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
  margin: 27px 0px 0px 0px;
`;
const Bg1 = styled.div`
  height: 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: #5042fb;
  background-color: #343444;
  border-radius: 30px;
  padding: 0px 14px;
  border-width: 5px;
`;
const Text94 = styled.div`
  width: 27px;
  height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Urbanist;
  line-height: 24px;
  text-align: center;
`;
const OuterSpaceText = styled.div`
  width: 55px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
  font-family: Font Awesome 5 Pro;
  line-height: 15px;
  white-space: nowrap;
  background-color: #343444;
  border-radius: 30px;
  padding: 18px 0px 17px 0px;
  &: hover{
    background-color: #5042fb;
  }
`;
const SortBy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(28, 24, 24, 0.25);
`;
const Background = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #343444;
  border-radius: 6px;
  &: hover{
    background-color: #5042fb;
  }
`;
const Background2 = styled.div`
  height: 46px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #343444;
  border-radius: 6px;
  margin: 10px 0px 9px 0px;
  &: hover{
    background-color: #5042fb;
  }
`;
const FlexRow4 = styled.div`
  gap: 41px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;