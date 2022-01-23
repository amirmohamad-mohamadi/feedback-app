import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>Not Feedback Yet</p>;
  }

  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

//   return (
//     <div>
//       {feedback.map((item) => {
//         return (
//           <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//         );
//       })}
//     </div>
//   );
// };

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
