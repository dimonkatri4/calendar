import moment from 'moment';
import React from 'react';
import styled from "styled-components";
import {CellWrapper, RowInCell} from "../../containers/styledComponents";

const TitleWeeksWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
    grid-gap: 1px;
    background-color: #1E1F21;
	border-bottom: 1px solid #4D4C4D
`;

const TitleWeeks = () => {
    return (
        <TitleWeeksWrapper>
            {
                [...Array(7)].map((_, i) => (
                    <CellWrapper isTitleWeeks isSelectedMonth key={moment().day(i+1).unix()}>
                        <RowInCell justifyContent={'flex-end'} pr={10}>
                            {moment().day(i+1).format('ddd')}
                        </RowInCell>
                    </CellWrapper>
                ))
            }
        </TitleWeeksWrapper>
    );
};

export default TitleWeeks;