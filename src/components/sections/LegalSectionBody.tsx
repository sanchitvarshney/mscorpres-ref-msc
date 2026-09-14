"use client";

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { customColor } from "@/utils/theme/customColor";

interface LegalSectionBodyProps {
  paragraphs?: string[];
  listItems?: string[];
  table?: { headers: string[]; rows: string[][] };
}

const LegalSectionBody: React.FC<LegalSectionBodyProps> = ({
  paragraphs,
  listItems,
  table,
}) => {
  return (
    <>
      {paragraphs?.map((p, i) => (
        <Typography key={i} variant="body1" paragraph textAlign="justify">
          {p}
        </Typography>
      ))}

      {table && (
        <TableContainer component={Paper} sx={{ mt: 3, mb: 2 }} elevation={0}>
          <Table sx={{ minWidth: 650 }} aria-label="data collection table">
            <TableHead>
              <TableRow sx={{ backgroundColor: customColor.primary }}>
                {table.headers.map((h) => (
                  <TableCell key={h} sx={{ color: "white", fontWeight: "bold" }}>
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {table.rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:nth-of-type(odd)": { backgroundColor: customColor.light },
                    "&:hover": { backgroundColor: customColor.light },
                  }}
                >
                  {row.map((cell, i) => (
                    <TableCell key={i}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {listItems && (
        <List>
          {listItems.map((item, i) => (
            <ListItem key={i}>
              <ListItemText primary={item} primaryTypographyProps={{ variant: "body1" }} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default LegalSectionBody;
