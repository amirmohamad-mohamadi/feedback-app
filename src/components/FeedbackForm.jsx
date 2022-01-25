import { useState, useContext, useEffect } from "react";

import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { handleAddFeedback, editFeedback, updatedFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedback.edit === true) {
      setBtnDisabled(false);
      setText(editFeedback.item.text);
      setRating(editFeedback.item.rating);
    }
  }, [editFeedback]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("طول جمله باید بیشتر از ده کاراکتر باشد");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (editFeedback.edit === true) {
        updatedFeedback(editFeedback.item.id, newFeedback);
        editFeedback.edit = false;
      } else {
        handleAddFeedback(newFeedback);
      }
      setText("");
    }
  };

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <form onSubmit={handleSubmit}>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDiabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
