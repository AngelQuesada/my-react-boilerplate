import { Navigate, Route, Routes } from 'react-router-dom';
import { MyAppPage } from '../pages/MyAppPage';

export const MyAppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MyAppPage />} />
      {/* <Route path="another_page" element={ <AnotherPage /> }/> EXAMPLE */}

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
