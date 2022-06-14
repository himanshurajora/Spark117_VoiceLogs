import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Repo } from "../@types";

export default function Projects() {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // repeat until page gives [] empty array
        const res = await fetch(
          `https://api.github.com/users/himanshurajora/repos?per_page=1000`
        );
        let data = (await res.json()) as Repo[];
        // sort by updated_at desc
        data = data.sort((a, b) => {
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        });
        setProjects(data);
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
        <title>Himanshu Jangid | Projects Page</title>
      </Head>
      <section className="hero is-light is-medium is-family-secondary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="title is-1">
              Projects
              {/* &lt;p&gt; Hello World!&lt;/p&gt;  */}
            </h2>
            <h2 className="subtitle is-4">
              The Projects, That I have Worked On
            </h2>
            <p>Sorted in descending order of last updated.</p>
            <br />
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
                  {projects.map((project) => (
                    <div className="column is-one-third">
                      <div className="card">
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="subtitle is-5">{project.name}</p>
                              <p className="subtitle is-6">
                                {project.description?.length
                                  ? project?.description?.substring(0, 50) +
                                    "..."
                                  : "No Description"}
                              </p>
                              <p className="subtitle is-6">
                                Last Updated:{" "}
                                {new Date(project.updated_at).toDateString()}
                              </p>
                              <a href={project.url}>View on GitHub</a>
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
