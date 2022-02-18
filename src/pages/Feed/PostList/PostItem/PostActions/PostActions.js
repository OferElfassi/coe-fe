import React from 'react';
import PropTypes from 'prop-types';
import CardActions from '@mui/material/CardActions';
import CustomButton from '../../../../../components/CustomButton/CustomButton';
import LikeIcon from '../../../../../assets/icons/LikeIcon';
import CommentIcon from '../../../../../assets/icons/CommentIcon';
import ReportIcon from '../../../../../assets/icons/ReportIcon';

function PostActions(props) {
  const {
    onLikeClick,
    onCommentClick,
    onReportClick,
    ownLike,
    ownReport,
    likeDisabled,
    reportDisabled,
    postId,
  } = props;
  return (
    <CardActions disableSpacing>
      <CustomButton
        icon={<LikeIcon />}
        text="Like"
        variant="icon"
        size="small"
        sx={{color: ownLike && '#3754fd'}}
        onClick={onLikeClick}
        disabled={likeDisabled}
      />
      <CustomButton
        icon={<CommentIcon />}
        text="Comment"
        variant="icon"
        size="small"
        onClick={onCommentClick}
      />
      <CustomButton
        sx={{marginLeft: 'auto', color: ownReport && '#be0000'}}
        icon={<ReportIcon />}
        text="Report"
        variant="icon"
        size="small"
        onClick={onReportClick}
        disabled={reportDisabled}
      />
    </CardActions>
  );
}

PostActions.propTypes = {
  onLikeClick: PropTypes.func.isRequired,
  onCommentClick: PropTypes.func.isRequired,
  onReportClick: PropTypes.func.isRequired,
  ownLike: PropTypes.bool,
  ownReport: PropTypes.bool,
  likeDisabled: PropTypes.bool.isRequired,
  reportDisabled: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
};
PostActions.defaultProps = {
  ownLike: false,
  ownReport: false,
};
export default PostActions;
