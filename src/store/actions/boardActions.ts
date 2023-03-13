import axios from "axios";
import { Dispatch } from "redux";
import {
    BoardDispatchTypes,
    BOARD_LOADING,
    BOARD_FAIL,
    BOARD_SUCCESS,
} from "../types/boardTypes";

export const fetchBoard = (id: string) => async (
    dispatch: Dispatch<BoardDispatchTypes>
) => {
    try {
        dispatch({
            type: BOARD_LOADING,
        });

        const { data } = await axios.get(`/api/boards/${id}`);

        dispatch({
            type: BOARD_SUCCESS,
            payload: data,
        });
    } catch (error: any) {
        dispatch({
            type: BOARD_FAIL,
            payload: error.message,
        });
    }
};

export const createBoard = (board: any) => async (
    dispatch: Dispatch<BoardDispatchTypes>
) => {
    try {
        dispatch({
            type: BOARD_LOADING,
        });

        const { data } = await axios.post("/api/boards", board);

        dispatch({
            type: BOARD_SUCCESS,
            payload: data,
        });
    } catch (error: any) {
        dispatch({
            type: BOARD_FAIL,
            payload: error.message,
        });
    }
};

