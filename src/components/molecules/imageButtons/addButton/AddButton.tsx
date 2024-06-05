import React from 'react';
import addBt from '../../../atoms/image/icons/Group_62.png'

const AddButton = () => {
    return (
        <button
            className="w-96 h-20 p-3 hover:bg-d-yellow hover:text-black bg-grey py-2 px-4 border-2 border-dark-blue hover:border-dark-gold rounded-xl">
            <img className='mx-auto' src={addBt} alt='add'/>
        </button>
    );
};

export default AddButton;