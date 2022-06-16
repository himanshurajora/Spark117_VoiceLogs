import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

export default function BlogForm(props) {
  const titleRef = useRef(null);
  const [blogContent, setBlogContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    props.onSubmit({
      title,
      description: blogContent,
    });
  };

  // markdown parser
  const mdParser = new MarkdownIt({
    breaks: true,
    html: true,
    linkify: true,
    typographer: true,
  });

  return (
    <>
      <h1 className="title is-4">Upload Blogs Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            className="input"
            name="title"
            autoComplete={"true"}
            required
            style={{ fontSize: 20 }}
            placeholder="Enter the title"
            ref={titleRef}
          />
        </div>
        <div className="field">
          {/* Removed existing text area system, keeping is as fallback */}
          {/* <textarea
            name="discription"
            className="input"
            autoComplete="true"
            required
            ref={discriptionRef}
            style={{ fontSize: 20, height: "150px" }}
            placeholder="Enter the discription"
          ></textarea> */}
          <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text: string) =>
              mdParser.render(text) || "Output HTML Here"
            }
            onChange={(obj) => {
              setBlogContent(obj.html);
            }}
            placeholder="Start writing your blog here..."
          />
        </div>
        <div className="feild">
          <input
            className="button is-success"
            type="submit"
            style={{ padding: 10, fontSize: 20 }}
            value="Submit"
          />
        </div>
      </form>
    </>
  );
}
