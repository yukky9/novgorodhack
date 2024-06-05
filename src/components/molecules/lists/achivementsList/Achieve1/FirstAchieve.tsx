import React from 'react';
import logo from '../../../../atoms/image/achivements/1.png';
import NameText from "../../../../atoms/text/achivementsText/nameText/NameText";
import DescriptionText from "../../../../atoms/text/achivementsText/descriptionText/DescriptionText";
import EditButton from "../../../../molecules/imageButtons/editButton/EditButton";

const FirstAchieve = () => {
    return (
        <div className='bg-white h-20 border-2 border-light-body w-96 mb-7 py-2 px-4 rounded-2xl'>
            <div className='flex gap-5'>
                <img className='rounded my-auto' src={logo} alt='achieve1'/>
                <div>
                    <NameText name='Достижение №1'/>
                    <DescriptionText description='Solve 10 tasks'/>
                </div>
                <div className='my-auto mx-auto'>
                    <EditButton/>
                </div>
            </div>
        </div>
    );
};

export default FirstAchieve;