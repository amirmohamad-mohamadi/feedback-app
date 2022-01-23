import { useState } from "react";

import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <div className="input-group">
        <input
          onChange={handleTextChange}
          type="text"
          placeholder="Write a review"
          value={text}
        />
        <button type="submit">send</button>
      </div>
    </Card>
  );
};

export default FeedbackForm;
