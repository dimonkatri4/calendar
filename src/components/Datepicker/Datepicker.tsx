import React, { useEffect, useRef } from 'react'
import { Field, Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import { getMonthsMap, getSelectedDay, getYearsMap } from '../../store/selectors/dateSelectors'
import moment from 'moment'
import { useAppDispatch } from '../../hooks/redux'
import { setSelectedDay } from '../../store/dateSlice'
import styled from 'styled-components'

const DatepickerWrapper = styled('div')`
    margin-top: 5px;
`

interface Props {
    setState: (value: boolean) => void;
}

const Datepicker = ({ setState }: Props) => {
    const dispatch = useAppDispatch()
    const yearsMap = useSelector(getYearsMap)
    const monthsMap = useSelector(getMonthsMap)
    const selectedDay = useSelector(getSelectedDay)
    const selectedYear = selectedDay.format('YYYY')
    const selectedMonth = selectedDay.format('MMMM')

    const useOutsideClick = (ref: React.RefObject<HTMLInputElement>) => {
        useEffect(() => {
            const handleClickOutside = (e: any) => {
                if (ref.current) {
                    if (!ref.current.contains(e.target)) {
                        setState(false)
                    }
                }
            }
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }, [ref])
    }
    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef)

    return (
        <DatepickerWrapper ref={wrapperRef}>
            <Formik
                initialValues={{ year: selectedYear, month: selectedMonth }}
                onSubmit={(data) => {
                    const fullDate = `${data.year}-${data.month}`
                    const unixFullDate = moment(fullDate, 'YYYY-MMMM').format('X')
                    dispatch(setSelectedDay(unixFullDate))
                }}
            >
                {({ submitForm }) => (
                    <Form onChange={submitForm}>
                        <Field name="year" as="select" className="field">
                            {yearsMap.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </Field>
                        <Field name="month" as="select" className="field">
                            {monthsMap.map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </Field>
                    </Form>
                )}
            </Formik>
        </DatepickerWrapper>
    )
}

export default Datepicker
