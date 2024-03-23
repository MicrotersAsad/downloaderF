import style from "./ResultSection.module.css";

const ResultSection = (props) => {
  // Safely handle the title in case it is not a string or is undefined
  const title =
    typeof props.result.title === "string"
      ? props.result.title.slice(0, 60) + " ...."
      : "No title available";

  const thumb = props.result.thumb;

  // Ensure that `thumb` has a valid value to avoid broken image links
  const thumbSrc =
    thumb && thumb.length > 0 ? thumb : "path/to/default/thumbnail.png"; // Provide a default thumbnail path

  return (
    <div className={style["result-div"]}>
      <div className={style["thumb-div"]}>
        {/* Use `thumbSrc` to ensure a valid src attribute */}
        <img src={thumbSrc} alt="thumbnail" />
      </div>
      <h3>{title}</h3>
      <div className={style["download-section"]}>
        <table>
          <thead>
            <tr>
              <th>Quality</th>
              <th>Size</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {props.result.urls && props.result.urls.length > 0 ? (
              props.result.urls.map((url, index) => (
                <tr key={index}>
                  <td>{url.quality}</td>
                  <td>{url.size} MB</td>
                  <td>
                    {/* Updated to open download link in the same tab */}
                    <a href={url.url} download>
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No download links available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultSection;
