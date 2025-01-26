import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import TodoService from "../services/TodoService"
import { Grid2 as Grid } from "@mui/material"
import PostCard from "../components/PostCard"
import Post from "../types/Post"



const HomePage = () => {

  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    TodoService.getTodos().then((res: { data: Post[] }) => {
      setPosts(res.data)
    })


  }, [])

  return (
    <Container>
      <Grid container spacing={3} >
        {posts.map((post) => {
          return (
            <Grid size={{ sm: 12, md: 6, lg: 4 }}>
            <PostCard data={post} />
            </Grid>

          )
        })}
      </Grid>
    </Container>
  )
}

export default HomePage