import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const CircularProgressStyled = styled(CircularProgress)`

    position:absolute;
    top:5%;
    width:20px;
    height:20px;
`

export default function WithLoaderIcon(Component:any) {
    return (
            <>
               {Component}
               {CircularProgressStyled}
            </>
    )
}
