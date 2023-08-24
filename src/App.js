import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import English from './Pages/English/English'
import Farsi from './Pages/Farsi/Farsi'
import Arabic from './Pages/Arabic/Arabic'
import Kurdish from './Pages/Kurdish/Kurdish'
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import Modal from '@mui/material/Modal';
import './App.css'
import { useRef } from 'react'

export default function App() {
  const [lan, setLan] = useState('en')
  const lanBtnTitle = useRef('English')
  const [showLanModal, setShowLanModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const HideLanModalHandler = () => {
    setShowLanModal(false)
  }
  const ShowLanModalHandler = () => {
    setShowLanModal(true)
  }
  const HideContactModalHandler = () => {
    setShowContactModal(false)
  }
  const ShowContactModalHandler = () => {
    setShowContactModal(true)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    border: '0',
    p: 2,
  };

  return (
    <>
      <Navbar ShowLanModalHandler={ShowLanModalHandler} lanBtnTitle={lanBtnTitle.current} ShowContactModalHandler={ShowContactModalHandler} />
      <Header ShowContactModalHandler={ShowContactModalHandler} />

      {lan == 'en' && (<English />)}
      {lan == 'fa' && (<Farsi />)}
      {lan == 'ku' && (<Kurdish />)}
      {lan == 'ar' && (<Arabic />)}




      <Modal
        open={showLanModal}
        onClose={HideLanModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor='Background'>
          <div className="LanModalContainer">
            Language :
            <div className="LanModalItem" onClick={() => {
              lanBtnTitle.current = 'English'
              setLan('en')
              HideLanModalHandler()
            }}>
              <img src="sources/england.png" />
              English
            </div>
            <div className="LanModalItem" onClick={() => {
              lanBtnTitle.current = 'فارسی'
              setLan('fa')
              HideLanModalHandler()
            }}>
              <img src="sources/iram.png" />
              فارسی
            </div>
            <div className="LanModalItem" onClick={() => {
              lanBtnTitle.current = 'Kurdî'
              setLan('ku')
              HideLanModalHandler()
            }}>
              <img src="sources/Kurd.png" />
              Kurdî
            </div>
            <div className="LanModalItem" onClick={() => {
              lanBtnTitle.current = 'العربی'
              setLan('ar')
              HideLanModalHandler()
            }}>
              <img src="sources/arab.png" />
              العربی
            </div>
            <button onClick={HideLanModalHandler}>close</button>
          </div>
        </Box>
      </Modal>

      <Modal
        open={showContactModal}
        onClose={HideContactModalHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor='Background'>
          <div className="ContactModalContainer">
            <span className="ContactModalItem">
              <EmailIcon />
              <a href="mailto:<nowiki>saymanteb023@gmail.com">saymanteb023@gmail.com</a>
            </span>
            <span className="ContactModalItem">
              <CallIcon />
              +98-918-878-6856 / +98-873-333-332
            </span>
            <span className="ContactModalItem">
              <InstagramIcon />
              <a href="https://www.instagram.com/sayman.teb">sayman.teb</a>
            </span>
            <button onClick={HideContactModalHandler}>Close</button>
          </div>
        </Box>
      </Modal>

    </>
  )
}