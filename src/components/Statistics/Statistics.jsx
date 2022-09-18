import { PropTypes } from 'prop-types';
import { Field, List } from './Statistics.styled';

export function Statistics({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = null,
}) {
  return (
    <List>
      <Field>Good: {good}</Field>
      <Field>Neutral: {neutral}</Field>
      <Field>Bad: {bad}</Field>
      <Field>Total: {total}</Field>
      <Field>Positive feedback: {positivePercentage ?? '--'}%</Field>
    </List>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
