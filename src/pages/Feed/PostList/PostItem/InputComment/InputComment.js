import React, {useState} from 'react';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import CustomInput from '../../../../../components/CustomInput/CustomInput';
import CustomButton from '../../../../../components/CustomButton/CustomButton';
import SendIcon from '../../../../../assets/icons/SendIcon';
import inputCommentStyle from './inputCommentStyle';
import usePost from '../../../../../hooks/usePost';

const useStyles = makeStyles(inputCommentStyle);

function InputComment({postId, disabled}) {
  const {postActions} = usePost();
  const [comment, setComment] = useState('');
  const styles = useStyles();
  const handleSubmit = e => {
    e.preventDefault();
    postActions.addComment(comment, postId);
    setComment('');
  };
  return (
    <CardContent
      component="form"
      onSubmit={handleSubmit}
      className={styles.root}
      sx={{padding: '0px 15px 13px 15px !important', display: 'flex'}}>
      <CustomInput
        id={`${postId}input`}
        value={comment}
        placeholder={
          disabled
            ? 'Please login or signup to write a comment'
            : 'Add your comment'
        }
        onChange={e => setComment(e.target.value)}
        name="comment"
        sm
        disabled={disabled}>
        {!disabled && (
          <CustomButton
            onClick={handleSubmit}
            type="submit"
            disabled={comment === ''}
            icon={<SendIcon />}
          />
        )}
      </CustomInput>
    </CardContent>
  );
}

InputComment.propTypes = {
  postId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default InputComment;
