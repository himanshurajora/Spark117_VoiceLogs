import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Activity, Repo } from "../../@types";

export default function activity() {
  const [activity, setActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // repeat until page gives [] empty array
        const res = await fetch(
          `https://api.github.com/users/himanshurajora/events`
        );
        let data = (await res.json()) as Activity[];
        console.log(data);
        // sort by updated_at desc
        data = data.sort((a, b) => {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        });
        setActivity(data);
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
        <title>Himanshu Jangid | Activity Page</title>
      </Head>
      <section className="hero is-light is-medium is-family-secondary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="title is-1">
              Activity
              {/* &lt;p&gt; Hello World!&lt;/p&gt;  */}
            </h2>
            <h2 className="subtitle is-4">My Recent Github Activity</h2>
            <p>Sorted from Recent to Older</p>
            <br />
            <a
              href="https://gitstare.web.app/himanshurajora"
              className="button is-warning"
              target={"_blank"}
            >
              Go Here For Detailed Activity
            </a>
          </div>
        </div>
      </section>
      <section className="section section--gradient has-background-white">
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
                <div className="columns is-multiline">
                  {activity.map((act, index) => (
                    <div className="column is-one-third" key={index}>
                      <div className="card">
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="subtitle is-5">
                                {act.payload.action}
                              </p>
                              <p className="subtitle is-6">
                                {act.repo.name?.length
                                  ? act?.repo.name?.substring(0, 50) + "..."
                                  : "No Description"}
                              </p>
                              <p className="subtitle is-6">
                                Last Updated:{" "}
                                {new Date(act.created_at).toDateString()}
                              </p>
                              <a href={act.repo.url} target={"_blank"}>
                                View on GitHub
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
