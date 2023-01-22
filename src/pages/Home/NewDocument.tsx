import useCreateDocument from '@src/react-query/documents/useCreateDocument';
import React, { useRef } from 'react';

function NewDocument(): JSX.Element {
  const nameRef = useRef<HTMLInputElement | null>(null);

  const { mutate, isLoading } = useCreateDocument();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nameRef.current?.value) {
      mutate(nameRef.current?.value);
    }
  };

  return (
    <li className="bg-gray-100 p-6 flex items-center ">
      <form className="flex flex-col" onSubmit={onSubmit}>
        <input type="text" className="p-1 outline-none w-full" ref={nameRef} />
        <button
          type="submit"
          disabled={isLoading}
          className={`px-3 py-1 mt-2 ml-auto ${
            isLoading ? 'bg-blue-500/50' : 'bg-blue-500'
          }`}
        >
          New doc
        </button>
      </form>
    </li>
  );
}

export default NewDocument;
