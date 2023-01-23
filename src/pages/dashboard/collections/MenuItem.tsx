import Collection from '@src/react-query/collections/collection';
import useDeleteCollection from '@src/react-query/collections/useDeleteCollection';
import useUpdateCollection from '@src/react-query/collections/useUpdateCollection';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  Navigate,
  NavLink,
  useNavigate,
  useParams,
} from 'react-router-dom';

interface Props {
  collection: Collection;
  index: number;
}

function MenuItem(props: Props): JSX.Element {
  const { collection, index } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteCollection } = useDeleteCollection();
  const [isModifying, setIsModifying] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { updateCollection } = useUpdateCollection();

  const [isFocused, setIsFocused] = useState(false);

  const deleteHandler = () => {
    deleteCollection(collection._id);
  };

  const dbClickHandler = () => {
    setIsModifying(true);
  };

  const onBlurHandler = (e: any) => {
    e.preventDefault();

    setIsModifying(false);
    if (inputRef.current?.value !== collection.name) {
      updateCollection(inputRef.current?.value, collection._id);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isModifying]);

  return (
    <li className="group  flex justify-between items-center relative hover:bg-gray-200 cursor-pointer">
      <NavLink
        to={`/dashboard/${id}/${collection._id}`}
        className={({ isActive }) =>
          isActive
            ? 'bg-gray-200 py-3 pl-4 block w-full'
            : 'py-3 pl-4 block w-full'
        }
      >
        {!isModifying && (
          <div>
            <p onDoubleClick={dbClickHandler} className="truncate">
              {' '}
              {collection.name}
            </p>
            <button
              type="button"
              onClick={deleteHandler}
              className="text-lg bg-gray-300 absolute right-2 top-2 px-2 hidden group-hover:block hover:bg-gray-400"
            >
              x
            </button>
          </div>
        )}
        {isModifying && (
          <form onSubmit={onBlurHandler}>
            <input
              type="text"
              defaultValue={collection.name}
              className="w-full p-1"
              onBlur={onBlurHandler}
              ref={inputRef}
            />
          </form>
        )}
      </NavLink>
    </li>
  );
}

export default MenuItem;
