import { collection, getDocs, getFirestore } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import app from "../../services/firebase";

export default function Home() {
  const firestore = getFirestore(app);
  const db = collection(firestore, "blogs");
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        var chunks = [];
        const docs = await getDocs(db);
        docs.forEach((doc) => {
          chunks.push(doc.data());
        });

        setPodcasts(chunks);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Himanshu Jangid | Blogs Page</title>
      </Head>
      <section className="hero is-light is-medium is-family-secondary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="title is-1">
              My Blogs
              {/* &lt;p&gt; Hello World!&lt;/p&gt;  */}
            </h2>
            <h2 className="title is-3">
              Read My Thoughts, Skills and Experiences
            </h2>
            <p className="subtitle is-family-secondary">
              Here, I share my blogs to share my knowledge on various topics.
            </p>
            <br />
            <Link href={"/podcasts"}>
              <a className="button is-link is-outlined">
                Listen to My Podcasts 🎙️
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="section section--gradient has-background-white">
        <div className="container">
          <div className="">
            <p className="title is-2 has-text-centered">📖</p>

            <div className="has-text-centered">
              <p>
                <strong>{error}</strong>
              </p>
              {loading ? (
                <button className="button is-large is-white is-loading">
                  &sp;
                </button>
              ) : (
                <ul>
                  {podcasts.length ? (
                    podcasts.map((podcast) => (
                      <li key={podcast.title}>
                        <h2 className="title is-4 has-text-black">
                          {podcast.title}
                        </h2>
                        <p className="subtitle is-5">
                          {podcast.createdAt.toDate().toLocaleString()}
                        </p>
                        <Link href={"/blogs/" + podcast._id}>
                          <a className="button is-medium is-primary">
                            {"Read Full Blog"}
                          </a>
                        </Link>
                        <hr className="devider" />
                      </li>
                    ))
                  ) : (
                    <p className="title is-3">No Blogs Found</p>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
