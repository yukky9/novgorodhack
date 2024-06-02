import React from 'react';

type Props = {
    description: any
}

const DescriptionText = ({description}:Props) => {
    return (
        <p className="text-sm font-extralight text-gray-900 dark:text-white">{description}</p>
    );
};

export default DescriptionText;