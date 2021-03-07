import React, {useState, useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {CTX} from './Store';
// import classes from './Dashboard.css';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "50px",
        padding: theme.spacing(3, 2),
    },

    flex: {
        display: "flex",
        alignItems: "center"
    },

    topicsWindow: {
        width: "30%",
        height: "300px",
        borderRight: "1px solid grey"
    },
    chatBox: {
        width: "85%",
    },

    chatWindow: {
        width: "70%",
        padding: '20px',
    },
    button: {
        width: "8%"
    }

}));

const Dashboard = (props) => {

    const {allChats, sendChatAction, user} = useContext(CTX);

    const topics = Object.keys(allChats);

    const [textValue, setTextValue] = useState('');
    const [activeTopic, setActiveTopic] = useState(topics[0]);

    const classes = useStyles();

    const sendMessage = (e) => {
        e.preventDefault();
        sendChatAction({msg: textValue, from: user, topic: activeTopic});
        setTextValue('');
        console.log(allChats);
    }

    return (
        <div>
            <Paper elevation={3} className={classes.root}>
                <Typography variant="h4" component="h4">
                    Chat app
                </Typography>
                <Typography variant="h5" component="h5">
                    {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                topics.map(topic => (
                                    <ListItem key={topic} button onClick={() => setActiveTopic(topic)}>
                                        <ListItemText primary={topic}/>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            allChats[activeTopic].map((chat, index) => (
                                <div className={classes.flex} key={index}>
                                    <Chip label={chat.from} className={classes.chip}/>
                                    <Typography variant="body1">{chat.msg}</Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
                    <form onSubmit={(e) => sendMessage(e)} className={classes.flex}>
                        <TextField
                            label="Enter message"
                            className={classes.chatBox}
                            id="standard-basic"
                            value={textValue}
                            onChange={(e) => setTextValue(e.target.value)}

                            type="text"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Send
                        </Button>
                    </form>
            </Paper>
        </div>
    );
}

export default Dashboard;