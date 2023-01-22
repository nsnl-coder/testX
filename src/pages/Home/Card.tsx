import Document from '@src/react-query/documents/document';
import useDeleteDocument from '@src/react-query/documents/useDeleteDocument';
import { Link } from 'react-router-dom';

interface Props {
  document: Document;
}

function Card(props: Props): JSX.Element {
  const { document } = props;
  const { mutate } = useDeleteDocument();

  const deleteDocument = () => {
    // eslint-disable-next-line no-restricted-globals
    const isConfirm = confirm('Delete?');

    if (isConfirm) {
      mutate(document._id);
    }
  };

  return (
    <li className="bg-gray-100 p-6">
      <Link to={`${document._id}`}>
        <h3 className="text-2xl font-semibold"> {document.name} </h3>
        <div className="space-y-2">
          <p> Quizzes: {document.quizz_count} </p>
          <p> Win: {document.win_count} </p>
          <p> Lost: {document.lost_count} </p>
          <p> Win rate: {document.win_rate || 0} </p>
          <p> Last tested: {document.lastTested || 0} </p>
          <p> {document.createdAt} </p>
        </div>
      </Link>
      <button
        onClick={deleteDocument}
        type="button"
        className="ml-auto mt-4 block hover:text-red-600 bg-gray-400 px-2 py-1"
      >
        Delete
      </button>
    </li>
  );
}

export default Card;
