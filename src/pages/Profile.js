import { useEffect } from 'react';

export default function Profile() {
  useEffect(function () {
    document.title = 'Profile';
  }, []);
  return (
    <>
      <section>
        <h1>Profile Page</h1>
        <p>Hello Aku Akmal Rafi Diara Putra</p>
        <p>Aku adalah seorang gembala</p>
        <p>Aku sekarang lagi menempuh pendidikan di S1 Ilmu Komputer UNJ</p>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/374e309d-713c-4ef2-b941-912bd95a5d52/dei1v2x-8915da36-4b72-4b00-9ba9-c0b13073d276.png/v1/fill/w_1280,h_1280,strp/__xiao__render__by_stardustinqs_dei1v2x-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzM3NGUzMDlkLTcxM2MtNGVmMi1iOTQxLTkxMmJkOTVhNWQ1MlwvZGVpMXYyeC04OTE1ZGEzNi00YjcyLTRiMDAtOWJhOS1jMGIxMzA3M2QyNzYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.StISMXjH4dKt06Sjf4ev6dHgO5jRgdMSuzNOwXKPmm4"
          alt="moon"
        />
      </section>
    </>
  );
}
