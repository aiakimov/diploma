import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  getCallBacks,
  getRecords,
  CallBack,
  Record,
} from "../../app/slices/modalSlice";

import "./Admin.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Admin: FC = () => {
  const dispatch = useAppDispatch();
  const callBacks = useAppSelector((state) => state.modal.CallBacks);
  const records = useAppSelector((state) => state.modal.Records);
  useEffect(() => {
    dispatch(getCallBacks());
    dispatch(getRecords());
  }, []);

  useEffect(() => {
    setInterval(() => {
      dispatch(getCallBacks());
      dispatch(getRecords());
    }, 10000);
  }, []);

  return (
    <motion.div>
      <Container>
        <section className="admin">
          <div className="admin__records">
            <h2 className="title">ЗАПИСИ</h2>
            <div className="admin__records-items">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: "70%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Пациент</TableCell>
                      <TableCell align="right">Номер телефона</TableCell>
                      <TableCell align="right">Желаемая дата и время</TableCell>
                      <TableCell align="right">Специалист</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {records.map((row) => (
                      <TableRow
                        hover
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sortDirection="asc"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">
                          {row.date}
                          <br />
                          {row.shift}
                        </TableCell>
                        <TableCell align="right">{row.doctor}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div className="admin__callbacks">
            <h2 className="title">ЗВОНКИ</h2>
            <div className="admin__callbacks-items">
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Пациент</TableCell>
                      <TableCell align="right">Номер телефона</TableCell>
                      <TableCell align="right">время заявки</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {callBacks.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </section>
      </Container>
    </motion.div>
  );
};

export default Admin;
