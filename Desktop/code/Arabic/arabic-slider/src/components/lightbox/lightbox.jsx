import { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import "./Lightbox.css";

const Lightbox = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="lightbox-child" onClick={handleClick}>
        {children}
      </div>
      <Modal
        open={visible}
        onCancel={handleClose}
        footer={null}
        centered
        className="custom-modal"
      >
        {children}
      </Modal>
    </>
  );
};

// Add prop-type validation
Lightbox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Lightbox;
