// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { fetchData } from 'utils/fetchData';

// import { PeriodButtons } from 'components/PeriodButtons/PeriodButtons';
// import { searchParams, basicURL } from 'utils/constants';
// import { Container, Title } from './Home.styled';
// import { MovieItem } from 'components/MovieItem/MovieItem';

// export default function TVShows() {
//   const [trending, setTrending] = useState(null);
//   const [period, setPeriod] = useState('day');
//   const [hoveredId, setHoveredId] = useState(null);
//   const [hoveredImageUrl, setHoveredImageUrl] = useState(null);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const URL = `${basicURL}/trending/movie/${period}?${searchParams}`;
//     fetchData(URL, setTrending, setError);
//   }, [period]);

//   if (trending) {
//     return (
//       <Container>
//         <PeriodButtons setPeriod={setPeriod} />
//         <Title>{period === 'week' ? 'Trending week' : 'Trending today'}</Title>
//         <ul>
//           {trending.results.map(movie => (
//             <MovieItem
//               key={movie.id}
//               movie={movie}
//               hoveredId={hoveredId}
//               setHoveredId={setHoveredId}
//               hoveredImageUrl={hoveredImageUrl}
//               setHoveredImageUrl={setHoveredImageUrl}
//               location={location}
//             />
//           ))}
//         </ul>
//       </Container>
//     );
//   }
//   return <Container>{error ? error.message : <p>Searching...</p>}</Container>;
// }
