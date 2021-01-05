import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as action from '../../redux/contact-action';
import styled from 'styled-components';

const Form = styled.form`
  width: 400px;
  margin: 0 auto 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  & > .input {
    width: 80%;
    margin-bottom: 30px;
  }
  & > .button {
    width: 80%;
  }
`;
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ContactsForm({ onAddContact }) {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors, control } = useForm();
  const onSubmit = data => {
    onAddContact(data);
  };

  return (
    <>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <TextField
              className="input"
              id="standard-basic"
              label="Name"
              onChange={onChange}
              value={value}
              required
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <TextField
              className="input"
              id="standard-basic"
              label="lastName"
              onChange={onChange}
              value={value}
              required
            />
          )}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This is required</span>}

        <Controller
          name="Age"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={onChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="secondName"
          control={control}
          defaultValue=""
          render={({ onChange, value }) => (
            <TextField
              className="input"
              id="standard-basic"
              label="secondName"
              onChange={onChange}
              value={value}
              required
            />
          )}
        />
        <Button
          className="button"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: contact => dispatch(action.addContact(contact)),
  };
};

export default connect(null, mapDispatchToProps)(ContactsForm);
