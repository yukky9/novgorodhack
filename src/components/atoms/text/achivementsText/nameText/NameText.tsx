import React from 'react';

type Props = {
    name: string
}

const NameText = ({name}:Props) => {
    return (
        <p className="text-2xl font-medium text-gray-900 dark:text-white">{name}</p>
    );
};

export default NameText;