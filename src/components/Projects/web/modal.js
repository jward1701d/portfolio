import React from 'react';
import {  Modal, ModalHeader, ModalBody,ModalFooter,Button } from 'reactstrap';

export default function CustomModal(props){
    return(
        <div>
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
        <ModalHeader toggle={props.toggle}>{props.title}</ModalHeader>
            <ModalBody>
                <img src={props.image} alt={props.title} width="100%" />
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        </div>
    );
}