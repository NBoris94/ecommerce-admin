import {Button, ButtonGroup, Card, Table} from "react-bootstrap"

const categories = [
  {
    id: 1,
    title: 'Категория 1',
  },
  {
    id: 2,
    title: 'Категория 2',
  },
  {
    id: 3,
    title: 'Категория 3',
  },
  {
    id: 4,
    title: 'Категория 4',
  },
]

const Categories = () => {
  return (
    <Card>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Название</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id}>
                <td>{category.title}</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="primary">Редактировать</Button>
                    <Button variant="secondary">Просмотр</Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default Categories
