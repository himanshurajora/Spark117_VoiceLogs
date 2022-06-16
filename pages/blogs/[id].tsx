import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import app from "../../services/firebase";
import "react-markdown-editor-lite/lib/index.css";

export default function Blogs() {
  const firestore = getFirestore(app);
  const db = collection(firestore, "blogs");
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady) {
        try {
          var chunks = [];
          const q = query(
            db,
            where("_id", "==", parseInt(router.query.id.toString()))
          );
          const docs = await getDocs(q);
          docs.forEach((doc) => {
            chunks.push(doc.data());
          });

          setPodcasts(chunks);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }
    };
    fetchData();
  }, [router.isReady]);

  return (
    <Fragment>
      <section className="hero is-light is-medium is-family-secondary">
        <div className="hero-body">
          <div className="container">
            <div className="">
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
                    {podcasts.map((podcast) => (
                      <li key={podcast.title}>
                        <h2 className="title is-4 has-text-black">
                          {podcast.title ? podcast.title : ""}
                        </h2>
                        <p className="subtitle is-6 has-text-dark">
                          {podcast.createdAt.toDate()
                            ? podcast.createdAt.toDate().toLocaleString()
                            : ""}
                        </p>
                        <hr />
                        <pre
                          className="subtitle is-6-mobile is-5-tablet"
                          style={{
                            textAlign: "left",
                            overflow: "auto",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word",
                            padding: 0,
                          }}
                        >
                          {podcast?.discription}
                          {/* 
                          TODO: Fix this one later
                          Because I made a mistake last time, that's why I have to keep both of them here
                          I don't wanna change database
                          Thought it is the best option
                          */}
                        </pre>
                        {/* TODO: Code Highlighting */}
                        <div className="section-container html-wrap">
                          <div
                            className="custom-html-style"
                            style={{
                              backgroundColor: "white",
                              padding: "10px 20px",
                            }}
                          >
                            <div
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              dangerouslySetInnerHTML={{
                                __html: podcast?.description,
                              }}
                            ></div>
                          </div>
                        </div>

                        <hr className="devider" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
