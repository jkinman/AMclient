import {Peer} from 'peerjs'

let peer;

const makePeer = () => {
    peer = new Peer()
    console.log('peer', peer)
    return peer
}


export default peer
