import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  const deleteFeedback = (id) => {
    if (window.confirm("آیا مطمئنی که می‌خوای حذف کنی؟ ")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const handleAddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedbackHandler = (item) => {
    setEditFeedback({ item, edit: true });
  };

  const updatedFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        isLoading,
        deleteFeedback,
        handleAddFeedback,
        editFeedbackHandler,
        updatedFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
