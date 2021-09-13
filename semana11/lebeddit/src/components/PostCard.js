import React from 'react';
import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';import ShareIcon from '@material-ui/icons/Share';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CommentIcon from '@material-ui/icons/Comment';
import { goToDetailPage } from '../routes/coordinator';
import { useHistory } from 'react-router';


export default function PostCard(props) {

    const history = useHistory()

    const onClickCard = (id) =>{
      history.push(`/feed/${props.post.id}`)
    }
  
    const handleUpVote = () => {
      props.handleVotePost(props.post.id, 1)
    }
  
    const handleDownVote = () => {
      props.handleVotePost(props.post.id, -1)
    }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.post.title}
        subheader={props.post.username}
      />
     
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.post.text}
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleUpVote}>
          <ArrowUpwardIcon color={props.post.userVoteDirection === 1 ? "primary" : "disabled"} />
        </IconButton>
        <IconButton onClick={handleDownVote}>
          <ArrowDownwardIcon color={props.post.userVoteDirection === -1 ? "secondary" : "disabled"}/>
        </IconButton>
        <span>{props.post.votesCount}</span>
        {!props.hideComment && (
          <Button
            variant="contained"
            onClick={onClickCard}
            startIcon={<CommentIcon />}
          >
            Comentarios
          </Button>)}

      </CardActions>

    </Card>
  );
}