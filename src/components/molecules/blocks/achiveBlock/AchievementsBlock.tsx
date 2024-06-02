import React from 'react';
import TransitionButton from '../../../atoms/buttons/transition/TransitionButton';
import logo from '../../../atoms/image/general/achieve.png';
import GeneralText from '../../../atoms/text/generalText/GeneralText';

const AchievementsBlock = () => {
    return (
        <div className='bg-white shadow-2xl border-2 border-blue max-w-sm py-2 px-4 text-center rounded-2xl'>
            <img className='rounded-2xl w-72 mx-auto' src={logo} alt='achieve'/>
            <GeneralText title='Достижения'/>
            <a href='/achievements'><TransitionButton text='Перейти'/></a>
        </div>
    );
};

export default AchievementsBlock;