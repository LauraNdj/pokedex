import { Outlet } from 'react-router';
import Header      from '@/components/Header/Header';
import styles      from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
}
