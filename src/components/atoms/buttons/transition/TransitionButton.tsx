import React from 'react';

type Props = {
    text: string
}

const TransitionButton = ({text}: Props) => {
    return (
        <button
            className="w-64 mb-3 bg-transparent hover:bg-yellow text-dark-blue font-semibold hover:text-black py-2 px-4 border-2 border-dark-blue hover:border-transparent rounded-xl">
            {text}
        </button>
    );
};

export default TransitionButton;