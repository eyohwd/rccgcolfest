import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
//import {mobile} from "../responsive"

const Container = styled.div`
   display: flex;
   background-color: crimson;
   ${mobile({flexDirection: "column"})}
   
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

const Logo = styled.h1`
   font-size: 23px;
  color: violet;
`;
const Desc = styled.p`
  margin: 20px 0;
  color: white;
  font-weight: 300;
`;
const SocialContainer = styled.div`
   display: flex;
`;
const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: white;
   background-color: #${props=>props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`;


const Center = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({display: "none"})}

   

`;
const Title = styled.h3`
   margin-bottom: 30px;
   color: #27213c;
`;
const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: white;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  
`;
const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
   color: white;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CITY OF LIGHT</Logo>
        <Desc>
            Attend our weekly services. Join others to study the word
             of God precept upon precept, its always great to know what
              God says about you and live a life of success in christ.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Watch Live</ListItem>
            <ListItem>Members Registration</ListItem>
            <ListItem>Build Up Your Self</ListItem>
            <ListItem>Join a community</ListItem>
            <ListItem>Giving</ListItem>
            <ListItem>Prayer Team</ListItem>
            <ListItem>Departments</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{ marginRight: "10px", color: "magenta"}}/>
            1st avn Extention W close Festac Town Lagos.
        </ContactItem>
        <ContactItem><Phone style={{ marginRight: "10px", color: "yellow"}}/>
            +234 09048352615
        </ContactItem>
        <ContactItem><MailOutlined style={{ marginRight: "10px", color: "green"}}/>
            cityoflight@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
}

export default Footer;
