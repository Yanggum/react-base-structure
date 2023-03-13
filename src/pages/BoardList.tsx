import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { fetchBoard } from "../store/actions/boardActions";

const BoardList: React.FC = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const { boards, loading } = useSelector((state: RootState) => state.board);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchBoard());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h2>게시판 목록</h2>
            <div className="list-group">
                {boards.map((board: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                    <Link
                        to={`/boards/${board.id}`}
                        className="list-group-item list-group-item-action"
                        key={board.id}
                    >
                        {board.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BoardList;
