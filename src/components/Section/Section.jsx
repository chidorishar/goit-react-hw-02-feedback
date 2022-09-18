import { PropTypes } from 'prop-types';
import { Box } from 'components/common/Box/Box.styled';

export function Section({ title = '', children }) {
  return (
    <Box fontSize="24px" fontWeight="700" mb="10px" pb="10px" as="section">
      {title}
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
