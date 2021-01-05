import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import * as action from '../../redux/contact-action';

const List = styled.ul`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 100%;
  margin-bottom: 20px;
`;
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function ContactsList({ onDelete, contactsArr }) {
  const classes = useStyles();

  return (
    <List>
      {contactsArr.map(item => (
        <ListItem key={item.id}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {item.name}
              </Typography>

              <Typography className={classes.pos} color="textSecondary">
                {item.lastName}
              </Typography>
              <Typography variant="body2" component="p">
                {item.Age}
                <br />
                {item.secondName}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => onDelete(item.id)}>
                Delete Card
              </Button>
            </CardActions>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}

const mapStateToProps = state => {
  return {
    contactsArr: state.contacts,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => dispatch(action.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
