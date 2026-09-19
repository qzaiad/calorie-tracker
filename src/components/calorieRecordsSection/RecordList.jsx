import CalorieRecord from './CalorieRecord'
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const ListItem = styled.li`
  margin: 10px;
`

function RecordList(props) {
  return (
    <List>
      {
        props.records.map((record) =>
          record.calories >= 0 && (
            <ListItem key={record.id}>
              <CalorieRecord date={record.date} meal={record.meal} content={record.content} calories={record.calories}/>
            </ListItem>
          )
        )
      }
    </List>
  );
}

export default RecordList;