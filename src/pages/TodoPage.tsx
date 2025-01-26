import { useState } from "react"
import Todo from "../types/Todo"
import { Button, Card, CardContent, Container, Grid2 as Grid, TextField, Typography, CardActions, IconButton } from "@mui/material"
import { Delete as DeleteIcon } from "@mui/icons-material"
import { v4 as uuidv4 } from 'uuid';


const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const [formData, setformData] = useState<Todo>({
    id: "",
    title: "",
    body: ""
  })

  return (
    <Container>
      <br /><br />
      <form onSubmit={(event) => {
        event.preventDefault();
        setTodos((currentData) => {
          return [...currentData, { ...formData, id: uuidv4() }]
        })
        setformData({
          id: "",
          title: "",
          body: ""
        })
      }}>
        <Grid container spacing={3}>
          <Grid size={{ sm: 12, md: 6 }}>
            <TextField
              label="title"
              type="text"
              variant="outlined"
              onChange={(event) => {

                setformData((currentFormdata) => {
                  return {
                    ...currentFormdata,
                    title: event.target.value
                  }
                })
              }}
              value={formData.title}
              fullWidth
              required
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <TextField
              label="body"
              type="text"
              variant="outlined"
              onChange={(event) => {
                setformData((currentFormdata) => {
                  return {
                    ...currentFormdata,
                    body: event.target.value

                  }
                })
              }}
              value={formData.body}
              fullWidth
              required
            />
          </Grid>
          <Grid size={{ sm: 12, md: 6 }}>
            <Button type="submit" variant="contained">
              create
            </Button>
          </Grid>
        </Grid>
      </form>

      <br /><br />

      <Grid container spacing={3}>
        {todos.map((todo) => {
          return (
            <Grid size={{ sm: 12, md: 6, lg: 4 }} key={todo.id}>
              <Card>
                <CardContent>
                  <Typography>
                    {todo.title}
                  </Typography>
                  <Typography>{todo.body}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton sx={{ marginLeft: "auto" }} onClick={() => {
                    setTodos((currentTodo) => {
                      return currentTodo.filter((_todo) => {
                        return _todo.id !== todo.id;
                      })
                    })
                  }} >
                    <DeleteIcon ></DeleteIcon>
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default TodoPage