import React from 'react';
import '../styles/Comment.css';
import parseDateForComments from '../parseFunctions/parseDateForComments';

const Comment = props => (
    <div className="comments-wrapper">
        <span className="comment-number">{`#${props.number}`}</span>
        <h4 className="comment-author">{props.comment.get('author')}</h4>
        <span className="comment-date">{parseDateForComments(props.comment.get('date'))}</span>
        <p className="comment-data">{props.comment.get('message')}</p>
    </div>
        );

export default Comment;
