import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import '../Modal/Modal.css'
const App = ({content,title}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button className='contact-btn' type="primary" onClick={showModal}>
                {title}
            </Button>
            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {content}
            </Modal>
        </>
    );
};
export default App;