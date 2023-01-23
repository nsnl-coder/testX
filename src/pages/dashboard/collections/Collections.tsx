import useCreateCollection from '@src/react-query/collections/useCreateCollection';
import useGetCollections from '@src/react-query/collections/useGetCollections';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MenuItem from './MenuItem';

function Collections(): JSX.Element {
  const documentId = useParams().id;
  const { data } = useGetCollections(documentId);
  const { createCollection } = useCreateCollection();

  const newCollectionHandler = () => {
    createCollection(documentId);
  };

  return (
    <div className="flex border-r">
      <div className="w-60 resizable bg-gray-100 self-start overflow-auto sticky top-0 h-screen flex flex-col justify-between">
        <div>
          <Link
            to="/"
            className="px-4 py-4 block bg-gray-300 sticky top-0 z-50"
          >
            Home page
          </Link>
          <ul>
            {data?.map((item, index) => (
              <MenuItem key={item._id} collection={item} index={index} />
            ))}
          </ul>
        </div>
        <div className="fixed bottom-0 left-0 w-60">
          <button
            type="button"
            onClick={newCollectionHandler}
            className="bg-gray-400 w-full text-center py-4"
          >
            Add new
          </button>
        </div>
      </div>
    </div>
  );
}

export default Collections;
