import { format, subDays } from 'date-fns';
import numeral from 'numeral';
import {useState, useMemo} from 'react';
import { ChevronDown as ChevronDownIcon } from '../../../icons/chevron-down';
import { ChevronUp as ChevronUpIcon } from '../../../icons/chevron-up';
import { alpha, useTheme } from '@mui/material/styles';

import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  TableSortLabel,
} from '@mui/material';
import { Scrollbar } from '../../scrollbar';
import { SeverityPill } from '../../severity-pill';

const createChangeData = (data) => {
  let changeData = data.map((d,id)=>{
    let flip = id % 2 === 0 ? 1 : -1;
    return {
      data: d,
      count: d.count,
      percentChange: (id/data.length).toFixed(2) * flip,
      change: flip > 0 ? 1 : 0, // 1 is increase, 0 is decrease
      time: "month"
    }
  })
  return changeData;
}
export const SubredditRankedList = (props) => {
  const theme = useTheme();
  let postChangeData = createChangeData(props.data).slice(0, Math.min(50, props.data.length-1))
  const [sortConfig, setSortConfig] = useState({field:"count", direction:"desc"});

  const requestSort = (field) => {
    let dir = null;
    if (field === sortConfig.field){
      dir = sortConfig.direction === "desc" ? "asc" : "desc";
    } else {
      dir = "desc"
    }
    setSortConfig({field, direction:dir})
    return;
  }
const sortedItems = useMemo(() => {
  let sortableItems = [...postChangeData];
  if (sortConfig !== null) {
    sortableItems.sort((a, b) => {
      if (+a[sortConfig.field] < +b[sortConfig.field]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (+a[sortConfig.field] > +b[sortConfig.field]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  return sortableItems;
}, [postChangeData, sortConfig]);

  return (
  <Card {...props}>
    <CardHeader title={props.title} />
    <Scrollbar sx={{maxHeight: 500, overflow: "auto"}}>
      <Table sx={{ minWidth: 300 }} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              {props.columns[0]}
            </TableCell>
            <TableCell sortDirection={sortConfig.direction}>
              <TableSortLabel
                active
                direction={sortConfig.direction}
                onClick={()=>requestSort('count')}
              >
                {props.columns[1]}
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={sortConfig.direction}>
              <TableSortLabel
                active
                direction={sortConfig.direction}
                onClick={()=>requestSort('percentChange')}
              >
                Change
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedItems.map((transaction) => ( // only top 100
            <TableRow
              key={transaction.data.subreddit}
              sx={{
                '&:last-child td': {
                  border: 0
                }
              }}
            >
              <TableCell>
                <Typography variant="subtitle2">{'r/'+transaction.data.subreddit}</Typography>
              </TableCell>
              <TableCell >
                <Typography variant="subtitle2" sx={{mr:1}}>{transaction.data.count}</Typography>
              </TableCell>
              <TableCell sx={{
                  alignItems: 'center',
                  display: 'flex'
              }}>
              {transaction.change?
                <Avatar
                sx={{
                  backgroundColor: (theme) => alpha(theme.palette.success.main, 0.08),
                  color: 'success.main',
                  height: 24,
                  width: 24
                }}
              >
                <ChevronUpIcon fontSize="small" />
              </Avatar>:
                <Avatar
                  sx={{
                    backgroundColor: (theme) => alpha(theme.palette.error.main, 0.08),
                    color: 'error.main',
                    height: 24,
                    width: 24
                  }}
                >
                  <ChevronDownIcon fontSize="small" />
                </Avatar>}
                <Typography
                  color="textSecondary"
                  sx={{ ml: 1 }}
                  variant="caption"
                >
                  {transaction.percentChange>0?transaction.percentChange: -transaction.percentChange}% {transaction.change?"more":"less"} than last {transaction.time}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
  )
};
