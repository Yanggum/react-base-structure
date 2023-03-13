import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchBoard } from "../store/actions/boardActions";

interface Props {
    match: {
        params: {
            id: string;
        };
    };
}

const BoardDetail: React.FC<Props> = ({ match }) => {
    const dispatch = useDispatch();
    const board = useSelector((state: RootState) => state.board);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchBoard(match.params.id));
    }, [dispatch, match.params.id]);

    return (
        <div className="container">
            {board.loading ? (
                <p>Loading...</p>
            ) : board.error ? (
                <p>{board.error}</p>
            ) : (
                <div>
                    <h2>{board.board.title}</h2>
                    <p>{board.board.content}</p>
                </div>
            )}
        </div>
    );
};

export default BoardDetail;
