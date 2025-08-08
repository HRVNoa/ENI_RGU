import {useQuery} from 'react-query'
import axios from 'axios'

const fetchQuotes = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/getAllQuotes');
  return response.data;
};

export default function Home() {
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['quotes'],
    queryFn: fetchQuotes,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        {data && data.map((quote, index) => (
          <li key={index}>{quote.quoteName}</li>
        ))}
      </ul>
    </div>

  );
}