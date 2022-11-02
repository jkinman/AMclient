import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AngryMob from "./pages/AngryMob";
// import makePeer from './modules/WebRTCServer'
import {Peer} from 'peerjs'

function App() {
  // const peer = makePeer()
  const peer = new Peer()
  let dataConn
  peer.on('connection', (pdataConn) => {
    dataConn = pdataConn
    console.log('incoming connection made:', dataConn)
    dataConn.on('data', (data) => console.log('incoming data:', data))
  })
  
  peer.on('data', (data) => console.log('incoming data:', data))
  
  console.log('peer', peer)

  return (

      <AngryMob />

  );
}

export default App;
