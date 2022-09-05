import { format, subDays } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

export const SubredditRankedList = (props) => {
  const sortAsc = (arr, field) => {
    arr.sort((a, b) => {
      if (+a[field] > +b[field]) { return -1; }
      if (+b[field] > +a[field]) { return 1; }
      return 0;
    })
    return arr;
  }
  let postData = props.data;
  postData = sortAsc(postData, "count")

  return (
  <Card {...props}>
    <CardHeader title={props.title} />
    <Scrollbar sx={{maxHeight: 500, overflow: "auto"}}>
      <Table sx={{ minWidth: 200 }} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              {props.columns[0]}
            </TableCell>
            <TableCell>
            {props.columns[1]}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postData.map((transaction) => (
            <TableRow
              key={transaction.subreddit}
              sx={{
                '&:last-child td': {
                  border: 0
                }
              }}
            >
              {/* <TableCell width={100}>
                <Typography variant="subtitle2">{transaction.id}</Typography>
              </TableCell> */}
              <TableCell>
                <Typography variant="subtitle2">{'r/'+transaction.subreddit}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{transaction.count}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
  )
};
