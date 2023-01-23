import useGetDocuments from '@src/react-query/documents/useGetDocuments';

import Card from './Card';
import NewDocument from './NewDocument';

function Home(): JSX.Element {
  const { data } = useGetDocuments();

  return (
    <div>
      <ul className="grid grid-cols-8 gap-6">
        <NewDocument />
        {data?.map((doc) => (
          <Card key={doc._id} document={doc} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
