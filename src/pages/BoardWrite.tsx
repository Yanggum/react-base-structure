import React, { useState } from "react";
import { useDispatch } from "react-redux";
// @ts-ignore
// import { useHistory } from "react-router-dom";
import { createBoard } from "../store/actions/boardActions";

const BoardWrite: React.FC = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    // const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // @ts-ignore
        dispatch(createBoard({ title, content }));
        // history.push("/");
    };

    return (
        <div className="container">
            <h2>게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="제목을 입력하세요."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows={5}
                        placeholder="내용을 입력하세요."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    작성하기
                </button>
            </form>
        </div>
    );
};

export default BoardWrite;
