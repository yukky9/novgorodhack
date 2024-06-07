import React from 'react';

const Drag = () => {
    return (
        <div className="mb-3 w-96">
            <input
                className="relative m-0 block w-auto min-w-0 bg-grey flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-black transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-black dark:file:bg-neutral-700 dark:file:text-black dark:focus:border-primary"
                type="file"
                id="formFile"
            />
        </div>
    );
};

export default Drag;