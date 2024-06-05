import React from 'react';
import logo from "../../../../atoms/image/icons/congruent.png";
import TitleText from '../../../../atoms/text/tasksText/titleText/TitleText';
import EditButton from '../../../imageButtons/editButton/EditButton';

const Task9 = () => {
    return (
        <div className='bg-white h-20 border-2 border-light-body w-96 mb-7 py-2 px-4 rounded-2xl'>
            <div className='flex gap-48'>
                <div className='flex gap-5'>
                    <img className='rounded my-auto' src={logo} alt='achieve1'/>
                    <div>
                        <TitleText title='Микс'/>
                    </div>
                </div>
                <div className='my-auto mx-auto'>
                    <EditButton/>
                </div>
            </div>
        </div>
    );
};

export default Task9;