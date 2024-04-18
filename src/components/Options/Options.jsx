import css from "./Options.module.css";

export default function Options({ onUpdate, totalFeedback }) {
  return (
    <div className={css.containerBtn}>
      <button className={css.btn} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onUpdate("bad")}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={css.btn} onClick={() => onUpdate("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}
