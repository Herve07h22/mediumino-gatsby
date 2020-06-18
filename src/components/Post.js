import React from "react";

const Post = ({
  index,
  postId,
  postTitle,
  postFirstPublishedAt,
  postTotalClapCount,
  userName,
  userId,
  postSlug,
  postPreviewImage,
  name,
}) => {
  //const photo = postPreviewImage ? `https://cdn-images-1.medium.com/max/200/${postPreviewImage}` : "https://source.unsplash.com/200x110/"
  const photo = postPreviewImage;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const gotoArticle = () => (window.location = `https://medium.com/@${userName}/${postSlug}`);
  const formatLargeNumber = (value) => (value > 1000 ? `${Math.round(value / 100) / 10}k` : value);
  return (
    <article className="media" style={{ marginBottom: "1rem" }}>
      <div className="media-left lien" style={{ height: "120px", overflowY: "hidden" }} onClick={gotoArticle}>
        <figure className="image" style={{ width: "200px", height: "120px" }}>
          <img src={photo} alt={postTitle} />
        </figure>
      </div>

      <div className="media-content">
        <p className="title is-size-4-desktop is-size-6-mobile lien" onClick={gotoArticle}>
          {postTitle}
        </p>
        <p className="subtitle is-size-6-desktop is-size-7-mobile">
          <span className="tag">
            <b>#{index + 1}</b>
          </span>{" "}
          <span className="tag">
            <b>
              {formatLargeNumber(postTotalClapCount)}{" "}
              <span aria-label="clap" role="img">
                👏
              </span>
            </b>
          </span>
        </p>
        <div className="content is-hidden-mobile">
          <span style={{ whiteSpace: "nowrap" }}>
            {" "}
            Le {new Date(postFirstPublishedAt).toLocaleDateString("fr-FR", options)}
          </span>
          <span>
            {" "}
            par <a href={`https://medium.com/@${userName}`}>{name}</a>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Post;
