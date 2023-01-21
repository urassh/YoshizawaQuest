import '../App.css';
import React from 'react';

const FinalView = () => {
    return(
        <React.StrictMode>
            <h1 className="final-title">3年3組のみんな</h1>
            <div className="messages">
                <h3 className="final-classLeader">級長からのメッセージ</h3>
                <p className='message'>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
            </div>
            <div className="messages">
                <h3 className="final-classLeader">吉澤先生からのメッセージ</h3>
                <p className='message'>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
            </div>
            <div className="emagency-mission">
                教卓のベルを先に鳴らした<br/>上位3組には"+10ポイント"プレゼント!!
            </div>
        </React.StrictMode>
        
    );
}

export {FinalView};