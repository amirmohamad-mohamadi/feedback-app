import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("آیا مطمئنی که می‌خوای حذف کنی؟ ")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const handleAddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedback, handleAddFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
