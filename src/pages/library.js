import React from "react";
import { Modal, Button } from "react-bootstrap";

function FirstModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          First Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function SecondModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Second Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function Library() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowSecond, setSecondModalShow] = React.useState(false);
  return (
    <div className="library">
      <div></div>
      <div className="firstContainer">
        <h2 className="firstHeader">Heading</h2>
        <p className="infoPara">
          Proident minim qui mollit minim voluptate in sint aute sint
          fugiat.Quis sit quis velit aliqua et non cupidatat sunt.Qui esse
          dolore proident adipisicing dolor labore proident pariatur qui
          proident laborum veniam cillum.
        </p>
        <div className="containerData">
          <img src="https://cdn.pixabay.com/photo/2020/08/13/15/45/woman-5485664_960_720.png" />
          <p>
            Sunt exercitation adipisicing deserunt ipsum deserunt culpa ex.
            Dolor deserunt consectetur et elit consectetur veniam aliqua velit.
            Magna labore esse excepteur irure do nostrud est quis quis. Ad est
            dolore eu fugiat nisi dolor ad eiusmod magna et id incididunt in do.
            Id esse qui reprehenderit pariatur voluptate cupidatat id. Eu dolore
            occaecat velit velit do fugiat esse. Amet Lorem esse officia ullamco
            veniam. Nisi pariatur irure id eu eiusmod esse excepteur quis
            adipisicing laboris nostrud ea id proident. Excepteur reprehenderit
            sit non id. Velit labore minim nulla tempor non id cillum. Veniam
            commodo nulla veniam proident. Excepteur nostrud elit veniam commodo
            quis id consequat nisi dolor Lorem pariatur officia. Cillum eu id
            dolor est fugiat in. Amet amet ex sunt sint officia eu ipsum velit
            ipsum exercitation labore cillum ut Lorem. Dolore non mollit cillum
            deserunt anim cupidatat ipsum officia. Sunt minim aliquip do fugiat
            esse adipisicing ex occaecat adipisicing sit non. Enim excepteur
            mollit nulla mollit ullamco magna.
          </p>
        </div>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          More
        </Button>
      </div>
      <div className="firstContainer">
        <h2 className="secondHeader">Heading</h2>
        <p className="infoPara">
          Proident minim qui mollit minim voluptate in sint aute sint
          fugiat.Quis sit quis velit aliqua et non cupidatat sunt.Qui esse
          dolore proident adipisicing dolor labore proident pariatur qui
          proident laborum veniam cillum.
        </p>
        <div className="containerData">
          <img src="https://cdn.pixabay.com/photo/2014/03/25/16/53/yoga-297526_960_720.png" />
          <p>
            Sunt exercitation adipisicing deserunt ipsum deserunt culpa ex.
            Dolor deserunt consectetur et elit consectetur veniam aliqua velit.
            Magna labore esse excepteur irure do nostrud est quis quis. Ad est
            dolore eu fugiat nisi dolor ad eiusmod magna et id incididunt in do.
            Id esse qui reprehenderit pariatur voluptate cupidatat id. Eu dolore
            occaecat velit velit do fugiat esse. Amet Lorem esse officia ullamco
            veniam. Nisi pariatur irure id eu eiusmod esse excepteur quis
            adipisicing laboris nostrud ea id proident. Excepteur reprehenderit
            sit non id. Velit labore minim nulla tempor non id cillum. Veniam
            commodo nulla veniam proident. Excepteur nostrud elit veniam commodo
            quis id consequat nisi dolor Lorem pariatur officia. Cillum eu id
            dolor est fugiat in. Amet amet ex sunt sint officia eu ipsum velit
            ipsum exercitation labore cillum ut Lorem. Dolore non mollit cillum
            deserunt anim cupidatat ipsum officia. Sunt minim aliquip do fugiat
            esse adipisicing ex occaecat adipisicing sit non. Enim excepteur
            mollit nulla mollit ullamco magna.
          </p>
        </div>
        <Button variant="primary" onClick={() => setSecondModalShow(true)}>
          More
        </Button>
      </div>
      <FirstModal show={modalShow} onHide={() => setModalShow(false)} />
      <SecondModal
        show={modalShowSecond}
        onHide={() => setSecondModalShow(false)}
      />
    </div>
  );
}

export default Library;
