import { Card, CardContent, Typography } from '@mui/material'
import Post from '../types/Post'

const PostCard = (props: {data:Post}) => {
  return (
    <Card>
    <CardContent>

      <Typography variant="body1">
        {props.data.title}

      </Typography>

      <Typography variant="body2">{props.data.body}</Typography>
    </CardContent>
  </Card>
  )
}

export default PostCard