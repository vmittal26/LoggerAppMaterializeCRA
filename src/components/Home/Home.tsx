import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "90vh"
    },
    container: {
      height: "100%"
    },
    paper: {
      padding: "10rem",
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  })
);

const PaperStyled = styled(Paper)`
  padding: 10rem;
  text-align: center;
  cursor: pointer;
  display:flex;

  @media (max-width: 1024px) and (min-width: 768px) {
    padding: 14rem;
  }

  & span{
    white-space:nowrap;
    margin:auto;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    padding: 15rem;
  }
`;


export default function Home(props:any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.container}
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item sm={6} xs={12}>
          <PaperStyled><span>Technicians</span></PaperStyled>
        </Grid>
        <Grid item sm={6} xs={12}>
          <PaperStyled><span>Logs</span></PaperStyled>
        </Grid>
        <Grid item sm={6} xs={12}>
          <PaperStyled onClick={()=>props.history.push("/addTechnician")}>
              <span>Add Technician</span>
          </PaperStyled>
        </Grid>
        <Grid item sm={6} xs={12}>
          <PaperStyled><span>Add Logs</span></PaperStyled>
        </Grid>
      </Grid>
    </div>
  );
}
