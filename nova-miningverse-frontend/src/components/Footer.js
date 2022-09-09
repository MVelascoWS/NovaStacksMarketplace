import styled from "styled-components";

const Footer = () => {
    return(
        <div className="footer">
            <Background37>
                <AboutUs1>
                    <NovaIcon1 src={`https://file.rendit.io/n/rfFlJa8QUyjw2AG0vFnk.png`}/>
                    <Paragraph4>
                        Lorem ipsum dolor sit amet,consectetur
                        <br />
                        adipisicing elit. Quis non, fugit totam vel
                        <br />
                        laboriosam vitae.
                    </Paragraph4>
                    <ListSocial>
                        <Background39>
                            <BrandFacebook src={`https://file.rendit.io/n/fuxt0JKvbtAMYby4xydG.svg`}/>
                        </Background39>
                        <Background39>
                            <BrandFacebook src={`https://file.rendit.io/n/7TZbeUACJvOqQ9H1cHqI.svg`}/>
                        </Background39>
                    </ListSocial>
                </AboutUs1>
                <Community>
                    <Text13>Project</Text13>
                    <Text93>About Us</Text93>
                    <Text93>Contact Us</Text93>
                    <Text93>Discover</Text93>
                </Community>
            </Background37>
        </div>
    );
}

export default Footer;

const Background37 = styled.div`
  
  background-image: url("https://file.rendit.io/n/H3pEUYV7qQ4vOZiUgDF2.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 123px;
  align-items: center;
  padding: 87px 255px 80px 255px;
`;
const AboutUs1 = styled.div`
  height: 195px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const NovaIcon1 = styled.img`
  width: 72px;
  height: 41px;
  margin: 0px 0px 20px 0px;
`;
const Paragraph4 = styled.div`
  font-size: 14px;
  font-family: Urbanist;
  line-height: 22px;
  color: #ffffff;
  align-self: center;
  margin: 0px 0px 28px 0px;
`;
const ListSocial = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;
const Community = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin: 11px 0px 0px 0px;
`;
const Background39 = styled.div`
  height: 40px;
  background-color: #343444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 8px;
`;
const BrandFacebook = styled.img`
  width: 24px;
  height: 24px;
`;
const Text93 = styled.div`
  font-size: 14px;
  font-family: Urbanist;
  line-height: 22px;
  color: #ffffff;
`;
const Text13 = styled.div`
  font-size: 18px;
  font-family: Urbanist;
  font-weight: 700;
  line-height: 26px;
  text-transform: capitalize;
  color: #ffffff;
`;