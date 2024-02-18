import { Button, Modal } from "react-bootstrap";

export const MessageModal = ({
  message,
  title,
  show,
  close,
}: {
  message: string;
  title: string;
  close: () => void;
  show: boolean;
}) => {
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title as="h6">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={close}>
          Fexar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
