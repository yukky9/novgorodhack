import React from 'react';
import GeneralText from '../../../atoms/text/generalText/GeneralText';
import AddButton from '../../../molecules/imageButtons/addButton/AddButton';
import BackButton from '../../../molecules/imageButtons/backButton/BackButton';

const Tasks = () => {
    return (
        <div>
            <div className='mx-64 mt-20 flex gap-96'>
                <GeneralText title='Темы заданий'/>
                <a href='/'><BackButton text='Назад'/></a>
            </div>
            <div className='flex gap-52 mx-80 mt-10'>
                <div>

                </div>
                <div>

                    <AddButton/>
                </div>
            </div>
        </div>
    );
};

export default Tasks;