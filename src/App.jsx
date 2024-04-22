import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import css from "./App.module.css";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem("feedbackValues");
    return savedValues
      ? JSON.parse(savedValues)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedbackValues", JSON.stringify(values));
  }, [values]);

  function updateFeedback(feedbackType) {
    if (feedbackType === "reset") {
      setValues({ good: 0, neutral: 0, bad: 0 });
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [feedbackType]: prevValues[feedbackType] + 1,
      }));
    }
  }

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((values.good / (totalFeedback - values.neutral)) * 100)
      : 0;

  return (
    <div className={css.container}>
      <Description />
      <Options onUpdate={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback
          onValues={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
