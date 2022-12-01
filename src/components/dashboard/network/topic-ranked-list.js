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
  Tooltip,
  Typography
} from '@mui/material';
import { ExternalLink as ExternalLinkIcon } from '../../../icons/external-link';
import { InformationCircleOutlined as InformationCircleOutlinedIcon } from '../../../icons/information-circle-outlined';
import { Scrollbar } from '../../scrollbar';

const pages = [
  {
    id: 1,
    topic: 'Topic 0',
    propagandaScore: 3
  },
  {
    id: 2,
    topic: 'Topic 1',
    propagandaScore: 4
  },
  {
    id: 3,
    topic: 'Topic 2',
    propagandaScore: 1
  },
  {
    id: 4,
    topic: 'Topic 3',
    propagandaScore: 2
  },
  {
    id: 5,
    topic: 'Topic 4',
    propagandaScore: 5
  },
  {
    id: 6,
    topic: 'Topic 5',
    propagandaScore: 1
  }
];

export const TopicsRankedList = () => (
  <Card>
    <CardHeader
      title="Topics Ranked According to Propoganda Score"
      action={(
        <Tooltip title="Refresh rate is 24h">
          <InformationCircleOutlinedIcon sx={{ color: 'action.active' }} />
        </Tooltip>
      )}
    />
    <Scrollbar>
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow>
            <TableCell>
              Topic
            </TableCell>
            <TableCell>
              Propaganda Score
            </TableCell>
            {/* <TableCell>
              Unique page visits
            </TableCell>
            <TableCell>
              Bounce rate
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {pages.map((page) => (
            <TableRow
              key={page.id}
              sx={{
                '&:last-child td': {
                  border: 0
                }
              }}
            >
              {/* <TableCell>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <ExternalLinkIcon
                    sx={{
                      color: 'action.active',
                      cursor: 'pointer'
                    }}
                  />
                  <Typography
                    sx={{ ml: 2 }}
                    variant="body2"
                  >
                    {page.url}
                  </Typography>
                </Box>
              </TableCell> */}
              <TableCell>
                {page.topic}
              </TableCell>
              <TableCell>
                {numeral(page.propagandaScore).format('0,0')}
              </TableCell>
              {/* <TableCell>
                {page.bounceRate}
                %
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbar>
  </Card>
);
