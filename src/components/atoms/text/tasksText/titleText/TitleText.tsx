import React from 'react';

type Props = {
    title:string
}

const TitleText = ({title}:Props) => {
    return (
        <p className="text-2xl font-medium text-gray-900 dark:text-white">{title}</p>
    );
};

export default TitleText;