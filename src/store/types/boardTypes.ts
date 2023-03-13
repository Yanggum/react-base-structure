export const BOARD_LOADING = "BOARD_LOADING";
export const BOARD_FAIL = "BOARD_FAIL";
export const BOARD_SUCCESS = "BOARD_SUCCESS";


interface BoardLoading {
    type: typeof BOARD_LOADING;
}

interface BoardFail {
    type: typeof BOARD_FAIL;
    payload: string;
}

interface BoardSuccess {
    type: typeof BOARD_SUCCESS;
    payload: any;
}

export type BoardDispatchTypes = BoardLoading | BoardFail | BoardSuccess;
