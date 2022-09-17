import React from 'react';
import {CurrentDay, DayWrapper, ShowDayWrapper} from "../../containers/styledComponents";
import {isCurrentDay} from "../../helpers/helpers";
import {Moment} from "moment";

interface Props {
    dayItem: Moment
}

const DayInCell = ({dayItem}: Props) => {
    return (
        <ShowDayWrapper>
            <DayWrapper>
                {isCurrentDay(dayItem) ? (
                    <CurrentDay>{dayItem.format('D')}</CurrentDay>
                ) : (
                    dayItem.format('D')
                )}
            </DayWrapper>
        </ShowDayWrapper>
    );
};

export default DayInCell;