import * as React from "react";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Outro extends React.Component {
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
              <Title>Outra página</Title>
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
              <Button onPress={() => this.props.onNavigate('Home')}>
                <Text>Home</Text>
              </Button>
              <Button>
                <Text active>Outra</Text>
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