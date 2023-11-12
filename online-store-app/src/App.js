import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main className='py-8 px-2 sm:px-8 flex-grow'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
