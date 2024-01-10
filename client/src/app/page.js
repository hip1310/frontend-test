'use client'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [userData, setUserData] = useState({
    fullName: '',
    dateOfBirth: null,
    nickName: '',
    email: '',
    portfolioLink: ''
  });

  const [errorData, setErrorData] = useState({
    fullName: '',
    nickName: '',
    email: '',
    portfolioLink: ''
  });

  const [visible, setVisible] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px',
      borderRadius: '16px'
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrorData = {};

    if (!userData.fullName) {
      newErrorData.fullName = 'A full name is required to proceed.';
    }

    if (!userData.nickName) {
      newErrorData.nickName = 'A nick name is required to proceed.';
    }

    if (userData.nickName && /\s/.test(userData.nickName)) {
      newErrorData.nickName = 'A nickname without spaces is required to proceed.';
    }

    if (!userData.email) {
      newErrorData.email = 'An email is required to proceed.';
    }

    if (userData.email && !/\S+@\S+\.\S+/.test(userData.email)) {
      newErrorData.email = 'A valid email is required to proceed.';
    }

    if (!userData.portfolioLink) {
      newErrorData.portfolioLink = 'A portfolio link is required to proceed.';
    }

    if (userData.portfolioLink && !/^(ftp|http|https):\/\/[^ "]+$/.test(userData.portfolioLink)) {
      newErrorData.portfolioLink = 'A valid URL is required to proceed.';
    }

    setErrorData(newErrorData);

    if (Object.keys(newErrorData).length === 0) {
      setUserData({
        fullName: '',
        dateOfBirth: null,
        nickName: '',
        email: '',
        portfolioLink: ''
      })
      setVisible(true)
    }
  };

  return (
    <>
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="main-container">
          <div className='modalbodyheader'>
            <img src='images/loading-animation.png' height={"80px"} width={"80px"} />
            <img src='images/close-button.png' className='closebtn' onClick={() => setVisible(false)} />
          </div>
          <div className='mainbodycontainer'>
            <p className='thankcontainer'>Thank you!</p>
            <p className="para">
              Every detail is important. Please, be aware about spacing, animations, transitions, easing, sizing and timing.
            </p>
          </div>
        </div>
      </Modal>
      <div className="d-flex justify-content-center flex-row">
        <div className='welcome_page'>
          <div className='header'>
            <p className='welcome_line'>Welcome! <img src='images/vector.svg' /></p>
            <p className='description'>Please, complete the following example form.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='main_body'>
              <div className='about'>
                About you
              </div>
              <div className='input_fields'>
                <label>FULL NAME <img src='images/star.svg' /></label>
                <div className={errorData.fullName ? 'error d-flex input_field_body' : 'd-flex input_field_body'}>
                  <img src={errorData.fullName ? 'images/profile_red.svg' : 'images/profile.svg'} />
                  <input type="text" value={userData.fullName} onChange={(e) => { setUserData({ ...userData, fullName: e.target.value }) }} />
                </div>
                <span>{errorData.fullName}</span>
              </div>
              {/* <Input
                label="FULL NAME"
                value={userData.fullName}
                onChange={(e) => { setUserData({ ...userData, fullName: e.target.value }) }}
                error={errorData.fullName}
              /> */}
              <div className='input_fields'>
                <label>DATE OF BIRTH</label>
                <div className="d-flex input_field_body">
                  <img src='/images/calendar-date.svg' />
                  <DatePicker selected={userData.dateOfBirth} onChange={(date) => setUserData({ ...userData, dateOfBirth: date })} />
                </div>
              </div>
              <div className='input_fields'>
                <label>NICKNAME <img src='images/star.svg' /></label>
                <div className={errorData.nickName ? 'error d-flex input_field_body' : 'd-flex input_field_body'}>
                  <img src={errorData.nickName ? 'images/vector_arrow_red.svg' : 'images/vector_arrow.svg'} />
                  <input type="text" placeholder='No Spaces' value={userData.nickName} onChange={(e) => { setUserData({ ...userData, nickName: e.target.value }) }} />
                </div>
                <span>{errorData.nickName}</span>
              </div>
              <div className='input_fields'>
                <label>EMAIL <img src='images/star.svg' /></label>
                <div className={errorData.email ? 'error d-flex input_field_body' : 'd-flex input_field_body'}>
                  <img src={errorData.email ? 'images/email_red.svg' : 'images/email.svg'} />
                  <input type="text" placeholder='email@domain.com' value={userData.email} onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                </div>
                <span>{errorData.email}</span>
              </div>
              <div className='input_fields'>
                <label>PORTFOLIO LINK<img src='images/star.svg' /></label>
                <div className={errorData.portfolioLink ? 'error d-flex input_field_body' : 'd-flex input_field_body'}>
                  <img src={errorData.portfolioLink ? 'images/link_red.svg' : 'images/link.svg'} />
                  <input type="text" placeholder='https://' value={userData.portfolioLink} onChange={(e) => { setUserData({ ...userData, portfolioLink: e.target.value }) }} />
                </div>
                <span>{errorData.portfolioLink}</span>
              </div>
            </div>
            <div className='footer d-flex justify-content-end'>
              <button type="submit">Submit my form <img src='images/all-open-16-fit.svg' /></button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
