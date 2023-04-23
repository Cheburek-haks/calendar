import styled from "styled-components";
import React from "react";
import {
    ContentCalendar,
    ControllerCalendar,
    FooterCalendar,
    InterviewCalendar,
    ModalCalendar,
} from "../../features";

export const Calendar = () => {
    const ars = [
        {
            hour: "0:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "1:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "2:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "3:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "4:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "5:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "6:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "7:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "8:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "9:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "10:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "11:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "12:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "13:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "14:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "15:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "16:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "17:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "18:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "19:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "20:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "21:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "22:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
        {
            hour: "23:00",
            content: [
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
                {
                    title: "",
                    onClick: (arg: number, arg2: number, arg3: string) =>
                        handleClick(arg, arg2, arg3),
                },
            ],
        },
    ];

    const [data, setData] = React.useState(ars);
    const [value, setValue] = React.useState<string>("");
    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    const [page, setPage] = React.useState<number>(1);
    const [indexes, setIndexes] = React.useState({
        indexOne: 0,
        indexTwo: 0,
    });
    React.useEffect(() => {
        setData(ars);
        console.log("");
    }, [page]);

    const handleClick = (indexOne: number, indexTwo: number, title: string) => {
        setIndexes({ indexOne: indexOne, indexTwo: indexTwo });
        setValue(title);
        setModalVisible(true);
    };

    const handleClickCells = () => {
        setData((prev) => {
            prev[indexes.indexOne].content[indexes.indexTwo].title = value;
            return [...prev];
        });
        setModalVisible(false);
    };
    const Block = styled.div`
        width: 560px;
        border: 3px solid #c2c6cb;
        border-radius: 10px;
    `;

    return (
        <Block>
            {modalVisible && (
                <ModalCalendar
                    value={value}
                    setValue={setValue}
                    setModalVisible={setModalVisible}
                    onClick={handleClickCells}
                />
            )}
            <InterviewCalendar />
            <ControllerCalendar />
            <ContentCalendar data={data} />
            <FooterCalendar value={value} />
        </Block>
    );
};
