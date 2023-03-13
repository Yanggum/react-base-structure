import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoard } from '../store/actions/boardActions';
import ErrorBoundary from '../components/ErrorBoundary';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const boards = useSelector((state: any) => state.board.boards);

    // TODO: dispatch 추가
    // useEffect(() => {
    //     // @ts-ignore
    //     dispatch(fetchBoard());
    // }, [dispatch]);

    return (
        <ErrorBoundary>
            <div className={'container'}>
                <h2>게시판 목록</h2>
                <ul>
                    {/*{boards.items.map((board: any) => (*/}
                    {/*    <li key={board.id}>*/}
                    {/*        <a href={`/boards/${board.id}`}>{board.title}</a>*/}
                    {/*    </li>*/}
                    {/*))}*/}
                </ul>
            </div>
        </ErrorBoundary>
    );
};

export default Home;
