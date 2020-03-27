import * as React from "react";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Text>
              --- This is Content Section
            </Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button>
                <Text active>Home</Text>
              </Button>
              <Button onPress={() => this.props.onNavigate('Outro')}>
                <Text>Outra</Text>
              </Button>
              <Button>
                <Text> ...</Text>
              </Button>
              <Button>
                <Text> ...</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      );
    
  }
}