import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

import css from "./App.module.css";

export default function App() {
  /*   const [isShow, setIsShowFeedBack] = useState(false); */

  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateGood = () => {
    setValues({
      ...values,
      good: values.good + 1,
    });
  };
  const updateNeutral = () => {
    setValues({
      ...values,
      neutral: values.neutral + 1,
    });
  };
  const updateBad = () => {
    setValues({
      ...values,
      bad: values.bad + 1,
    });
  };

  function updateFeedback(feedbackType) {
    switch (feedbackType) {
      case "good":
        updateGood();
        break;
      case "neutral":
        updateNeutral();
        break;
      case "bad":
        updateBad();
        break;
      default:
        break;
    }
  }
  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <div className={css.container}>
      <Description />
      <Options onUpdate={updateFeedback} />

      {totalFeedback > 0 ? (
        <Feedback onValues={values} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
