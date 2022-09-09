import {Link} from "react-router-dom";
import styled from "styled-components";

const NFT = () => {
    return(
        <div className="nft">     
            <Link to="/details">
                <Background3>
                    <Element45>
                        <Text26>Ignar Brannson</Text26>
                        <Text27>#00000</Text27>
                    </Element45>
                    <Img>
                        <Like1>
                        <Background6 />
                        <Element19>Lv. 2</Element19>
                        </Like1>
                        <Background5>
                            <StarBoldPx4
                                src={`https://file.rendit.io/n/lN746ieLrNyahC6RBphZ.svg`}
                            />
                            <StarBoldPx3
                                src={`https://file.rendit.io/n/lpBBZ2BCD7mbVqz7aZ21.svg`}
                            />
                            <StarBoldPx4
                                src={`https://file.rendit.io/n/lN746ieLrNyahC6RBphZ.svg`}
                            />
                            <StarBoldPx3
                                src={`https://file.rendit.io/n/lpBBZ2BCD7mbVqz7aZ21.svg`}
                            />
                            <StarBoldPx4
                                src={`https://file.rendit.io/n/lN746ieLrNyahC6RBphZ.svg`}
                            />
                        </Background5>
                    </Img>
                    <Infomation>
                        <Text1>
                        <Text28>Owned By</Text28>
                        <Text29>SP1P....GD7R</Text29>
                        </Text1>
                        <FlexColumn>
                        <Background4>
                            <Text30>STX</Text30>
                        </Background4>
                        <Price1>
                            <Text31>4.89 NMV</Text31>
                            <Text32>Price</Text32>
                        </Price1>
                        </FlexColumn>
                    </Infomation>                            
                </Background3>
            </Link>                           
        </div>  
    );
}
export default NFT;

const Background3 = styled.div`
  height: 431.66px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #343444;
  border-radius: 20px;
  padding: 9.17px 20px;
  text-decoration: none;
`;
const Element45 = styled.div`
  width: 290px;
  height: 28.18px;
  position: relative;
  align-self: stretch;
  margin: 0px 0px 2.82px 0px;
`;
const Text26 = styled.div`
  width: 193px;
  height: 28.18px;
  left: 97px;
  position: absolute;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Urbanist;
  line-height: 26px;
  text-align: right;
  text-transform: capitalize;
  text-decoration: none;
`;
const Text27 = styled.div`
  width: 216px;
  height: 28.18px;
  position: absolute;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Urbanist;
  line-height: 26px;
  text-transform: capitalize;
  text-decoration: none;
`;
const Img = styled.div`
  gap: 84.41px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/og0H8m5WHgLfX3EfiMbR.png");
  padding: 13px 12px 261.82px 14px;
  margin: 0px 0px 11px 0px;
`;
const Like1 = styled.div`
  width: 70.59px;
  height: 28.18px;
  position: relative;
`;
const Background6 = styled.div`
  width: 63.5px;
  height: 25px;
  position: absolute;
  background-color: #13131e;
  border-radius: 10px;
`;
const Element19 = styled.div`
  width: 60.59px;
  height: 28.18px;
  left: 10px;
  position: absolute;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Urbanist;
  line-height: 26px;
  text-transform: capitalize;
`;
const Background5 = styled.div`
  width: 109px;
  height: 15.15px;
  gap: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  align-items: flex-end;
  background-color: #13131e;
  border-radius: 10px;
  padding: 4px 0px 5.85px 0px;
`;
const StarBoldPx4 = styled.img`
  width: 15px;
  height: 15px;
`;
const StarBoldPx3 = styled.img`
  width: 15px;
  height: 15px;
  align-self: flex-start;
`;
const Infomation = styled.div`
  gap: 55px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
const Text1 = styled.div`
  gap: 1.69px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 3.84px 0px;
`;
const Text28 = styled.div`
  width: 60px;
  height: 21.67px;
  align-self: flex-start;
  color: #8989a0;
  font-size: 13px;
  font-family: Urbanist;
  line-height: 20px;
  text-decoration: none;
`;
const Text29 = styled.div`
  width: 150px;
  height: 24.34px;
  color: #ebebeb;
  font-size: 18px;
  font-weight: 700;
  font-family: Urbanist;
  line-height: 22px;
  text-decoration: none;
`;
const FlexColumn = styled.div`
  gap: 4.28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;
const Background4 = styled.div`
  width: 49px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  background-color: #5042fb;
  border-radius: 10px;
  padding: 2px 0px 2.33px 0px;
`;
const Text30 = styled.div`
  width: 26px;
  height: 21.67px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  font-family: Urbanist;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;
const Price1 = styled.div`
  width: 85px;
  height: 51.54px;
  position: relative;
`;
const Text31 = styled.div`
  width: 85px;
  height: 28.18px;
  top: 23.37px;
  position: absolute;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  font-family: Urbanist;
  line-height: 26px;
  text-transform: capitalize;
`;
const Text32 = styled.div`
  width: 28px;
  height: 21.67px;
  left: 52px;
  position: absolute;
  color: #8989a0;
  font-size: 13px;
  font-family: Urbanist;
  line-height: 20px;
  text-align: right;
`;