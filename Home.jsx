import React from 'react';

const Home = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/");
  };

  const handleGoogleClick = () => {
    window.open("https://www.google.co.in/");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/watch?v=b50zSyLiCYQ&t=2054s");
  };

  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>FilmStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img
          src="https://plus.unsplash.com/premium_photo-1664353833878-e1c82a79ad3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fHww"
          alt="Graphics"
        />

        <div>
          <p>
            A user-friendly movie information website featuring a categorized movie database, detailed movie pages with trailers, user reviews, and ratings. Explore trending movies, create watchlists, and stay updated on the latest releases.
          </p>
        </div>
      </div>

      <div className="home3" id="about">   {/* important */}
        <div>
          <h1>Who we are?</h1>
          <p>
            Discover a comprehensive movie information hub offering a diverse, categorized movie database. Navigate through detailed movie pages providing essential information like release date, genre, duration, and cast. Engage with user reviews and ratings, contributing your insights to the community. Enjoy embedded trailers and video clips, creating an immersive experience. Explore trending movies and personalized recommendations, enhancing your film discovery journey. Easily create user accounts to curate watchlists, save favorites, and receive tailored suggestions. Stay connected with industry updates, news, and the latest releases. With a responsive design, the platform ensures accessibility on various devices, fostering an inclusive and enjoyable cinematic exploration.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
              id="g"
              onClick={handleGoogleClick}
            >
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
              id="y"
              onClick={handleYoutubeClick}
            >
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
              id="i"
              onClick={handleInstagramClick}
            >
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;



// // <div>
// Home
// </div>