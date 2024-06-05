import React from 'react';
import logo from "../../../../atoms/image/icons/formula.png";
import TitleText from '../../../../atoms/text/tasksText/titleText/TitleText';
import EditButton from '../../../imageButtons/editButton/EditButton';

const Task6 = () => {
    return (
        <div className='bg-white h-20 border-2 border-light-body w-96 mb-7 py-2 px-4 rounded-2xl'>
            <div className='flex gap-5'>
                <img className='rounded my-auto' src={logo} alt='achieve1'/>
                <div>
                    <TitleText title='Квадратные уравнения'/>
                </div>
                <div className='my-auto mx-auto'>
                    <EditButton/>
                </div>
            </div>
        </div>
    );
};

export default Task6;