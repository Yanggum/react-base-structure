import {
    BoardDispatchTypes,
    BOARD_LOADING,
    BOARD_FAIL,
    BOARD_SUCCESS,
} from "../types/boardTypes";

interface InitialStateI {
    loading: boolean;
    board: any;
    error: string;
}

const initialState: InitialStateI = {
    loading: false,
    board: {},
    error: "",
};

export const boardReducer = (
    state = initialState,
    action: BoardDispatchTypes
): InitialStateI => {
    switch (action.type) {
        case BOARD_LOADING:
            return {
                ...state,
                loading: true,
            };
        case BOARD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case BOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                board: action.payload,
            };
        default:
            return state;
    }
};
