import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../constants";
import "./CommentsSection.css";

const CommentsSection = () => {
  const context = useContext(AppContext);

  const { comments, setComments } = context!;

  const [description, setDescription] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (description === "") return;

    setComments((data) => [
      ...data,
      {
        id: crypto.randomUUID().substring(20),
        img: "https://gravatar.com/avatar/852b018e801a45254aa0e1a055386651?s=400&d=mp&r=x",
        name: "Ahmed Nasser",
        date: new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        }),
        description
      }
    ]);

    setDescription("");
  }

  useEffect(() => {
    sessionStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <section id="comments" className="comments-section">
      <h1>Comments</h1>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comments-section__container">
            <img src={comment.img} alt="avatar" />
            <div className="comments-section__container-info">
              <p>{comment.name}</p>
              <p>{comment.date}</p>
              <p>{comment.description}</p>
            </div>
          </div>
        );
      })}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="comments-section__form"
      >
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="write a comment"
          name="w3review"
          rows={4}
        />
        <button type="submit">Submit a review</button>
      </form>
    </section>
  );
};

export default CommentsSection;
