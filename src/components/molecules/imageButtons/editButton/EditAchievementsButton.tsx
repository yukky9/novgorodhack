import React, {useState} from 'react';
import editBt from '../../../atoms/image/icons/edit.png'
import EditInputs from '../../../atoms/inputs/EditInputs';
import CardText from '../../../atoms/text/generalText/CardText';
import ModalTemplate from '../../../templates/modal/ModalTemplate';
import Drag from '../../drag/Drag';
import image from '../../../atoms/image/achivements/6.png'

const EditButton = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const submitModal = () => {
        setModalOpen(false);
    };
    return (
        <div>
            <button onClick={openModal}>
                <img src={editBt} alt='edit'/>
            </button>
            <ModalTemplate isOpen={isModalOpen} onClose={closeModal} Submit={submitModal}>
                <div className='flex gap-5'>
                    <img className='w-36 h-36 my-auto border border-yellow rounded-xl' src={image} alt='image'/>
                    <div>
                        <CardText title="Редактировать достижение"/>
                        <Drag/>
                        <EditInputs/>
                    </div>
                </div>
            </ModalTemplate>
        </div>
    );
};

export default EditButton;