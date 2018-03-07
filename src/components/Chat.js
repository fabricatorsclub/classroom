import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ChatIcon from 'material-ui/svg-icons/communication/chat';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

class Chat extends Component {
  state = {
    chatBot: false,
  };

  toggleChat = () => {
    this.setState({ chatBot: !this.state.chatBot });
  };

  render() {
    const { chatBot } = this.state;

    return (
      <div className="ChatBot">
        <div style={{ display: !chatBot ? 'none' : '' }}>
          <ChatBot
            steps={[
              {
                id: '1',
                message: 'What is your name?',
                trigger: '2',
              },
              {
                id: '2',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hi {previousValue}, nice to meet you!',
                end: true,
              },
            ]}
          />
        </div>

        <FloatingActionButton onClick={this.toggleChat}>
          {chatBot ? <CloseIcon /> : <ChatIcon />}
        </FloatingActionButton>
      </div>
    );
  }
}

export default Chat;
