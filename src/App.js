// Модули
import { useState } from "react";

// Компоненты
import SectionTitle from "./components/SectionTitle";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const feedback = e.target.textContent;

    switch (feedback) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = [good, neutral, bad];
    return total.reduce((acc, value) => (acc += value), 0);
  };

  const positivePercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <SectionTitle>
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={onLeaveFeedback}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={positivePercentage()}
      />
    </SectionTitle>
  );
}

export default App;
