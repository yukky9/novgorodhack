import React from 'react';
import GroupBlocks from '../../organisms/groupBlocks/GroupBlocks';

const GeneralPage = () => {
    return (
        <div>
            <div className='mt-20 text-center'>
                <h1 className='text-5xl font-light text-black'>Добро пожаловать<p className=' text-5xl font-semibold text-blue drop-shadow-xl'>Админ!</p></h1>
            </div>
            <GroupBlocks/>
        </div>
    );
};

export default GeneralPage;