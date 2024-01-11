'use client'
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';
import Input from '@/component/Input';
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

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

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
      {
        !visible &&
        <div className="d-flex justify-content-center flex-row" id='root'>
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
                <Input
                  label={'FULL NAME'}
                  type={'text'}
                  value={userData.fullName}
                  onChange={(value) => setUserData({ ...userData, fullName: value })}
                  required={true}
                  icon={errorData.fullName ? 'images/profile_red.svg' : 'images/profile.svg'}
                  error={errorData.fullName}
                />
                <div className='input_fields'>
                  <label>DATE OF BIRTH</label>
                  <div className="d-flex input_field_body">
                    <img src='/images/calendar-date.svg' />
                    <DatePicker selected={userData.dateOfBirth} onChange={(date) => setUserData({ ...userData, dateOfBirth: date })} />
                  </div>
                </div>
                <Input
                  label={'NICKNAME'}
                  type={'text'}
                  placeholder={'No Spaces'}
                  value={userData.nickName}
                  onChange={(value) => setUserData({ ...userData, nickName: value })}
                  required={true}
                  icon={errorData.nickName ? 'images/vector_arrow_red.svg' : 'images/vector_arrow.svg'}
                  error={errorData.nickName}
                />
                <Input
                  label={'EMAIL'}
                  type={'text'}
                  placeholder={'email@domain.com'}
                  value={userData.email}
                  onChange={(value) => setUserData({ ...userData, email: value })}
                  required={true}
                  icon={errorData.email ? 'images/email_red.svg' : 'images/email.svg'}
                  error={errorData.email}
                />
                <Input
                  label={'PORTFOLIO LINK'}
                  type={'text'}
                  placeholder={'https://'}
                  value={userData.portfolioLink}
                  onChange={(value) => setUserData({ ...userData, portfolioLink: value })}
                  required={true}
                  icon={errorData.portfolioLink ? 'images/link_red.svg' : 'images/link.svg'}
                  error={errorData.portfolioLink}
                />
              </div>
              <div className='footer d-flex justify-content-end'>
                <button type="submit">Submit my form <img src='images/all-open-16-fit.svg' /></button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}
