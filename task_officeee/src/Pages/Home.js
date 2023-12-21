import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles/Login.css";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Home = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [username, setUsername] = useState('');
  const [meetingAgenda, setMeetingAgenda] = useState('');
  const [meetingDiscussion, setMeetingDiscussion] = useState('');
  const [date, setDate] = useState(null);
  const [meetingPlace, setMeetingPlace] = useState('');
  const [attendsfromClientSide, setAttendsfromClientSide] = useState('');
  const [attendsFromHostSide, setAttendsFromHostSide] = useState('');
  const [meetingDecision, setMeetingDecision] = useState('');

  const [usernameValid, setUsernameValid] = useState(true);
  const [meetingAgendaValid, setMeetingAgendaValid] = useState(true);
  const [meetingDiscussionValid, setMeetingDiscussionValid] = useState(true);
  const [meetingPlaceValid, setMeetingPlaceValid] = useState(true);
  const [dateValid, setDateValid] = useState(true);
  const [attendsfromClientSideValid, setAttendsfromClientSideValid] = useState(true);
  const [attendsFromHostSideValid, setAttendsFromHostSideValid] = useState(true);
  const [meetingDecisionValid, setMeetingDecisionValid] = useState(true);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleMeetingPlaceChange = (event) => {
    setMeetingPlace(event.target.value);
  };
  const handleMeetingAgendaChange = (event) => {
    setMeetingAgenda(event.target.value);
  };
  const handleDateChange = (date) => {
    setDate(date);
  };
  const handleAttendsfromClientSideChange = (e) => {
    setAttendsfromClientSide(e.target.value);
  };
  const handleAttendsFromHostSideChange = (e) => {
    setAttendsFromHostSide(e.target.value);
  };
  const handleMeetingDecisionChange = (e) => {
    setMeetingDecision(e.target.value);
  };

  const handleMeetingDiscussionChange = (e) => {
    setMeetingDiscussion(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsernameValid(username.trim() !== '');
    setMeetingPlaceValid(meetingPlace.trim() !== '');
    setMeetingAgendaValid(meetingAgenda.trim() !== '');
    setMeetingDiscussionValid(meetingDiscussion.trim() !== '');
    setAttendsfromClientSideValid(attendsfromClientSide.trim() !== '');
    setDateValid(date !== null && date !== undefined);
    setAttendsFromHostSideValid(attendsFromHostSide.trim() !== '');
    setMeetingDecisionValid(meetingDecision.trim() !== '');

    if (
      usernameValid &&
      meetingAgendaValid &&
      meetingDiscussionValid &&
      dateValid &&
      meetingPlaceValid &&
      attendsFromHostSideValid &&
      meetingDecisionValid &&
      attendsfromClientSideValid
    ) {

      console.log('Form submitted successfully!');
    } else {
      console.log('Form has validation errors.');
    }
  };

  return (
    <>
      <div className='wrapper d-flex align-item-center justify-content-left w-100' style={{ padding: "5px" }}>
        <div className='login'>
          <h3 className='mb-2'>Meeting Minutes</h3>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <FormControlLabel value="Corporate" control={<Radio />} label="Corporate" />
              <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
            </RadioGroup>
          </FormControl>

          {selectedRole === 'Corporate' && (
            <form>
              <div className="mb-3 d-flex align-items-center">
                <div className="d-flex flex-column">
                  <label htmlFor="inputName" className="form-label" style={{ marginRight: '5px' }}>
                    Username {usernameValid ? null : <span style={{ color: 'red' }}>*</span>}
                  </label>

                  <input
                    type="text"
                    className={`form-control medium-placeholder ${usernameValid ? '' : 'is-invalid'}`}
                    id="inputCustomerName"
                    placeholder="Select Customer Name"
                    style={{ width: "450px", marginBottom: '5px' }}
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="d-flex flex-column" style={{ marginLeft: '250px' }}>
                  <label htmlFor="meetingAgenda" className="form-label">
                    Meeting Agenda {meetingAgendaValid ? null : <span style={{ color: 'red' }}>*</span>}
                  </label>
                  <input
                    type="text"
                    className={`form-control medium-placeholder ${meetingAgendaValid ? '' : 'is-invalid'}`}
                    id="meetingAgenda"
                    placeholder="Enter Meeting Agenda"
                    style={{ width: "450px", marginBottom: '5px' }}
                    value={meetingAgenda}
                    onChange={handleMeetingAgendaChange}
                  />
                </div>
              </div>

              <div className="mb-1 d-flex align-items-center">
                <div className="d-flex flex-column">
                  <label htmlFor="inputDate" className="form-label" style={{ marginRight: '10px' }}>Date</label>
                  <div style={{ width: '450px' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker']}>
                        <DatePicker label="Select date" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>

                <div className="d-flex flex-column" style={{ marginLeft: '250px' }}>
                  <label htmlFor="meetingDiscussion" className="form-label">
                    Meeting Discussion {meetingDiscussionValid ? null : <span style={{ color: 'red' }}>*</span>}
                  </label>
                  <input
                    type="text"
                    className={`form-control medium-placeholder ${meetingDiscussionValid ? '' : 'is-invalid'}`}
                    id="meetingDiscussion"
                    placeholder="Enter Meeting Discussion"
                    style={{ width: "450px", marginBottom: '2px' }}
                    value={meetingDiscussion}
                    onChange={handleMeetingDiscussionChange}
                  />
                </div>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <div className="d-flex flex-column">
                  <label htmlFor="inputName" className="form-label" style={{ marginRight: '5px' }}>
                    Meeting Place {meetingPlaceValid ? null : <span style={{ color: 'red' }}>*</span>}
                  </label>

                  <input
                    type="text"
                    className={`form-control medium-placeholder ${meetingPlaceValid ? '' : 'is-invalid'}`}
                    id="inputMeetingPlace"
                    placeholder="Select Meeting Place"
                    style={{ width: "450px", marginBottom: '5px' }}
                    value={meetingPlace}
                    onChange={handleMeetingPlaceChange}
                  />
                </div>
                <div className="d-flex flex-column" style={{ marginLeft: '250px' }}>
                  <label htmlFor="meetingDecision" className="form-label">Meeting Decision</label>
                  <input
                    type="text"
                    className="form-control medium-placeholder"
                    id="meetingDecision"
                    placeholder="Enter Meeting Decision"
                    style={{ width: "450px", marginBottom: '5px' }}
                    value={meetingDecision}
                    onChange={handleMeetingDecisionChange}
                  />
                </div>
              </div>

              <div className="mb-3 d-flex align-items-center">
                <div className="d-flex flex-column">
                  <label htmlFor="clientSide" className="form-label" style={{ marginRight: '5px' }}>
                    Attends from Client Side {attendsfromClientSideValid ? null : <span style={{ color: 'red' }}>*</span>}
                  </label>
                  <textarea
                    className={`form-control medium-placeholder ${attendsfromClientSideValid ? '' : 'is-invalid'}`}
                    id="clientSide"
                    placeholder="Present client side"
                    style={{ width: "450px", marginBottom: '5px', minHeight: '50px' }}
                    value={attendsfromClientSide}
                    onChange={handleAttendsfromClientSideChange}
                  />
                </div>

                <div className="d-flex flex-column" style={{ marginLeft: '250px' }}>
                  <label htmlFor="hostSide" className="form-label">
                    Attends From Host Side {attendsFromHostSideValid ? null : <span style={{ color: 'red' }}>*</span>}
                  </label>
                  <textarea
                    className={`form-control medium-placeholder ${attendsFromHostSideValid ? '' : 'is-invalid'}`}
                    id="hostSide"
                    placeholder="Present self side"
                    style={{ width: "450px", marginBottom: '5px', minHeight: '50px' }}
                    value={attendsFromHostSide}
                    onChange={handleAttendsFromHostSideChange}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-buttom">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
