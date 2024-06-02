import React from 'react';
import TransitionButton from '../../../atoms/buttons/transition/TransitionButton';
import logo from '../../../atoms/image/general/statistics.png';
import GeneralText from '../../../atoms/text/generalText/GeneralText';

const StatisticsBlock = () => {
    return (
        <div className='bg-white shadow-2xl border-2 border-yellow max-w-sm min-h-96 py-10 px-4 text-center rounded-2xl'>
            <img className='rounded-2xl w-72 mx-auto mb-2' src={logo} alt='statistic'/>
            <GeneralText title='Статистика'/>
            <a href='/statistics'><TransitionButton text='Перейти'/></a>
        </div>
    );
};

export default StatisticsBlock;