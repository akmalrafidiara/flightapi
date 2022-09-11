import { useEffect } from 'react';

export default function Home() {
  useEffect(function () {
    document.title = 'Home';
  }, []);
  return (
    <>
      <section>
        <h1>Selamat Datang</h1>
        <p>Hello, World!</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMYRYxt1M05SbbkmnSYu6AbmI4OwyKxrBoQ&usqp=CAU"
          alt="moon"
        />
      </section>
    </>
  );
}
