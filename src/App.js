import React from 'react';
import './App.css';
import SendIcon from '@material-ui/icons/Send';
import MessageIcon from '@material-ui/icons/Message';
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import List from "@material-ui/core/List";
import green from "@material-ui/core/es/colors/green";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const placeholders = ['How are you?', 'What\'s up?'];

const placeholder = () => placeholders[Math.floor(Math.random() * placeholders.length)];

const MessageInput = () =>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '2px 4px',
        margin: '12px'
    }}>
        <InputBase placeholder={placeholder()}
                   style={{
                       flex: 1,
                       marginLeft: 8
                   }}
                   autoFocus
        />
        <Divider style={{
            width: 1,
            height: 28,
            margin: 4
        }}/>
        <IconButton color={"primary"}
                    variant={"fab"} style={{padding: 10}}>
            <SendIcon/>
        </IconButton>
    </div>;


const fewMessages = [
    'Hi!',
    'What\'s up?',
    'How are you?',
    'I am fine thank you',
    'Done anything fun?',
    'Yes, I went for a long walk on the weekend. The weather was great.',
];

const manyMessages = Array(25).fill('Yes, I went for a long walk on the weekend. The weather was great.');

const MessageList = () =>
    <List>
        {manyMessages.map((m, i) =>
            <ListItem key={i}>
                <ListItemAvatar>
                    <Avatar style={{backgroundColor: green[500]}}>
                        <MessageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={m}
                    secondary={'1 min ago'}
                />
            </ListItem>
        )}
    </List>;

export default () => [
    <Paper elevation={1} className={'header'}>
        <AppBar position="static" style={{display: 'flex', alignItems: 'center', padding: '8px 4px'}}>
            <Typography variant="h6" color="inherit">
                Chat
            </Typography>
        </AppBar>
    </Paper>,

    <Paper elevation={0} className={'content'}>
        <MessageList/>
    </Paper>,

    <Paper elevation={1} className={'footer'}>
        <MessageInput/>
    </Paper>
];

